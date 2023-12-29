import React from 'react'
import Slider from './Slider'
import Workspaces from './Workspaces'
import Demandbook from './Demandbook'
import Upcomingpg from './Upcomingpg'
import Wosquare from './Wosquare'
import Testimonials from './Testimonials'
import Aplatform from './Aplatform'
import News from './News'
import Lets from './Lets'
const Main = () => {
  return (
    <>
    <main>
       <Slider/>
       <Workspaces/>
       <Demandbook/>
       <Upcomingpg/>
       <Wosquare/>
       <Testimonials/>
       <Aplatform/>
       <News/>
       <Lets/>
    </main>
    </>
  )
}

export default Main