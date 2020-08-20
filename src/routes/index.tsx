import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      headerMode="none"
      initialRouteName="Login"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: 'push',
      }}
    >
      <App.Screen name="Login" component={Login} />
    </App.Navigator>
  );
};

export default Routes;
