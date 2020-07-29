import React from "react"
import Menu from "../../../components/Menu"
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

const CadastroCategoria = () => (
    <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
            Home
        </Link>
    </PageDefault>
);

export default CadastroCategoria;