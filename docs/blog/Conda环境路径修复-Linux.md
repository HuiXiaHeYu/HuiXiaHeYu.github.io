---
title: Conda环境路径修复
createTime: 2025/01/18 03:14:29
permalink: /article/clurj09w/
---
由于笔者需要管理的服务器主磁盘经常满，有必要更换多个用户深度学习路径，故产生了这个问题，修复教程如下：

```bash
当前路径前缀：/mnt/big_disk/big_disk_1/

路径修改（注释为需要修改的路径）：
# 注释行 conda初始化行
sudo vim .bashrc
# 首四行
# sudo vim /mnt/big_disk/big_disk_1/{username}/anaconda3/etc/profile.d/conda.sh
sudo vim $(pwd)/anaconda3/etc/profile.d/conda.sh
# 首行
sudo vim $(pwd)/anaconda3/bin/conda
sudo vim $(pwd)/anaconda3/bin/pip
# 加密库自行修复【加入公告】：
conda install cryptography
```

