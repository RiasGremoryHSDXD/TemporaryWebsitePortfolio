import './../../css/ProjectSection.css'
import grammar_picker from './../../assets/Grammar-Picker.png'
import library_management_system from './../../assets/Library-Management-System.png'
import automated_grade_management_system from './../../assets/Automated-Grade-Management-System.png'
import ustp_it_department_website from './../../assets/USTP-IT-DEPARTMENT-WEBSITE.png'

function ProjectSection(){

    function project_card(image_source:any, alternative_name:string,language:string, description:string, link:string)
    {
        return(
            <div className="project-card-con transition-transform duration-300 hover:animate-pulse">
                <div className="project-card-info">
                    <img src={image_source} alt={alternative_name}/>
                    <h3>Language: {language}</h3>
                    <p>{description}</p>
                    <div className='flex justify-center items-center'>
                        <a href={link}>
                            <button>Go to Repository</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div id='Project' className="2xl:h-[100vh] flex justify-center items-center flex-col p-2 space-y-10 w-[100%]">
            <p className='lg:text-5xl md:text-4xl sm:text-3xl font-[Inclusive Sans] text-2xl'>Project</p>
            {/* <div className="w-16 h-16 bg-blue-500  animate-spin"></div> */}

            <div className='flex justify-center gap-5  flex-wrap'>
                {project_card(grammar_picker, 'Python Game', 'Python', `"Grammar Pick" is a two-player game for elementary students, where players answer grammar-related questions from four choices.`, 'https://github.com/RiasGremoryHSDXD/Grammar-Pick')}
                {project_card(library_management_system, 'Library Management System', 'Java & MySQL', `A Java desktop app for managing books, borrowing, and returns efficiently for administrators and users.`, 'https://github.com/RiasGremoryHSDXD/LibraryManagementSystem')}
                {project_card(automated_grade_management_system, 'Automated Grade Management System', 'C', 'A C program that manages student records, validates inputs, and computes grades efficiently.', 'https://github.com/RiasGremoryHSDXD/Automated-GradeManagementSystem')}
                {project_card(ustp_it_department_website, 'USTP clone website', 'HTML&CSS', 'A platform providing essential resources, updates, and information for students and faculty.', 'https://github.com/RiasGremoryHSDXD/USTP_IT_DEPARTMENT_WEBSITE?tab=readme-ov-file')}
            </div>
        </div>
    )
}

export default ProjectSection