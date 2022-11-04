import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCharacterInfo } from "../../store/slices/character";
import { Character, Container, Content, Extra, Films, FilmsList, Item, Name, PseudoTitle } from "./style";

export const CharacterInfo = () => {

    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
        dispatch(fetchCharacterInfo(params.id))
    }, [])

    const reduxData = useSelector((state) => {
        return {
            list: state.characterInfo,
            isLoading: state.ui.isLoading
        }
    })

    const renderCharacterInfo = () => {
        const info = reduxData.list.data.characterInfo;
        const films = reduxData.list.data.characterFilms;

        return (
            <Character>
                <Name>{info.name}</Name>
                <Item><Extra>Height: </Extra>{info.height}</Item>
                <Item><Extra>Gender: </Extra>{info.gender}</Item>
                <Item><Extra>Hair color: </Extra>{info.hair_color}</Item>
                <Item><Extra>Weight: </Extra>{info.mass}</Item>
                <Item><Extra>Skin color: </Extra>{info.skin_color}</Item>
                <Item><Extra>Eye color: </Extra>{info.eye_color}</Item>
                <PseudoTitle>Films:</PseudoTitle>
                <FilmsList>
                    {films.map(film => {
                        return (
                            <Link to={'/film/' + film.episode_id} key={film.episode_id}>
                                <Films>
                                    {film.title}
                                </Films>
                            </Link>
                        )
                    })}
                </FilmsList>
            </Character>
        )
    }

    if (reduxData.isLoading) {
        return
    }

    return (
        <Container>
            <Content>
                {renderCharacterInfo()}
            </Content>
        </Container>
    )
}