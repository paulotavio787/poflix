import React, { useState, useEffect } from "react"
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField"
import styled from 'styled-components';
import Button from "../../../components/Button";

const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .title{
        text-align: center;
    }

    .btn{
        border-color: transparent;
        background-color: var(--primary);
        border-radius: 5px;
        width: 200px;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        color: var(--darkgray);
        text-align: center;
        margin-top: 20px;

    }

    @media (max-width: 800px) {
        .btn{
            color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background-color: transparent;
        }
    }
`;


const CadastroCategoria = () => {
    const VI = {
        nome: "",
        descrição: "",
        cor: "",
    }
    const [categorias, setC] = useState([]);
    const [values, SetVs] = useState(VI);


    function SetV(chave, valor) {
        SetVs({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infoDE) {
        SetV(
            infoDE.target.getAttribute("name"),
            infoDE.target.value
        );
    }

    useEffect(() => {
            const URL = window.location.hostname.includes("localhost") 
            ? "http://localhost:8080/categorias"
            :'https://poflix.herokuapp.com/categorias';
            fetch(URL)
                .then(async (rds) => {
                    const resposta = await rds.json();
                    setC([
                        ...resposta,
                    ]);
                })        
    }, []);

    return (
        <PageDefault>
            <Form>
                <div className="box">
                    <h1 className="title">Cadastro de Categoria: {values.nome}</h1>

                    <form onSubmit={function handleSubmit(infoDE) {
                        infoDE.preventDefault();
                        console.log("form enviado")
                        setC([
                            ...categorias,
                            values
                        ]);

                        SetVs(VI)

                    }}>
                        <div>
                            <FormField
                                label="Nome da Categoria: "
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Descrição:"
                                type="textarea"
                                value={values.descrição}
                                name="descrição"
                                onChange={handleChange}
                            />

                            <FormField
                                label="Cor:"
                                type="color"
                                value={values.cor}
                                name="cor"
                                onChange={handleChange}
                            />
                        </div>

                        <Form>
                            <Button className="btn">
                                Cadastrar
                        </Button>
                        </Form>

                    </form>

                    {categorias.length === 0 && (
                        <div>
                            loading...
                        </div>
                    )}

                    <ul>
                        {categorias.map((Categoria, indice) => {
                            return (
                                <li key={`${Categoria}${indice}`}>
                                    {Categoria.nome}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Form>
        </PageDefault>
    );
}

export default CadastroCategoria;