## 微信小程序中使用 alibabacloud-iot-device-sdk

注意: alibabacloud-iot-device-sdk 1.2.4版本以上才支持

## 小程序开发环境

详细参考：https://developers.weixin.qq.com/miniprogram/dev/

## 如何集成

##### lib下载
下载 alibabacloud-iot-device-sdk代码 [连接地址](https://github.com/aliyun/alibabacloud-iot-device-sdk)
在dist文件夹中有支持浏览器和微信或支付宝运行环境编译完成的js文件，
  - alibabacloud-iot-device-sdk.js	源码版
  - alibabacloud-iot-device-sdk.min.js 压缩版


#### 项目中集成
1：将alibabacloud-iot-device-sdk.js或alibabacloud-iot-device-sdk.min.js导入支付宝小程序工程目录 例如 放在工程目录下的dist文件夹，那么js的文件地址为 /dist/alibabacloud-iot-device-sdk.js

2：在需要使用到sdk地方
````js
// 引入包
var iot = require('/dist/alibabacloud-iot-device-sdk.js');
// 定义云端创建的设备三元组信息，并使用协议声明，使用 "protocol": 'alis://'
const sdk_device = {
  "productKey": "<your productKey>",
  "deviceName": "<your deviceName>", 
  "deviceSecret": "<your deviceSecret>",
  "protocol": 'wxs://',
} 
// 连接云平台
let device = iot.device(sdk_device);
// 当连接成功进入回调
device.on('connect', () => {
  console.log('连接成功....');
});
// 当收到云端消息下发
device.on('message', (topic, payload) => {
  console.log('topic:', topic);
  if (payload) {
    console.log('payload', payload);
    console.log('payload.toString()', payload.toString());
  }
});
// 当出现错误时回调
device.on('error', (err) => {
  console.log('error:', err);
});

// 其他更多功能参考api说明，地址：https://github.com/aliyun/alibabacloud-iot-device-sdk
````


## 特别注意，必读

1：alibabacloud-iot-device-sdk 1.2.4版本以上才支持
2: 模拟器和真机调试都可以成功连接
3：配置信任服务器地址
    日常环境可以点击ide右上角详情，勾选 “不校验合法域名、webview（业务域名）、tls版本及HTTPS证书” 选项
    线上环境必须配置信任地址， 加上productKey为 aaaaaaaabbbbbbbcccccc, cn-shanghai 那配置可信服务器地址为 aaaaaaaabbbbbbbcccccc.iot-as-mqtt.cn-shanghai.aliyuncs.com
