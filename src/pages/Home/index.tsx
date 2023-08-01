import React, { useEffect } from 'react';
import { Homemain } from './styles';
import Rocket from '../../assets/images/rocket.png'
// import { Container } from './styles';
import './index.css'
const Home: React.FC = () => {
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
        }, 2250)
    }

    useEffect(() => {
        stars();
    }, [])
    return (
        <Homemain>
            <div className="cenaRocket absolut" >
                <div className='rocket'>
                    <img src={`${Rocket}`} alt="imagem de foquete" />
                </div>
            </div>
        </Homemain>
    );
}

export default Home;