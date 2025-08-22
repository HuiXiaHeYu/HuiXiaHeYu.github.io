---
title: Linux
createTime: 2025/07/03 16:42:05
permalink: /notes/language/s2xurunb/
---
## 快捷键

```sh
ctrl + c	# 强制停止命令运行/退出当前命令的输入
ctrl + d	# 退出账户登录/退出特定程序的专属页面（如python3，不能退出vi/vim）
history		# 历史命令
ctrl + r	# 匹配历史命令
# 光标移动快捷键
ctrl + a	# 跳到命令开头
ctrl + e	# 跳到命令结尾
ctrl + 键盘左键	# 向左跳一个单词
ctrl + 键盘右键	# 向右跳一个单词
# 清屏
ctrl + l	# 清空终端内容
clear		# 清空终端内容
# 路径-文件-文件夹
pwd		# 查看当前路径
cd [Linux路径]	# 切换路径
ls [-a -l -h] [Linux路径]	 # 查看路径下文件，[-a]:隐藏文件；[-l]:列表显示；[-h]:数据单位

touch Linux路径	# 创建文件
mkdir [-p] Linux路径	# 创建文件夹，[-p]：自动创建不存在的父目录，适用于连续创建多层级目录

mv 原路径 新路径		# 移动文件/文件夹
cp [-r] 原路径 新路径	# 复制文件/文件夹，[-r]：递归，复制文件夹使用
rm [-r -f] 参数1 参数2 ..... 参数N	# 删除文件/文件夹，[-r]：递归文件夹；[-f]：强制删除

cat Linux路径		# 查看文件内容
more Linux路径	# 查看你文件内容【支持 空格 翻页，支持 q 退出查看】
```

## 特殊符号

#### *

`通配符，即匹配任意内容（包含空）`

- test* 表示匹配test开头的内容
- *test 表示匹配任何test结尾的内容
- *test * 表示匹配任何包含test的内容

#### ~

#### |

左边命令的返回值交给右边处理

#### $

取变量的值

## 查找

```sh
# 查找命令
which 要查找的命令	# cd是内置命令，无法被which到
# 查找文件
find 起始路径 -name "被查找文件名"	# 通过文件名查找
find 起始路径 -size +|-n[kMG]	# 通过文件大小查找
# 查找关键字
grep [-n] [-v] 关键字 文件路径	# [-n]:在结果中显示匹配的行的行号；[-v]:反向过滤（过滤掉）
```

## 统计-wc

`统计文件的行数、单词数量、字节数`

```sh
wc [-c -m -l -w] 文件路径
# 示例
wc test.txt
```

| 选项     | 解释                             |
| -------- | -------------------------------- |
| -c       | 统计bytes数量                    |
| -m       | 统计字符数量                     |
| -l       | 统计行数                         |
| -w       | 统计单词数量                     |
| 内容路径 | 被统计的文件，可作为内容输入端口 |

## 输出-echo

```sh
echo "文本"	# 输出文本
echo `代码`	# 执行代码（反引号中）
echo "文本" > 文件路径	# 覆盖写入文件文本
echo "文本" >> 文件路径	# 追加写入文件文本
# 示例
ls > test.txt
```

