import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm">
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-white transition">
            Sobre mi
          </a>
          <a href="#" className="hover:text-white transition">
            Resume
          </a>
          <a href="#" className="hover:text-white transition">
            Blog
          </a>
          <a href="#" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

        <div className="flex gap-6 text-xl">
          <a href="#">
            <FaFacebook className="hover:text-white transition" />
          </a>
          <a href="#">
            <FaInstagram className="hover:text-white transition" />
          </a>
          <a href="#">
            <FaXTwitter className="hover:text-white transition" />
          </a>
          <a href="#">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="#">
            <FaYoutube className="hover:text-white transition" />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © 2025 todos los derechos reservados, web diseñada y programada por
          Ehylin Olezjua.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
