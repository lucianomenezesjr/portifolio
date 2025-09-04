import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"
import { toast } from "sonner";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"



export default function AboutFooter() {

    const handleDownload = () => {
        toast.success("Currículo baixado com sucesso!");
    };

    return(
        <div className="flex flex-row justify-between w-full items-center px-5">
            <div className="pt-6">
                <a
                href="/curriculoLucianojrV2.pdf"
                download="Luciano_Junior_CV.pdf"
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#2b0644] text-white rounded-lg cursor-pointer transition transform hover:bg-[#410a66] hover:scale-105">
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Download CV</span>
                </a>
            </div>
            <div className="pt-6 mt-4 md:mt-0 flex h-lg space-x-6 text-xl">
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
    )
}