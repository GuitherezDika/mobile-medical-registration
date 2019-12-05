import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import page1 from './components/page1';
import page2 from './components/page2';

const NavApp = createStackNavigator({
  Home: {screen: page1},
  Main: {screen: page2},
})

const App = createAppContainer(NavApp);

export default App;