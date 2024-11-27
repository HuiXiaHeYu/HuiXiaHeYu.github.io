---
title: Vscode的路径问题
createTime: 2024/11/22 20:40:47
permalink: /article/rg5kesd1/
---
> 参考：https://blog.csdn.net/weixin_39278265/article/details/119661991
>
> 参考：How to correctly set PYTHONPATH for Visual Studio Code https://stackoverflow.com/questions/53653083/how-to-correctly-set-pythonpath-for-visual-studio-code

我使用的方法

直接在launch.json上加上：

```bash
"env": {"PYTHONPATH": "${workspaceFolder}${pathSeparator}${env:PYTHONPATH}"},
```

![img](./Vscode%E7%9A%84%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98.assets/6c0d11e5f792b787716488c36db1afce.png)