| 选项 | 解释             |
| ---- | ---------------- |
| `    | 反引号，执行代码 |
| >    | 重定向符，覆盖   |
| >>   | 重定向符，写入   |

#### 跟踪文件尾部-tail

`查看文件尾部内容，跟踪文件的最新更改`

```sh
tail [-f -num] Linux路径
# 示例
tail -f test.txt
```

| 选项      | 解释                         |
| --------- | ---------------------------- |
| -f        | 持续跟踪                     |
| -name     | 查看尾部多少行，不填默认10行 |
| Linux路径 | 被跟踪的文件路径             |

## ==系统==

## 服务器状况

### uname

`查看服务器内核`

```py
uname -r	# 查看服务器内核版本号
```

### who

`查看当前活动的登录会话`

列出用户名、登录时间、登录IP地址等信息，不会显示已经注销或已断开连接的用户

### last/lastlog

`查看登录历史日志`

- last：显示最近登录用户的列表，包括用户名、登录时间、登录IP地址等信息
- lastlog：显示所有用户的登录历史记录

## IP与主机名

### 基本IP

```
127.0.0.1 	# 指代本机，可以在端口绑定中用来确定绑定关系
0.0.0.0 	# 特殊IP地址，在一些IP地址限制中，表示所有IP的意思，如放行规则设置为0.0.0.0，表示允许任意IP访问
```

### 请求访问流程

![image-20240815172857151](./Linux.assets/image-20240815172857151.png)

```sh
# 本机hosts文件
Windows：‪C:\Windows\System32\drivers\etc\hosts
Linux：/etc/hosts
# DNS服务器
如：114.114.114.114
```

**本地DNS解析：**

<img src="./Linux.assets/1723714373518.jpg" alt="1723714373518" style="zoom: 50%;" /><img src="./Linux.assets/1723714424963.jpg" alt="1723714424963" style="zoom: 50%;" />

### ifconfig

`查看ip地址（v4版本、v6版本）`

ipv4地址格式：a.b.c.d，其中abcd表示0-255的数字，如192.168.88.101就是一个标准的ip地址

```sh
# 如果无法使用此命令，下载安装一下
yum -y install net-tools
```

![image-20240815160154079](./Linux.assets/image-20240815160154079.png)

### hostname

`主机名`

```sh
hostname	# 查看主机名
hostnamectl set-hostname 新主机名	# 重新设置主机名
```

### 测速-ping

```sh
ping [-c num] ip或主机名	# 测速，[-c]:指定检查次数，不适用则无限检查
```

## 端口

### Linux端口

- 公认端口：`1~1023`，通常用于一些系统内置或知名程序的预留使用，如SSH服务的22端口，HTTPS服务的443端口（非特殊需要，不要占用这个范围的端口）
- 注册端口：`1024~49151`，用于松散绑定一些程序/服务（用户自定义）
- 动态端口：`49152~65535`，通常不会固定绑定程序，而是当程序对外进行网络连接时，用于临时使用

### nmap-netstat

`查看端口占用`

```sh
yum -y install nmap
yum -t install net-tools
nmap 127.0.0.1	# 查看端口占用（利用本地回环地址）
netstat -anp	# 查看所有端口
netstat -anp | grep 端口号	# 查看指定端口占用（利用本地回环地址）
```

## 系统服务

### systemctl

`linux很多软件（内置或第三方）均支持使用systemctl命令控制：启动、停止、开机自启。能够被systemctl管理的软件，一般称为：服务`

```sh
systemctl start | stop | status | enable | disable 服务名
```

系统内置服务：

- NetworkManager：主网络服务
- network：副网络服务
- firewalld：防火墙服务
- sshd、ssh服务（远程登陆）

### service

`如果你是在 windows 中通过 WSL 使用的 Ubuntu 或者 Dibian 系统，默认情况下系统使用的是 SysV 而不是 systemd。`

```sh
# 查看系统使用的初始化进程，若显示输出：init 或 sysv（或类似的东西），我们应该使用Sysvinit来代替Systemd
ps -p 1 -o comm=	# 查看系统运行的第一个进程
```

```sh
service 服务名 start | stop | status | restart
chkconfig 服务名 on | off	# （打开/关闭）开启自启
```

## 防火墙

### ufw

```sh
sudo ufw status
sudo ufw allow 22     # 允许端口
sudo ufw deny 21      # 拒绝端口
sudo ufw allow from 192.168.1.100 to any port 22  # 允许特定 IP 访问指定端口
sudo ufw deny from 192.168.1.100 to any port 22  # 拒绝特定 IP 访问指定端口

