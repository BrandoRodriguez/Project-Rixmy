import React from 'react'
import Slideshow from '../Slideshow'
import Slide from '../Slide';

export default function NewSlider({ images, controls, autoplay, speed, interval }) {

    console.log('autoplay=', autoplay)
    console.log('speed=', speed)
    console.log('interval=', interval)

    return (
        <>
            <Slideshow
                controls={controls}
                autoplay={autoplay}
                speed={speed}
                interval={interval}
            >
                {
                    images.map((image, index) => {
                        return (
                            <Slide image={image} key= {index}/>
                        )
                    })
                }

            </Slideshow>
        </>
    )
}