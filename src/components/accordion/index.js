import React, {useState, useContext,createContext} from 'react';
import { Container, Frame, Item, Header, Title, Body, Inner } from './styles/accordion';


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

Accordion.Frame = function AccordionFrame({ children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;

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

    return <Header onClick = {() => setExpand((expand) => !expand )} {...restProps}>{children}</Header>;

};

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {expand} = useContext(ToggleContext);

    return expand ? <Body {...restProps}>{children}</Body> : null;

};