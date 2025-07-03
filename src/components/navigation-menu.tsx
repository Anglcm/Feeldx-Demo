import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu as ShadNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const components: { title: string; to: string; description: string }[] = [
  {
    title: "Alert Dialog",
    to: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    to: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    to: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    to: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    to: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    to: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenu() {
  // Theme state and effect
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", " light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-4">
      <ShadNavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#hero">Home</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#services">Service Overview</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#value">
                      <div className="font-medium">Why Choose FeelDX?</div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#clients">
                      <div className="font-medium">Our Clients</div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#testimonials">
                      <div className="font-medium">Testimonials</div>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/contact">Contact Us</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </ShadNavigationMenu>
      {/* Theme Switch */}
      <div className="ml-4 flex items-center gap-2">
        <Sun size={18} />
        <Switch checked={isDark} onCheckedChange={setIsDark} />
        <Moon size={18} />
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  to,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to} className="">
          <div className="text-sm leading-none font-medium text-foreground">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}