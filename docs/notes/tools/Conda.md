---
title: Conda
createTime: 2024/11/10 17:38:00
tags:
 - Conda
permalink: /notes/tools/wgrxfh9w/
---
## 控制台进入Conda prompt

`我这里不能用，应该是anaconda没设置全局`

```
conda activate
```

## 查看所有环境

```
conda env list
或
conda info -e
```

## 创建环境并配置到Jupyter notebook

`一次性配置视频：`[一口气配好jupyter和anaconda环境切换](https://www.bilibili.com/video/BV17d4y1M7CF/?spm_id_from=333.337.search-card.all.click&vd_source=5e9ba28b96bd6fe04be4fb86a4612e4a)

```py
# 因为base默认有jupyter notebook所以不用下载jupyter notebook模块
# nb_conda_kernels模块可能无法验证（没有改变环境权限）：进入everything软件找到Anaconda prompt快捷方式用管理员身份打开
conda create -n 环境名 python=PY版本
conda activate 环境名	# 进入python环境
conda install nb_conda_kernels	# 下载指定模块来链接jupyter notebook

# 从其他环境克隆
conda create --name newName（新环境名） --clone oldName（旧环境名）
conda remove --name oldName（旧环境名） --all 
```

## 删除环境

```
conda env remove --name 环境名
```

## 进入环境

```
conda activate 环境名
```

## 退出环境

`没咋用过`

```
conda deactivate env_name
或
conda deactivate root
```

## Jupyterlab卸载重装

```
conda uninstall jupyterlab
conda install jupyterlab
conda update jupyter_core jupyter_client
jupyter lab
```

## Conda清华源镜像

```py
# 恢复默认源
conda config --remove-key channels
# 清华源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
conda config --set show_channel_urls yes
```

## Pip清华源镜像

```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
python -m pip install --upgrade pip
```

## 进入conda环境后

### 查看安装包

```
conda list
```
