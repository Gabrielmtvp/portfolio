import './index.scss'
import * as Dialog from '@radix-ui/react-dialog'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLADE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    function handleSendRequest(event) {
        event.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            if(result.text == "OK"){
                document.getElementById('modalSuccess').className = 'modalSuccess';

                setTimeout(() => {
                    document.getElementById('main_form').reset();
                    document.getElementById('modalSuccess').className = 'modalSuccessHidden';
                }, 3000);
            }
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <section className='containerContact' id="contact">
            <div>
                <h4>Interested in working with me?</h4>
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <p>&lt; Start a project request &gt;</p>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay">
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title>Start a project request</Dialog.Title>
                            <form ref={form} onSubmit={handleSendRequest} id="main_form" className="formDialog">
                                <div className='groupInput'>
                                    <label>Name *</label>
                                    <input type="text" name="name" id="name" required />
                                </div>
                                <div className='groupInput'>
                                    <label>Email *</label>
                                    <input type="text" name="email" id="email" required />
                                </div>
                                <div className='groupInput'>
                                    <label>Description *</label>
                                    <textarea rows={4} name="description" id="description" required />
                                </div>
                                <footer className="DialogFooter">
                                    <Dialog.Close 
                                        type="button"
                                        className='DialogClose'
                                    >
                                        Cancelar
                                    </Dialog.Close>
                                    <button 
                                        type="submit"
                                        className='DialogSubmit'
                                    >
                                        Request  
                                    </button>
                                </footer>
                            </form>
                        </Dialog.Content>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
            <div className='modalSuccessHidden' id="modalSuccess">
                <h1>Email send with success!</h1>
                <FontAwesomeIcon icon={faCheck} size="3x" style={{color:"green"}} />
            </div>
        </section>
    )
}

export default Contact;