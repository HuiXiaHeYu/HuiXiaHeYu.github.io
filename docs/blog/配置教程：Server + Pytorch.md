---
title: 配置教程：Server + Pytorch
createTime: 2024/11/11 11:55:17
tags:
 - Deep Learning
permalink: /article/5as7rxt6/
---
## 安装流程

> 本安装方法，推荐使用pytorch官方版本包：使用完整的`指定版本cuda编译的指定版本torch包`，配合系统`多版本CUDA Toolkit`使用
>
> - 用户安装`指定版本cuda编译的指定版本torch包`的目的：训练推理使用
> - 服务器安装`多版本CUDA Toolkit`的目的：编译C++插件/CUDA插件（如：`setup.py` + `.cu`）


```
ssh spa@10.201.8.249
密码：123456a
```

### 安装miniconda

```sh
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

### 配置pip源、conda源

```bash
. ~/.bashrc  # 激活配置文件
```

```py
# 目的：快速安装除torch外其他包
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --set show_channel_urls yes
```

```py
# 目的：快速安装除torch外其他包
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 配置清华源
python -m pip install --upgrade pip # 更新pip
```

### 创建conda环境[3.8版本兼容大部分torch版本]

```sh
conda create -n DL python=3.8 -y
```

### 安装torch，用于训练推理

 **注意：torch与cuda兼容性比较严格**

```py
conda activate DL
```

```py
# 阉割版：只有CPU版本的torch，
pip install torch torchvision torchaudio  # 下载torch包
# 完整版本[推荐]：下载Pytorch官方发布的 torch==x.x.x+cuxxx 包
pip install torch==2.0.1+cu118 torchvision==0.15.2+cu118 -f https://download.pytorch.org/whl/torch_stable.html
```

安装太慢了该怎么办：

1. 使用VPN跑到官网下载whl文件

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Pytorch.assets/image-20250419172924876.png" alt="image-20250419172924876" style="zoom: 45%;" />

2. 局域网传输到服务器

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Pytorch.assets/image-20250419173035591.png" alt="image-20250419173035591" style="zoom: 50%;" />

3. 切换到指定环境安装torch

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Pytorch.assets/image-20250419174013225.png" alt="image-20250419174013225" style="zoom: 67%;" />

### 通用 cuda切换脚本

`全称CUDA Toolkit`

> 查看服务器内可用的CUDA Toolkit版本
>
> `ls /usr/local`

- 脚本名：`switch-cuda-on-version.sh`
- 切换使用方法：`bash ~/switch-cuda-on-version.sh  11.1`

```sh
#!/bin/bash

export CUDA_HOME=/usr/local/cuda-$1
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH

echo "注意：CUDA版本切换到: $1"
```

### 测试环境

```sh
python

import torch
print("PyTorch 版本:", torch.__version__)
print("CUDA 版本:", torch.version.cuda)
print("cuDNN 版本:", torch.backends.cudnn.version())
```

### vscode安装ssh工具并连接使用

```
remote-ssh
"""
1.安装ssh插件
2.改名
3.创建代码文件夹  
mkdir Code
4.开始使用
"""
```