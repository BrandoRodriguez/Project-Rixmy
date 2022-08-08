import React from 'react'
import Section from "../Section"
import Section2 from "../Section2"
import Slider from "../Slider"


function Sections({pageData}) {
  return (
    <>
      {
        pageData.map( (data, index) => {

          if (data.style.type === 'section') {
              return <Section key={index} data={data} />
          }
          else if (data.style.type === 'section2') {
              return <Section2 key={index} data={data} />
          }
          else if (data.style.type === 'slider') {
              return <Slider key={index} data={data} />
          }
          
        })
      }
    </>
  )
}

export default Sections