---
title: Web逆向
createTime: 2024/04/16 11:33:32
tags:
 - Crack
permalink: /article/ferb9lv0/
---
## 常见加密算法

### md5

| 方法             | 解释     |
| ---------------- | -------- |
| .encode('utf-8') | 转字节码 |
| .hexdigest()     | 转16进制 |

```py
from hashlib import md5

# 1.不加盐
obj = md5()
# 2.加盐
obj = md5('盐'.encode("utf-8"))  

obj.update("明文".encode("utf-8"))
bs = obj.hexdigest()	
print(bs)
```

```py
from hashlib import sha1, sha256
# 1.不加盐
sha = sha256()
# 2.加盐
sha = sha256('盐'.encode("utf-8"))

sha.update('明文'.encode("utf-8"))
print(sha.hexdigest())
```

### URL编码

```py
from urllib.parse import quote, urlencode
from urllib.parse import unquote

# 1.编码字符串
print(quote('米饭怎么吃'))  # %E7%B1%B3%E9%A5%AD%E6%80%8E%E4%B9%88%E5%90%83
print(quote('米饭怎么吃', encoding="gbk")) # %C3%D7%B7%B9%D4%F5%C3%B4%B3%D4

# 2.编码字典
dic = {
    "wq": "米饭怎么吃",
    "new_wq": "想怎么吃就怎么吃"
}
print(urlencode(dic))
print(urlencode(dic, encoding="utf-8"))  # 也可以指定字符集

# 3.解码
print(unquote("http://www.baidu.com/s?wd=%E5%A4%A7%E7%8E%8B"))  
# http://www.baidu.com/s?wd=大王
```

### base64编码

`b64字符串长度为4的倍数，不是的话就会报错（Incorrect padding）`

```py
import base64

# 编码：字节->b64字符串
print(base64.b64encode("我要吃饭".encode("utf-8")).decode())

# 解码：b64字符串->成字节
print(base64.b64decode("5oiR6KaB5ZCD6aWt").decode("utf-8"))
```

#### b64长度手动填充

```py
import base64

s = "ztKwrsTj0b0"
s += ("=" * (4 - len(s) % 4))
print("填充后", s)
bb = base64.b64decode(s).decode("gbk")
print(bb)
```

### 对称加密

####  AES

1. 加密

```python
"""
长度
    16: *AES-128*
    24: *AES-192*
    32: *AES-256*
    
MODE 加密模式. 
    常见的ECB, CBC
    以下内容来自互联网~~
    ECB：是一种基础的加密方式，密文被分割成分组长度相等的块（不足补齐），然后单独一个个加密，一个个输出组成密文。
    CBC：是一种循环模式，前一个分组的密文和当前分组的明文异或或操作后再加密，这样做的目的是增强破解难度。
    CFB/OFB：实际上是一种反馈模式，目的也是增强破解的难度。
    FCB和CBC的加密结果是不一样的，两者的模式不同，而且CBC会在第一个密码块运算时加入一个初始化向量。
"""
from Crypto.Cipher import AES

key = b'key1'
IV = b"0102030405060708"

aes = AES.new(key, mode=AES.MODE_CBC, IV=IV)
data = "明文"
data_bs = data.encode("utf-8")

# 需要加密的数据必须是16的倍数
# 填充规则: 缺少数据量的个数 * chr(缺少数据量个数)
pad_len = 16 - len(data_bs) % 16
data_bs += (pad_len * chr(pad_len)).encode("utf-8")

bs = aes.encrypt(data_bs)	# 加密明文

print(bs)
```

2. 解密

```python
from Crypto.Cipher import AES

aes = AES.new(b"alexissbalexissb", mode=AES.MODE_CBC, IV=b"0102030405060708")
# 密文
bs = b'\xf6z\x0f;G\xdcB,\xccl\xf9\x17qS\x93\x0e'
result = aes.decrypt(bs)  # 解密
print(result.decode("utf-8"))
```

#### DES

1. 加密

```python
# DES加密解密
from Crypto.Cipher import DES

# key: 8个字节
des = DES.new(b"alexissb", mode=DES.MODE_CBC, IV=b"01020304")
data = "我要吃饭".encode("utf-8")
# # 需要加密的数据必须是16的倍数
# # 填充规则: 缺少数据量的个数 * chr(缺少数据量个数)
pad_len = 8 - len(data) % 8
data += (pad_len * chr(pad_len)).encode("utf-8")

bs = des.encrypt(data)
print(bs)
```

2. 解密

```python
# 解密
des = DES.new(key=b'alexissb', mode=DES.MODE_CBC, IV=b"01020304")
data = b'6HX\xfa\xb2R\xa8\r\xa3\xed\xbd\x00\xdb}\xb0\xb9'

result = des.decrypt(data)
print(result.decode("utf-8"))
```

### 非对称加密

`公钥加密（发送端），私钥解密（接收端）；`

#### RSA

1. 创建公钥和私钥

   ```py
   from Crypto.PublicKey import RSA
   from Crypto.Cipher import PKCS1_v1_5
   from Crypto import Random
   import base64
   
   # 随机
   gen_random = Random.new
   
   # 生成秘钥
   rsakey = RSA.generate(1024)
   with open("rsa.public.pem", mode="wb") as f:
       f.write(rsakey.publickey().exportKey())
   
   with open("rsa.private.pem", mode="wb") as f:
       f.write(rsakey.exportKey())
   ```

2. 加密

   ```py
   data = "我要吃饭了"
   with open("rsa.public.pem", mode="r") as f:
       pk = f.read()
       rsa_pk = RSA.importKey(pk)
       rsa = PKCS1_v1_5.new(rsa_pk)
   
       result = rsa.encrypt(data.encode("utf-8"))
       # 处理成b64方便传输
       b64_result = base64.b64encode(result).decode("utf-8")
       print(b64_result)
   ```

3. 解密

   ```py
   data = "e/spTGg3roda+iqLK4e2bckNMSgXSNosOVLtWN+ArgaIDgYONPIU9i0rIeTj0ywwXnTIPU734EIoKRFQsLmPpJK4Htte+QlcgRFbuj/hCW1uWiB3mCbyU3ZHKo/Y9UjYMuMfk+H6m8OWHtr+tWjiinMNURQpxbsTiT/1cfifWo4="
   # 解密
   with open("rsa.private.pem", mode="r") as f:
       prikey = f.read()
       rsa_pk = RSA.importKey(prikey)
       rsa = PKCS1_v1_5.new(rsa_pk)
       result = rsa.decrypt(base64.b64decode(data), gen_random)
       print(result.decode("utf-8"))
   ```

## Javascript学习【少部分html】

