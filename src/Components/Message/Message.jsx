import { useEffect } from 'react';
import React from 'react';
import { client } from '../Connection/Connection.jsx';

import styled from 'styled-components';

const Texto = styled.h3`
  
`

export default function ExibeMsg() {
    const [messages, setMessages] = React.useState([]);

    useEffect(() => {
        client.on('message', (topic, payload, packet) => {
          setMessages(messages.concat(payload.toString()));
        });
      }, []);

    return (
        <div>
            <Texto>Mensagem recebida: {messages}</Texto>
        </div>
    )
}