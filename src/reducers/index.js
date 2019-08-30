import { combineReducers } from 'redux'

export const robotReducer = (state, action) => {
  // NOTE: this reducer is hardcoded to always return this list of robots
  return [
    {
      name: 'opentrons-sunset',
      ip: '10.10.3.191',
      advertising: true,
      health: {
        name: 'opentrons-sunset',
        api_version: '3.8.1',
        fw_version: 'edge-6168d32',
        system_version: '3.3.0',
      },
    },
    {
      name: 'wandering-meadow',
      ip: '10.10.3.223',
      advertising: true,
      health: {
        name: 'wandering-meadow',
        api_version: '3.7.0',
        fw_version: 'edge-6168d32',
        system_version: '3.3.0',
      },
    },
    {
      name: 'opentrons-OT2P20180929A06',
      ip: '10.10.3.212',
      advertising: false,
      health: {
        name: 'opentrons-OT2P20180929A06',
        api_version: '3.8.1-alpha.0',
        fw_version: 'edge-6168d32',
        system_version: '3.3.0',
      },
    },
  ]
}

export default combineReducers({
  robots: robotReducer,
  selectedRobot: null, // TODO: combine your selectedRobot reducer here
})
