export const jumpup = {
  initial: {
    scale: 4,
    y: 80,
  },
  final: {
    scale: [4, 3, 2, 1],
    y: '-50%',
    x: '-50%',

    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const fadeup = {
  initial: {
    opacity: 0,
    y: '-100%',
  },
  animate: {
    y: '0%',
    opacity: 1,
  },

  exit: {
    y: '-100%',
    opacity: 0,
  },
};

export const fadeIn2 = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
      // transition orcestration
      when: 'beforeChildren',
      staggerChildren: 0.06,
    },
  },

  exit: {
    x: '-90vh',
    opacity: 0,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};
