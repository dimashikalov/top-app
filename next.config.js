module.exports = {
  images: {
    domains: ["courses-top.ru"],
  },
  // webpack(config, options) {
  //   config.module.rules.push({
  //     loader: "@svgr/webpack",
  //     issuer: /\.[jt]sx?$/,
  //     options: {
  //       prettier: false,
  //       svgo: true,
  //       svgoConfig: {
  //         plugins: [
  //           {
  //             name: "preset-default",
  //             params: {
  //               override: {
  //                 removeViewBox: false,
  //               },
  //             },
  //           },
  //         ],
  //       },
  //       titleProp: true,
  //     },
  //     test: /\.svg$/,
  //   });

  //   return config;
  // },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
