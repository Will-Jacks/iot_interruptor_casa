import mqtt from 'mqtt/dist/mqtt';
export const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
export const topic = 'WILL/teste';