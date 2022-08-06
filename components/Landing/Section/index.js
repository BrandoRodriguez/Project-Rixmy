import React from 'react'
import styles from './styles.module.css'

function Section({ data }) {

  const class_name = data.id.replace(/-/g, '_')
  const section_name = class_name + '_section'

  return (

    <section
      className={`${styles.article} ${styles[data.class]}`}
      style={{
        background: `${data.position} url(/img/${data.background})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles[section_name]} data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
            {data.section &&
              <img src="img/items/logo2.svg" alt='logo2'
                width={86}
                height={22}
              />
            }
            <span>{data.section.toUpperCase()}</span>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.anchor &&
              <a href={data.href}>
                <svg
                  className="svg-inline--fa fa-caret-right"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                  />
                </svg>
                {data.anchor.toUpperCase()}
              </a>
            }
          </div>
        </div>
      </div>
    </section>

  )
}

export default Section