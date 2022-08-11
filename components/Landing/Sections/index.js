import React from 'react'
import Section from "../Section"
import Section2 from "../Section2"
import Slider from "../Slider"


function Sections({ pageData }) {
  return (
    <>
      {
        pageData.map((data, index) => {

          if (data.type === 'section') {
            return <Section key={index} data={data.contents[0]} />
          }
          else if (data.type === 'section2') {
            return <Section2 key={index} data={data.contents[0]} />
          }
          else if (data.type === 'slider') {
            return <Slider key={index} data={data.contents} />
          }

        })
      }
    </>
  )
}

export default Sections