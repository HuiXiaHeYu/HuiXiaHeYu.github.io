---
title: Mac终端配置
createTime: 2025/06/28 17:48:10
permalink: /notes/others/5dck49wo/
---
```sh
brew install zsh
chsh -s /bin/zsh
```

## iterm2

`使用iterm2来替代内置终端，实现多种自定义操作`

```sh
brew install iterm2
```

调整配色：preferences->profiles->colors->color presets

- 推荐[到online gallery去下载并导入]：Ayu Mirage、Dracula

调整字体：preferences->profiles->text->fort

## oh-my-zsh

### 安装与卸载

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
国内源：https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh
卸载：cd ~/.oh-my-zsh/tools && sh uninstall.sh
```

下载之后进入目录可以看到 `plugins`与 `themes`文件夹

### 主题

#### powerlevel10k

```sh
# 安装
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
# 修改zsh配置
vim ~/.zshrc
ZSH_THEME="powerlevel10k/powerlevel10k"
# 修改主题配置
pk10 configure
```

### 插件

`在.zshrc进行配置`

```sh
# zsh-autosuggestions 自动补全
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# zsh-syntax-highlighting 语法高亮
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# 修改zsh配置
vim ~/.zshrc
plugins=(其他的插件 zsh-autosuggestions zsh-syntax-highlighting)
```

## vim

### 插件

`在.vimrc进行配置`

```sh
syntax on       "语法高亮
set hlsearch    "查找结果 高亮显示
colorscheme desert      "配色方案
set nocompatible        "关闭兼容模式
set backspace=indent,eol,start  "解决vim 退格键不能用
```

## 设置proxy与conda

```sh
# ====================设置代理====================
export http_proxy="http://127.0.0.1:1087"
export https_proxy="http://127.0.0.1:1087"
export all_proxy="socks5://127.0.0.1:1080"

# ===================conda 激活===================
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/miniconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```
