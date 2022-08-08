import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'

function Section({ data }) {

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
            <div>
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
            <div>
              <h2 className={styles.h2}>How will we achieve this?</h2>
              <div className={styles.content_flex1}>
                <div>
                  <h3>
                    Creativity
                  </h3>
                  <hr />
                  <p>
                    Through active listening and the right diagnostic tools, we will find the best solution to the problem your company is facing.
                  </p>
                </div>
                <div>
                  <h3>
                    Creativity
                  </h3>
                  <hr />
                  <p>
                    Through active listening and the right diagnostic tools, we will find the best solution to the problem your company is facing.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>

  )
}

export default Section