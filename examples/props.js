
const aliyunIot = require('../lib');



const device = aliyunIot.device({
  "ProductKey": "a1ouyopKiEU",
  "DeviceName": "device6",
  "DeviceSecret": "yoyXdmII3xcT9udR1DLQRzMGjkRRtkgc"
});

device.on('connect', () => {
  console.log('>>>>>connect');
  device.postProps({
    LightSwitch: 0
  }, (res) => {
    console.log(`postProps:`,res);
  });
});