sudo ufw enable	 	# 启用UFW
sudo ufw disable	# 禁用UFW

sudo ufw status numbered	# 查看规则编号
sudo ufw delete 3	# 删除规则3

sudo ufw reset	# 重置UFW
```

### firewall

```sh
systemctl status firewalld	# 查看防火墙状态
sudo firewall-cmd --list-ports	# 查看端口情况
sudo firewall-cmd --zone=public --add-port=9090/tcp --permanent	# 默认区域打开TCP9090端口，并且规则永久生效
sudo firewall-cmd --reload	# 重新加载firewall配置
```

| 选项    | 解释         |
| ------- | ------------ |
| start   | 启动         |
| stop    | 关闭         |
| status  | 查看状态     |
| enable  | 开启开机自启 |
| disable | 关闭开机自启 |

## 进程

每个运行的程序被操作系统注册为系统中的一个**进程**并分配一个独有的**进程ID（进程号）**

### ps

`查看Linux系统中的进程信息`

```sh
ps [-e -f]
# 示例
ps -ef
ps -ef|grep tail
ps -ef|grep "19:35"
ps -ef|grep 950
```

| 选项 | 解释               |
| ---- | ------------------ |
| -e   | 显示全部进程       |
| -f   | 格式化显示全部信息 |

![1723721447710](./Linux.assets/1723721447710.jpg)

- UID：进程所属用户ID
- PID：进程的进程号ID
- PPID：进程的父ID（启动此进程的其他进程）
- C：此进程的CPU占用率（百分比）
- STIME：进程的启动时间
- TTY：启动此进程的终端序号，如显示“ ？”，表示非终端启动
- TIME：进程占用CPU的时间
- CMD：进程对应的名称或启动路径或启动命令

### kill

`关闭进程`

```sh
kill [-9] 进程号（PID）
```

## 主机状态-top

```sh
top
```

## 磁盘

### df

`查看硬盘使用情况`

```sh
df [-h]
```

| 选项 | 解释                   |
| ---- | ---------------------- |
| -h   | 以更加人性化的单位显示 |

### iostat

`磁盘信息监控`

```sh
yum -y install sysstat
iostat [-x] [num1] [num2]
# 示例
iostat -x 3 4	# 显示详细信息，间隔3s，刷新4次
```

| 选项 | 解释           |
| ---- | -------------- |
| -x   | 显示更多信息   |
| num1 | 数字，刷新间隔 |
| num2 | 数字，刷新几次 |

![image-20240815230355711](./Linux.assets/image-20240815230355711.png)

### 磁盘弹性管理-LVM

`logical volume manager，逻辑卷管理`

#### 原理

- PV(Physical Volume): 物理卷
  - 处于LVM最底层，可以是物理硬盘或者分区，整个硬盘，或使用fdisk等工具建立的普通分区，包括许多默认4MB大小的PE(Physical Extent，基本单元)
- PE(Physical Extend): 物理区域
  - PV中可以用于分配的最小存储单元，可以在创建PV的时候制定（默认为4MB)，如1M, 2M, 4M, 8M, 32M, 64M ... 组成同一VG中所有PV的PE大小应该相同
- VG(Volume Group): 卷组
  - 建立在PV之上，可以含有一个到多个PV，一个或多个物理卷组合而成的整体
- LV(Logical Volume): 逻辑卷
  - 建立在VG之上，相当于原来分区的概念，不过大小可以动态改变。从卷组中分割出的一块空间，用于建立文件系统。
  - PV(PE) --> VG --> (PE*n)LV --> 目录挂载

<img src="./Linux.assets/image-20241220150337596.png" alt="image-20241220150337596" style="zoom:67%;" />

#### 命令

| 功能 | PV物理卷命令 | VG卷命令  | LV卷命令  |
| ---- | ------------ | --------- | --------- |
| 扫描 | pvscan       | vgscan    | lvscan    |
| 建立 | pvcreate     | vgcreate  | lvcreate  |
| 查询 | pvdiaplay    | vgdisplay | lvdisplay |
| 删除 | pvremove     | vgremove  | lvremove  |
| 扩容 |              | vgextend  | lvextend  |
| 缩容 |              | vgreduce  | lvreduce  |

```bash
# 举例：
sudo fdisk /dev/sda	# 删除并创建分区表
g
n
enter enter
w
sudo fdisk /dev/sdb	# 删除并创建分区表
g
n
enter enter
w
sudo pvcreate /dev/sda1 /dev/sdb1	# 创建物理卷
sudo vgextend ubuntu-vg /dev/sda1 /dev/sdb1	# 扩容vg卷
sudo lvdisplay ubuntu-vg	# 查看lv卷
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv	# 扩容lv卷
lsblk 	# 查看
df -T	# 查看文件系统类型
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv	# 调整文件系统块大小
```

## 网络监控-sar

`查看网络相关统计，有点复杂的`

```sh
sar -n DEV [num1] [num2]
```

| 选项 | 解释                          |
| ---- | ----------------------------- |
| -n   | 查看网络，DEV表示查看网络接口 |
| num1 | 刷新间隔（不填查看一次结束）  |
| num2 | 查看次数（不填无限次数）      |

![image-20240815231529054](./Linux.assets/image-20240815231529054.png)
`IFACE：本地网卡接口的名称；`
 `rxpck/s：每秒接收的数据包；`
 `txpck/s：每秒发送的数据包；`
 `rxKB/S：每秒接收的数据包大小，单位KB；`
 `txKB/s：每秒发送的数据包大小，单位KB；`
 `rxcmp/s：每秒接收的压缩数据包；`
`rxcmp/s：每秒发送的压缩包；`
`rxmcst/s：每秒接收的多播数据包`

## ==用户==

## 用户-用户组

### root用户

```sh
# ubuntu系统激活root用户
sudo passwd root
```

### 切换和退出账户

```sh
su [-] [用户名]	# 切换账户
# 退回上一个账户
exit 或 ctrl + d
```

| 选项   | 解释                                   |
| ------ | -------------------------------------- |
| -      | 是否在切换用户后加载环境变量，建议带上 |
| 用户名 | 不带此选项默认切换到root用户           |

### 配置root权限

```sh
# 法一：在 /etc/sudoers 中添加权限，然后强制写入退出
[账户名] ALL=(ALL)	NOPASSWD: ALL
# 法二：将用户追加到sudo组
usermod -a -G sudo username
```

### 用户管理

```sh
getent passwd	# 查看所有用户	# 信息介绍 -> 用户名:密码(X):用户ID:组ID:描述信息(无用):HOME目录:执行终端(默认bash)
useradd [-g -d] 用户名		   # 创建用户
userdel [-r] 用户名		  # 删除用户
usermod -s /bin/bash username	# 更改用户新登录shell
id [用户名]			      # 查看用户所属组
usermod -aG 用户组 用户名		# 修改用户所属组，将指定用户加入指定用户组
```

| 选项 | 解释                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| -g   | 指定用户的组（需要组已存在，如已存在同名组，并须使用-g）<br />不指定：创建同名组并加入 |
| -d   | 指定用户Home路径<br />不指定：Home目录默认在：/home/用户名                             |
| -r   | 删除用户的Home目录<br />不使用-r，删除用户时，Home目录保留                             |
| -aG  | 修改用户所属组                                                                         |

### 用户组管理

`root账户下使用`

```sh
groupadd 用户组名	# 创建用户组
groupdel 用户组名	# 删除用户组
getent group	# 查看所有用户组	# 信息介绍 -> 组名称:组认证(显示为x):组ID
```

## 权限

```bash
r	# 可读
w	# 可写
x	# 可执行
```

### chmod

`修改文件、文件夹的权限信息，只有文件、文件夹的所属用户或root用户可以修改`

```sh
chmod [-R] 权限 文件或文件夹
# 示例
chmod u=rwx,g=rx,o=x hello.txt	# 将文件权限修改为：rwxr-x--x
chmod -R u=rwx,g=rx,o=x test	# 将文件夹test以及文件夹内全部内容权限设置为：rwxr-x--x
```

| 选项 | 解释                               |
| ---- | ---------------------------------- |
| -R   | 对文件夹内的全部内容应用同样的操作 |
| u    | 所属用户权限                       |
| g    | 用户组权限                         |
| o    | 其他用户权限                       |

快捷修改权限方法

```sh
0:无任何权限, x:1, w:2, r:4
chmod 751 hello.txt
# 数字解析
第一位：用户权限
第二位：用户组权限
第三位：其他用户权限
```

### chown

`修改文件、文件夹的所属用户、用户组`

```sh
chown [-R] [用户][:][用户组] 文件或文件夹
# 示例
chown root hello.txt 将hello.txt所属用户修改为root
chown :root hello.txt 将hello.txt所属用户组修改为root
chown root:itheima hello.txt 将hello.txt所属用户修改为root，用户组修改为itheima
chown -R root test 将文件夹test所属用户修改为root并对文件夹内全部内容应用同样规则
```

| 选项   | 解释                           |
| ------ | ------------------------------ |
| -R     | 对文件夹内全部内容应用相同规则 |
| 用户   | 修改所属用户                   |
| 用户组 | 修改所属用户组                 |
| :      | 分隔用户和用户组               |

## ==日常==

## 下载

### wget

```sh
wget [-b] url
# 示例
wget -b https://archive.apache.org/dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz
```

| 选项 | 解释                                             |
| ---- | ------------------------------------------------ |
| -b   | 后台下载，会将日志写入当前工作目录的wget-log文件 |
| url  | 下载链接                                         |

### curl

`发送http网络请求，可用于：下载文件、获取信息等`

```sh
curl [-O] url
# 示例
curl cip.cc	# 通过此网站查看本机信息
curl -O https://archive.apache.org/dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz
```

| 选项 | 解释                                                    |
| ---- | ------------------------------------------------------- |
| -O   | 用于下载文件，当url是下载链接时，可以使用此选项保存文件 |
| url  | 发起请求的网络地址                                      |

## 安装-卸载

```bash
sudo dpkg [-i | -r] package_name.deb	# 安装-卸载
sudo dpkg --purge package_name	# 卸载软件包+配置文件

