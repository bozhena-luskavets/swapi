import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from "../../assets/logo.png";
import { Loader } from '../Loader';
import { Container, Logo } from './style';

export const Header = () => {

    const state = useSelector(state => {
        return {
            isLoading: state.ui.isLoading
        }
    })

    return (
        <Container>
            <Link to={'/'}>
                <Logo src={image}/>
            </Link>
            
            {state.isLoading && <Loader />}
        </Container>
    )
}

