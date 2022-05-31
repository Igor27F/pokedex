//all the imports needed
import * as React from 'react';
import List from './components/List';
import Details from './components/Details';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './components/Styles';

const Stack = createStackNavigator();

export default function App() {
  return ( //declaring navigator with header stylizations, list page and details page
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="List" 
      screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTintColor:'white', headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'}} }>
        <Stack.Screen name="List" component={List} options={{ headerTitle: props => <LogoTitle {...props} />,   }}  /> 
        <Stack.Screen name="Details" component={Details} options={{title:'POKEMON DETAILS'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function LogoTitle() { //function to show on header the pokedex icon and title
  return (
    <View style={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}} >
    <Image
      style={{ width: 50, height: 50 }}
      source={require('/pokedex.png')}
    />
      <Text style={ styles.headertitle }>  POKEDEX</Text>
    </View>
  );
}
