import React from 'react';
import { Background, Container, Logo, ButtonLink } from './styles/header';
import {Link as ReactRouterLink} from 'react-router-dom'

export default function Header({background = true, children, ...restProps}){

    return(

        background ? <Background {...restProps}> {children}</Background> : children

    );
}


Header.Frame = function HeaderFrame({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    );

}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to = {to}>
            <Logo {...restProps}></Logo>
        </ReactRouterLink>
    );

}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    );
}