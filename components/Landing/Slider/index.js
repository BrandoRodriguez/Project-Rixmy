import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'
import NewSlider from '../NewSlider/NewSlider'

function Slider({ data }) {

  return (

    <section
      className={`${styles.article} ${styles.slider}`}
    >
      <NewSlider
        images={data.style.background}
        controls={true}
        autoplay={true}
        speed="1000"
        interval="3500"
      />


    </section>

  )
}

export default Slider