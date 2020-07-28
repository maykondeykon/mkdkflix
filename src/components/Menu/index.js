import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" alt="MkDkFlix" src={Logo} />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
        );
}

export default Menu;