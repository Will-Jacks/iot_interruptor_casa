import { client, topic} from "../../Connection";
import './button.css';

export default function Button() {
    function mandaMSG(mensagem) {
        client.publish(topic, mensagem)
    }

    return(
        <div className="div-button">
            <button onClick={()=> {mandaMSG('Desliga rele')}}>Liga quarto</button>
            <button onClick={()=> {mandaMSG('Liga rele')}}>Desliga quarto</button>
        </div>
    )
}