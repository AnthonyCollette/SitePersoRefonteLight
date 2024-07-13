import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { motion } from 'framer-motion'

const Form = () => {
    const form = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const consentRef = useRef()
    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID 
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const [emailSent, setEmailSent] = useState(false)
    const [success, setSuccess] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [consentError, setConsentError] = useState(false)
    const validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
        setConsentError(false)

        if (form.current !== null) {

            let formIsValid = true

            if ((typeof nameRef?.current?.value === 'string' && nameRef?.current?.value?.length < 3) || typeof nameRef?.current?.value !== 'string') {
                setNameError(true)
                formIsValid = false
            }

            if ((typeof emailRef?.current?.value === 'string' && !validateEmail(emailRef?.current?.value)) || typeof nameRef?.current?.value !== 'string') {
                setEmailError(true)
                formIsValid = false
            }

            if ((typeof messageRef?.current?.value === 'string' && messageRef?.current?.value?.length < 3) || typeof messageRef?.current?.value !== 'string') {
                setMessageError(true)
                formIsValid = false
            }

            if ((!consentRef?.current?.checked)) {
                setConsentError(true)
                formIsValid = false
            }
            if (formIsValid) {
                emailjs
                    .sendForm(serviceId, templateId, form.current, {
                        publicKey: publicKey,
                    })
                .then(
                    () => {
                        form?.current?.reset();
                        setEmailSent(true)
                        setSuccess(true)
                    },
                    (error) => {
                        setEmailSent(true)
                        setSuccess(false)
                    },
                );
            }
        }
    };
    return (<>
        {!emailSent && <motion.form initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}} ref={form} onSubmit={sendEmail}>
            <div className={nameError ? 'form-group error' : 'form-group'}>
                <label htmlFor="name">Nom</label>
                <input type='text' ref={nameRef} name='user_name' id="name" />
                {nameError && <p>Merci de renseigner votre nom</p>}
            </div>
            <div className={emailError ? 'form-group error' : 'form-group'}>
                <label htmlFor="email">Adresse mail</label>
                <input type='email' ref={emailRef} name='user_email' id="email" />
                {emailError && <p>Merci de renseigner une adresse mail au bon format</p>}
            </div>
            <div className={messageError ? 'form-group error' : 'form-group'}>
                <label htmlFor="message">
                    Message
                </label>
                <textarea name='message' id="message" ref={messageRef} />
                {messageError && <p>Merci de remplir votre message</p>}
            </div>
            <div className={consentError ? 'form-group error' : 'form-group'}>
                <input type="checkbox" name='checkbox' id="consent-checkbox" ref={consentRef}/> 
                <label htmlFor="consent-checkbox">En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à Anthony Collette dans le but d'être recontacté concernant la demande effectuée.</label>
                {consentError && <p>Merci de cocher la case ci-dessus.</p>}
            </div>
            <button className="btn btn--primary">Envoyer</button>
        </motion.form>}
        {emailSent && success && <div className='success'><motion.h3 initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Votre message a bien été envoyé ! Je vous répondrai dès que possible.</motion.h3></div>}
        {emailSent && !success && <div className='fail'><motion.h3 initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Oups, il y a eu un problème ! Veuillez réessayer.</motion.h3></div>}
    </>
    );
};

export default Form;