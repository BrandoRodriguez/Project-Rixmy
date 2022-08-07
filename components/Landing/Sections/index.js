import React from 'react'
import Section from '../Section'

import {home} from '../../../data/home'


function Sections() {
  return (
    <>
      {
        home.map( (data, index) => {
          return <Section key={index} data={data}/>
        })
      }
    </>
  )
}

export default Sections