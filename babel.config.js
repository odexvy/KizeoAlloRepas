module.exports = (api) => {
  api.cache(true);

  return {
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '#': './app',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
