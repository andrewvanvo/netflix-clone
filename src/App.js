import React from 'react';
import { FaqContainer } from './containers/faq';
import { FooterContainer } from './containers/footer';
import {JumbotronContainer} from './containers/jumbotron';



function App() {
  return (
    <>
    <JumbotronContainer></JumbotronContainer>
    <FaqContainer></FaqContainer>
    <FooterContainer></FooterContainer>
    </>
    
  );
}

export default App;
