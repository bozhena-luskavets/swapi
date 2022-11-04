import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Content = styled.div`
    padding-top: 5vh;
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const FilmList = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    text-align: left;
    left: 0;
`

export const Film = styled.div`
    margin-bottom: 50px;
    transition: 0.3s;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    :hover {
        box-shadow: #dbb742 0px 0px 7px -1px;
    }
`

export const FilmTitle = styled.h3`
    font-size: 22px;
    font-weight: 300;
    color: #dbb742;
`

export const FilmDirector = styled.p`
    color: #fff;
    margin: 20px 0;
    font-size: 16px;
    font-weight: 200;
`

export const ReleaseDate = styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 200;
`