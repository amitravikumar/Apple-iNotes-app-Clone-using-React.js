//Plugin for google analytics

import ReactGA from 'react-ga'

const trackingId = 'UA-69155049-1'

export function initializeGA(){
    ReactGA.initialize(trackingId)
    ReactGA.pageview('./notes-app')
}