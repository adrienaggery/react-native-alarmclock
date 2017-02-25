import { Actions, Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'

const RouterWithRedux = connect()(Router)
const scenes = Actions.create(
    <Scene key='root'>
        <Scene key='alarms' component={Alarms}/>
        <Scene key='newalarm' component={NewAlarm}/>
    </Scene>
)

const Routes = () => (
    <RouterWithRedux scenes={scenes}/>
)

export default Routes
