---
title: Mac显示器适配
createTime: 2025/06/28 17:58:35
permalink: /notes/others/6l59jimp/
---
> 借鉴：https://zhuanlan.zhihu.com/p/205279615

买了个2k显示屏当扩展屏，没想到不开启HIDPI，导致2560\*1440分辨率字体很小，而1080\*1921字体会糊，所以得找个办法强制开启HIDPI

普遍办法：安装RDM工具，在手动配置

高效办法：本文

1. 关闭SIP[防止用户篡改系统文件的保护机制]

```sh
关机
解锁密码手指长摁开机键直至进入recovery模式
进入桌面->实用工具->终端
csrutil status	# 查看sip状态
csrutil disable	# 关闭sip
```

2. 使用sh脚本进行更改

```sh
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

根据提示输入编号进行更改

![img](./Mac%E6%98%BE%E7%A4%BA%E5%99%A8%E9%80%82%E9%85%8D.assets/v2-56e38d4c067b500dcb848bdc75eca55e_1440w.jpg)

3. 更改完成，进入系统设置->显示器->显示所有分辨率，使用HIDPI模式

<img src="./Mac%E6%98%BE%E7%A4%BA%E5%99%A8%E9%80%82%E9%85%8D.assets/image-20250628190340699.png" alt="image-20250628190340699" style="zoom:67%;" />

4. 关闭sip

```sh
开启sip的同样步骤，最后命令设置开启
csrutil enable
```