`基础语法不再多说，这里仅介绍进阶内容`

### 双等于和三等于号

|      |                            |
| ---- | -------------------------- |
| ==   | 判断值是否一致             |
| ===  | 判断值和数据类型是否都一致 |

### 数组遍历

```js
var arr = [1,2,3,4,5]
arr.forEach(function(item){
    console.log(item)
})
```

### 对象

`数组、函数均为对象`

```js
// 声明对象
var p={
    name:'汪峰',
    age:18,
    wife:'章子怡',
    chi:function(){
        console.log("吃饭")
    }
}
// 对象使用方法
// 法一：
console.log(p['name'])
// 法二：
console.log(p.name)
console.log(p.wife)
// 对象中函数的使用
console.log(p.chi())
```

### 函数

```js
function 函数名(形参){
	console.log(形参)
}
函数名(实参)
```

#### 自启动函数

```js
(function(){代码})()
```

#### 闭包【可放置加密函数】

`为了保护多js文件的变量冲突问题`

```js
var jiami = (function (){
    let key = '10086'
    return function (data) {
        let encrypted_data = data + key + '1' //加密代码
        return encrypted_data
    }
})()
```

#### 返回对象给变量

```js
c=(function() {
    var m = {
        name: 'alex',
        age: '18',
        xijiao: function (a) {
            console.log(a + "来帮我洗脚")
        }
    }
    return m
})()
console.log(c.name)
c.xijiao("沛济")
```

#### 示例：加密函数

##### 简单示例：

1. html代码

   ```html
   <!DOCTYPE html>
   <html lang="zh">
   <head>
       <meta charset="UTF-8">
       <title>HTML练习</title>
   
       <script src = './demo.js'></script>
       <script>
           console.log(jiami('胡辣汤'))
       </script>
   </head>
   <body>
   </body>
   </html>
   ```

2. js代码

   ```js
   // 写法一：
   var jiami = (function (){
       let key = '10086'
       let encry = function (data){
           let encrypted_data = data + key + '1' //加密代码
           return encrypted_data
       }
       return encry
   })()
   // 写法二：
   var jiami = (function (){
       let key = '10086'
       return function (data) {
           let encrypted_data = data + key + '1' //加密代码
           return encrypted_data
       }
   })()
   ```

##### 加密嵌套：

1. html代码

   ```html
   <!DOCTYPE html>
   <html lang="zh">
   <head>
       <meta charset="UTF-8">
       <title>HTML练习</title>
   
       <script src = './demo.js'></script>
       <script>
           console.log(jiami.md5('胡辣汤'))
       </script>
   
   </head>
   <body>
   </body>
   </html>
   ```

2. js代码

   ```js
   var jiami = (function (){
       let process = function(data) {
           console.log("处理一下这个数据" + data)
           return data + "处理完毕"
       }
       let key = '10086'
       return {
           rsa:function (data) {
               let encrypted_data = process(data) + key + '1' //加密代码
               return encrypted_data
           },
           aes:function (data) {
               let encrypted_data = process(data) + key + '1' //加密代码
               return encrypted_data
           },
           sha1:function (data) {
               let encrypted_data = process(data) + key + '1' //加密代码
               return encrypted_data
           },
           md5:function (data) {
               data = this.rsa(data)
               let encrypted_data = process(data) + key + '1' //加密代码
               return encrypted_data
           },
           base64:function (data) {
               let encrypted_data = process(data) + key + '1' //加密代码
               return encrypted_data
           },
       }
   })()
   ```

   

### Javascript进阶

#### 定时器

```js
// 1秒后弹窗
var c = setTimeout(function(){
    alert('你好')
},5000)
window.clearTimeout(c)
//间隔1秒输出你好
var c = setInterval(function(){
    console.log('你好')
},1000)
window.clearInterval(c)
```

#### 时间

```js
var d=new Date();//获取系统时间
var d=new Date("2018-12-01 15:32:48");//得到-个具体时间
//1.时间格式化
year=d.getFullYear();//拿到年份
month=d.getMonth()+1;//拿到月份，注意月份从O开始
date=d.getDate();//拿到日期
hour=d.getHours();//拿到小时
minute=d.getMinutes();//分钟
seconds=d.getSeconds();//秒
format_date=year +"-"+month +"-"+date +" "+hour +":"+minute +":"+seconds;
console.log(format_date)
//2.时间戳（表示从1970-1-100：00：00到现在一共经过了多少毫秒）
console.log(d.getTime())
```

#### eval函数

- 参数：字符串
- 返回值：参数代码（可能有混淆）执行

#### 解密

1. 把eval中的内容复制到浏览器console中，并执行

   ```js
   var mmm = 复制的内容
   mmm
   ```

2. 找个eval参数解析网站并解密
   `(https://tools.jb51.net/password/evalencode`

#### JS类

```js
function Person(name, age) {
    // this表示当前人。相当于self，但是self可更改为其他，this为关键字
    // 属性
    this.name = name;
    this.age = age;
    // 动作
    this.chi = function (fan) {
        console.log(this.name + "在吃" + fan)
    }
}

p1 = new Person("张无忌", 18);
p2 = new Person("赵敏", 16);

```

#### prototype【增加功能】

```js
// 例一：
function Person(name, age) {
    // this表示当前人。相当于self，但是self可更改为其他，this为关键字
    // 属性
    this.name = name;
    this.age = age;
    // 动作
    this.chi = function (fan) {
        console.log(this.name + "在吃" + fan)
    }
}
p2 = new Person("赵敏", 16);
Person.prototype.study = function (object){
    console.log(this.name + '在学《' + object + '》')
}
p2.study("吴佩琪的脑袋");
// 例二：
Date.prototype.format = function(){
    console.Log("给内置函数Data增加的格式化新功能“)
}
```

### Html交互

#### 事件类型

```
click			点击事件 
focus			获取焦点 
blur			失去焦点 
submit			提交表单 
change			更换选项 
scroll			滚动条滚动 
mouseover		鼠标滑过 
mouseout		鼠标滑出 
mousemove		鼠标滑动
```

#### 获取句柄方法

- 利用id
  `document.getElementById();`
- 利用class值
  `document.getElementsByClassName();`

#### 登录案例

1. html

   ```html
   <form action="服务器地址" id="login_form">
       <label for="username">用户名:</label><input type="text" name="username" id="username"><span id="username_info"></span><br/>
       <label for="password">密码:</label><input type="text" name="password" id="password"><span id="password_info"></span><br/>
       <input type="button" id="btn" value="点我登录">
   </form>
   ```

