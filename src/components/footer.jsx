import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0f3963] text-gray-300 font-inter bg-blue-800">
      {/* Top Section */}
      <div className="max-w-full mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 bg-black">
        {/* Logo + About */}
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-6">
            <Link href="/" passHref>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onyx_logo%20%281%29-i1TK1VIX9JHccoUSbgMG4DrUitxgDC.png"
                alt="Onyx EduTech"
                className="w-[200px] h-auto cursor-pointer -mt-2 -ml-2 hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed max-w-sm font-medium">
            At Onyx EduTech, we believe your career should be built on skills, not just marksheets. Join our learning
            community where knowledge meets opportunities, and start your journey towards dream careers today.
          </p>
        </div>

        {/* Socials */}
        <div className="lg:flex justify-center">
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400 font-poppins tracking-wide">
              SOCIALS
              <span className="block w-12 h-0.5 bg-orange-400 mt-2 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/onyx_edutech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-orange-400 group-hover:text-[#0f3963] transition-all duration-300">
                    <Instagram size={16} />
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/onyxedutech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-orange-400 group-hover:text-[#0f3963] transition-all duration-300">
                    <Linkedin size={16} />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:flex justify-center">
          <div>
            <h3 className="text-lg font-bold mb-6 font-poppins text-orange-400 tracking-wide">
              QUICK LINKS
              <span className="block w-12 h-0.5 bg-orange-400 mt-2 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Team", "#People"],
                ["How You'll Learn", "#how-youll-learn"],
                ["Courses", "#courses"],
                ["Why Us", "#why-us"],
                ["Pricing", "#pricing"],
                ["Community", "#community"],
                ["Blogs", "#blogs"],
                ["Contact Us", "#contact"],
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item[1]}
                    className="hover:text-orange-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 font-medium group"
                  >
                    <span className="text-orange-400 group-hover:text-orange-400 transition-colors duration-300">
                      ▸
                    </span>
                    {item[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Certifications */}
        <div className="lg:col-span-2 lg:flex justify-center">
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400 font-poppins tracking-wide">
              CONTACT INFO
              <span className="block w-12 h-0.5 bg-orange-400 mt-2 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm mb-8">
              <li className="flex items-center gap-3 hover:text-orange-400 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-[#1a4b7c]">
                  <Phone size={14} />
                </div>
                <span className="font-medium">+91 8977220902</span>
              </li>
              <li className="flex items-center gap-3 hover:text-orange-400 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-[#1a4b7c]">
                  <Mail size={14} />
                </div>
                <span className="font-medium">support@onyxedutech.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-orange-400 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-[#1a4b7c] mt-0.5">
                  <MapPin size={14} />
                </div>
                <span className="font-medium leading-relaxed">
                  Ayyappa Society, Mega Hills,
                  <br />
                  Madhapur, Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>

            <div>
              <h4 className="text-md font-bold mb-4 text-orange-400 font-poppins tracking-wide">
                CERTIFICATIONS
                <span className="block w-10 h-0.5 bg-orange-400 mt-2 rounded-full"></span>
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-xs font-bold text-orange-400">DPIIT</div>
                  <div className="text-xs text-gray-300">Start-up India</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-xs font-bold text-orange-400">AICTE</div>
                  <div className="text-xs text-gray-300">Recognized</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="text-xs font-bold text-orange-400">NSDC</div>
                  <div className="text-xs text-gray-300">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-[#0f3963]/30 py-6 px-6 text-sm text-gray-300 border-t border-white/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium">
            © 2025 Onyx EduTech. All rights reserved. | Designed by{" "}
            <span className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
              <a href="https://www.onyxedutech.com/" target="_blank" rel="noopener noreferrer">
                Onyx Team
              </a>
            </span>
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-400 transition-colors duration-300 font-medium">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300 font-medium">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
