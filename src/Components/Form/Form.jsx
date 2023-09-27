import { useEffect, useState } from "react";
import './button.css';
import mandaMSG from "../MandaMsg/MandMsg.jsx"
import './form.css';

export class ButtonData {
    constructor(nome, topic,message) {
        this.nome = nome;
        this.topic = topic;
        this.message = message;
    }
}

export const Button = ( { nome, topic, mensagem } )=> {
    return (
        <button className= 'styled-button' onClick={ ()=> mandaMSG(topic, mensagem) }> { nome } </button>
    )
}

const Form = ()=> {
    const [topicButton, setTopicButton] = useState('');
    const [messageButton, setMessageButton] = useState('');
    const [nomeButton, setNomeButton] = useState('');
    const [buttonsGenerated, setButtonsGenerated] = useState([]);
    const [formState, setFormState] = useState(false);
    let uniqueKey = 0;

    useEffect(()=> {
        const storedData = JSON.parse(localStorage.getItem('arrayBtn'));
        if(storedData) {
            setButtonsGenerated(storedData);
        }
        
    },[]);

    useEffect( ()=> {
        localStorage.setItem('arrayBtn', JSON.stringify(buttonsGenerated));
            console.log(buttonsGenerated);
    }, [buttonsGenerated]);
    

    const handleSubmit = (e) => {
        if (messageButton.length != 0 || topicButton.length != 0) {
            e.preventDefault();
            let newButton = new ButtonData(nomeButton, topicButton, messageButton);
            setButtonsGenerated([...buttonsGenerated, newButton]);
            setTopicButton('');
            setNomeButton('');
            setMessageButton('');
            setFormState(false);
            console.log("Form submetido!");
        } else {
            window.alert("Erro! Preencha os campos corretamente!");
        }
    }

    function verificaEstado() {
        if (formState) {
            document.querySelector('.container-form').style.display = "block";
        }else {
            document.querySelector('.container-form').style.display = "none"
        }
        console.log('Tá executando a função')
    }
    setTimeout(verificaEstado, 100);
    
    return(
        <div>
            <button className="styled-button button-form-state" type="button" onClick={()=> setFormState(!formState)}>Novo botão</button>
            <div className="container-form">
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="">Nome botão: </label>
                    <input type="text"
                        value={nomeButton}
                        onChange={(e) => setNomeButton(e.target.value)}
                    />
                    <label htmlFor=""> Topic: </label>
                    <input type="text"
                        value={topicButton}
                        onChange={(e) => setTopicButton(e.target.value)}
                    />
                    <label htmlFor=""> Message: </label>
                    <input type="text"
                        value={messageButton}
                        onChange={(e) => setMessageButton(e.target.value)}
                    />
                    <button type="submit">Criar botão</button>
                    <button type="button" onClick={()=> localStorage.clear()}>Limpar local storage (prod)</button>
                </form>
            </div>

            <div className="container-botoes">
                <ul className="container-lista">
                    {
                        buttonsGenerated.map( ( data )=> {
                            return (
                                <li className="each-li">
                                    <Button
                                        key={uniqueKey++}
                                        topic={data.topic}
                                        mensagem={data.message}
                                        nome={data.nome}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Form;