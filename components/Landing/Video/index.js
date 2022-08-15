import styles from './styles.module.css'

function Video() {
    return (
        <header id={styles.presentation} className={styles.video_presentation}>
            <video className={styles.none}
                autoPlay="autoPlay"
                loop="loop"
                muted
                defaultmuted=""
                playsInline=""
                preload="auto"
                id="miVideo"
            >
                <source src="video/2.mp4" type="video/mp4" />
            </video>
            <video className={styles.none1}
                autoPlay="autoPlay"
                loop="loop"
                muted
                defaultmuted=""
                playsInline=""
                preload="auto"
                id="miVideo"
            >
                <source src="video/1.mp4" type="video/mp4" />
            </video>
        </header>

    )
}

export default Video