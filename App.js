import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Screens/HomeScreen';
import RequestSomething from './Screens/RequestSomething';
import DonateSomething from './Screens/DonateSomething';
import Feedback from './Screens/Feedback';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    'Donate A Item': { screen: DonateSomething },
    'Request A Item': { screen: RequestSomething },
    Feedback: { screen: Feedback },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Home') {
          return (
            <Image
              source={{
                uri:
                  'https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png',
              }}
              style={{ width: 40, height: 32 }}
            />
          );
        } else if (routeName === 'Donate A Item') {
          return (
            <Image
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/valentine-color-line-1/64/Gift-512.png',
              }}
              style={{ width: 40, height: 36 }}
            />
          );
        } else if (routeName === 'Request A Item') {
          return (
            <Image
              source={{
                uri:
                  'https://www.openkm.com/resources/images/icon/document-management-big.png',
              }}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === 'Feedback') {
          return (
            <Image
              source={{ uri: 'http://pmru.kp.gov.pk/svg-icons/feedback.svg' }}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);
const switchNavigator = createSwitchNavigator({
  TabNavigator: { screen: TabNavigator },
  WelcomeScreen: { screen: WelcomeScreen },
});

const AppContainer = createAppContainer(switchNavigator);