2. js

   ```js
   <script>
       // 在页面加载的时候
       window.onload = function(){
           document.getElementById('btn').addEventListener("click", function(){
   
               // 清空提示信息
               document.getElementById('username_info').innerText = ""; 
               document.getElementById('password_info').innerText = "";
   
               let username = document.getElementById('username').value;  // 获取username标签中的value属性
               let password = document.getElementById('password').value;  // 获取密码
               let flag = true;  // 最终是否可以提交表单?
               if(!username){
                   document.getElementById('username_info').innerText = "用户名不能为空";
                   flag = false;
               }
   
               if(!password){
                   document.getElementById('password_info').innerText = "密码不能为空";
                   flag = false;
               }
   
               if (flag){
                   document.getElementById('login_form').submit();
               }
           })
       }
   </script>
   ```

   

## 抓包工具（Charles）

### 下载安装

1. 下载
   `https://www.charlesproxy.com/latest-release/download.do`
2. 安装后破解
   `https://www.zzzmode.com/mytools/charles/`
3. 设置根证书【安装证书->本地计算机->下一步->将所有证书放入下列存储->浏览->受信任的证书颁发机构】
   ![image-20240619011046581](./Web%E9%80%86%E5%90%91.assets/image-20240619011046581.png)
4. SSL代理【Enable SSL Proxying->include->add->看图设置->ok】
   ![image-20240619011344090](./Web%E9%80%86%E5%90%91.assets/image-20240619011344090.png) ![image-20240619011614521](./Web%E9%80%86%E5%90%91.assets/image-20240619011614521.png)拦截请求并修改数据包



### 拦截请求-修改

![image-20240619011703166](./Web%E9%80%86%E5%90%91.assets/image-20240619011703166.png)

![image-20240619011711204](./Web%E9%80%86%E5%90%91.assets/image-20240619011711204.png)

### 重放请求

![image-20240619125553066](./Web%E9%80%86%E5%90%91.assets/image-20240619125553066.png)

## Pyexecjs库

`pip install pyexecjs`

### 代码模板

```py
import execjs

def decry(解密函数的参数1,解密函数的参数2)
    with open('./decrypte.js','r',encoding='utf-8') as f:
        return execjs.compile(f.read()).call('解密函数',f'解密函数的参数1,解密函数的参数2')
```

## 调试大法

### 侧边栏搜索

`侧边栏搜索关键词`

目的：查看参数来自上几个请求返回

![image-20240619021009921](./Web%E9%80%86%E5%90%91.assets/image-20240619021009921.png)

### 全局搜索（ctrl+shift+f）

全局搜索参数关键词->重点找js文件下断点分析->找不到也可去html看看

![image-20240619021110246](./Web%E9%80%86%E5%90%91.assets/image-20240619021110246.png)

### 跟栈查找

- 请求参数加密：看ajax请求的前一段代码
- 响应内容加密：看send后的内容/最后一条函数后的内容

1. (anonymous)：匿名函数（闭包）
2. 函数调用顺序：自下而上

![image-20240619144546868](./Web%E9%80%86%E5%90%91.assets/image-20240619144546868.png)

1. 请求的initiator![image-20240619021444386](./Web%E9%80%86%E5%90%91.assets/image-20240619021444386.png)
2. 断到请求的回调函数（call stack）（用来溯源：找调用关系）![image-20240619021347942](./Web%E9%80%86%E5%90%91.assets/image-20240619021347942.png)

## 笔记本

### 网易云音乐

#### 分析：

1. 下断点-略去weblog活动日志请求，找到v1请求
2. 跟栈向下查找直至params未被加密（这是个请求构建函数），则加密内容在最后一个加密请求中![1718791603409](./Web%E9%80%86%E5%90%91.assets/1718791603409.jpg)![image-20240619175937125](./Web%E9%80%86%E5%90%91.assets/image-20240619175937125.png)
3. 进入最后一个加密函数后下断点看看加密过程![image-20240619181224287](./Web%E9%80%86%E5%90%91.assets/image-20240619181224287.png)e0x的query项为刚刚未加密函数的内容。跳过NET.X函数发现内容无变化（NET.X函数没用)![image-20240619181745646](./Web%E9%80%86%E5%90%91.assets/image-20240619181745646.png)X0x.indexOf("?")为索引X0x的位置，结果为-1（下面的if中第一个if (mt2x != -1)判断不成立)。if中无变量赋值操作，过掉继续看![image-20240619182515360](./Web%E9%80%86%E5%90%91.assets/image-20240619182515360.png)下面的两个if判断成立，从e0x赋值到i0x。过掉继续看![image-20240619182810660](./Web%E9%80%86%E5%90%91.assets/image-20240619182810660.png)进入t0x.g01x()函数发现从document.cookie拿到了__csrf赋值给csrf_token。但此时未登录，所以赋值的csrf_token为空。继续往下看![image-20240619183352860](./Web%E9%80%86%E5%90%91.assets/image-20240619183352860.png)![image-20240619183630806](./Web%E9%80%86%E5%90%91.assets/image-20240619183630806.png)X0x.replace("api", "weapi")将url中的api换为weapi；e0x.method设置e0x请求为post方法；删除e0x的query对象；此时发现e0x的格式加上i0x的数据即为ajax方法![image-20240619184250645](./Web%E9%80%86%E5%90%91.assets/image-20240619184250645.png)执行==window.asrsea()函数==后赋值给bVi2x；
   将bVi2x的内容赋值给e0x的数据部分【此前已有请求类型等ajax方法内容】
   此时我们便找到了params、encSecKey的内容【歌曲数据的请求参数】
   ![image-20240619185042902](./Web%E9%80%86%E5%90%91.assets/image-20240619185042902.png)![image-20240619185547807](./Web%E9%80%86%E5%90%91.assets/image-20240619185547807.png)
4. 控制台执行window.asrsea()函数参数发现均为常量并且无变化
   ![image-20240619185949510](./Web%E9%80%86%E5%90%91.assets/image-20240619185949510.png)
5. 解析window.asrsea()函数
   1. a()函数返回值由随机值组成![image-20240619192431923](./Web%E9%80%86%E5%90%91.assets/image-20240619192431923.png)
      ![image-20240619192317142](./Web%E9%80%86%E5%90%91.assets/image-20240619192317142.png)
   2. AES加密（CBC模式）
      ![image-20240619194919268](./Web%E9%80%86%E5%90%91.assets/image-20240619194919268.png)
   3. 网易自研算法，因调用参数为（随机值、固定值、固定 值）。所以可直接复用结果![image-20240619195147059](./Web%E9%80%86%E5%90%91.assets/image-20240619195147059.png)

#### 代码

