const android = require('./android');


class UPush {
    constructor(appkey, appSecret) {
        this.appkey = appkey;
        this.appSecret = appSecret;
        this.android = {
            unicast: android.unicast.bind(this),
            listcast: android.listcast.bind(this),
            broadcast: android.broadcast.bind(this),
        };
    }

}


module.exports = UPush;