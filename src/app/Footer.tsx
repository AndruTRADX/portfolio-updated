const Footer = () => {
  return (
    <footer className="flex flex-col mt-24 relative gap-5">
      <div className="footer-gradient hidden md:flex" />
      <div className="footer-gradient-md flex md:hidden" />
      <hr className="border-light-2" />
      <h2 className="text-light-1 opacity-80 font-extrabold text-2xl">
        AndruTRADX
      </h2>
      <p className="text-p-2">
        AndruTRADX © {new Date().getFullYear()} Fullstack developer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
