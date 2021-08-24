import React from 'react';
import {HeaderContainer} from '../containers/header';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import {JumbotronContainer} from '../containers/jumbotron';
import {OptForm} from '../components';
import { Feature } from '../components';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Movies and Shows</Feature.Title>
                    <Feature.SubTitle>Watch anywhere, anytime. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder = 'Email Address' />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>
                            Sign up now to experience Netflix. 
                        </OptForm.Text>
                </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer></JumbotronContainer>
            <FaqContainer></FaqContainer>
            <FooterContainer></FooterContainer>
            
            
        </>
        
    );
}