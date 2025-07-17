import { socials } from "../Constants/constants";
export default function Footer() {
  return (
    <footer className='h-80 w-full flex border-t-1 py-6'>

      <div className="w-1/2 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-9xl tracking-wider">Fravea.</h1>
          <p className="text-3xl tracking-wider">Organic</p>
        </div>
        <div>
          <p>© 2025 FRAVEA LIMITED. All Rights Reserved.</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-12">
          <div className="flex items-center gap-8 justify-between">
            {socials.map(({id, title, logo: Icon, href })=> {
              return (
                <a
                  key={id}
                  href={href}
                  aria-label={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-2xl hover:scale-110 transition-transform duration-200"
                >
                  <Icon className="text-3xl" />
                  
                </a>
              )
            })}
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <p className="text-xl tracking-tight">Asharfi Nagar Colony, Phase 2, Bhullanpur</p>
              <p className="text-2xl">Varanasi, Uttar Pradesh, 221108</p>
            </div>
            <div>
              <p className="text-lg flex items-center justify-between">
                <span>+91 9128375938</span> <span>fravea@sales.com</span>
              </p>
            </div>
          </div>

          <div>
            <ul className="flex items-center gap-4 justify-between">
              <li>FAQs</li>
              <li>Terms</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
