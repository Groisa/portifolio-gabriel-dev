import React, { useEffect, useState } from 'react';
import { AnimationEarthState, AnimationMoonState, EarthImage, Homemain, ImageMoon } from './styles';
import Rocket from '../../assets/images/rocket.png'
import Moon from '../../assets/images/lua.png'
import Earth from '../../assets/images/terra.png'
// import { Container } from './styles';
import './index.css'
const Home: React.FC = () => {

    const [animationState, setAnimationState] = useState<AnimationMoonState>({ state: undefined })
    const [animationEarth, setAnimationEarth] = useState<AnimationEarthState>({ state: undefined })
    const stars = () => {
        let count = 50;
        let cenaRocket = document.querySelector('.cenaRocket');
        if (cenaRocket) {
            cenaRocket.classList.add('cenaRocket2');
        }

        let i = 0;
        setTimeout(() => {
            while (i < count) {
                let star = document.createElement('i');
                let x = Math.floor(Math.random() * window.innerWidth);


                let duration = Math.random() * 1;
                let h = Math.random() * 100;

                if (star) {
                    star.style.left = x + 'px';
                    star.style.width = 1 + 'px';
                    star.style.height = 50 + h + 'px';
                    star.style.animationDuration = duration + 's';
                    if (cenaRocket) {
                        cenaRocket.appendChild(star);
                    }

                }
                i++
            }
        }, 1500)


    }

    useEffect(() => {

    }, [])
    const handleInitProject = () => {

        stars();
        setAnimationState({ state: 'init' })
        setTimeout(() => {
            setAnimationState({ state: 'complete' })
        }, 2000)
        setAnimationEarth({ state: 'start' })

    }

    const StartComponent: React.FC = () => {
        return (
            <div className='container'
                onClick={() => handleInitProject()}
            >
                <div className="coast">
                    <div className="wave-rel-wrap">
                        <div className="wave"></div>
                    </div>
                </div>
                <div className="coast delay">
                    <div className="wave-rel-wrap">
                        <div className="wave delay"></div>
                    </div>
                </div>
                <div className="text text-w">S</div>
                <div className="text text-a">T</div>
                <div className="text text-v">A</div>
                <div className="text text-e">R</div>
                <div className="text text-t">T</div>
            </div>
        )
    }


    return (
        <Homemain>
            <ImageMoon state={animationState.state} src={`${Moon}`} alt="imagem de lua" />
            {
                animationState.state !== 'complete' && animationState.state !== 'init' && (
                    <StartComponent />
                )
            }
            <div className="cenaRocket" >
                <div className='rocket'>
                    <img src={`${Rocket}`} alt="imagem de foquete" />
                </div>
            </div>
            <EarthImage src={`${Earth}`} state={animationEarth.state} />
        </Homemain>
    );
}

export default Home;