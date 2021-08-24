import React from 'react';
import {HeaderContainer} from '../containers/header';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import {JumbotronContainer} from '../containers/jumbotron';
import {OptForm} from '../components';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder = 'Email Address' />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>
                        Sign up now to experience Netflix. 
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer></JumbotronContainer>
            <FaqContainer></FaqContainer>
            <FooterContainer></FooterContainer>
            
            
        </>
        
    );
}