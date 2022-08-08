import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'

function Section2({ data }) {

  const class_name = data.id.replace(/-/g, '_')
  const section_name = class_name + '_section'

  return (

    <section
      className={`${styles.article} ${styles[data.style.class]}`}
      style={{
        background: `${data.style.position} url(/img/${data.style.background})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={`${styles.container} ${styles[data.style.circle]}`}>
        <div className={styles.content}>
          <div className={styles.content_flex}>

            {/* left text */}
            <div className='primer div'>
              <div className={styles[section_name]}>
                {data.section &&
                  <img src="img/items/section_logo.svg" alt='section_logo'
                    width={86}
                    height={22}
                  />
                }
                <span>{data.section}</span>
              </div>
              <div>
                <h1>{data.title}</h1>
                <p>
                  {data.description}
                </p>
                {
                  data.anchor &&
                  <a href={data.href}>
                    <ArrowRight />
                    {data.anchor}
                  </a>
                }
              </div>
            </div>

            {/* right text */}
            <div>
              <h2 className={styles.h2}>{data.right_text.title}</h2>
              <div className={styles.content_flex1}>

                {
                  data.right_text.content.map(({subtitle, description}, index) => {
                    return (
                    <div key={index}>
                      <h3>
                        {subtitle}
                      </h3>
                      <hr />
                      <p>
                        {description}
                      </p>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Section2