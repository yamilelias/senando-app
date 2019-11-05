import React, { useState, useEffect } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import Walkthrough from './src/screens/Walkthrough';
import Screens from './src/navigation/Screens';
import { Images, articles, argonTheme } from './src/constants';
// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [walkthrough, setWalkthroughVisible] = useState(false);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('welcome').then((result) => {
      if (result === null) {
        AsyncStorage.setItem('welcome', 'true').then((result) => {
          console.log("null value recieved", result);
          setWalkthroughVisible(true);
        });
      } else {
        console.log("The application it's already cached", result);
      }
    });
  }, []);

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  if (isLoadingComplete) {
    if (walkthrough) {
      return (
        <Walkthrough />
      );
    }

    return (
      <GalioProvider theme={argonTheme}>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  }
}