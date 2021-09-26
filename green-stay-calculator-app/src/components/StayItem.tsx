
import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import { StarComponent } from './StarComponent';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const arrNumbers = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'];


const Wrapper = styled.div`
    margin-top: 3em;
`
const ItemWrapper = styled.div`
    display:inline-block;
    width: 45%;
    padding-right: 2em;
`

const FirstItemWrapper = styled(ItemWrapper)`
    transform: translateY(-18px);
`

const StyledDeleteIcon = styled(DeleteIcon)`
    cursor: pointer;
    color: gray;
    transform: translateY(4px);
    &:hover {
        color: #0041a3;
    }
`
const SectionTitle = styled.h3`
    margin-bottom:0;
`

type ItemProps = {
    itemNumber: number;
    deleteHandler: Function;
}


export const StayItem: FC<ItemProps> = ({ itemNumber, deleteHandler }): ReactElement => {

    return (
        <div>
            <Wrapper>
                <SectionTitle>{arrNumbers[itemNumber]} stay {(itemNumber !== 0) && <StyledDeleteIcon fontSize="small" onClick={() => deleteHandler(itemNumber)} />}</SectionTitle>
                <FirstItemWrapper>
                    <p>In which region or land did you stay?</p>
                    <FormControl fullWidth size="small">
                        <InputLabel id="region-label">Region</InputLabel>
                        <Select
                            labelId="region-label"
                            id="region-select"
                            label="Region"
                        >
                            <MenuItem value={'Denmark'}>Denmark</MenuItem>
                            <MenuItem value={'Germany'}>Germany</MenuItem>
                            <MenuItem value={'Italy'}>Italy</MenuItem>
                            <MenuItem value={'Norway'}>Norway</MenuItem>
                            <MenuItem value={'United'}>United Kingdom</MenuItem>
                        </Select>
                    </FormControl>
                </FirstItemWrapper>
                <ItemWrapper>
                    <p>How many stars did your hotel have?</p>
                    <StarComponent />
                </ItemWrapper>
                <ItemWrapper>
                    <p>How many nights did you stay?</p>
                    <FormControl fullWidth size="small">
                        <InputLabel id="nights-label">Nights</InputLabel>
                        <Select
                            id="nights-select"
                            labelId="nights-label"
                            label="nights"
                        >
                            <MenuItem value={'1'}>1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'3'}>3</MenuItem>
                            <MenuItem value={'4'}>4</MenuItem>
                            <MenuItem value={'5'}>5</MenuItem>
                        </Select>
                    </FormControl>
                </ItemWrapper>
                <ItemWrapper>
                    <p>How many people did stay?</p>
                    <FormControl fullWidth size="small">
                        <InputLabel id="people-label">People</InputLabel>
                        <Select
                            id="people-select"
                            labelId="people-label"
                            label="People"
                        >
                            <MenuItem value={'1'}>1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'3'}>3</MenuItem>
                            <MenuItem value={'4'}>4</MenuItem>
                            <MenuItem value={'5'}>5</MenuItem>
                        </Select>
                    </FormControl>
                </ItemWrapper>
            </Wrapper>
        </div>
    )
};