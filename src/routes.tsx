import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home'
import Transactions from './pages/Transactions'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Drawer.Navigator
      drawerContentOptions={
        {
          activeTintColor: "#ffffff",
          inactiveTintColor: "rgba(255, 255, 255, .4)",
          style: {
            backgroundColor: "#22460a",
          },
          itemStyle: {
            marginVertical: 10,
          }
        }
      }
      drawerType="slide"
    >
      <Drawer.Screen
        component={Home}
        name="Home"
      />
      <Drawer.Screen
        component={Transactions}
        name="Transactions"
      />
    </Drawer.Navigator>
  );
}
