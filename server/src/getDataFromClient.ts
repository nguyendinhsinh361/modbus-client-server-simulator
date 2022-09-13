/* eslint-disable prettier/prettier */
export function getDataFromClient(netServer, server) {
  server.on('postWriteMultipleRegisters', function (value) {
    console.log('Write Multiple Registers:', value._body);
  });

//   let i = 0;
//   setTimeout(() => {
//     i++;
//     const data = server.holding.writeInt16BE(i) // 40001 + 8/2 = 40005 // Đoạn này không hiểu lắm
//     server.holding.writeInt16BE(i%3,10) // 40006 // Đoạn này cũng thế
//     if(i>=200) i=0;
//   }, 1000)
}