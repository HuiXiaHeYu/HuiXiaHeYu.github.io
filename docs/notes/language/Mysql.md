---
title: Mysql
createTime: 2024/11/10 17:37:59
tags:
 - Mysql
permalink: /notes/language/h6np1l13/
---
## 下载 & 安装

### win

https://downloads.mysql.com/archives/community/

版本：5.7.31

1. 解压到目标路径并再目标路径下配置`my.ini`文件

```sql
[mysqld]

# port
port=3306

# set basedir to your installtion path
basedir=D:\\mysql-5.7.31-winx64

# set datadir to the location of your data directory
datadir=D:\\mysql-5.7.31-winx64\\data
```

多个配置文件的优先级：

```bash
D:\mysql-5.7.31-winx64\bin\mysqld.exe --help --verbose
```

2. 初始化：创建data目录并创建初始数据（如：默认账户`root（无密码）`）

```bash
D:\mysql-5.7.31-winx64\bin\mysqld.exe --initialize-insecure
```

初始化报错 -> 安装补丁

## 启动

- 临时启动

```bash
D:\mysql-5.7.31-winx64\bin\mysqld.exe
```

- 制作系统服务启动

```bash
D:\mysql-5.7.31-winx64\bin\mysqld.exe --install mysql57		# 制作mysql57系统服务
D:\mysql-5.7.31-winx64\bin\mysqld.exe --remove mysql57		# 删除mysql57系统服务
```

1. 命令行方式启动

```sql
net start mysql57	# 启动mysql57服务
net stop mysql57	# 停止mysql57服务
```

2. 手动启动

```
任务管理器 -> 服务 -> ctrl+f -> mysql57 -> 启动/其他
```

## 内置客户端

`可以将路径加入环境变量后终端使用 mysql 进行使用`

```bash
"""登录 & 密码"""
D:\mysql-5.7.31-winx64\bin\mysql.exe -h [host] -P [port] -u [username] -p	# 密码默认为空
set password = password("{password}")	# 设置密码
exit;	# 退出
```

### 数据库操作

```sql
# 进入指定数据库
use 数据库名;

# 0. 查看数据库
show databases;
# 1. 增加数据库(数据库名、编码、排序规则)
create database 数据库名 DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
# 2. 删除数据库
drop database 数据库名;
```

### 数据表操作

```sql
# 0. 查看数据表（当前数据库中）
show tables;
# 1. 增加数据表
create table 表名(
	列名 类型,
    列名 类型,
	列名 类型
)default charset=utf8;
# 示例（一个表只能由一个自增列，一般都是主键）：
create table tb2(
	id int not null auto_increment primary key,	-- 不允许为空 & 主键 & 自增
    name varchar(16) not null,	-- 不允许为空
    email varchar(32) null,	-- 运行为空（默认）
    age int default 3	-- 插入数据时，如果不给age列设置值，默认值：3
)default charset=utf8;
```

```sql
# 2. 删除和清空
drop table 表名;		# 删除表
delete from 表名;		# 清空表
truncate table 表名;	# 清空表（速度快，无法回滚撤销 ）
```

### ---列操作

```sql
# 0. 查看表
desc 表名;
# 1. 添加列
alter table 表名 add 列名 类型;
alter table 表名 add 列名 类型 DEFAULT 默认值;
alter table 表名 add 列名 类型 not null default 默认值;
alter table 表名 add 列名 类型 not null primary key auto_increment;
# 2. 删除列
alter table 表名 drop column 列名;
# 3. 修改列
	# 修改类型
alter table 表名 modify column 列名 类型;
	# 修改类型+名称
alter table 表名 change 原列名 新列名 新类型;
alter table tb change id id int not null;
alter table tb change id id int not null default 5;
alter table tb change id id int not null primary key auto_increment;
alter table tb change id id int not null;	-- 允许为空，删除默认值，删除自增
	# 修改默认值
ALTER TABLE 表名 ALTER 列名 SET DEFAULT 1000;
	# 删除默认值
ALTER TABLE 表名 ALTER 列名 DROP DEFAULT;
```

### ---行操作

```sql
# 0. 查看数据行
select * from 表名;
# 1. 增加指定列的数据行
insert into 表名(列名1,列名2,列名3) value(值1,值2,值3);

# 示例
insert into L1(id,uid,zid) values(1,2,3);
insert into L2(salary) values(5.289);
```

### 列类型

#### 整数

`int[(m)] [unsigned] [zerofill]`

```sql
int				表示有负号，取值范围：-2147483648 ~ 2147483647
int unsigned 	表示无符号，取值范围：0 ~ 4294967295
int(5)zerofill 	仅用于显示，当不满足5位时，按照左边补0，例如：00002；满足时，正常显示
```

`tinyint[(m)] [unsigned] [zerofill]`

```sql
有符号，取值范围：-128 ~ 127
无符号，取值范围：0 ~ 255
```

`bigint[(m)] [unsigned] [zerifill]`

```sql
有符号，取值范围：-9223372036854775808 ~ 9223372036854775807
无符号，取值范围：0 ~ 18446744073709551615
```

