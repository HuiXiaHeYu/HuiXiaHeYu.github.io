---
title: 配置教程：Server + Cuda
createTime: 2024/11/15 15:57:02
tags:
 - Deep Learning
permalink: /article/fnss6k7s/
---
## 显卡驱动

```bash
nvidia-smi		# 查看显卡驱动
ubuntu-drivers devices	# 检查可安装的显卡驱动
sudo apt install nvidia-driver-XXX	# 安装显卡驱动
sudo ubuntu-drivers autoinstall		# 系统自动安装
```

## gcc版本更改

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Cuda.assets/image-20241115162000556.png" alt="image-20241115162000556" style="zoom: 40%;" />

`Versioned Online Documentation` -> `Installation Guides` -> `Installation Guide Linux` -> `下滑查看gcc要求版本`

<img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Cuda.assets/image-20241115162210486.png" alt="image-20241115162210486" style="zoom:33%;" />

```bash
apt update
apt upgrade
sudo apt install gcc-12		# 安装gcc-12
sudo dpkg -l | grep gcc		# 查看gcc版本
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-12 90	# 给指定版本gcc设置权重（数字越大权重越大）
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 90	# 给指定版本g++设置权重
sudo update-alternatives --config gcc
sudo update-alternatives --config g++
gcc --version	# 查看gcc版本
```

## Cuda-toolkit

> Cuda工具包官网：https://developer.nvidia.com/cuda-toolkit-archive
>
> <img src="./%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B%EF%BC%9AServer%20+%20Cuda.assets/image-20241115160356753.png" alt="image-20241115160356753" style="zoom: 25%;" />

`注意：`如果是wsl中的linux系统则要选中Distribution为WSL-Ubuntu

```bash
wget https://developer.download.nvidia.com/compute/cuda/11.1.1/local_installers/cuda_11.1.1_455.32.00_linux.run
sudo sh cuda_11.1.1_455.32.00_linux.run		# continue后若跳出安装：根据安装失败日志的路径查看原因（一般是gcc版本问题，降级即可）
```

`accept` -> `关闭第一个驱动选项（已经安装有nvidia驱动了）` -> `install` ->  `成功安装cuda工具包`



## Cudnn

> 安装cuda对应cudnn：https://developer.nvidia.com/rdp/cudnn-archive#a-collapse805-111

选完之后根据命令下载安装。。。
