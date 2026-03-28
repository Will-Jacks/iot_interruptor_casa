import { useState } from "react";
import { client, topic } from "../../Connection";
import "./button.css";

export default function Button() {
  const [isOn, setIsOn] = useState(true);

  function mandaMSG(topico, mensagem) {
    client.publish(topico, mensagem);
    setIsOn(!isOn);
  }
  return (
    <div className="div-button">
      <button
        className={isOn ? "active" : "inactive"}
        onClick={() => {
          mandaMSG(topic, isOn ? "Desligar luz" : "Ligar luz");
        }}
      >
        <span>{isOn ? "Ligado" : "Desligado"}</span>
        <div style={{ fontSize: "10px", opacity: 0.7 }}>
          Clique para alternar
        </div>
      </button>
    </div>
  );
}
