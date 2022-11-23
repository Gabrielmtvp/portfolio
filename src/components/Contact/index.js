import './index.scss'
import * as Dialog from '@radix-ui/react-dialog'

const Contact = () => {

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
            // nodemailer();
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
                            <form onSubmit={handleSendRequest} className="formDialog">
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
                                    <input type="text" name="description" id="description" />
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