import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFB6C1]  snap-end">
      {/* Social Media Icons and Links  */}
      <section className="py-10">
        <div className="flex justify-center gap-5 text-white font-bold">
          <a href="#">Contact</a>
          <a href="#">Policies</a>
        </div>
        <div className="flex gap-5 justify-center text-white mt-5 hover:*:text-xl hover:*:cursor-pointer">
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </section>
      {/* Divider  */}
      <div className="h-1 bg-white"></div>
    </footer>
  );
};

export default Footer;
