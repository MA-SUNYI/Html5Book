简易 Ionic App Html5Book 
========================

## 运行
```bash
0: 安装好Ionic 环境
1：$ npm install
2: $ bower install 
3: cd ^/Html5Book
4: ionic serve 
```

## 开发
纯粹学习Ionic所开发的小程序,使用 angular-material

## 作者
作者： 幻空使
邮箱： 976407825@qq.com

## 遇到问题
```bash
1：App图标无法修改 (1)方法试了没用,我用的是(2)方法
解决：
(1) 
ionic platform rm android
ionic platform add https://github.com/apache/cordova-android.git#master
ionic resources --icon
ionic resources --splash
(2)
ionic platform rm android
ionic platform add android
ionic resources --icon
ionic resources --splash
2：物理键返回
 $ionicHistory.goBack(); 中$ionicHistory记录缓存有问题,按返回键返回的并不是前一页面.了解$ionicHistory机制后再调整.
 当前解决我用的是：$window.history.go(-1);
```

## 提示
此程序归开发作者所以,不得用于商业用途,旨在学习交流之用!有问题请联系作者.

## 开发日志
```bash
^20161123: 之前项目全部删除
20161123: 创建项目基础框架测试
```