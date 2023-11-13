module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
      ["@babel/plugin-proposal-decorators", 
        {
          "legacy": true
        }
      ]
    ],
  };
};
