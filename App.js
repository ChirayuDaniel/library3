import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransScreen from './screens/BookTransScreen'
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : BookTransScreen}, 
search : {screen : SearchScreen}
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon : () => {
      const routeName = navigation.state.routeName
      if(routeName === "Transaction"){
        return(
          <Image 
          source = {require("./assets/book.png")}
          style = {{width : 40, height : 40}}
          />
        )
      }
     else if(routeName === "search"){
      return(
        <Image 
        source = {require("./assets/searchingbook.png")}
        style = {{width : 40, height : 40}}
        />
      ) 
     } 
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({container : {
  flex : 1, 
  backgroundColor : 'brown',
  alignItems : 'center',
  justifyContent : 'center'
}
});