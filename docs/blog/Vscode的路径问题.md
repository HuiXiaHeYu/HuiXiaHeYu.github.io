---
title: Vscode的路径问题
createTime: 2024/11/22 20:40:47
permalink: /article/rg5kesd1/
---
我使用的方法

直接在launch.json上加上：

```bash
"cwd": "${fileDirname}",
```

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python 调试程序: 动态参数",
            "type": "debugpy",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "cwd": "${fileDirname}",
            "args": [
                "${command:pickArgs}"
            ]
        },
        {
            "name": "Python 调试程序: 固定参数",
            "type": "debugpy",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "cwd": "${fileDirname}",
            "args": [
                "--name", "cifar10-100_500", 
                "--dataset", "cifar10",
                "--model_type", "ViT-B_16", 
                "--pretrained_dir", "checkpoint/ViT-B_16.npz",
            ]
        },
    ]
}
```

