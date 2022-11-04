import styled from "styled-components"
import background from '../../assets/logo.png';

export const Container = styled.div`
    margin: 10px 50px;
`

export const Logo = styled.img`
    object-fit: contain;
    height: 10vh;
    cursor: pointer;
    background: url(${background}) no-repeat;
    margin: 20px;
`