import React ,{useState} from 'react';

import styled from 'styled-components';


const Div = styled.div `
    height:2rem;
    width:31px;
    margin-top: -38px;
    z-index:20;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;


    div {
        width:31px;
        height:3px;
        background: ${props => props.color} ;
        border-radius:10px;
        transition:all 0.3s linear;
        transform-origin: 1px;

        :nth-child(1) {
            transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0%)'};
            opacity:${(props) => props.open ? 0 : 1};
        }

        :nth-child(3) {
            transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;


const Hamburger = ( {color , activeMenu} ) => {


    return (
        <>
            <Div open={activeMenu} color={color}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
        </>
    );
};

export default Hamburger;