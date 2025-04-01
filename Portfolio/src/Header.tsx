import './css/Header.css'

function Header()
{
    return(
    <header className="xl:px-17 lg:px-15 md:justify-end md:px-10 header-design z-1">
        <nav>
            <ul className="2xl:space-x-10 xl:space-x-7 lg:space-x-6 flex ul-design">
                <li className='li-design'><a href="#About">About</a></li>
                <li className='li-design'><a href="#Skill&Tools">Skill&Tools</a></li>
                <li className='li-design'><a href="#Project">Project</a></li>
                <li className='li-design'><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header