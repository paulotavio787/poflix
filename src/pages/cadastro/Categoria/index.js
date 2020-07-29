import React, {useState} from "react"
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField"

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
        const { getAttribute, value } = infoDE.target
        SetV(
            getAttribute("name"),
            value
        );
    }
    
    return(
    <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infoDE){
            infoDE.preventDefault();
            console.log("form enviado")
            setC([
               ...categorias,
               values
            ]);

            SetVs(VI)

        }}>

                <FormField 
                    tag="input"
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

        	    <FormField 
                    tag="textarea"
                    label="Descrição:"
                    type="text"
                    value={values.descrição}
                    name="descrição"
                    onChange={handleChange}
                />

                <FormField 
                    tag="input"
                    label="Cor:"
                    type="color"
                    value={values.cor}
                    name="color"
                    onChange={handleChange}
                />

            <button>
                Cadastrar
            </button>
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
    </PageDefault>
);}

export default CadastroCategoria;