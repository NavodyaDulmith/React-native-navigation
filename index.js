import { AppRegistry } from 'react-native';
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';// import App from './App';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';
//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';

const RootStack = createStackNavigator({   

    MainScreen: {
        screen: MainComponent,
        navigationOptions: () => ({
          title: `Main`,
          headerBackTitle: 'Main***'
        }),
      },
      DetailScreen: {
        screen: DetailComponent,
        navigationOptions: () => ({
          title: `Detail`,
          headerBackTitle: 'Detail***'
        }),
      },
      ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: () => ({
          title: `Third`,
          headerBackTitle: 'Third***'
        }),
      },
    }); 

    const App = createAppContainer(RootStack);

    export default App;

AppRegistry.registerComponent('FuckNav', () => App);