sudo apt [update | upgrade]		# 更新-升级
apt [-y] [install | remove | search] 软件名称	# 安装-卸载-搜索
sudo dpkg --get-selections | grep ‘软件相关名称’	# 查找软件包名
sudo apt purge package_name		# 卸载软件包+配置文件
sudo apt autoremove		# 清除不需要的依赖

sudo apt-get upgrade
sudo apt-get install package_name	# 安装-升级特定软件包
sudo apt-get remove package_name	# 卸载
sudo apt-get clean	# 清理缓存

yum [-y] [install | remove | search] 软件名称	# 安装-卸载-搜索
```

## 环境变量

`查看环境变量（以键值对形式存在）`

### env

```sh
env	# 查看环境变量
# 示例
env | grep PATH	# 根据PATH查看对应的键值对
```

### export

`自定义变量`

```sh
export 变量名=变量值
```

**永久生效**

1. 配置：
   针对当前用户生效，配置在当前用户：`~/.bashrc`
   针对所有用户生效，配置在系统：`/etc/profile`
2. 生效（立刻或重新ssh连接生效）：

   ```sh
   source 配置文件
   ```

**任何地方都能使用的小脚本**

```
写一个小脚本（如：echo "cnm"）
给脚本加上执行权限（chmod）
给脚本配置环境变量路径（export ${PATH}:脚本所在文件夹）（可以配置到当前用户或系统中）
从此可以在任何地方使用此脚本
```

## 上传-下载

### rz-sz

`上传、下载`

```sh
yum -y install lrzsz
```

```sh
sz 要下载到本地的文件	# 下载
rz					  # 上传，弹出文件夹，选择文件进行上传
```

## 压缩-解压

### tar

`.tar	(tarball)归档文件，简易封装`
`.gz	(.tai.gz/.gz格式压缩文件)极大压缩体积`

```sh
tar [-c -v -x -f -z -C] 参数1 参数2 ... 参数N
# 示例（压缩）
tar -cvf test.tar 1.txt 2.txt 789.txt hadoop-3.3.0.tar.gz		# 简单封装
tar -zcvf test.tar.gz 1.txt 2.txt 789.txt hadoop-3.3.0.tar.gz	# 压缩【.gz也行】
# 示例（解压）
tar -xvf test.tar -C /home/jzls/		# 简单拆封
tar -zxvf test.tar.gz -C /home/jzls/	# 解压【.gz也行】
```

| 选项 | 解释                                                              |
| ---- | ----------------------------------------------------------------- |
| -c   | 创建压缩文件，用于压缩模式                                        |
| -v   | 显示压缩、解压过程，用于查看进度                                  |
| -x   | 解压模式                                                          |
| -f   | 要创建的文件 / 要解压的文件。-f选项必须在所有选项位置处于最后一个 |
| -z   | gzip模式，不使用-z就是普通的tarball格式，一般放在第一个           |
| -C   | 选择解压的目的地，用于解压模式                                    |

### zip-unzip

`压缩-解压`

```sh
zip [-r] 参数 参数1 ... 参数N
# 示例
zip -r test1.zip test 1.txt 2.txt hadoop-3.3.0.tar.gz	# 带文件夹记得用-r
```

| 选项    | 解释                                   |
| ------- | -------------------------------------- |
| -r      | 被压缩的包含文件夹时使用，同rm、cp效果 |
| 参数    | 压缩包名                               |
| 参数1-N | 被压缩的文件/文件夹                    |

```sh
unzip [待解压文件] [-d [路径]]
# 示例
unzip test.zip -d test/	# 不指定路径默认解压到当前文件夹
```

| 选项 | 解释                              |
| ---- | --------------------------------- |
| -d   | 指定被解压去的位置，同tar的-C选项 |
| 路径 | 解压到指定路径                    |

## 关机-重启

```bash
sudo shutdown -h now
sudo reboot
```

## ==其他==

## ln软链接

`创建软链接，类似windows的快捷方式`

```sh
ln -s 参数1 参数2
# 示例
ln -s /etc/yum.conf ~/yum.conf
ln -s /etc/yum ~/yum
```

| 选项  | 解释                 |
| ----- | -------------------- |
| -s    | 创建软连接           |
| 参数1 | 被链接的文件或文件夹 |
| 参数2 | 要链接去的目的地     |

## 快照

## 驱动安装

```bash
sudo apt-get purge '^nvidia-.*'
sudo apt-get autoremove
sudo apt-get clean

