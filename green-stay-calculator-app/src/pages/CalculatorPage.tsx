import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import { StayItem } from '../components/StayItem';

const items = [1, 2];

type PageProps = {
    id: number;
}

export const CalculatorPage: FC<PageProps> = ({ id }): ReactElement => {
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
            <h1>Calculator Page</h1>
            {items.map((itemNumber, index) => (
                <StayItem key={itemNumber} itemNumber={itemNumber} deleteHandler={() => deleteHandler(itemNumber)} />
            ))}

            <button onClick={() => onAddStayClick()} >Add Stay</button>
            <Link to="/result">calculate</Link>
        </div >
    )
};