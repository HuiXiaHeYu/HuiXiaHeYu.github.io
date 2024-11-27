---
title: 配置教程：serv00搭建vmess
createTime: 2024/05/15 11:33:32
tags:
 - VPN
permalink: /article/pp7xmy9o/
---
> 感谢秋水长天：`https://bs.openface.cc/2024/06/root-v2ray-serv00-vmess.html`

> 特别注意：本文内容仅供学习交流，严禁用于商业用途

## 登录ssh

### 获取账号密码

`前往serv00官网注册账号,之后去邮箱获取到serv00发送来的地址和账号密码`

### 登录ssh

`我这里使用powershell、也可以使用其他ssh客户端如：xshell、finalshell、windterm等`

```shell
ssh 用户名@服务器地址
# 举例
ssh name@s2.serv00.com
```

![ssh](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/202403251714060.webp)

## 开通端口、运行软件服务

`登录面板https://panel2.serv00.com`

### 开启运行软件服务

![打开额外服务](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/202403251726603.webp)

### 创建端口

==注意：==随机端口号（避免重复端口导致失败）

![创建端口](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/202403251727386.webp)

记住端口号

![记住端口号](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/202403251728890.webp)

## 安装linux版本v2ray

### 查看系统版本

`我这里返回的amd64版本`

```sh
uname -a	# 查看服务器系统
```

![image-20240903134017195](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903134017195.png)

### 下载、解压v2ray

`由于无root权限，故无法使用官方一键安装脚本，只能手动`

官网`https://github.com/v2fly/v2ray-core/releases`找到系统版本对应的v2ray的zip链接并下载

![image-20240903134458694](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903134458694.png)

```sh
cd ./domains/	# 我这边是有个domains的目录，根据你们服务器情况自行操作
mkdir v2ray	# 建议新建一个v2ray的文件夹
cd v2ray	# 进入到这个文件夹中
wget https://github.com/v2fly/v2ray-core/releases/download/v5.14.1/v2ray-freebsd-64.zip	# 选择对应系统的版本下载v2ray
unzip v2ray-freebsd-64.zip	# 解压zip包
```

## 安装和配置v2ray

### 验证安装和生成uuid

```sh
./v2ray version	# 验证版本是否能够启动【若无法启动则赋予755/777权限：chmod 755 v2ray】
# 返回：V2Ray 5.14.1 (V2Fly, a community-driven edition of V2Ray.) Custom (go1.22.0 freebsd/amd64) A unified platform for anti-censorship.
```

```sh
./v2ray uuid	# 生成uuid（一个uuid供多台设备随便使用）
curl ifconfig.me	# 获取服务器外网ip
```

### 配置config

1. inbound -> port（更改为serv00创建的端口）
2. inbound -> listen（将本地回环地址127.0.0.1更改为服务外网ip）
3. inbound -> protocol（修改为vmess协议）
4. inbound -> settings -> clients -> id（更改为v2ray生成的uuid）
5. inbound -> 加入字段streamSettings

![image-20240903135747770](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903135747770.png)

