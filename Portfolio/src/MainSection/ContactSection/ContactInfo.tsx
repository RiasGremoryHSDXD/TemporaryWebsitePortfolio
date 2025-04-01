import './../../css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function ContactInfo(){
    return(
            <div id="Contact" className='contact-container'>
                <div className="contact-info">
                    <p className='font-extrabold'>Get in Touch</p>

                    <p>
                        Send us an email and let us know everything you want in a new site. 
                        I will try to respond to everyone within 24 hours of contact. 
                        Alternatively, give me a call to reach me immediately for a chat. 
                        If I am unavailable, I will call back the same day.
                    </p>

                    <div>
                        <div className='bg-white rounded-full '>
                            <FontAwesomeIcon className='m-3' size='2x' icon={faEnvelope} />
                        </div>
                        <div>
                            <h2>EMAIL</h2>
                            <a href="mailto:weakhero2@gmail.com" className='hover:cursor-pointer underline'>Click To Email</a>
                        </div>
                    </div>

                    <div>
                        <div className='bg-white rounded-full '>
                            <FontAwesomeIcon className='m-3' size='2x' icon={faPhone}/>
                        </div>
                        <div>
                            <h2>PHONE</h2>
                            <p>+63 917 123 4567</p>
                        </div>
                    </div>

                    <div>
                        <div className='bg-white rounded-full'>
                            <FontAwesomeIcon className='m-3' size='2x' icon={faLocationDot}/>
                        </div>
                        <div>
                            <h2>AREAS SERVED</h2>
                            <p>Philippine & USA</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactInfo