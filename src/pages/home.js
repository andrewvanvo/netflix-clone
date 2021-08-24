import React from 'react';
import {HeaderContainer} from '../containers/header';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import {JumbotronContainer} from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <JumbotronContainer></JumbotronContainer>
                <FaqContainer></FaqContainer>
                <FooterContainer></FooterContainer>
            </HeaderContainer>
            
        </>
        
    );
}