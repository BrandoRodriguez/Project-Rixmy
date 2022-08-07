import Link from 'next/link'
import styles from './styles.module.css'
import { useState } from 'react'
import ArrowRight from '../Icons/ArrowRight';

function NavDisplay({ state }) {
  return (

    <div id={styles.menuNav} className={state}>
      <ul>
        <li className={styles.dropdown}>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          {/* <hr /> */}
          <span className={styles.dropdown_content}>
            <a href="">OUR APPROACH</a>
            <a href="">OUR TEAM</a>
          </span>
        </li>
        <li className={styles.dropdown}>
          <Link href={'/about-us'}>
            <a>ABOUT US</a>
          </Link>
        </li>
        <li>
          <a href="">SERVICES</a>
        </li>
        <li>
          <a href="">OUR WORK</a>
        </li>
        <li>
          <Link href="/blog">
            <a href="">NEWS &amp; INSIGHTS</a>
          </Link>
        </li>
        <li>
          <a href="">CAREERS</a>
        </li>
      </ul>
    </div>
  )
}

function Nav() {

  const [active, setActive] = useState('');

  function menuNav() {
    setActive(active === '' ? `${styles.active}` : '')
  }

  return (
    <>
      <nav className={styles.navigation}>
        <img
          className={styles.logo}
          src="/img/logo.png"
          alt='rixmy'
          width={90}
          height={135}
        />
        <ul>
          <li>
            <a href="#" className={styles.lenguage}>
              <img
                src="/img/es.PNG"
                alt='languaje'
                width={22}
                height={15}
              />
              <ArrowRight />
            </a>
          </li>

          <li>
            <a id={styles.toggle} onClick={menuNav} className={active}>
              <img
                src="/img/items/menu.svg"
                alt='languaje'
                width={22}
                height={16}
              />
            </a>

          </li>
          <li className={styles.contact}>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <NavDisplay state={active} />
    </>
  )
}

export default Nav