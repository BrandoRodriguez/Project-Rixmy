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
            <a>INICIO</a>
          </Link>
          {/* <hr /> */}
          {/* <span className={styles.dropdown_content}>
            <a href="">NUESTRO ENFOQUE</a>
            <a href="">NUESTRO EQUIPO</a>
          </span> */}
        </li>
        <li className={styles.dropdown}>
          <Link href={'/about'}>
            <a>NOSOTROS</a>
          </Link>
        </li>
        <li>
          <Link href={'/services'}>
            <a href="">SERVICIOS</a>
          </Link>
        </li>
        <li>
          <a href="">NUESTRO TRABAJO</a>
        </li>
        <li>
          <Link href="/blog">
            <a href="">NOTICIAS</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="">TRABAJA CON NOSOTROS</a>
          </Link>
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
        <Link href="/">
          <a>
            <img
              className={styles.logo}
              src="/img/rixmy_logo.svg"
              alt='rixmy'
              width={100}
              height={100}
            />
          </a>
        </Link>
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
            <a id={styles.menu} onClick={menuNav} className={styles.lenguage}>
              <img
                src="/img/items/menu.svg"
                alt='menu'
                width={30}
                height={30}
              />
            </a>

          </li>
          <li className={styles.contact}>
            <a href="#">CONTÁCTANOS</a>
          </li>
        </ul>
      </nav>
      <NavDisplay state={active} />
    </>
  )
}

export default Nav