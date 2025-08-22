---
title: 解决Pixel、Lineage等原始系统中的WIFI网络连接受限问题
createTime: 2025/08/20 17:45:38
permalink: /article/43tu8yxy/
---
## 解决Pixel、Lineage等原始系统中的WIFI网络连接受限问题

引用：[解决Pixel、Lineage等原始系统中的WIFI网络连接受限问题](https://www.cnblogs.com/leotiger/p/18308609)

原因： 自Android 5.0起，谷歌引入了Captive Portal机制， 用于检测WiFi网络认证是否正常。 该机制默认检测访问的是谷歌服务器，需要科学才能正常访问谷歌服务器，如若没有WiFi就会出现网络受限的情况， WiFi图标上会出现一个感叹号标志，导致系统不能访问网络了。

解决方法1：

使用ADB 工具，无需要root权限

adb shell settings delete global captive_portal_https_url

adb shell settings delete global captive_portal_http_url

修改一下服务器的地址：

adb shell settings put global captive_portal_http_url http://captive.v2ex.co/generate_204

adb shell settings put global captive_portal_https_url http://captive.v2ex.co/generate_204

然后切换一下飞行模式， 激活一下就好。这个服务地址也可以用小米或者华为的两个地址：

http://connect.rom.miui.com/generate_204 

or

http://connectivitycheck.platform.hicloud.com/generate_204

 

解决办法2，其实也就是1的延伸而已：

在AOSP源码中，disable captive portal service! 在AOSP目录下检索 “NetworkMonitor.java"文件

找到 mlsCaptivePortalCheckEnabled=getlsCaptivePortalCheckEnabled();

修改为： mlsCaptivePortalCheckEnabled=false;