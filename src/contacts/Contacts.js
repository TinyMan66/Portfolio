import React from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import { useFormik } from 'formik'
import axios from "axios";

export const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: values => {
            const errors = {}

            if (!values.name) {
                errors.name = 'Required field'
            } else if (values.name.length > 30) {
                errors.name = 'Invalid name length! Name must be less than 30 characters...'
            }

            if (!values.email) {
                errors.email = 'Required field'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.message) {
                errors.message = 'Required field'
            } else if (values.email.length > 300) {
                errors.message = 'Invalid message length! Message must be less than 800 characters...'
            }

            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
            console.log(values.name)

            axios.post("http://localhost:3010/sendMessage", {
                name: values.name,
                email: values.email,
                message: values.message,
            }).then(() => {
                alert("Your message has been sent")
            })
            formik.resetForm()
        },
    })

    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade bottom>
                <div className={style.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <Fade direction={"left"} className={style.fade}>
                        <form className={style.form} onSubmit={formik.handleSubmit}>
                            <input
                                type="text"
                                className={`${formik.touched.name && formik.errors.name ? style.errorFormArea : style.formArea}`}
                                placeholder="Name"
                                {...formik.getFieldProps('name')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className={style.error}>{formik.errors.name}</div>
                            ) : null}
                            <input
                                type="email"
                                className={`${formik.touched.email && formik.errors.email ? style.errorFormArea : style.formArea}`}
                                placeholder="e-mail"
                                {...formik.getFieldProps('email')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={style.error}>{formik.errors.email}</div>
                            ) : null}

                            <textarea
                                className={`${formik.touched.message && formik.errors.message ? style.errorMessageArea : style.messageArea}`}
                                placeholder="Message"
                                {...formik.getFieldProps('message')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className={style.error}>{formik.errors.message}</div>
                            ) : null}

                            {/*<input type="text" className={style.formArea} placeholder="Name"/>*/}
                            {/*<input type="text" className={style.formArea} placeholder="e-mail"/>*/}
                            {/*<textarea className={style.messageArea} placeholder="Message"></textarea>*/}
                            <button type="submit">send message</button>
                        </form>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
}