```py
import requests
import json
from Crypto.Cipher import AES
import base64
# from rich import print


def aes_encrypt(data, key):
    # -----------1.处理data----------------------
    data_bs = data.encode("utf-8")
    # 需要加密的数据必须是16的倍数，不足需要填充
    pad_len = 16 - len(data_bs) % 16
    # 填充规则: 缺少数据量的个数 * 缺少数据量个数对应的ascii
    data_bs += (pad_len * chr(pad_len)).encode("utf-8")
    # -----------2.创建aes对象-------------------
    aes = AES.new(key.encode('utf-8'), mode=AES.MODE_CBC, IV=b'0102030405060708')
    # -------------3.加密-----------------------
    bs = aes.encrypt(data_bs)
    s = base64.b64encode(bs).decode("utf-8")  # 字节编码为base64再转为字符串
    return s


def encrypt(song_id):
    param1 = {
        'csrf_token': "",
        'encodeType': "aac",
        'ids': f"[{song_id}]",  # 歌曲id
        'level': "standard"
    }
    param2 = '010001'
    param3 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    param4 = '0CoJUm6Qyw8W8jud'

    h = {}
    i = 'YTGHEPXFawaCcFkw'  # 固定随机值a(16)
    encText = aes_encrypt(json.dumps(param1), param4)
    encText = aes_encrypt(encText, i)
    # h.encSecKey中c(i, e, f)
    # i：固定随机值【与歌曲id信息等无关】，e：固定值（param2），f：固定值（param3）
    # 注意：与随机固定值对应
    encSecKey = "7e223fd6adbc958b9e38feefa6d8123a5f554eb962b5a597043a39fed5f3b4076ef27e7a44b2abcf9cd2e6309f4e3a903e483679d95274f7ef0510a7e3c4b2ede515b7e231225426be3a9e2c9578723886caad603bc2acd05b81f5be0e7862fb897a7ae33d2f89252c557385bfeda2f8adbad70038bae901f18a629273fa7da3"

    return encText, encSecKey


if __name__ == '__main__':
    encText, encSecKey = encrypt(461257827)
    # print(encText)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    }
    url = requests.post('https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=', data={
        'params': encText,
        'encSecKey': encSecKey
    }).json()['data'][0]['url']
```

### 艺恩电影数据

`https://www.endata.com.cn/BoxOffice/BO/Year/index.html`

#### 分析:

![image-20210907164633235](./Web%E9%80%86%E5%90%91.assets/image-20210907164633235.png)

很明显, 该网站的数据是经过加密的. 接下来. 我们到Initiator里看看. 

<img src="./Web%E9%80%86%E5%90%91.assets/image-20210907164735018.png" alt="image-20210907164735018" style="zoom:50%;" />

![image-20210907164858074](./Web%E9%80%86%E5%90%91.assets/image-20210907164858074.png)

<img src="./Web%E9%80%86%E5%90%91.assets/image-20210907165246405.png" alt="image-20210907165246405" style="zoom:50%;" />

<img src="./Web%E9%80%86%E5%90%91.assets/image-20210907165539435.png" alt="image-20210907165539435" style="zoom:50%;" />

#### 代码：

