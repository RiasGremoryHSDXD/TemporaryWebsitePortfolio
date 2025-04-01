import './../src/css/Footer.css'
import facebook from './../src/assets/Facebook.png'
import github from './../src/assets/GitHub.png'
import linked from './../src/assets/LinkedIn.png'

function Footer(){
    return(
        <div className="footer-container">
            <div>
                <a href="https://github.com/RiasGremoryHSDXD">
                    <img src={github} alt="github icon"/>
                </a>
                
                <a href="https://www.facebook.com/tagupa.james.christopher">
                    <img src={facebook} alt="facebook" />
                </a>

                <a href="https://www.linkedin.com/in/james-christopher-tagupa-b630b0354/">
                    <img src={linked} alt="linked" />
                </a>
            </div>

            <div>
                &copy;2025 James Tagupa
            </div>
        </div>
    )
}

export default Footer