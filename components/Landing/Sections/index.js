import React from 'react'
import getComponent from '../../../utils/getComponent';


function Sections({pageData}) {
  return (
    <>
      {
        pageData.map( (data, index) => {
          return getComponent(data, index)
        })
      }
    </>
  )
}

export default Sections