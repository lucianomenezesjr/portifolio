import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

export default function Footer() {
  return (
    <footer className="shadow-2xs bg-[#141313] text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Texto */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Luciano Júnior - Todos os direitos reservados.</p>

          {/* Ícones sociais */}
          <div className="mt-4 md:mt-0 flex space-x-6 text-xl">
            <a
              href="mailto:luciano.menezes.jr11@gmail.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://github.com/lucianomenezesjr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/luciano-júnior-89b6b7211/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/5511999422998"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
