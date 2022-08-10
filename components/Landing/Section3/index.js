import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'

function Section3({ data }) {

  const class_name = data.id.replace(/-/g, '_')
  const section_name = class_name + '_section'

  const styles_config = `@media (min-width: 1023px) {
    .content {
      width: 70%;
      padding-left: 80px;
    }
  }`

  const variable = 'polygon(0 0, 0 100%, 100% 100%, 100% 7%, 50% 7%, 50% 0);'

  return (

    <section
      className={`${styles.article} ${styles.bg}`}
    >
      <div style={{
        background: `${data.style.position} url(/img/${data.style.background})`,
        clipPath: `${variable}`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh'
      }}>

      </div>
      {/* <img
        src="/img/items/forma.png"
        alt=""
        style={{
          position: 'relative',
          width: '100%',
          top: '-100px',

        }}
      /> */}
      
      {/* <div>
        <div className={styles.content}>

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
      </div> */}
    </section>

  )
}

export default Section3