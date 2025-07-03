import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";


export function Footer() {
  return (
    <footer className="w-full bg-background border-t py-10 px-4 text-foreground mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Office Locations */}
        <div className="w-full flex flex-col items-center mb-12">
          {/* Head Office at the top, centered */}
          <div className="mb-8 flex flex-col items-center">
            <a href="https://www.google.com/maps?ll=-37.914091,145.219448&z=15&t=m&hl=en&gl=LK&mapclient=embed&cid=7883058899986422010" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-vic-light.svg" alt="VIC HEAD OFFICE" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">VIC HEAD OFFICE</span>
                <span className="font-bold text-base">1800 333 539</span>
              </div>
            </a>
          </div>
          {/* Other locations in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <a href="https://www.google.com/maps?ll=-33.88643,151.208806&z=15&t=m&hl=en&gl=LK&mapclient=embed&cid=10725948804314822433" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-nsw-light.svg" alt="NSW" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">NSW</span>
                <span className="font-bold text-base">1800 333 539</span>
              </div>
            </a>
            <a href="https://www.google.com/maps?ll=-27.465997,153.030625&z=15&t=m&hl=en&gl=LK&mapclient=embed&cid=4150877066074359224" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-qld-light.svg" alt="QLD" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">QLD</span>
                <span className="font-bold text-base">1800 333 539</span>
              </div>
            </a>
            <a href="https://www.google.com/maps?ll=-31.967655,115.892508&z=15&t=m&hl=en&gl=LK&mapclient=embed&cid=3027721591422168661" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-wa-light.svg" alt="WA" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">WA</span>
                <span className="font-bold text-base">1800 333 539</span>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/zcV4g2AYM5QHTjFN7" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-mauritius-light.svg" alt="Mauritius" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">Mauritius</span>
                <span className="font-bold text-base">+230 403 4421</span>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/7nYsZw2RrHdY94wn6" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-usa-light.svg" alt="USA, California Irvine" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">USA, California Irvine</span>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/UtuQr5M5Ef6G61N17" target="_blank" rel="noopener noreferrer" className="footer-location-number flex flex-col items-center">
              <img loading="lazy" src="https://www.feeldx.com/front/images/icons/map-vietnam-light.svg" alt="Vietnam, Ho Chi Minh" className="w-20 h-20 mb-2" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">Vietnam, Ho Chi Minh</span>
              </div>
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4 mb-8">
          <a href="https://www.facebook.com/feeldx" aria-label="Facebook"><Facebook className="w-7 h-7" /></a>
          <a href="https://www.instagram.com/feeldx/" aria-label="Instagram"><Instagram className="w-7 h-7" /></a>
          <a href="https://www.linkedin.com/company/feeldx#" aria-label="LinkedIn"><Linkedin className="w-7 h-7" /></a>
          <a href="https://www.youtube.com/channel/UC9kmR0LVnaZahPLxodFdesQ" aria-label="YouTube"><Youtube className="w-7 h-7" /></a>
        </div>
        {/* Footer Navigation - matches header */}
        <nav className="w-full flex flex-wrap justify-center gap-6 mb-8 text-base font-medium">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Service Overview</a>
          <a href="#value" className="hover:underline">Value Proposition</a>
          <a href="#clients" className="hover:underline">Clients</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </nav>

        {/* Quick Links - Design 2*/}
        {/* <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="font-bold mb-2 uppercase text-sm">About Us</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Mark Breyer | Alexis Breyer</a></li>
              <li><a href="#">In Our Community</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 uppercase text-sm">Our Firm</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Practice Areas</a></li>
              <li><a href="#">Our Fees</a></li>
              <li><a href="#">Office Locations</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 uppercase text-sm">Our Results</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Awards & Memberships</a></li>
              <li><a href="#">Case Results</a></li>
              <li><a href="#">Client Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 uppercase text-sm">Resources</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Read Our Blog</a></li>
              <li><a href="#">Our Newsletter</a></li>
              <li><a href="#">Free Injury Guides</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </footer>
  );
} 