module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.1.10:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituanaaa',   //七牛云bucket
    AccessKey: 'S7O0wCTHwaY8AhX8HPBgzrzdpoUzBLb5l8lDGawA',   //七牛云accessKey
    SecretKey: 'K5-OmF_ao-8NV3TqSCS7bLNf4tKeD-rA4DUY1UDt',    //七牛云secretKey
    tencentkey: 'BYPBZ-GMTK3-M4R3Q-YDBJT-ZUPUJ-NSBC4',        //腾讯位置secreKey
    tencentkey2: 'BYPBZ-GMTK3-M4R3Q-YDBJT-ZUPUJ-NSBC4',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};


