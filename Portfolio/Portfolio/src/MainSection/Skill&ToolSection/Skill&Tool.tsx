import './../../css/Skill&Tools.css'
import idea_dark from './../../assets/Idea-Dark.png'
import java_dark from './../../assets/Java-Dark.png'
import javascript from './../../assets/JavaScript.png'
import mysql_dark from './../../assets/MySQL-Dark.png'
import php_dark from './../../assets/PHP-Dark.png'
import php_my_admin_logo from './../../assets/PhpMyAdmin_logo.png'
import pycharm_dark from './../../assets/PyCharm-Dark.png'
import python from './../../assets/Python-Dark.png'
import react_img from './../../assets/React-Dark.png'


function SkillAndTools(){
    return(
        <div id="Skill&Tools" className="2xl:h-[100vh] flex justify-center font-[Inclusive_Sans]">
            <div className='flex flex-col justify-center items-center space-y-7 '>
                <p className='2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl font-defaultFont'>Skill&Tools</p>
                <div className='skill_and_tools_img'>
                    <div className='img_container relative'>
                        <img src={idea_dark} alt="IDEA"/>
                        <div className="2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg text-[10px] box font-extrabold text-blue-700">Intelliji</div>
                    </div>
                    <div className='img_container relative'>
                        <img src={java_dark} alt="programming language"/>
                        <div className="2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg text-[10px] box font-extrabold text-blue-700">Java</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={javascript} alt="programming language"/>
                        <div className="2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg text-[10px] box font-extrabold text-blue-700">JavaScript</div>
                    </div>

                    <div className='img_container  relative'>
                        <img src={mysql_dark} alt="database" />
                        <div className="2xl:text-xl xl:text-lg lg:text-base md:text-xs box font-extrabold text-blue-700">MySQL <br/> WorkBench</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={php_dark} alt="programming language" />
                        <div className="2xl:text-2xl box font-extrabold text-blue-700">PHP</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={php_my_admin_logo} alt="database" />
                        <div className="2xl:text-xl xl:text-lg lg:text-base md:text-xs box font-extrabold text-blue-700">PhpMyAdmin</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={pycharm_dark} alt="IDEA" />
                        <div className="2xl:text-xl xl:text-lg lg:text-base md:text-xs box font-extrabold text-blue-700">PyCharm</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={python} alt="programming language" />
                        <div className="2xl:text-2xl xl:text-lg lg:text-base md:text-xs box font-extrabold text-blue-700">Python</div>
                    </div>

                    <div className='img_container relative'>
                        <img src={react_img} alt="framework" />
                        <div className="2xl:text-2xl xl:text-lg lg:text-base md:text-xs box font-extrabold text-blue-700">Reactjs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillAndTools