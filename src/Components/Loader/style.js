import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
`

const mvx = keyframes`
    0%, 10%  {transform: translate(0, 0) rotate(0deg)}
    30% {transform: translate(-50%, -50%) rotate(0deg)}
    50% {transform: translate(-50%, -50%) rotate(180deg)}
    75%, 100% {transform: translate(0, 0) rotate(180deg)}
`;

const mvrx = keyframes`
    0%, 10%  {transform: translate(0, 0) rotate(0deg)}
    30% {transform: translate(50%, 50%) rotate(0deg)}
    50% {transform: translate(50%, 50%) rotate(180deg)}
    75%, 100% {transform: translate(0, 0) rotate(180deg)}
`;

export const LoaderItem = styled.div`
    width: 47px;
    height: 47px;
    position: relative;
    background-color: var(--global-bg);


    ::before, ::after {
        content:"";
        display: block;
        border: 24px solid;
        border-color: transparent transparent #fff #fff;
        position: absolute;
        left: 0;
        top: 0;
        animation: ${mvx} 1.2s infinite ease-in;
    }

    ::before {
        border-color: #fff  #fff transparent transparent;
        animation-name: ${mvrx};
    }
`;


