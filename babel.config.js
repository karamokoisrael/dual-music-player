module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@domain": "./src/core/domain",
            "@application": "./src/core/application",
            "@infrastructure": "./src/infrastructure",
            "@components": "./src/infrastructure/react-native-adapter/components",
            "@hooks": "./src/infrastructure/react-native-adapter/hooks",
            "@navigation": "./src/infrastructure/react-native-adapter/navigation",
            "@screens": "./src/infrastructure/react-native-adapter/screens",
            "@stores": "./src/infrastructure/react-native-adapter/stores",
            "@styles": "./src/infrastructure/react-native-adapter/styles",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