sudo ubuntu-drivers autoinstall
```

## 注意

### ssh断连

[Linux SSH 连接在一段时间内没有活动时可能会自动断开，怎么办？-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2321628)

**使用 SSH 客户端选项**

在使用 SSH 客户端连接服务器时，可以使用命令行选项来设置连接超时时间。例如，可以使用 `-o` 选项来指定 `ServerAliveInterval` 和 `ServerAliveCountMax` 的值：

```sh
ssh -o ServerAliveInterval=600 -o ServerAliveCountMax=3 user@hostname
```

这会覆盖配置文件中的相应设置，对于特定的连接非常有用。

## Docker

`官方安装指南（推荐）：https://docs.docker.com/engine/install/centos/`

### 卸载旧版docker

```sh
yum remove docker \
	docker-client \
	docker-client-latest \
	docker-common \
	docker-latest \
	docker-latest-logrotate \
	docker-logrotate \
	docker-engine
```

### 安装docker

#### 卸载

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

#### 配置docker源

```sh
# 安装yum工具包
yum install -y yum-utils
# 添加 Docker 的阿里云镜像源
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 修改 docker-ce.repo 文件以使用阿里云的镜像
sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
# 更新缓存
sudo yum makecache fast
```

```bash
sudo apt update
sudo apt upgrade
sudo apt-get install ca-certificates curl gnupg lsb-release	# 依赖包
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -	# docker官方的GPG密钥
# 密钥过期应对方法
cd /etc/apt
sudo cp trusted.gpg trusted.gpg.d

sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"	# 添加软件源
```

