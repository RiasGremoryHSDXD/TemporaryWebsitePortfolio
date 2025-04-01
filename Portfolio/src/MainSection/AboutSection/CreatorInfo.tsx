import '../../css/CreateInfo.css'
import left_arrow from '../../assets/left-arrow.png'
import right_arrow from '../../assets/right-arrow.png'
import { useState } from 'react'


function CreateInfo()
{
    const [count, setCount] = useState(0)

    let title_details = {
        title_user_info: (
            <>
              <h2 className="text-design typing-container">
                Hi, I am James Christopher Tagupa
              </h2>
              <h4 className="text-design">
                Aspiring Full Stack Programmer
              </h4>
            </>
            ),
        title_user_hobbies: (
            <>
                <h2 className="text-design typing-container">
                    Hobbies
                </h2>
            </>
            ),
        title_school_background_info: (
            <>
                <h2 className="text-design typing-container">
                    School Background
                </h2>
            </>
        )
    }
    let user_details = {
        user_info : 
            `Im a tech enthusiast and 2nd-year BSIT student at USTP with a knack for 
            turning ideas into digital reality. I love creating sleek, functional 
            projects—from dynamic websites to smart software solutions. I thrive on 
            learning new things, tackling challenges, and bringing fresh, creative 
            energy to every project.`,

        user_hobbies:
            `When I'm not coding, I love diving into the worlds of anime and light novels. 
            There's nothing like getting lost in captivating storylines and exploring unique characters. 
            Whether it’s an action-packed series or a thought-provoking read, these hobbies inspire my 
            creativity and keep my imagination sharp!`,
        
        school_background_info:
            `I graduated from PHINMA COC in Senior High School with a focus on ICT and computer programming, 
            earning honors for my dedication. Currently, I’m pursuing my BSIT degree at USTP to further hone my skills, 
            deepen my knowledge, and connect with like-minded individuals who share my passion for technology and innovation.`
    }

    const stored_info = [user_details.user_info, user_details.user_hobbies, user_details.school_background_info]
    const stored_title = [title_details.title_user_info, title_details.title_user_hobbies, title_details.title_school_background_info]

    let add_count = () => setCount(prevState => prevState + 1)
    let minus_count = () => setCount(prevState => prevState - 1)
    return(
    <div className='lg:w-[60%]  bg-[#80CED7] flex flex-col p-5 space-y-5'>
        <div className='lg:justify-start flex justify-center'>
            <div className='w-fit flex items-center flex-col' key={count}>
                    {stored_title[count]}
            </div>
        </div>
        <p className='info-reveal' key={count}>
            {stored_info[count]}
        </p>

        <div className='flex justify-between'>
            <button className={`flex justify-start button-design border-2 sm:w-[10%] w-[20%] transition-transform duration-300 hover:animate-pulse border-red-600 ${count === 0 ? "invisible" : "visible"}`} onClick={minus_count}>
                <img className='w-[100%]' src={left_arrow} alt="left_arrow_btn" />
            </button>
            <button className={`flex justify-end button-design border-2 sm:w-[10%] w-[20%] transition-transform duration-300 hover:animate-pulse border-red-600 ${count === 2 ? "invisible" : "visible"}`} onClick={add_count}>
                <img className='w-[100%]' src={right_arrow} alt="right_arrow_btn" />
            </button>
        </div>
    </div>)
}

export default CreateInfo