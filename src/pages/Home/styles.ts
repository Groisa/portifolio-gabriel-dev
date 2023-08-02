import { styled } from "styled-components";


export const Homemain = styled.main`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(107, 6, 78, 1) 34%, rgba(0, 0, 0, 1) 93%);
    justify-content: center;
    align-items: center;
    display: flex;
    overflow: hidden !important;
`

export interface AnimationMoonState {
    state: 'init' | 'complete' | undefined;
}
export interface AnimationEarthState {
    state: 'start' | undefined;
}



export const ImageMoon = styled.img<AnimationMoonState>`
${({ state }) => state === 'init' && `
   top: 80px !important;
   
` }
    transition: 4s;
    position: fixed;
    top: -8000px;
    width: 180px;
    left: 25%;
${({ state }) => state === 'complete' && `
    top: 800px !important;
    
` }    
`
export const EarthImage = styled.img<AnimationEarthState>`
    width: 40%;
    position: fixed;
    left: 30%;
    top: 48%;
    transition: 2s;
    transform: rotate(32deg);
    ${({state}) => state === 'start' && `
        top: 800px;
    `}
    z-index: 10;
`