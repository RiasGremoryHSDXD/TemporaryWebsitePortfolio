import ContactInfo from "./ContactInfo.tsx"
import Appointment from "./Appointment.tsx"

function Contact(){
    return(
        <div className="2xl:h-[100vh] flex justify-center flex-col gap-[5vh]">
            <p className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl flex justify-center text-2xl'>Contact</p>
            <div  className="sm:grid sm:grid-cols-2 sm:gap-4 space-y-10">
                <ContactInfo/>
                <Appointment/>
            </div>
        </div>
    )
}

export default Contact