```python
import binascii  # 二进制和ascii之间转换
from Crypto.Cipher import DES

def func(a, b, c):
    if b == 0:
        return a[c:]
    d = a[:b] + a[b+c:]
    return d


def process(data):
    e = int(data[len(data)-1], base=16) + 9
    f = int(data[e], base=16)
    data = func(data, e, 1)
    e = data[f:f+8]
    data = func(data, f, 8)
    jiemi(data, str(e), str(e))


def jiemi(data, key, iv):

    des = DES.new(key.encode("utf-8"), mode=DES.MODE_ECB)
    # de_text = base64.standard_b64decode(data)
    #              十六进制表示的二进制数据 -> 十六进制 -> 二进制
    print(binascii.a2b_hex(data))
    ee = des.decrypt(binascii.a2b_hex(data))
    print(ee.decode("utf-8"))


if __name__ == '__main__':
    data = """BB95CA71E232FD88B71C758B19BDDDCB2BCF1E7ACCDC3B8777E875407841A1CE202F0F0028269913ADDA6050FED043DC8656C0F9FB3364603D5FB9C3B361B750AA36C06FC5500480DC8B3A1E0A994600FC0CEF28AF89450FC46C6E078FF9D3AA063D0303BE4A7CC74A3C70516ACE9F8944D7540071DF7DE33DB23B02B5A76D6AF455117F429EA2926F52C76F69CB9317F644A93A80D43FDB778C5E5B619578CBA12D958DE67163EFA55E1DB4C28D3D541FB7A4C426E2B592399B08BD67A3A4A23A953620B07EA643D69E6C1E93E8FB1971F9B95F4A71201149F60EBF38B3B86C042D786710415370A8514FC981E85B5D3C5198ACB740232AB600EF42623AA67703D9E43755F11E8B8DB2B3F5BCF8E833CA1DE7C1FC5DE615B949F421A16077DC964E4080795A37CE998736638753D181CD5D4B09FCB28F1671837114A55BCEC34F3905E9266B17B8C0B1C958F7BC245F5360937F4C3FA97DA9396A4B94E16CFCFA6C190B7527EC4E5DAD68C7C2641FCFAA93064487EE495A3BA567747EA8B1A504B45C2D186A661A66A287790959BB63321C3EFC500A3EEE7C0B5488149D960235C8A1751E2F3995DF11689353FFB4F92EE1B2A9ED66D12AE8DDC8AAE8CC120BBA64D93AA7C041BB6B5B1F752386E3B26ED20CC564C9BA498BE1FE0EEC80DA48DEA7CD92A52EA4764B55FB2FDAB5CF4D680B3E428C5C002AD0A12EBD3BE329F063E0FBBF9BBEB76CAD8C9CD10E2FE25AD1A9BC341BDC9F790616A1920AA9990D582E153393CCAAF65F8F5669C843D469B7EC692F41B3CCFD3A98D63153E7BF96A8268D338787E888F530285B52183523122230AD9F175667CD5E27E0A231A3BE5A9C24A28674FC768A9BA2338C890189E9C2CA8E608AA2470288E6FEEC64BDB6D06AA5E10681A5111D5E1FEDADBD16F12DED12EE99E8FCA112B8EC1C9E3EA5435315A7D2D14A7B9BBF5137010AB2A95E66B8FFA1695ACD708488A5620E1F147BFD985BC8EA097C836EC412B8B816E3F5936A23D82056212DA93DFDA7F7F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E301C6DCBCDBE1C9454E0A227F80F08EA86BA75B06FB7FD817DB9AE2729A0034DDDE18A213E4682C37A326A0FEF977DCC96A035E126AC71C754574A4D8FE0FF093BC14E34069AAC4C32DAF11CD687FE5766681C2181EE9C98514BD7AF44D79C97183F0E8CF60618F9B99FBAE66B139C8A0FEAD488E947D92092B5A80908F38B2DD73DC19C19550CF589661B1D8160C3568B8616025047318F889531F9CABB7AACAC62E5EA16C3804CD168C67F019A48CB0910F1EE3A2460B84251DB754038DEFE707463CB65C1666DFB25937A0C4BE17872A2DDE2090EB5687D09CD51AAF652FBE33A240A3B1F28617701E6EF6E733914BB32B05D1C0649C4ECA69D3075830DA732ED54DBC1F6A687EB13AE7505AD33F363A98241A0D30FAC9EB41D4FD53153B9403A14B3F71DDD6065FF7477EEED35A7E0F3E1CE0D545564AD812752817D32E52E5B08694252A69F25100CCD275D6C38F8AA3933D4F3FED4B2760CA0367A4E3FC7A4F15295050135F46F03C79914ACFE571527EC4E5DAD68C7CD1661A0FC37A62FC5FD275EBC1499F8EEA8B1A504B45C2D1233CF886DB4DC387959BB63321C3EFC5ABE261E2D0FF0E1E49D960235C8A1751451E687EAEBB700564D50B0C195DE84DAB29B668B737EC7E459AC26FBC734F5D7444C19860D9015D64AA91ED197D825957C2338ED354BE34AEABACDB4C32BF3A592838630E4FF8EF4A26611780CDC0F1AB0239DBAD1978A7BFA1587473E68FE2EF89B1144E3B6A99712C80A8BE7AE349695B250FDE76A54375C166A8767D41D838EFB9CB504C23563EA9E8EC3D1E94BDEE0791A86F1B31E9C81F872D38EB7F3AAC2593FF32DFCAECE1AC88882ED99F52F6466B2F437236C3241D0CACB5BBDC801AC086E0B2C0B87CE8158C0830A834ACF18EED58E6FA8B0E3DDA66031DFE0EC3C28A5F8D9CD9CD3A27EBE2F1F054A4EC9A108F283A0EC6698B66C2B05D1820D6ACCF5CB326100BDE4AD2D6221A818378DD1A18DAFCED301A9A39B85216D0370A047B1714A115A1E08A44217EE0A74AC18550D15370350F125734177A12B0BF26D079490D3A554232A1C738006CEBADCD6568A8D75801DD6D90BF6C2D8620033A98E1F9B93B9DFDA7BCE69DAB9AB241402929475CEAF6A8159CB1665965CE332E769D44CBEDF6C2902BE7755BBFEC2AD16669799D723493F8D4F8160E0507FBFABE103381917445735209BDEF1B373DBF5B9003947C952DC4150CE58CA6A08C112946C3A0684250C92F9727B92ED109394D4DB572F2324E01AE7D448A841D256D83360C70027E90F3EFF227D949E50B9F3C44141F66FDBE0413B43CF26912BEA8190633B2256927123E4E0CA56BADE27CF6A452AEBC574ED2CF00ADAC31534ECB8B8F7583E26126294025CFDA81D9B51453D2DEE57E0DAA501CE77328A5A3DE42966204659481C827CD0AD28EB502E0AF1DDC018155FD23CD6B34E395D1DC1492ED15DCCF4F2E9D5787B1A9CA775BA0AABFCAE959E9CE343BE15B3868761E6AC670E745C47A3CA77C8010CE5DF12FBA1FF47D1F3111502835E520BF1D4D07F7C589D6DBAEBBC5C3CA6BDE40A910A8FD98F1CDB7C1032DB93A4A4603950D9B2BC2EDB301F3B8A3733803B0363696805FA0C890189E9C2CA8E608AA2470288E6FEEC64BDB6D06AA5E10B9960959DB04E0FC6B4AE42919E6362D9E8FCA112B8EC1C9E3EA5435315A7D2D41F74C4DC73C4C32AB2A95E66B8FFA1677B8260867324907A601F44EB2F37C7BCF00ADAC31534ECB8B8F7583E26126294025CFDA81D9B514E24A4786C16FAE911CE77328A5A3DE42966204659481C827CD0AD28EB502E0AF1DDC018155FD23CD6B34E395D1DC1492ED15DCCF4F2E9D57017B8E2FD4ACA194414AC4306FFDDD0ECBAEEBD0DD9BEE40672653571AB681E1DD4BB5C3895A3AD65890B8F97FBF9C88E520BF1D4D07F7C589D6DBAEBBC5C3CA0AA59350F5B06A9CF1CDB7C1032DB93A600F905CAFDCC89426064368226E0398DA90A11148933932FBAE66B139C8A0FE40A1074779B3381A5A80908F38B2DD73A95E97608666FC205A5816B287D14A95616025047318F88974AB0F6F328BA18C2E5EA16C3804CD16649D903C38FF661E0F1EE3A2460B84251DB754038DEFE707463CB65C1666DFB25937A0C4BE17872A4D4793FB5D321EA59CD51AAF652FBE33A240A3B1F28617701E6EF6E733914BB32B05D1C0649C4ECA69D3075830DA732ED54DBC1F6A687EB113EF467AD942DE82433568E6C35F7F8E69C80EBCE3D0525690FE7F11E65866B52618E95AFC9AEAA6AC154CFAE9BAE61312752817D32E52E55B34B1FF2C048783FF73DCB5363871110B3326011985285A42FD2256723731435B9789386DF396F4B7E907756E3EB3BA14D41724B9938BE3E08E5416A728F2A1D9AD54738DA5F74F8CE3A2504A481D81616025047318F889FF5C244FEF7A458AAEC30C56BF88A048AB2A95E66B8FFA1677B8260867324907E1F147BFD985BC8EA097C836EC412B8B816E3F5936A23D825DB7BDA9B61D75577F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E3015D490874901DE069CC9E784D7C8167F87E9705A623E1DC9E4506DE4DE279B83475D14D9CD01A927321BFB61307DBAB51035E126AC71C754574A4D8FE0FF093BCDA0F829386AA0119AF11CD687FE576661F4C9E198A9BF44453B9BCD8DDF4F9DFAF4CD6FADF2A0EFDFBAE66B139C8A0FEB5298E04873FAF465A80908F38B2DD7346A3AB0F1D88AE6A3C7E4B72445DF2059E8FCA112B8EC1C991F981BCD6E9013914283CA7809B0D10AB2A95E66B8FFA1677B8260867324907E1F147BFD985BC8EA097C836EC412B8B816E3F5936A23D82242CAC4E1D58DFB67F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E3015D490874901DE0696DFA53B227EFCFEFDD39AE8E57EB577B9176ED83D6431466D9F3E9DB9C0C28549CBDCBF30D9D2825035E126AC71C754574A4D8FE0FF093BCCCEFCB727BA620B2AF11CD687FE57666F3633A86CF7124A5E782C0A0236A3B4AAE8E269FE0E302F8FBAE66B139C8A0FEAD488E947D92092B5A80908F38B2DD73633125B1DBA8CA0390DFF227F8D5F0D4270F87A346DD8D7777F104C4E22319AB41F74C4DC73C4C32AB2A95E66B8FFA1677B8260867324907E1F147BFD985BC8EA097C836EC412B8B816E3F5936A23D82ED937131BC18FCAF7F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E3015D490874901DE069AC018A4AF210397DEC31572E1772A5DE68760C413C81BC650E3A2546AAE47214A0723D94F61CDFB6035E126AC71C754574A4D8FE0FF093BC3CE90A942BC9A267AF11CD687FE57666F8AA317690E44ED5F1F5535D6515E747EE0A07D93CEB4AF2B7E907756E3EB3BA17664C4C9DEFDE32A7056D8B191D39B37EBDC765807597018950115302DD3A9B616025047318F889D00A2A799AA39A690A256C4D657A2CB7AB2A95E66B8FFA1677B8260867324907E1F147BFD985BC8EA097C836EC412B8BEDF7348D88FA841C4DBCF56EA2F0D9037F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E3015D490874901DE069925BBE4AABDDC6D5B1C4CE3F72F804EF9BF7363B37B6F6D8577AAFD3D9FB3D2786D6B026B51B877A035E126AC71C754574A4D8FE0FF093BCF07C1B608B727A0CAF11CD687FE57666E1E117A1853A9FB55DF08E0D036D7D917A70F27FFD1D2239E8158C0830A834AC70FA36D3655C5BBE9BF05D89E933E74BC28A5F8D9CD9CD3A65DE8659196B73AF959BB63321C3EFC5ABE261E2D0FF0E1E49D960235C8A1751451E687EAEBB7005730CE729EB0318CAAB29B668B737EC7E459AC26FBC734F5DBE252FF94BDA41E675192671BFA50C0857C2338ED354BE34AEABACDB4C32BF3A592838630E4FF8EF4A26611780CDC0F1AB0239DBAD1978A7BFA1587473E68FE234BC03311BE64FDD8D16CB98901ACA1CF18367A85B5C7EE32D4E08C530A378B48687343D377740591410021C7FECFB1EEE0791A86F1B31E920E6CE797374C688E4046D6659B5E7BBE1AC88882ED99F523390FB264826B70FFCECC22A8B51BEAAD5C7DB122168126B2F9727B92ED10939E1ED793B9BDCCCFB125285EA628230F583360C70027E90F3894262EC2FDBF79B9A108F283A0EC669E4418550BB47F7E5ACCF5CB326100BDE6B26049D936BE2CC3FFB4F92EE1B2A9ED66D12AE8DDC8AAE8CC120BBA64D93AA7C041BB6B5B1F75292BBAC28FEDD8FED4C9BA498BE1FE0EEC80DA48DEA7CD92A52EA4764B55FB2FDAB5CF4D680B3E428C5C002AD0A12EBD3BE329F063E0FBBF988D38205D195E158B41152D0A44EF17D2DD62B7E16212818EC0BAD6C5663DD1404D9C33BCB15712659E45B7EB74488D71B3CCFD3A98D6315A8816B73919ACD39100AC0519A6E42F22183523122230AD984CBBC8A33A398F0D4038C5799D60BB374E859046B362BA3EF84BB56F1426FB38A4BB1B673C1CD4A12A420C6EDFE64492A170AA4626ACA1490D5A3802BB6C5D8A64F836F68F8CECC2B072969E237DB1E0D43FDB778C5E5B639806A514B4665F667163EFA55E1DB4C28D3D541FB7A4C426E2B592399B08BD67A3A4A23A953620B07EA643D69E6C1E93E8FB1971F9B95F4A71201149F60EBF38B3B86C042D786710415370A8514FC981E85B5D3C5198ACB740232AB600EF42623AA67703D9E43753A2FEF37ADE3045C6C07652F260125EA7CD253EA717EE222E8A6AE60FF02A6A29C10AC9D0F134D52753D181CD5D4B09FCB28F1671837114AE8FD05DDB01347D966B17B8C0B1C958FCE712FF5C4F39582EF84BB56F1426FB38A4BB1B673C1CD4A5905CCDF47FB190C2A170AA4626ACA1459901C16526A7DB16DDC02368BA29D342629FE793C9285D30D43FDB778C5E5B6263F20252F7EAE10F6A452AEBC574ED2CF00ADAC31534ECB8B8F7583E26126294025CFDA81D9B514033E1DA16E0D6E2EDAD574660443C7B9966204659481C827CD0AD28EB502E0AF1DDC018155FD23CD6B34E395D1DC1492ED15DCCF4F2E9D5787B1A9CA775BA0AA301F074A41B09C10F499115961E8BCBA2E4C2BCD5E02C1AFB278FAAD8A5C1B8F378F43386163FFF6E520BF1D4D07F7C589D6DBAEBBC5C3CA58F4666BE22C60CBF1CDB7C1032DB93A68D5FD9E0242B2AAC4AE55BF4518A9094FA25D978F37D88698C3646292167449B7E907756E3EB3BAABAD6BCC780E4D722EF8636B8207C789BE65F9F20C180B36560EFDC6845569CA616025047318F889B5627A35D6ADA7552E5EA16C3804CD16FF3CBBE1641ED1060F1EE3A2460B84251DB754038DEFE707463CB65C1666DFB25937A0C4BE17872A4D4793FB5D321EA59CD51AAF652FBE33A240A3B1F28617701E6EF6E733914BB32B05D1C0649C4ECA69D3075830DA732ED54DBC1F6A687EB113EF467AD942DE82433568E6C35F7F8E34DB487999A43722A42612F9C87B74E86F4C225322A6B95F5FA8DBAFEC6A86FA12752817D32E52E526A256CAE0BDF92C489A3C26DF4611660B3326011985285AD85AEFD6FDFB3CF014BB6EACD809D727E8158C0830A834ACF18EED58E6FA8B0E3DDA66031DFE0EC3C28A5F8D9CD9CD3A8A6A2F55AC3BAC2B959BB63321C3EFC5D7DBBCEDAB91121F49D960235C8A1751451E687EAEBB7005730CE729EB0318CAAB29B668B737EC7E459AC26FBC734F5D7444C19860D9015DC9BE46BA8C7AA43757C2338ED354BE34AEABACDB4C32BF3A592838630E4FF8EF4A26611780CDC0F1AB0239DBAD1978A7BFA1587473E68FE29D9822CEEBA91EB0232F1980678945BEB80F1813FBCCC379C0575B46E785F9C887830B3F723381B9B30515FC666EB8DBEE0791A86F1B31E940EA8BBAA6A33A3C1B5DDC9FB5F858DFE1AC88882ED99F52732E823ABD0B99266196CF3C68AEB770527EC4E5DAD68C7C8A0DBC920C874289DE5AB4E2D55D4804EA8B1A504B45C2D1A4E0A78E4F53A9BBEBB7602D39E849606B948890C7374840DDAC9159048DF564649D903C38FF661E0F1EE3A2460B84251DB754038DEFE707463CB65C1666DFB25937A0C4BE17872A1812F285E1956F769CD51AAF652FBE33A240A3B1F28617701E6EF6E733914BB32B05D1C0649C4ECA69D3075830DA732ED54DBC1F6A687EB13AE7505AD33F363AF7F3C0B0F2BF265A576BA40BC1FF1F1C5E4031404E60275802625CFB9A91F08C3E1CE0D545564AD812752817D32E52E57890E43643956C90FF73DCB5363871117929489C3A49D2D69636606C0DE4CBE0EF84BB56F1426FB38A4BB1B673C1CD4A150A5AC4F5C91398F045BE8E4E7FF45C1DF7DE33DB23B02BDB684E633911D9143C44141F66FDBE0485325C6E1516D547190633B225692712EAAD58F14667BB31AB19346E5E7CB67A2C89DC7AF56F53B5047B1714A115A1E08A44217EE0A74AC1D4CC67E203D866CD5734177A12B0BF26D079490D3A554232A1C738006CEBADCD6568A8D75801DD6D90BF6C2D8620033A98E1F9B93B9DFDA7BCE69DAB9AB24140D712C263959F3D86F9C82368F6F563DFA4AA1A75046DEB07C93B9FC3258E0F733B1B0DDFD60DECBDD4F8160E0507FBFABE1033819174457387C72C91CC1FC9FB5B9003947C952DC4A97202EF1F394DC78B1913BB7F73668B9AF5A21903708BB0FF9D3AA063D0303B10DBACD99CE24DE49A795002212705C51DF7DE33DB23B02B95F0FE9899782C0C3C44141F66FDBE04E5FE403075DAF970190633B2256927120AD527349FD5BE3EDD1A18DAFCED301A9A39B85216D0370A047B1714A115A1E08A44217EE0A74AC176B2205F658155AA5734177A12B0BF26D079490D3A554232A1C738006CEBADCD6568A8D75801DD6D90BF6C2D8620033A98E1F9B93B9DFDA7BCE69DAB9AB241404FFFE180CA04A1CA1D5799E281A0D976F5F87CDC93940A3793CDD54147241E24A6ECD683DD48F6CED4F8160E0507FBFA59685C3E9FE5919931FB5C1F26DE2EF65B9003947C952DC42B4B52B1E1422177E6367AD9F82A5B842F9727B92ED10939E1ED793B9BDCCCFBA285FDAF205A97C883360C70027E90F3E0AD10D8E244C5859A108F283A0EC6692300CA78EFB1C810ACCF5CB326100BDE7B7572132E8DD6EA8588DBEB2A9915DBC2956D781AF560F28CC120BBA64D93AA7C041BB6B5B1F7526670F160CA7248AA4C9BA498BE1FE0EEC80DA48DEA7CD92A52EA4764B55FB2FDAB5CF4D680B3E428C5C002AD0A12EBD3BE329F063E0FBBF988D38205D195E158A51161601072E7BA6A7BF4BC01A6AB1599A59972BAA5DB345C7E6F624CC7A91F873188C48AFE02DE1B3CCFD3A98D6315F948D1D944E2EC7B5D3519A652388EC32183523122230AD93EAE96299EFE09E550E11D244658141DA4AE42E98DFAB55B0CE49AECE56C95AEB7E907756E3EB3BAABAD6BCC780E4D722EF8636B8207C789F5CF931C25657252CD0B80599D612B38616025047318F889EAF442FB833A0DE4D8FABE15A561310AAB2A95E66B8FFA162AD4D9A4CA339BC004D421F162767523A097C836EC412B8B816E3F5936A23D8235FE44809B75EFA57F6FE588338CF96CAD0AABB217C4F1C8646E1EB9A277874B7DE1C756362596B949B87AA00E23E3015D490874901DE06900B47779801159ED09DAA66235343ED7E62F9F2105AB5E75A53CBE5B02CC27A359B1B7273C79375A035E126AC71C754574A4D8FE0FF093BCC69CBC4ACA3FE291AF11CD687FE57666D2135483AAC3969BB68E075C73055510FF9D3AA063D0303BE4A7CC74A3C70516CB8FD925E00C28A21DF7DE33DB23B02BE430FEAEE9D5BE853C44141F66FDBE04826FA7F6BAA451BD190633B22569271216F372A5CAC4C59AF6A452AEBC574ED2CF00ADAC31534ECB8B8F7583E26126294025CFDA81D9B5141C691927E798BE3DE10CE475A92E59EF966204659481C827CD0AD28EB502E0AF1DDC018155FD23CD6B34E395D1DC1492ED15DCCF4F2E9D5787B1A9CA775BA0AA2796E63311615D51EB98E4DA5BDD38E1126CF3D39CA1C6D999110275DACABA9E8220DC566AE0AEF5773B9E0DE18A163ED833C30B73D5FE1FF3A78353E3239B7DD03434631610158B"""
    process(data)

```

