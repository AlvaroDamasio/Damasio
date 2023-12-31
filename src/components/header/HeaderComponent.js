import { useLayoutEffect } from "react"
import "./header.css"
import { gsap } from "gsap"


export default function Header(){
    useLayoutEffect(()=>{
        gsap.fromTo('.projetos', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },0.5)

        gsap.fromTo('.name', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },0.8)

        gsap.fromTo('.contato', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },1)

        gsap.fromTo('.header-container', {
            scaleX: 0,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            scaleX: 1,
            ease: "Power1.easeInOut"
        },0.3)


    })


    return(
        <div className = "header-container">
            <nav>
                <a>
                    <h1>
                        ÁLVARO
                    </h1>
                </a>
                <ul>
                <li className="name">
                        <a href="#">
                            Home
                        </a>                  
                    </li>
                    <li className="name">
                        <a href="#">
                            Projetos
                        </a>                  
                    </li>

                    <li className="contato">
                        <a href="#">Contato</a>
                    </li>
                </ul>
                <div className="button">
                    <a href="https://www.linkedin.com/in/alvaro-damasio-938890224/?originalSubdomain=br">
                        FALE COMIGO
                    </a>
                    
                </div>

                
            </nav>
        </div>
    )
}