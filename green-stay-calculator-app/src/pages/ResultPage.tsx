import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";


type PageProps = {
    id: number;
}


export const ResultPage: FC<PageProps> = ({ id }): ReactElement => {
    /* function body */
    return (
        <div>
            <h1>Result Page</h1>
            <Link to="/">back</Link>
        </div>
    )
};