import 'mqtt/dist/mqtt';
import { client } from "../../Connection";

export default function mandaMSG(topico, mensagem) {
    client.publish(topico, mensagem);
    console.log(`Enviada com sucesso!\nTópico: ${topico}, mensagem: ${mensagem}`)
;}