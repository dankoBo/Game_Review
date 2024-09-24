import styled from 'styled-components';

const S_Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const S_Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;

    @media (max-width: 1350px) {
        flex-direction: column;
        align-items: flex-start;

        & > div:nth-child(even) {
            align-self: flex-end;
        }

        & > div:nth-child(odd) {
            align-self: flex-start;
        }
    }

    @media (max-width: 768px) {
        align-items: center;

        & > div {
            align-self: center;
        }
    }
`;

export { S_Section, S_Container };
