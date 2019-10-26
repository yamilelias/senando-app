import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TestPage from './containers/TestPage';
import AfterTestPage from './containers/AfterTestPage';

const AppNavigator = createStackNavigator(
    {
        TestPage         : { screen : TestPage },
        AfterTestPage    : { screen : AfterTestPage }
    },
    {
        initialRouteName : 'TestPage',
        navigationOptions : {

        },
        headerMode : 'none'
    }
)

const App = createAppContainer(AppNavigator);

export default App;