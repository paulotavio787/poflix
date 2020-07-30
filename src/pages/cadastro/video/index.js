import React from "react"
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import styled from 'styled-components';



const CadastroVideo = () => (
    <PageDefault>
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">
            Cadastar Categoria
        </Link>
    </PageDefault>
);

export default CadastroVideo;