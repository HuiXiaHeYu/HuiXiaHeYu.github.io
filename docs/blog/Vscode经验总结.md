---
title: Vscode经验总结
createTime: 2025/06/25 23:27:31
permalink: /article/q2e5j2zc/
---
## ssh免密连接设置

服务器端：

1. 用户目录权限为775

2. 服务器的ssh配置

```bash
PubkeyAuthentication yes
AuthorizedKeysFile      .ssh/authorized_keys
```

3. 在本机生成rsa私钥公钥。私钥放本地，公钥放服务器

```bash
ssh-keygen -t rsa
本地：
- C:\Users\19124/.ssh/id_rsa
- C:\Users\19124/.ssh/id_rsa.pub
服务器：
- 将公钥(.pub)传入服务器放入以下路径：~/.ssh/authorized_keys

便捷代码：echo "xxxx" >> ~/.ssh/authorized_keys
```

4. vscode远程连接配置认证文件

```bash
IdentityFile ~/.ssh/id_rsa_school_servers
```

## 创建项目

以每个项目为中心，各个项目隔离

## 带参debug

如何在vscode中顺滑的debug python文件？

### 配置

1. 安装依赖包：`pip install debugpy -U`
2. 添加带参数的`launch.json`文件配置并选择`sh_file_debug`

```json
{
    "name": "sh_file_debug",
    "type": "debugpy",
    "request": "attach",
    "connect": {
        "host": "localhost",
        "port": 9501
    }
},
```

3. 在python代码前加上这句话

```py
import debugpy
try:
    # 5678 is the default attach port in the VS Code debug configurations. Unless a host and port are specified, host defaults to 127.0.0.1
    debugpy.listen(("localhost", 9501))
    print("Waiting for debugger attach")
    debugpy.wait_for_client()
except Exception as e:
    pass
```

### 使用

1. 在终端运行bash命令，并等待debug

<img src="./Vscode%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93.assets/image-20250528121207875.png" alt="image-20250528121207875" style="zoom: 67%;" />

2. 打上断点，点击调试按钮`sh_file_debug`，开始debug

<img src="./Vscode%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93.assets/image-20250528121356382.png" alt="image-20250528121356382" style="zoom: 37%;" />
