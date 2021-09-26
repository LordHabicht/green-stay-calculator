
import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import { StarComponent } from './StarComponent';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const arrNumbers = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'];


const Wrapper = styled.div`
    margin-top: 3em;
`

const DeleteLink = styled.a`
    transform: translate(5px, -4px);
    position: absolute;
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
    color: gray;
    transform: translateY(8px);
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

    const region = "Germany";

    const handleChange = () => {
        console.log("change");
    }

    return (
        <div>
            <Wrapper>
                <SectionTitle>{arrNumbers[itemNumber]} stay {(itemNumber !== 0) && <DeleteLink href="" onClick={() => deleteHandler(itemNumber)}><StyledDeleteIcon fontSize="small" /></DeleteLink>}</SectionTitle>
                <FirstItemWrapper>
                    <p>In which region or land did you stay?</p>
                    <FormControl fullWidth size="small">
                        <InputLabel id="region-label">Region</InputLabel>
                        <Select
                            labelId="region-label"
                            id="region-select"
                            label="Region"
                            onChange={handleChange}
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