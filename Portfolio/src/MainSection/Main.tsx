import '../css/Main.css'
import AboutSection from './AboutSection/AboutSection.tsx'
import SkillAndToolsSection from './Skill&ToolSection/Skill&Tool.tsx'
import ProjectSection from './ProjectSection/ProjectSection.tsx'
import Contact from './ContactSection/Contact.tsx'
import CommentSection from '../CommentSection.tsx'

function Main()
{
    return(
    <div className='2xl:px-30 p-10 w-full space-y-10 overflow-hidden bg-[#007EA7]'>
        <AboutSection/>
        <SkillAndToolsSection/>
        <ProjectSection/>
        <CommentSection/>
        <Contact/>
    </div>
    )
}

export default Main