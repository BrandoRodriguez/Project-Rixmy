import Link from 'next/link'
import styles from './styles.module.css'
import { useState } from 'react'

function NavDisplay({state}) {
  return (

    <div id={styles.menuNav} className= {state}>
      <ul>
        <li className={styles.dropdown}>
          <Link href='/'>
            <a>INICIO</a>
          </Link>
          {/* <a href='/'>INICIO</a> */}
          <hr />
          <span className={styles.dropdown_content}>
            <a href="">NUESTRO ENFOQUE</a>
            <a href="">NUESTRO EQUIPO</a>
          </span>
        </li>
        <li className={styles.dropdown}>
          <Link href={'/nosotros'}>
            <a>NOSOTROS</a>
          </Link>
          {/* <a href='/nosotros'>NOSOTROS</a> */}
        </li>
        <li>
          <a href="">SERVICIOS</a>
        </li>
        <li>
          <a href="">NUESTRO TRABAJO</a>
        </li>
        <li>
          <a href="">NOTICIAS</a>
        </li>
        <li>
          <a href="">CENTRO DE APRENDIZAJE</a>
        </li>
        <li>
          <Link href="/blog">
            <a>BLOG</a>
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
        {/* <Image className="logo" src="/img/logo.svg" alt='logo' width={90} height={135}/> */}
        <img className={styles.logo} src="/img/logo.svg" alt='logo' width={90} height={135}/>
        <ul>
          <li>
            <a href="#" className={styles.lenguage}>
              {/* <img src="/img/es.PNG" alt='languaje' width={22} height={15}/> */}
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

            </a>
          </li>

          <li>
            <a id={styles.toggle} onClick={menuNav} className={active}>
              <svg
                className="svg-inline--fa fa-bars fa-2x"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                />
              </svg>
            </a>

          </li>
          <li className={styles.contact}>
            <a href="#">CONTÁCTENOS</a>
          </li>
        </ul>
      </nav>
      <NavDisplay state={active} />
    </>
  )
}

export default Nav