import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import { Header } from '../components/Header';


type PageProps = {
    id: number;
}


export const ResultPage: FC<PageProps> = ({ id }): ReactElement => {
    /* function body */
    return (
        <div>
            <Header />
            <Link to="/">back</Link>
        </div>
    )
};