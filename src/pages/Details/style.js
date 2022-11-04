import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Content = styled.div`
    padding-top: 5vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const Film = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: #dbb742;
`

export const Release = styled.h5`
    font-size: 22px;
    font-weight: 300;
    color: #dbb742;
    margin: 20px 0 40px;
`

export const Extra = styled.span`
    color: #dbb742;
`

export const Director = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
`

export const Producer = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
`

export const Opening = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
`

export const PseudoTitle = styled.p`
    color: #dbb742;
    font-size: 25px;
    margin-bottom: 15px;
`

export const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Characters = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    transition: 0.3s;
    margin: 5px 15px 5px 0;
    cursor: pointer;
    :hover {
        color: #dbb742;
    }
`

