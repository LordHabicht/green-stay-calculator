
import React, { FC, MouseEventHandler, ReactElement } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core'
import styled from 'styled-components';

const ItemWrapper = styled.div`
display:inline-block;
width: 50%;
`

type ItemProps = {
    itemNumber: number;
    deleteHandler: Function;
}


export const StayItem: FC<ItemProps> = ({ itemNumber, deleteHandler }): ReactElement => {
    /* function body */
    return (
        <div>
            <h3>{itemNumber}. stay {(itemNumber !== 1) && <a href="" onClick={() => deleteHandler(itemNumber)}>delete</a>}</h3>
            <div>
                <ItemWrapper>
                    <p>In which region or land did you stay?</p>
                    <FormControl fullWidth>
                        <Select
                            id="demo-simple-select"
                        >
                            <MenuItem value={'Germany'}>Germany</MenuItem>
                            <MenuItem value={'UK'}>UK</MenuItem>
                            <MenuItem value={'Italy'}>Italy</MenuItem>
                        </Select>
                    </FormControl>
                </ItemWrapper>
                <ItemWrapper>
                    <p>star component</p>
                    <h2>Stars</h2>
                </ItemWrapper>
                <ItemWrapper>
                    <FormControl fullWidth>
                        <Select
                            id="demo-simple-select"
                        >
                            <MenuItem value={'Germany'}>Germany</MenuItem>
                            <MenuItem value={'UK'}>UK</MenuItem>
                            <MenuItem value={'Italy'}>Italy</MenuItem>
                        </Select>
                    </FormControl>
                </ItemWrapper>
                <ItemWrapper>
                    <FormControl fullWidth>
                        <Select
                            id="demo-simple-select"
                        >
                            <MenuItem value={'Germany'}>Germany</MenuItem>
                            <MenuItem value={'UK'}>UK</MenuItem>
                            <MenuItem value={'Italy'}>Italy</MenuItem>
                        </Select>
                    </FormControl>
                </ItemWrapper>
            </div>
        </div>
    )
};