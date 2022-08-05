
import styles from './styles.module.css'

function Video() {
    return (
        <header id={styles.presentation} className={styles.video_presentation}>
            <video
                autoPlay="autoPlay"
                loop="loop"
                muted
                defaultmuted=""
                playsInline=""
                onContextMenu="return false;"
                preload="auto"
                id="miVideo"
            >
                {/* <source src="/presentation.webm" type="video/webm" />
                <source src="/presentation.ogg" type="video/ogg" /> */}
                <source src="/presentation.mp4" type="video/mp4" />

            </video>

            <div id={styles.container}>
                <div id={styles.flip}>
                    <div><div>Por estas razones, somos tu solución de forma integral</div></div>
                    <div><div>Estamos actualizados y conocemos el mercado</div></div>
                    <div><div>¿Conoces nuestro secreto?</div></div>
                    <div><div>Con nosotros no existe Plan B. porque no improvisamos</div></div>
                    <div><div>Somos tus aliados para cumplir tus sueños</div></div>
                    <div><div>Estamos comprometimos a crecer contigo</div></div>
                    <div><div>Nuestra propia metodología nos diferencia</div></div>
                    <div><div>Aumentamos la rentabilidad de tu empresa</div></div>
                    <div><div>Confía en nosotros, te ayudamos a potenciar tu marca.</div></div>
                </div>
            </div>
        </header>

    )
}

export default Video