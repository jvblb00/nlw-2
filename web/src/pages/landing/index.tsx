import React from 'react';
import { Link } from 'react-router-dom'

import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import studyicon from '../../assets/images/icons/study.svg'
import giveclassesicon from '../../assets/images/icons/give-classes.svg'
import purplehearticon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="content">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingimg} alt="plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyicon} alt="estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveclassesicon} alt="dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas.
                    <img src={purplehearticon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;