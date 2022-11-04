import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../../store/slices/filmDetails";
import { Characters, CharactersList, Container, Content, Director, Extra, Film, Opening, Producer, PseudoTitle, Release, Title } from "./style";

export const FilmDetails = () => {
    
    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
        dispatch(fetchDetails(params.id))
    }, [])


    const reduxData = useSelector((state) => {
        return {
            list: state.details,
            isLoading: state.ui.isLoading
        }
    })

    const renderFilmDetails = () => {

        const details = reduxData.list.data.details;
        const characters = reduxData.list.data.characters;

        return (
            <Film>
                <Title>{details.title}</Title>
                <Release>{details.release_date}</Release>
                <Director><Extra>Director: </Extra>{details.director}</Director>
                <Producer><Extra>Producer: </Extra>{details.producer}</Producer>
                <Opening><Extra>Opening: </Extra>{details.opening_crawl}</Opening>
                <PseudoTitle>Characters:</PseudoTitle>
                <CharactersList>
                    {characters.map(char => {
                        const id = char.url.split('/')[5];
                        return (
                            <Link to={'/character/' + id} key={id}>
                                <Characters>
                                    {char.name}
                                </Characters>
                            </Link>
                        )
                    })}
                </CharactersList>
            </Film>
        )
    }

    if (reduxData.isLoading) {
        return
    }

    return (
        <Container>
            <Content>
                {renderFilmDetails()}
            </Content>
        </Container>
    )
}
