import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'

import alarms from '../../alarms'

const RouterWithRedux = connect()(Router)

const Routes = () => (
    <RouterWithRedux hideNavBar={true}>
        <Scene key='root'>
            <Scene key='alarms' initial={true} component={alarms.components.Alarms}/>
            <Scene key='newalarm' component={alarms.components.Alarms}/>
        </Scene>
    </RouterWithRedux>
)

export default Routes
