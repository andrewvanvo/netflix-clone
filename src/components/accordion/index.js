import React, {useState, useContext,createContext} from 'react';
import { Container,  Item, Header, Title, Body, Inner } from './styles/accordion';


const ToggleContext = createContext();

export default function Accordion({children, ...restProps}){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>

    );
   
}

Accordion.Title = function AccordionTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;

};


Accordion.Item = function AccordionItem({ children, ...restProps}){
    const [expand, setExpand] = useState(false);

    return (
        <ToggleContext.Provider value = {{expand, setExpand}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider> 
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps}){
    
    const {expand, setExpand} = useContext(ToggleContext);

    return (
        <Header onClick = {() => setExpand((expand) => !expand )}
         {...restProps}>{children}

         {expand ? (
            <img src = './images/icons/close-slim.png' alt = 'Close'/>
            ) :(
            <img src = './images/icons/add.png' alt = 'Open' />
        )}
        </Header>
    );

};

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {expand} = useContext(ToggleContext);

    return expand ? <Body {...restProps}>{children}</Body> : null;

};