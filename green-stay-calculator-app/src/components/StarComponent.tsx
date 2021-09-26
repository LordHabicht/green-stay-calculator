import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { useState } from 'react';
import styled from 'styled-components';

const FullStar = styled(StarIcon)`
    cursor:pointer;
`
const EmptyStar = styled(StarOutlineIcon)`
    cursor:pointer;
`

const StarWrapper = styled.div`
    transform: translateY(3px);
`

export const StarComponent = React.memo(() => {

    const onStarClick = (index: number) => {
        let arr = [];
        for (let i = 0; i < stars.length; i++) {
            if (i < index + 1) {
                arr.push(true)
            }
            else {
                arr.push(false)
            }
        }
        setStars([...arr]);
    }

    const [stars, setStars] = useState([true, true, false, false, false])

    return (
        <StarWrapper>
            {stars.map((value, index) => (
                value && <FullStar key={index} onClick={() => onStarClick(index)} fontSize="large" color="primary" /> ||
                !value && <EmptyStar key={index} onClick={() => onStarClick(index)} fontSize="large" color="primary" />
            ))}

        </StarWrapper>
    )

});