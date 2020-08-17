# node-umeng
umeng

### Android Push

##### 初始化

```
const {UPush} = require('node-umeng');
const uPush = new UPush(appkey, appSecret, {ospush, os_activity});
```

参数 | 说明
:---| :---
appkey | 必填，应用唯一标识
appSecret | 必填，App Master Secret
ospush | 可选，默认为false。当为true时，表示MIUI、EMUI、Flyme系统设备离线转为系统下发
os_activity | 可选，ospush值为true时生效，表示走系统通道时打开指定页面acitivity的完整包路径

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