```json
// Config file of V2Ray. This file follows standard JSON format, with comments support.
// Uncomment entries below to satisfy your needs. Also read our manual for more detail at
// https://www.v2fly.org/
{
  "log": {
    // By default, V2Ray writes access log to stdout.
    // "access": "/path/to/access/log/file",

    // By default, V2Ray write error log to stdout.
    // "error": "/path/to/error/log/file",

    // Log level, one of "debug", "info", "warning", "error", "none"
    "loglevel": "warning"
  },
  // List of inbound proxy configurations.
  "inbounds": [{
    // Port to listen on. You may need root access if the value is less than 1024.
    "port": 32832,

    // IP address to listen on. Change to "0.0.0.0" to listen on all network interfaces.
    "listen": "23.144.214.71",

    // Tag of the inbound proxy. May be used for routing.
    "tag": "socks-inbound",

    // Protocol name of inbound proxy.
    "protocol": "vmess",

    // Settings of the protocol. Varies based on protocol.
    "settings": {
      //"auth": "noauth",
      //"udp": false,
      //"ip": "127.0.0.1"
      "clients":[
              {
                "id":"b5a9fb0b-8b87-51a1-83b5-33dee03f9bd6"
              }
      ]
    },

    // Enable sniffing on TCP connection.
    "sniffing": {
      "enabled": true,
      // Target domain will be overriden to the one carried by the connection, if the connection is HTTP or HTTPS.
      "destOverride": ["http", "tls"]
    },
    "streamSettings":{
            "network":"tcp"
    }
  }],
  // List of outbound proxy configurations.
  "outbounds": [{
    // Protocol name of the outbound proxy.
    "protocol": "freedom",

    // Settings of the protocol. Varies based on protocol.
    "settings": {},

    // Tag of the outbound. May be used for routing.
    "tag": "direct"
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],

  // Transport is for global transport settings. If you have multiple transports with same settings
  // (say mKCP), you may put it here, instead of in each individual inbound/outbounds.
  //"transport": {},

  // Routing controls how traffic from inbounds are sent to outbounds.
  "routing": {
    "domainStrategy": "IPOnDemand",
    "rules":[
      {
        // Blocks access to private IPs. Remove this if you want to access your router.
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      },
      {
        // Blocks major ads.
        "type": "field",
        "domain": ["geosite:category-ads"],
        "outboundTag": "blocked"
      }
    ]
  },

  // Dns settings for domain resolution.
  "dns": {
    // Static hosts, similar to hosts file.
    "hosts": {
      // Match v2fly.org to another domain on CloudFlare. This domain will be used when querying IPs for v2fly.org.
      "domain:v2fly.org": "www.vicemc.net",

      // The following settings help to eliminate DNS poisoning in mainland China.
      // It is safe to comment these out if this is not the case for you.
      "domain:github.io": "pages.github.com",
      "domain:wikipedia.org": "www.wikimedia.org",
      "domain:shadowsocks.org": "electronicsrealm.com"
    },
    "servers": [
      "1.1.1.1",
      {
        "address": "114.114.114.114",
        "port": 53,
        // List of domains that use this DNS first.
        "domains": [
          "geosite:cn"
        ]
      },
      "8.8.8.8",
      "localhost"
    ]
  },

  // Policy controls some internal behavior of how V2Ray handles connections.
  // It may be on connection level by user levels in 'levels', or global settings in 'system.'
  "policy": {
    // Connection policys by user levels
    "levels": {
      "0": {
        "uplinkOnly": 0,
        "downlinkOnly": 0
      }
    },
    "system": {
      "statsInboundUplink": false,
      "statsInboundDownlink": false,
      "statsOutboundUplink": false,
      "statsOutboundDownlink": false
    }
  },

  // Stats enables internal stats counter.
  // This setting can be used together with Policy and Api.
  //"stats":{},

  // Api enables gRPC APIs for external programs to communicate with V2Ray instance.
  //"api": {
    //"tag": "api",
    //"services": [
    //  "HandlerService",
    //  "LoggerService",
    //  "StatsService"
    //]
  //},

  // You may add other entries to the configuration, but they will not be recognized by V2Ray.
  "other": {}
}
```

### 启动并保持后台运行

```sh
nohup ./v2ray run &	# 启动并保持后台运行（输出日志放在nohup.out中，关闭ssh连接软件依旧运行）
```

### 预防服务器重启软件暴毙

```sh
nohup ~/domains/v2ray/v2ray run &	# 添加定时任务
```

![image-20240903141038062](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903141038062.png)

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903140810974.png" alt="image-20240903140810974" style="zoom: 80%;" />

## 代理软件配置

### v2ray

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/image-20240903141345293.png" alt="image-20240903141345293" style="zoom:50%;" />

### shadowrocket

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9Aserv00%E6%90%AD%E5%BB%BAvmess.assets/e1046d7dc8a435e9398d17949a2940c5.jpeg" alt="e1046d7dc8a435e9398d17949a2940c5" style="zoom: 33%;" />
