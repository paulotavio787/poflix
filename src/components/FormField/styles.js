import styled from 'styled-components';

export const Formulario = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .ndc, 
    .cdc,
    .ddc{
        width: 100%;
        border-radius: 10px;
        border-color: transparent;
        opacity: .95;
        transition: 0.2s;
    }

    .ndc, .cdc{
        height: 50px;
    }

    .ndc, .ddc{
        height: 50px;
        font-size: 15px;
        font-weight: bold;
    }

    .ndc:hover{
        font-size: 20px;
    }

    .ddc:hover{
        font-size: 20px;
    }

    .Lab{
        padding: 10px;
    }


    .box{
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .box2{
        margin: 40px;
        min-width: 100%;
    }

`;