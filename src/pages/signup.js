import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';
import { waitForElement } from '@testing-library/react';

export default function Signup() {

    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const isInvalid = firstName === password === "" || email === "";

    const handleSignup = (event) =>{
        event.preventDefault();

        firebase    
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random()*5) + 1,

                }).then (()=>{
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setFirstname('');
                setEmail('');
                setPassword('');
                setError(error.message);

            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit = {handleSignup} method = "POST">
                        <Form.Input
                            placeholder = "First Name"
                            value = {firstName}
                            onChange = {({target}) => setFirstname(target.value)}
                        >
                        </Form.Input>

                        <Form.Input
                            placeholder = "Email Address"
                            value = {email}
                            onChange = {({target}) => setEmail(target.value)}
                        ></Form.Input>


                        <Form.Input
                            type = "password"
                            placeholder = "Password"
                            value = {password}
                            onChange = {({target}) => setPassword(target.value)}
                        ></Form.Input>

                        <Form.Submit disabled = {isInvalid} type = "submit">Sign Up</Form.Submit>

                        <Form.Text>
                            Already a member? <Form.Link to = "/signin">Sign In</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>This page uses reCAPTCHA</Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
        
    );
}
