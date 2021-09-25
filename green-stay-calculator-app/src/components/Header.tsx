import styled from 'styled-components';

export const Header = () => {

    const CenteredHeader = styled.div`
        text-align:center;
        line-height: 0.7;
        color: #0041a3;
        margin-bottom: 4em;
    `

    return (
        <CenteredHeader>
            <h1>Green Stay Calculator</h1>
            <p>Calculate your CO2 balance</p>
        </CenteredHeader>
    )

}