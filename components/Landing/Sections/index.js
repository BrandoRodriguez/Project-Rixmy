import React from 'react'
import Section from '../Section'
import Slider from '../Slider';
import {home} from '../../../data/home'


function Sections() {
  return (
    <>
      {
        home.map( (data, index) => {

          if (data.style.type === 'slider') {
            return <Slider key={index} data={data}/>
          } else {
            return <Section key={index} data={data}/>
          }

        })
      }
    </>
  )
}

export default Sections