#### 小数

`decimal[(m[,d])] [unsigned] [zerofill]`

```sql
准确的小数值，m是数字总个数（负号不算），d是小数点后个数。m最大值为65，d最大值为30

# 例如：
create table L2(
	id int not null primary key auto_increment,
	salary decimal(8,2)
)default charset=utf8;
```

`FLOAT[(M,D)]  [UNSIGNED] [ZEROFILL]`

```sql
单精度浮点数，非准确小数值，m是数字总个数，d是小数点后个数
```

`DOUBLE[(M,D)] [UNSIGNED] [ZEROFILL]`

```sql
双精度浮点数（非准确小数值），m是数字总个数，d是小数点后个数
```

#### 字符串

`char(m)`

```sql
定长字符串，m代表字符串的长度，最多可容纳255个字符。
定长的体现：即使内容长度小于m,也会占用m长度。例如：char(5),数据是：yes,底层也会占用5个字符；如果超出m长度限制（默认MySQL是严格模式，所以会报错）。
	如果在配置文件中加入如下配置，
		sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
	保存并重启，此时MySQL则是非严格模式，此时超过长度则自动截断（不报错）
注意：默认底层存储是固定的长度（不够则用空格补齐），但是查询数据时，会自动将空白去除。如果想要保留空白，在sgl-mode中加入PAD_CHAR_TO_FULL LENGTH即可。
查看模式sql-mode，执行命令：show variables like 'sqlmode';
一般适用于：固定长度的内容

例如：
create table L3(
    id int not null primary key auto increment,
    name varchar(5),
    depart char(3)
)default charset=utf8;
insert into L3(name,depart)values("alexsb","sbalex");
```

`varchar(m)`

```sql
变长字符串，m代表字符串的长度，最多可容纳65535个字节。
变长的体现：内容小于时，会按照真实数据长度存储；如果超出m长度限制（（默认MySOL是严格模式，所以会报错)。
	如果在配置文件中加入如下配置，
		sql-mode="NO AUTO CREATE USER,NO ENGINE SUBSTITUTION"
	保存并重启，此时MySOL则是非严格模式，此时超过长度则自动截断（不报错）

例如：
create table L3(
    id int not null primary key auto_increment,
    name varchar(5),
    depart char(3)
)default charset=utf8;
```

`text`

```sql
text数据类型用于保存变长的大字符串，可以组多到65535(2**16-1)个字符。
一般情况下，长文本会用text类型。例如：文章、新闻等。

# 示例
create table L4(
    id int not null primary key auto_increment,
    title varchar(128),
    content text
)default charset=utf8;
```

`medilmtext`

```sql
A TEXT column with a maximum length of 16,777,215 (2**24 1)characters.
```

`longtext`

```sql
A TEXT column with a maximum length of 4,294,967,295 or 4GB (2**32 1)
```

#### 时间

`datetime`

```sql
YYYY-MM-DDHH:MM:sS(1000-01-0100:00:00/9999-12-3123:59:59)
```

`timestamp`

```sql
YYYY-MM-DD HH:MM:SS (1970-01-0100:00:00/2037年)
```

```sql
对于TIMESTAMP,它把客户端插入的时间从当前时区转化为UTC(世界标准时间)进行存储，查询时，将其又转化为客户端当前时区进行返回。
对于DATETIME，不做任何改变，原样输入和输出。
```

`date`

```sql
YYYY-MM-DD(1000-01-01/9999-12-31)
```

`time`

```sql
HH:MM:SS('-838:59:59'/'838:59:59')
```



## 忘记密码

1. 修改配置文件，添加配置

```sql
...
skip-grant-tables=1
...
```

2. 重启mysql
3. 修改密码

```sql
use mysql;
update user set authentication_string = password('新密码'),password_last_changed=now() where user='root';
```

4. 修改配置文件

```sql
...
# skip-grant-tables=1
...
```

5. 重启mysql

## py操作

```py
"""
查看操作使用cursor.fetchall()得到返回
增删改使用conn.commit()进行执行
"""
import pymysql

user = "root"
passwd = "password"
database_name = "day25db"

# 连接mysql
conn  = pymysql.connect(host="127.0.0.1", port=3306, user=user, passwd=passwd, charset="utf8")
cursor = conn.cursor()  # 创建游标

# 1.查看数据库
cursor.execute("show databases") # 发送指令
result = cursor.fetchall()  # 获取指令结果
print("数据库：", result)

# 2.创建数据库（增加、删除、修改）
# cursor.execute(f"create database {database_name} DEFAULT CHARSET utf8 COLLATE utf8_general_ci")
# cursor.execute(f"drop database {database_name}")
# cursor.execute("")
# conn.commit()

# 3.查看数据库
cursor.execute("show databases") # 发送指令
result = cursor.fetchall()  # 获取指令结果
print("数据库：", result)

# 4.进入数据库，查看数据表
cursor.execute(f"use {database_name}")
cursor.execute("show tables")
result = cursor.fetchall()
print("数据表：", result)

# 5.关闭连接
cursor.close()
conn.close()
```