### B站播放

#### now

```py
https://api.bilibili.com/x/click-interface/click/now
```

```
buvid3=00BEFB78-A2B4-22F7-BB73-41E4785CD48284513infoc; b_nut=1718815984; CURRENT_FNVAL=4048; b_lsid=F73D24C3_190316A8E2B; _uuid=10A2D7F57-F7A1-EA76-84510-AFCDFA23223485202infoc; sid=ng465q7b; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkwNzUxODUsImlhdCI6MTcxODgxNTkyNSwicGx0IjotMX0.H8ZmFqNmu7bYOFA77Tg9eXVJAnl9_Tvi7mbSkpOlnR8; bili_ticket_expires=1719075125; buvid_fp=6faf06b03f3c6112777e93ec603c3630; buvid4=9FBAF528-1C5D-2272-9A52-AABEE6B9ADFB85563-024061916-yilIkVM1Pecz%2BTy7tVJuyA%3D%3D
```

##### 相关代码：

```py

```

#### h5

```python
https://api.bilibili.com/x/click-interface/click/web/h5?w_aid=335696837&w_part=1&w_ftime=1718815985&w_stime=1718815985&w_type=3&web_location=1315873&w_rid=3f2bebd82734a4a844a4ac14ea61f676&wts=1718815986
```

