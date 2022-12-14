import styles from './styles.module.css'
import FacebookIcon from '../Icons/FacebookIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import InstagramIcon from '../Icons/InstagramIcon'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img src="/img/items/rixmy_full_logo.svg" alt='Logo-Footer' width={212} height={75} />
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <FacebookIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TwitterIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <YoutubeIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <LinkedinIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <InstagramIcon width={25} height={25} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">COOKIES POLICY</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">TERMS AND CONDITIONS</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">PRIVACY POLICY</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">INTEREST ADVERTISING NOTICE</a>
                    </li>
                </ul>
                <p className={styles.p}>?? 2022 Rixmy. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer