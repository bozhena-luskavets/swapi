import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFilms } from "../../store/slices/filmList";
import { Container, Content, Film, FilmDirector, FilmList, FilmTitle, ReleaseDate } from "./style";

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state.films.list,
            isLoading: state.ui.isLoading
        }
    })

    const renderFilmList = () => {
        const films = reduxData.list;

        return films.map((film, index) => {
            return (
                <FilmList key={index}>
                    <Link to={'/film/' + film.episode_id}>
                        <Film key={index}>
                            <FilmTitle>{film.title}</FilmTitle>
                            <FilmDirector>{film.director}</FilmDirector>
                            <ReleaseDate>{film.release_date}</ReleaseDate>
                        </Film>
                    </Link>
                </FilmList>
            )
        })
    }

    if (reduxData.isLoading) {
        return
    }

    return (
        <Container>
            <Content>
                {renderFilmList()}
            </Content>
        </Container>
    )
}