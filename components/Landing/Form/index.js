import React from 'react'
import styles from './styles.module.css'

function Form() {
    return (
        <section
            className={`${styles.article}`}
            style={{
                background: "center url(/img/sections/other_services.jpg)",
                backgroundSize: "cover"
            }}
        >
            <div >
                
                <div className={styles.content}>
                    <div>
                        <img
                            src="img/items/section_logo.svg"
                            alt="section_logo"
                            width={86}
                            height={22}
                        />
                        <span>Contact Us</span>
                    </div>
                    <div>
                        <h1>¿Cómo contactarnos?</h1>
                    </div>
                </div>

                <form className={`${styles.form}`}>
                    <label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First name"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="job-title"
                            id="job-title"
                            placeholder="Job title"
                        />
                    </label>
                    <label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                    </label>
                    <label>
                        <input type="text" name="company" id="company" placeholder="Company" />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Location"
                        />
                    </label>
                    <textarea placeholder='Comment' name="comment" id="comment" />
                    <button type="submit">CONTACT</button>
                </form>
            </div>

        </section>

    )
}

export default Form