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
        className={isOn ? "inactive" : "active"}
        onClick={() => {
          mandaMSG(topic, isOn ? "Desligar luz" : "Ligar luz");
        }}
      >
        <span>{isOn ? "Desligado" : "Ligado"}</span>
        <div style={{ fontSize: "10px", opacity: 0.7 }}>
          Clique para alternar
        </div>
      </button>
    </div>
  );
}
