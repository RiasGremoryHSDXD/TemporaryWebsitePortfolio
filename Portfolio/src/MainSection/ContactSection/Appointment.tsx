import { useState } from 'react'
import './../../css/Contact.css'

function Appointment(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false); 

    function handleSubmit(event:any) {
        event.preventDefault(); 
        setSubmitted(true);  
        
        let error_message_arr = []
        const error_message = {
            name_error : "• Name field is empty",
            email_error: "• Email field is empty",
            phone_error: "• Phone field is empty",
            message_error: "• Message field is empty"
        }

        if(!name) error_message_arr.push(error_message.name_error);
        if(!email) error_message_arr.push(error_message.email_error);
        if(!phone) error_message_arr.push(error_message.phone_error);
        if(!message) error_message_arr.push(error_message.message_error);
        if(error_message_arr.length != 0) alert(error_message_arr.join('\n'));
    }

    return (
        <div className="appointment-container max-w-[600px]">
            <h2>MAKE APPOINTMENT</h2>

            <form className='w-[100%]' onSubmit={handleSubmit}>
                <p>NAME</p>
                <input 
                    type="text" 
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`border p-2 w-full ${submitted && name.length === 0 ? 'border-red-500' : 'border-gray-300'}`}
                />
                <p>EMAIL</p>
                <input 
                    type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border p-2 w-full ${submitted && email.length === 0 ? 'border-red-500' : 'border-gray-300'}`}
                />
                <p>PHONE</p>
                <input 
                    type="text" 
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`border p-2 w-full ${submitted && phone.length === 0 ? 'border-red-500' : 'border-gray-300'}`}
                />
                <p>MESSAGE</p>
                <textarea 
                    placeholder='Write message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`border p-2 w-full ${submitted && message.length === 0 ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                <div className="w-full flex justify-center mt-2">
                    <button type="submit" className="bg-[#737070] py-1.5 px-2 rounded-2xl cursor-pointer" onClick={ handleSubmit}>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Appointment;
