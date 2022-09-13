/* eslint-disable prettier/prettier */
import * as Modbus from 'jsmodbus';
import * as net from 'net';

export function connectModbusTcp(host, port) {
    const MAX_DATA_COUNT = 10;
    const socket = new net.Socket()
    const client = new Modbus.client.TCP(socket);

    const options = {
        'host' : host, 
        'port' : port
    };
    socket.on('connect', function () {

    // make some calls

    // client.readCoils(0, 13).then(function (res, req) {

    // // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
    // // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>

    // console.log(res.request._body._count);
    // console.log(123)
    // }, console.error);
    const arrayTemperatureRandom = [];
    for(let i = 0 ; i < MAX_DATA_COUNT ; i++) {
        arrayTemperatureRandom.push(Math.floor(Math.random() * 60))
    }
    client.writeMultipleRegisters(0, arrayTemperatureRandom).then((res) => {
        console.log(res.request.body)
    },console.error)
    // client.readHoldingRegisters(1,9).then((res) => {
    //     console.log(res.request.body)
    //     },console.error)
    });
    // const randomTemperature = `${(Math.random() * 100).toFixed(1)}`
    // const randomHumidity = `${(Math.random() *100).toFixed(1)}`
    // const data = {
    //     options: options, 
    //     payload : {
    //         sensor: {
    //             temperature: randomTemperature,
    //             humidity: randomHumidity
    //         }
    //     }
    // };
    socket.connect(options, async () => {
        console.log('Establishing modbus connection');
    })
    return { 
        message: 'Data sent successfully'
    }
}

