import "dotenv/config";

export default {
  expo: {
    name: "Obi Datti Messanger",
    slug: "Obi-New",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "obi",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.obidatti.obidatti",
      versionCode: 3,
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
    },
    extra: {
      eas: {
        projectId: "21826ed7-426b-4196-aecf-7a06e405b0dc",
      },
      anonKey: process.env.ANON_KEY,
    },
    owner: "obidatti",
  },
};
