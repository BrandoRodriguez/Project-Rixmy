import styles from './styles.module.css'

function Video() {
    return (
        <header id={styles.presentation} className={styles.video_presentation}>

            <picture>

                <video
                    autoPlay="autoPlay"
                    loop="loop"
                    muted
                    defaultmuted=""
                    playsInline=""
                    preload="auto"
                    id="miVideo"
                >
                    <source media="(max-width: 600px)" src="/presentation1.mp4" />

                    <source src="/presentation2.mp4" type="video/mp4" />

                </video>

            </picture>
        </header>

    )
}

export default Video