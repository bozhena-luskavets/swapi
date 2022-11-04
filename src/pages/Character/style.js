import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Content = styled.div`
    padding-top: 5vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const Character = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const Extra = styled.span`
    color: #dbb742;
`

export const Name = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: #dbb742;
    margin-bottom: 15px;
`

export const Item = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin: 20px 0;
`

export const FilmsList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Films = styled.p`
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

export const PseudoTitle = styled.p`
    color: #dbb742;
    font-size: 25px;
    margin-bottom: 15px;
`