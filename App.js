import {SafeAreaView, StatusBar } from 'react-native';
import Estilos from './styles/Estilos';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { drawerStyles } from './styles/Estilos';
 
const Drawer = createDrawerNavigator();
 
export default function App() {
  return(
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000"/>
    <SafeAreaView style={Estilos.safeAreaViewContainer}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={drawerStyles} initialRouteName="Sobre">
          <Drawer.Screen
            name="Sobre" component={Sobre}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="information-circle-outline"
                    color={ color } size={size}/>
                ),
              }}
          />
          <Drawer.Screen
            name="Galeria" component={Galeria}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="images-outline"
                    color={ color } size={size}/>
                ),
              }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
 
    </>
  );
}
