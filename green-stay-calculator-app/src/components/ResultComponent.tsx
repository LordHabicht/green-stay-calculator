import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 0 auto;
`

const Circle = styled.div`
background-color: #0041a3;
height: 150px;
width: 150px;
margin: 0 auto;
border-radius: 100%;
`

const Tons = styled.h1`
color: #fff;
text-align: center;
padding-top: 38px;
margin-bottom: 0;
`

const Label = styled.p`
color: #fff;
text-align: center;
margin-top: 0;
`

export const ResultComponent = () => {

    return (
        <Wrapper>
            <Circle>
                <Tons>
                    5.2 t
                </Tons>
                <Label>
                    CO2-Output
                </Label>

            </Circle>
        </Wrapper>
    )

}