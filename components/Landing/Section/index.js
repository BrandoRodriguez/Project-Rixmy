import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'

function Section({ data }) {

  const class_name = data.id.replace(/-/g, '_')
  const section_name = class_name + '_section'

  return (
    <section
      className={`${styles.article}  ${styles[data.style.class]} `}>
      <div className={`${styles[data.style.top]} ${styles[data.style.circle]}`}
        style={{
          backgroundImage: `url(/img/${data.style.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`${styles.content} ${styles[data.style.content_padding_top]} ${styles[data.style.content_padding_bottom]}`}>
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
      </div>
    </section>

  )
}

export default Section