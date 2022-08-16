/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useRef } from 'react';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginMain from './src/views/screens/LoginMain';
import LoginStep2 from './src/views/screens/LoginStep2';
import LoginStep3 from './src/views/screens/LoginStep3';
import Footer from './src/views/components/Footer';
import COLORS from './src/conts/colors';
import EventDetail from './src/views/screens/EventDetail';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import EventCreate from './src/views/screens/EventCreate';
import UserRegister from './src/views/screens/UserRegister';
import EmailVerification from './src/views/screens/EmailVerification';
import CardStyle from './src/views/screens/CardStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { navigationRef } from './RootNavigation';
import CardDetail from './src/views/screens/CardDetail';
import EventEdit from './src/views/screens/EventEdit';
import ProfileEdit from './src/views/screens/ProfileEdit';
import EventGroup from './src/views/screens/EventGroup';
import { WithSplashScreen } from './src/views/components/Splash';
import Loading from './src/views/screens/Loading';
import SearchCard from './src/views/components/SearchCard';



const Stack = createStackNavigator();



const App = () => {

  const queryClient = useRef(undefined);

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Provider store={store}>

        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Loading"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }} >

            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name="LoginMain"
              component={LoginMain}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name="LoginStep2"
              component={LoginStep2}
              options={{
                headerShown: false
              }} />

            <Stack.Screen
              name="LoginStep3"
              component={LoginStep3}
              options={{
                headerShown: false
              }} />

            <Stack.Screen
              name="UserRegister"
              component={UserRegister}
              options={{
                headerShown: false
              }} />

            <Stack.Screen
              name="EmailVerification"
              component={EmailVerification}
              options={{
                headerShown: false
              }} />


            <Stack.Screen
              name="Footer"
              component={Footer}
              options={({ navigation }) => ({
                headerShown: false,
                navigation,
              })}
            />
            <Stack.Screen
              name="SearchCard"
              component={SearchCard}
              options={({ navigation }) => ({
                headerShown: false,
                navigation,
              })}
            />

            <Stack.Screen
              name="CardDetail"
              component={CardDetail}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{
                headerShown: false
              }}
            />



            <Stack.Screen
              name="EventCreate"
              component={EventCreate}
              options={
                {
                  title: "Create Event",
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: COLORS.primaryColor },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' },
                }} />

            <Stack.Screen
              name="EventDetail"
              component={EventDetail}
              options={
                {
                  title: "Event Detail",
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: COLORS.primaryColor },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' },
                }} />

            <Stack.Screen
              name='EventEdit'
              component={EventEdit}
              options={
                {
                  title: "Edit Event",
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: COLORS.primaryColor },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' },
                }} />

            <Stack.Screen
              name='EventGroup'
              component={EventGroup}
              options={
                {
                  title: "Event Group",
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: COLORS.primaryColor },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' },
                }} />



            <Stack.Screen
              name="CardStyle"
              component={CardStyle}
              options={{
                headerShown: false
              }}
            />


          </Stack.Navigator>
        </NavigationContainer >
      </Provider>
    </WithSplashScreen>
  );
};


export default App;
function createReduxStore() {
  throw new Error('Function not implemented.');
}