```py
aid: 335696837
cid: 412385504
part: 1
lv: 0
ftime: 1718815985
stime: 1718815985
type: 3
sub_type: 0
refer_url: 
outer: 0
spmid: 333.788.0.0
from_spmid: 
session: 12a135601d1db2078fd053232bf46cc5
csrf: 
```

```
buvid3=00BEFB78-A2B4-22F7-BB73-41E4785CD48284513infoc; b_nut=1718815984; CURRENT_FNVAL=4048; b_lsid=F73D24C3_190316A8E2B; _uuid=10A2D7F57-F7A1-EA76-84510-AFCDFA23223485202infoc; sid=ng465q7b; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkwNzUxODUsImlhdCI6MTcxODgxNTkyNSwicGx0IjotMX0.H8ZmFqNmu7bYOFA77Tg9eXVJAnl9_Tvi7mbSkpOlnR8; bili_ticket_expires=1719075125; buvid_fp=6faf06b03f3c6112777e93ec603c3630; buvid4=9FBAF528-1C5D-2272-9A52-AABEE6B9ADFB85563-024061916-yilIkVM1Pecz%2BTy7tVJuyA%3D%3D
```

##### 相关代码：

```py

```

#### heart beat

```py
https://api.bilibili.com/x/click-interface/web/heartbeat?w_start_ts=1718815985&w_aid=335696837&w_dt=2&w_realtime=0&w_played_time=0&w_real_played_time=0&w_video_duration=87&w_last_play_progress_time=0&web_location=1315873&w_rid=9ec40279c63a83e53d2308f7219bb34d&wts=1718815986
```