#### 安装docker

```sh
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

##### docker支持GPU

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit	# 安装 NVIDIA Container Toolkit 软件包
sudo nvidia-ctk runtime configure --runtime=docker	# 修改/etc/docker/daemon.json主机上的文件，以便 Docker 可以使用 NVIDIA 容器运行
sudo systemctl restart docker	# 重启docker
```

#### 启动和校验

```sh
# 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
```

#### 配置镜像源

```sh
# 创建目录
mkdir -p /etc/docker

# 复制内容，注意把其中的镜像加速地址改成你自己的
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.1panel.live",
        "https://k-docker.asia",
        "https://docker.1ms.run"
    ]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker【Job for docker.service failed because the control process exited with error code. See "systemctl status docker.service" and "journalctl -xe" for details.】
systemctl restart docker
```

### 基本命令

`官方文档：https://docs.docker.com/reference/`
`Dockerhub：https://hub.docker.com/`

<img src="./Linux.assets/image-20240903184359357-1729245905757-106-1731284955034-1-1731284960645-6.png" alt="image-20240903184359357" style="zoom:67%;" />

<img src="./Linux.assets/image-20240903184359521-1729245905757-105-1731284955034-2-1731284960645-5.png" alt="image-20240903184359521" style="zoom:67%;" />

