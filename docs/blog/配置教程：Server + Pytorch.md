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
。。。
```

2. 配置conda源（二选一即可）【因为我这里已经配置过了，所以显示warning】

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

```bash
# 中科大源
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --set show_channel_urls yes
```

3. 创建torch环境

```sh
conda create -n DL python=3.8
conda activate DL
```

4. 查看显卡支持的cuda版本、配置pip源、安装pytorch

```sh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 配置清华源
python -m pip install --upgrade pip # 更新pip
```

### 注意torch的cuda版本要适配，我这里的显卡版本最高支持到11.4，向下适配最近的是11.3版本cudatoolkit

![376352d7b6d6692390e0de771400e4de](./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Pytorch.assets/376352d7b6d6692390e0de771400e4de.png)

```bash
nvidia-smi  # 查看显卡
# pytorch官网：https://pytorch.org/
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu113  # 下载torch包
```

5. 查看是否配置cuda-gpu，**若已经含有cuda-gpu**则添加命令到自己的`.bashrc`文件

```sh
find /usr/local -name cuda  # 判断是否含有cuda-gpu
```

```bash
vim ~/.bashrc
```

```sh
# 使用CUDA_HOME切换cuda路径
export CUDA_HOME=/usr/local/cuda

export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
```

6. 测试是否可以成功使用cuda

```sh
conda activate DL
python
>>> import torch
>>> torch.cuda.is_available()
```

6. vscode安装ssh工具并连接使用

```
remote-ssh
"""
1.安装ssh插件
2.改名
3.创建学习文件夹  
mkdir Study
4.开始使用

"""
```