import { client, topic} from "../../Connection";
import './button.css';

export default function Button() {
    function mandaMSG(topico, mensagem) {
        client.publish(topico, mensagem)
    }

    return(
        <div className="div-button">
            <div className="button-individual">
                <button onClick={()=> {mandaMSG(topic,'Liga rele')}}>Liga quarto</button>
                <button onClick={()=> {mandaMSG(topic, 'Desliga rele')}}>Desliga quarto</button>
            </div>
            
            <div className="button-individual">
                <button onClick={()=> {mandaMSG((topic + '1'),'Liga rele')}}>Liga quarto PC</button>
                <button onClick={()=> {mandaMSG(topic + '1', 'Desliga rele')}}>Desliga quarto PC</button>
            </div>
            
        </div>
    )
}