```sh
"""镜像"""
docker pull	 <image_name>:<tag>	# 拉取镜像
docker push  <repository>/<image_name>:<tag>	# 推送到镜像仓库
# 查看本地所有docker镜像
docker images
# 删除docker镜像
docker rmi <image_name>:<tag>
docker rmi <image_id>
# 通过dockerfile构建docker镜像
docker build -t myimage:latest .
    -t：指定镜像标签。
    .：当前目录的 Dockerfile（可以指定其他路径）
# 保存 Docker 镜像为 tar 文件。
docker save -o <path_to_tar_file> <image_name>:<tag>
# 从 tar 文件加载 Docker 镜像。
docker load -i qinglong.tar
"""镜像->容器"""
# 从本地镜像创建docker容器（没必要重复创建容器）
docker run -d --gpus all -v /opt/ai/ollama:/root/.ollama -p 5700:5700 --name qinglong --restart unless-stopped whyour/qinglong:latest
    -d：后台运行容器
	--gpus all: 使用所有gpu运行容器
    -p <host_port>:<container_port>：端口映射。
    -v <host_path>:<container_path>：文件挂载。
    --name <container_name>：指定容器名称。
    --restart unless-stopped：容器崩溃后自动重启。
"""容器"""
# 查看docker容器进程(-a为所有容器)
docker ps -a
# 运行docker容器
docker start <container_name_or_id>
# 停止docker容器
docker stop <container_name_or_id>
# 删除一个或多个容器（容器必须已停止）
docker rm <container_name_or_id>
# 查看docker容器日志
docker logs	<container_name_or_id>
docker logs -f qinglong  # 实时查看日志
docker logs --tail 100 qinglong  # 查看最后 100 行日志
# 在运行中的容器内执行命令
docker exec -it <container_name_or_id> /bin/bash
	-it：交互模式和分配终端。
```
