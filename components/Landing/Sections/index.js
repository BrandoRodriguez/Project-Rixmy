import React from 'react'
import Section from '../Section'

import {sections} from '../../../data/sections'


function Sections() {
  return (
    <>
      {
        sections.map( (data, index) => {
          return <Section key={index} data={data}/>
        })
      }
    </>
  )
}

export default Sections