const path = require("path");

module.exports = {
  // addons: [
  //     '@storybook/addon-actions',
  //     '@storybook/addon-links',
  //     '@storybook/addon-controls',
  //     '@storybook/addon-knobs',
  //     {
  //         name: '@storybook/addon-docs',
  //         options: {
  //             configureJSX: true,
  //         },
  //     },
  // ],
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter((rule) => {
      if (rule.test instanceof RegExp && rule.test.test(".scss")) {
        rule.exclude = /\.(stories|story).s[ca]ss$/;
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
          }
        }
      ]
    });

    // Make whatever fine-grained changes you need
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
