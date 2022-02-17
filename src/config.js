module.exports = {
  email: 'k13772445714@163.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kechen123',
    },
    {
      name: 'WeiBo',
      url: 'https://www.instagram.com/bchiang7',
    },
    {
      name: 'SiFou',
      url: 'https://segmentfault.com/u/kechen',
    },
    {
      name: 'JueJin',
      url: 'https://juejin.cn/user/4397682300554600',
    },
  ],

  navLinks: [
    {
      name: '关于',
      url: '/#about',
    },
    {
      name: '经验',
      url: '/#jobs',
    },
    {
      name: '工作',
      url: '/#projects',
    },
    {
      name: '联系',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
