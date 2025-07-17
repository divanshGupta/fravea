import { socials } from "../Constants/constants";
import { motion } from "framer-motion";

export default function Futer() {
  return (
    <footer className="w-full border-t border-black/20 bg-yellow-50 text-black px-4 py-10 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 w-full md:w-1/2"
        >
          {/* Socials */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            {socials.map(({ id, title, logo: Icon, href }) => (
              <a
                key={id}
                href={href}
                aria-label={title}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200 "
              >
                <Icon className="text-3xl text-black hover:text-green-800" />
              </a>
            ))}
          </div>

          {/* Address/Contact */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-lg leading-tight">Asharfi Nagar Colony, Phase 2, Bhullanpur</p>
            <p className="text-xl font-medium">Varanasi, Uttar Pradesh, 221108</p>
            <p className="text-sm md:text-base">+91 9128375938 | fravea@sales.com</p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base font-medium">
            <li className="hover:text-green-800 cursor-pointer transition">FAQs</li>
            <li className="hover:text-green-800 cursor-pointer transition">Terms</li>
            <li className="hover:text-green-800 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-green-800 cursor-pointer transition">About Us</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/2 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-9xl tracking-wider">Fravea.</h1>
            <p className="text-3xl tracking-wider">Organic</p>
          </div>
          <div>
            <p>© 2025 FRAVEA LIMITED. All Rights Reserved.</p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}



