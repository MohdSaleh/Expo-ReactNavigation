import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Page1 from './Page1';
import Page2 from './Page2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
      </DrawerContentScrollView>
    );
  }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Page1" component={Page1} />
      <Drawer.Screen name="Page2" component={Page2} />
    </Drawer.Navigator>
  );
}

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
      </Tab.Navigator>
    );
  }


export default function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Tab" component={MyTabs} />
        </Stack.Navigator>
  </NavigationContainer>
  );
}