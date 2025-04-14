---
title: 配置教程：Server + Pytorch
createTime: 2024/11/11 11:55:17
tags:
 - Deep Learning
permalink: /article/5as7rxt6/
---
`如何在linux服务器中配置深度学习环境？`

@[bilibili](BV1bs2qY5EZb)

---

## 代码如下：


```
ssh spa@10.201.8.249
密码：123456a
```

1. 安装miniconda

```sh
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

2. 配置conda源

```bash
. ~/.bashrc  # 激活配置文件
```

```sh
# 清华源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge 
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --set show_channel_urls yes
```

3. 创建torch环境

```sh
conda create -n DL python=3.8 -y
conda activate DL
```

4. 查看显卡支持的cuda版本、配置pip源、安装pytorch

```sh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 配置清华源
python -m pip install --upgrade pip # 更新pip
```

```bash
pip3 install torch torchvision torchaudio [--index-url https://download.pytorch.org/whl/cu113]  # 下载torch包[带中括号为指定地址，不加则为pip默认源]
```

5. 查看是否配置cuda-gpu，添加命令到自己的`.bashrc`文件

```sh
ls /usr/local	# 查看服务器内可用的cuda版本
```

```bash
vim ~/.bashrc
```

```sh
# 使用CUDA_HOME切换cuda路径，方便维护多个版本[选择指定版本的cuda-11.3：export CUDA_HOME=/usr/local/cuda-11.3]
export CUDA_HOME=/usr/local/cuda

export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
```

6. 测试是否可以成功使用cuda

```sh
conda activate DL
# 验证版本
python
import torch
print("PyTorch 版本:", torch.__version__)
print("CUDA 版本:", torch.version.cuda)
print("cuDNN 版本:", torch.backends.cudnn.version())
```

6. vscode安装ssh工具并连接使用

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