```
start_ts: 1718815985
aid: 335696837
cid: 412385504
type: 3
sub_type: 0
dt: 2
play_type: 1
realtime: 0
played_time: 0
real_played_time: 0
refer_url: 
quality: 0
video_duration: 87
last_play_progress_time: 0
max_play_progress_time: 0
outer: 0
spmid: 333.788.0.0
from_spmid: 
session: 12a135601d1db2078fd053232bf46cc5
extra: {"player_version":"4.8.27"}
csrf: 
```

```
buvid3=00BEFB78-A2B4-22F7-BB73-41E4785CD48284513infoc; b_nut=1718815984; CURRENT_FNVAL=4048; b_lsid=F73D24C3_190316A8E2B; _uuid=10A2D7F57-F7A1-EA76-84510-AFCDFA23223485202infoc; sid=ng465q7b; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkwNzUxODUsImlhdCI6MTcxODgxNTkyNSwicGx0IjotMX0.H8ZmFqNmu7bYOFA77Tg9eXVJAnl9_Tvi7mbSkpOlnR8; bili_ticket_expires=1719075125; buvid_fp=6faf06b03f3c6112777e93ec603c3630; buvid4=9FBAF528-1C5D-2272-9A52-AABEE6B9ADFB85563-024061916-yilIkVM1Pecz%2BTy7tVJuyA%3D%3D
```

##### 相关代码：

```py

```

## ob混淆

OB 混淆全称 Obfuscator，Obfuscator 其实就是混淆的意思，官网：https://obfuscator.io/ ，其作者是一位叫 Timofey Kachalov 的俄罗斯 JavaScript 开发工程师，早在 2016 年就发布了第一个版本。

一段正常的代码如下：

```js
function hi() {
  console.log("Hello World!");
}
hi();
```

经过 OB 混淆后的结果：

```js
function _0x3f26() {
    var _0x2dad75 = ['5881925kTCKCP', 'Hello\x20World!', '600mDvfGa', '699564jYNxbu', '1083271cEvuvT', 'log', '18sKjcFY', '214857eMgFSU', '77856FUKcuE', '736425OzpdFI', '737172JqcGMg'];
    _0x3f26 = function () {
        return _0x2dad75;
    };
    return _0x3f26();
}

(function (_0x307c88, _0x4f8223) {
    var _0x32807d = _0x1fe9, _0x330c58 = _0x307c88();
    while (!![]) {
        try {
            var _0x5d6354 = parseInt(_0x32807d(0x6f)) / 0x1 + parseInt(_0x32807d(0x6e)) / 0x2 + parseInt(_0x32807d(0x70)) / 0x3 + -parseInt(_0x32807d(0x69)) / 0x4 + parseInt(_0x32807d(0x71)) / 0x5 + parseInt(_0x32807d(0x6c)) / 0x6 * (parseInt(_0x32807d(0x6a)) / 0x7) + -parseInt(_0x32807d(0x73)) / 0x8 * (parseInt(_0x32807d(0x6d)) / 0x9);
            if (_0x5d6354 === _0x4f8223) break; else _0x330c58['push'](_0x330c58['shift']());
        } catch (_0x3f18e4) {
            _0x330c58['push'](_0x330c58['shift']());
        }
    }
}(_0x3f26, 0xaa023));

function _0x1fe9(_0xa907e7, _0x410a46) {
    var _0x3f261f = _0x3f26();
    return _0x1fe9 = function (_0x1fe950, _0x5a08da) {
        _0x1fe950 = _0x1fe950 - 0x69;
        var _0x82a06 = _0x3f261f[_0x1fe950];
        return _0x82a06;
    }, _0x1fe9(_0xa907e7, _0x410a46);
}

function hi() {
    var _0x12a222 = _0x1fe9;
    console[_0x12a222(0x6b)](_0x12a222(0x72));
}

hi();
```

OB 混淆具有以下特征：

1、一般由一个大数组或者含有大数组的函数、一个自执行函数、解密函数和加密后的函数四部分组成；

2、函数名和变量名通常以 _0x 或者 0x 开头，后接 1~6 位数字或字母组合；

3、自执行函数，进行移位操作，有明显的 push、shift 关键字；

例如在上面的例子中，\_0x3f26() 方法就定义了一个大数组，自执行函数里有 push、shift 关键字，主要是对大数组进行移位操作，_0x1fe9() 就是解密函数，hi() 就是加密后的函数。

## websocket

WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，WebSocket 使得客户端和服务器之间的数据交换变得更加简单。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

WebSocket 协议简称为 WS 或者 WSS（WebSocket Secure），其发送请求的 URL 以 `ws://` 或者 `wss://` 开头，WSS 是 WS 的加密版本，类似于 HTTP 与 HTTPS。

WebSocket 协议的最大特点就是：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。与 HTTP 的对比如下图所示：

![图片](./Web%E9%80%86%E5%90%91.assets/640.png)
