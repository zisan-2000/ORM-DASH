const Overlay = ({ isMenuOpen, toggleMenu }) => {
  return isMenuOpen ? (
    <div
      className="fixed inset-0 z-40 bg-black opacity-50"
      onClick={toggleMenu}
    ></div>
  ) : null;
};

export default Overlay;
