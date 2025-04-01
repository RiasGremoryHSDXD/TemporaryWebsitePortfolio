import '../../css/AboutSection.css'
import Profile from './Profile.tsx'
import CreateInfo from './CreatorInfo.tsx'

function AboutSection()
{
    return(
    <div id='About' className='2xl:h-[100vh] md:h-[90vh] lg:flex lg:items-center lg:flex-row lg:justify-evenly space-y-10'>
        <Profile/>
        <CreateInfo/>
    </div>)
}

export default AboutSection