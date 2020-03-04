const Animations = {
  buttonClick: {
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2, ease: "linear" }
  },
  rowClick: {
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "linear" },
    whileHover: { opacity: 0.7 }
  },
  loading: {
    animate: { opacity: [0, 1, 1, 0] },
    transition: { duration: 1, loop: Infinity, ease: "linear" }
  }
};

export default Animations;
