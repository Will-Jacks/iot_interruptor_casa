import mqtt from "mqtt/dist/mqtt";
export const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");
export const topic = "emqx/esp8266/lamp";
