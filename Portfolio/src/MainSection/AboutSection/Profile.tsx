import '../../css/Profile.css'
import profile_pic from '../../assets/Profile.png'

function Profile(){
    return(
        <div className='lg:justify-start flex justify-center items-center'>
            <img className='2xl:w-[30vw] rounded-full img-design' src={profile_pic} alt="profile_pic"/>
        </div>
    )
}

export default Profile