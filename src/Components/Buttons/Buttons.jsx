import { client } from "../Connection/Connection";
import styled from "styled-components";

const ButtonStyled = styled.button`
    width:150px;
    height:100px;
    margin: 0 20px 20px 0;
`

export default function Button() {
    const topico = "WILL/teste";

    function mandaMSG(mensagem) {
        client.publish(topico, mensagem)
    }

    return(
        <div>
            <ButtonStyled onClick={()=> {mandaMSG('Desliga rele')}}>Liga quarto PC</ButtonStyled>
            <ButtonStyled onClick={()=> {mandaMSG('Liga rele')}}>Desliga quarto PC</ButtonStyled>
            {/* <div>
                <ButtonStyled onClick={()=> {mandaMSG('Liga branco')}}>On Branco</ButtonStyled>
                <ButtonStyled onClick={()=> {mandaMSG('Desliga branco')}}>Off branco</ButtonStyled>
            </div>
            <div>
                <ButtonStyled onClick={()=> {mandaMSG('Liga vermelho')}}>On vermelho</ButtonStyled>
                <ButtonStyled onClick={()=> {mandaMSG('Desliga vermelho')}}>Off vermelho</ButtonStyled>
            </div> */}
        </div>
    )
}