import React, {useState} from "react"
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField"
import styled from 'styled-components';

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

    }
`;


const CadastroCategoria = () => {
    const VI = {
        nome: "Filmes",
        descrição: "Descrição",
        cor: "#000",
    }
    const [categorias, setC] = useState([]);
    const [values, SetVs] = useState(VI);


    function SetV(chave, valor){
        SetVs({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infoDE){
        SetV(
            infoDE.target.getAttribute("name"),
            infoDE.target.value
        );
    }
    
    return(
    <PageDefault>
        <Form>
            <div>
                <h1 className="title">Cadastro de Categoria: {values.nome}</h1>

                <form onSubmit={function handleSubmit(infoDE){
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
                            className="ndc"
                            tag="input"
                            label="Nome da Categoria: "
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange}
                        />

                	    <FormField 
                            className="ddc"
                            tag="textarea"
                            label="Descrição:"
                            type="text"
                            value={values.descrição}
                            name="descrição"
                            onChange={handleChange}
                        />

                        <FormField 
                            className="cdc"
                            tag="input"
                            label="Cor:"
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </div>
                    
                    <Form>               
                        <button className="btn">
                            Cadastrar
                        </button>
                    </Form>
                
                </form>
            
                <ul>
                    {categorias.map((Categoria, indice) => {
                        return(
                            <li key={`${Categoria}${indice}`}>
                                {Categoria.nome}
                            </li>
                        );
                    })}
                </ul>
            </div>    
        </Form>
    </PageDefault>
);}

export default CadastroCategoria;