module.exports = {
  stories: ["../stories/**/*.stories.tsx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
