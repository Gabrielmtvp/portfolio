import './index.scss'
import * as Dialog from '@radix-ui/react-dialog'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLADE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    function handleSendRequest(event) {
        event.preventDefault();
        let validation = true;

        const formData = new FormData(event.currentTarget);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
          if(value === ""){
            validation = false;
          }
        }

        if(validation){
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
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
                            <form ref={form} onSubmit={handleSendRequest} className="formDialog">
                                <div className='groupInput'>
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className='groupInput'>
                                    <label>Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className='groupInput'>
                                    <label>Description</label>
                                    <textarea  name="description" id="description" />
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
        </section>
    )
}

export default Contact;