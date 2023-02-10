import { client, topic} from "../../Connection";
import './button.css';

export default function Button() {
    function mandaMSG(topico, mensagem) {
        client.publish(topico, mensagem)
    }

    return(
        <div className="div-button">
                <div className="button-individual">
                    <button onClick={()=> {mandaMSG(topic,'Liga rele')}}>👫🏻 💡</button>
                    <button onClick={()=> {mandaMSG(topic, 'Desliga rele')}}>👫🏻</button>
                </div>
            
                <div className="button-individual">
                    <button onClick={()=> {mandaMSG((topic + '1'),'Liga rele')}}>🖥 💡</button>
                    <button onClick={()=> {mandaMSG(topic + '1', 'Desliga rele')}}>🖥</button>
                </div>
                <div className="button-individual">
                    <button onClick={()=> {mandaMSG((topic + '12'),'Liga rele')}}>😴 💡</button>
                    <button onClick={()=> {mandaMSG(topic + '12', 'Desliga rele')}}>😴</button>
                </div>
            
        </div>
        
    )
}