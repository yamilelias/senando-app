import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../containers/Walkthrough/Welcome';
import App from '../../App';

const WalkthroughNavigator = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        App: { screen: App }
    },
    {
        initialRouteName: 'Welcome',
        navigationOptions: {},
        headerMode: 'none'
    }
);

const Walkthrough = createAppContainer(WalkthroughNavigator);

export default Walkthrough;