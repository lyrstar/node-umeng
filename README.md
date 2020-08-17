# node-umeng
umeng

### Android Push

##### 初始化

```
const UPush = require('node-umeng');
const uPush = new UPush('appkey', 'appSecret');
```

##### 单播

```
uPush.android.unicast('title', 'body', 'pushId', options)
```

##### 列播，不超过500个

```
uPush.android.listcast('title', 'body', ['pushId1','pushId2'], options)
```

##### 广播

```
uPush.android.broadcast('title', 'body', options)
```

##### options

参数 | 说明
:---| :---
icon | 可选，状态栏图标ID，R.drawable.[smallIcon]
largeIcon | 可选，通知栏拉开后左侧图标ID，R.drawable.[largeIcon]
img | 可选，通知栏大图标的URL链接。该字段的优先级大于largeIcon
sound | 可选，通知声音，R.raw.[sound]
