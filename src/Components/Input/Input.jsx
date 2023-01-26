import { useState } from "react";
import { client } from "../Connection/Connection";
import { topic } from "../Connection/Connection";

export default function Input() {
    const [mensagem, setMensagem] = useState('');
    
    function mandaInput(mensagem) {
        client.publish(topic, mensagem)
        console.log(`Mensagem: "${mensagem}" enviada para o tópico: ${topic}`);
    }

    return(
        <div>
            <label>Insira sua mensagem: &nbsp;</label>
            <input type="text" placeholder="Digite aqui" onChange={ (e)=> {
                setMensagem(e.target.value)
            }} />
            <button type="submit" onClick={()=> mandaInput(mensagem)} >Enviar mensagem</button>
        </div>
    )
}