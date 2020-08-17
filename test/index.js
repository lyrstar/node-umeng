const {UPush} = require('../index');
const uPush = new UPush('appkey', 'appSecret');

unicast().then();
broadcast().then();

async function unicast() {
    let result = await uPush.android.unicast('title', 'body', 'pushId')
    console.log(result);
}

async function broadcast() {
    let result = await uPush.android.broadcast('title', 'body')
    console.log(result);
}
