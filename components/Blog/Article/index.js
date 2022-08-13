import styles from './styles.module.css'
import Link from 'next/link'
import { getStrapiMedia } from "../../../lib/media"

function Article({ article }) {

    const imageUrl = getStrapiMedia(article.attributes.image)
    const link_article = `/blog/article/${article.attributes.slug}`

    return (
        <>
            <div className={styles.single_blog} >
                <div>
                    <Link href={link_article}>
                        <a className={styles.featured_img}>
                            <span className={styles.date}>
                                20 <small>may</small>
                            </span>
                            <img src={imageUrl} alt="featured img">
                            </img>
                        </a>
                    </Link>

                    <div className={styles.post_title}>
                        <h3>
                            <Link href={link_article}>
                                <a>{article.attributes.title}</a>
                            </Link>
                        </h3>
                    </div>
                </div>

                <div className={styles.like_comment}>
                    <Link href={link_article}>
                        <a className={styles.read_more}>
                            <span>
                                {/* <img src="img/blog/arrow-right-white.png" alt="arrow" /> */}
                            </span>
                        </a>
                    </Link>
                    <span className={styles.like}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="heart"
                            className="svg-inline--fa fa-heart fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                            ></path>
                        </svg>
                        241
                    </span>
                    <span className={styles.comment}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="comment-dots"
                            className="svg-inline--fa fa-comment-dots fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                            ></path>
                        </svg>
                        236
                    </span>
                </div>

            </div>
        </>
    )
}

export default Article