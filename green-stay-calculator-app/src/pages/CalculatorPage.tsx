import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import { StayItem } from '../components/StayItem';
import { Header } from '../components/Header';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Button } from '@material-ui/core';

const Footer = styled.div`
    margin: 0 auto;
`

const StyledLink = styled(Link)`
    margin-left: 50%;
    text-decoration: none;
`

const StyledButton = styled.button`
    background-color: #0041a3;
    color: #fff;
    border-radius: 6px;
    border:none;
    padding: 12px;
    transform: translateX(-50%);
    margin-top: 3em;

    &:hover {
        background-color: #0041a380;
        cursor: pointer; 
    }
`

const StyledControlPointIcon = styled(ControlPointIcon)`
    margin-right: 8px;
    margin-top: 11px;
    transform: translateY(7px);
`

const AddItemLink = styled.a`
    cursor: pointer;
`

const ItemLinkLabel = styled.span`

    &:hover {
        text-decoration:underline;
    }
`

export const CalculatorPage = (): ReactElement => {
    /* function body */
    const [items, setItems] = useState([1]);

    const onAddStayClick = () => {
        const newItems = [...items];
        newItems.push(items.length + 1);
        setItems(newItems);
    }

    const deleteHandler = (itemNumber: number) => {
        const newItems = [...items];
        newItems.splice(itemNumber, 1);
        setItems([...newItems]);
    }

    return (
        <div>
            <Header />
            {items.map((itemNumber, index) => (
                <StayItem key={index} itemNumber={index} deleteHandler={() => deleteHandler(itemNumber)} />
            ))}

            <AddItemLink onClick={() => onAddStayClick()} ><StyledControlPointIcon /><ItemLinkLabel>Add another stay</ItemLinkLabel></AddItemLink>
            <Footer>
                <StyledLink to="/result"><StyledButton>Calculate</StyledButton></StyledLink>
            </Footer>
        </div >
    )
};