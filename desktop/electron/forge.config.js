const config = {
  packagerConfig: {
    asar: true,
    osxSign: {} 
  },
  makers: [
    // {
    //   name: '@electron-forge/maker-zip',
    //   platforms: ['linux'],
    // },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'ny-aina-solofo',
          homepage: 'https://example.com',
          // options: {
          //   icon: '/path/to/icon.png'
          // }
        },
      },
    },
  ]
};

export default config;
