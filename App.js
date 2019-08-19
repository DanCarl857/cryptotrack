/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { View } from 'react-native'
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons'

// Styling
import theme from './src/styles/theme.style'
import common from './src/styles/common.style'

// App Screens
import Start from './src/screens/Start/Start.component'
import Settings from './src/screens/Home/Settings/Settings.component'
import Summary from './src/screens/Home/Summary/Summary.component'
import Cryptocurrency from './src/screens/Home/Cryptocurrency/Cryptocurrency.component'

const TabIcon = ({ focused, iconName }) => {
  var color = focused ? theme.PRIMARY_COLOR : 'grey'
  return (
    <View style={{flex:1, flexDirection:'column', alignSelf:'center', ...common.center }}>
      <Icon style={{color: color}} name={iconName || "circle"} size={20}/>
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: theme.WHITE }}
        tintColor={theme.TEXT_COLOR}
        titleStyle={{ color: theme.TEXT_COLOR, fontSize: theme.FONT_SIZE_LARGE, fontWeight: theme.FONT_WEIGHT_MEDIUM }}>
        <Scene key="root">
          <Scene key="start" component={Start} hideNavBar />
          <Scene
            key="home"
            tabs={true}
            tabBarStyle={{ backgroundColor: theme.WHITE, paddingTop: 10 }}
            activeTintColor={theme.PRIMARY_COLOR}
            hideNavBar type={ActionConst.RESET}
            lazy
            showLabel={true}
            labelStyle={{fontWeight: theme.FONT_WEIGHT_MEDIUM}}>
            <Scene key="summary" icon={TabIcon} title="Summary" iconName="ios-calendar">
              <Scene key="summary" component={Summary} title="Summary" />
            </Scene>
            <Scene key="cryptocurrency" icon={TabIcon} title="Cryptocurrency" iconName="ios-paper-plane">
              <Scene key="cryptocurrency" component={Cryptocurrency} title="Cryptocurrency Listings" />
            </Scene>
            <Scene key="settings" icon={TabIcon} title="Settings" iconName="ios-cog">
              <Scene key="settings" component={Settings} hideNavBar />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
