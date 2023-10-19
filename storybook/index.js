import {AppRegistry} from 'react-native';
import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import './rn-addons';
import {useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function StorybookUIRoot() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function useCustomFonts() {
    await Font.loadAsync({
      Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'), // Adjust the path to match your font file
      MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
      MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
      MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
      MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
      comic: require('../assets/fonts/comicz.ttf'),
    });
  }

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await useCustomFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  // If fonts are loaded, proceed to register the Storybook UI
  const StorybookUI = getStorybookUI({
    asyncStorage:
      require('@react-native-async-storage/async-storage').default || null,
  });

  return <StorybookUI />;
}

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

// Register your StorybookUIRoot component
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);
