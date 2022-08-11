import React from 'react'
import styles from './styles.module.css'
import NewSlider from '../NewSlider/NewSlider'

function Slider({ data }) {

  console.log('slider')

  return (

    <section
      className={`${styles.article} ${styles.slider}`}
    >
      <NewSlider
        contents={data}
        controls={true}
        autoplay={true}
        speed="1000"
        interval="3500"
      />


    </section>

  )
}

export default Slider