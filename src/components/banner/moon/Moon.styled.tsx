import styled from 'styled-components'

const S_Container = styled.div`
    position: absolute;
    padding: 25px;
`

const S_MoonContent = styled.div`
    background-color: #B2B2B2;
    position:relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 5px 0 10px 3px rgba(229,229,229,0.3),
                0 0 10px 2px rgba(229,229,229,0.3),
                5px 0 10px 3px rgba(229,229,229,0.3),
                0px 0 3px 2px rgba(229,229,229,0.3);

    &::after {
        content: "";
        background-color: rgba(162, 162, 162, 0.81);
        display: block;
        position: absolute;
        left:  160px;
        top:  50px;
        width: 40px;  
        height: 40px;
        border-radius:50%;
        box-shadow: 3px 0 0 1px rgba(98, 98, 98, 0.51),
                    7px 45px 0 -5px rgba(162, 162, 162, 0.9),
                    9px 45px 0 -5px rgba(100, 100, 100, 0.51),
                    35px 20px 0 -10px rgba(162, 162, 162, 0.9),
                    37px 20px 0 -10px rgba(100, 100, 100, 0.51);
    }
`

export { S_Container, S_MoonContent }