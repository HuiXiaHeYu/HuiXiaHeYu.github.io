---
title: Vscode便捷代码片段
createTime: 2024/11/28 09:40:57
permalink: /article/sp340bzm/
---
## 使用方法

- **`prefix`**: 触发片段的快捷前缀。
- **`body`**: 展开的代码片段内容，可包含占位符（如 `$1`, `$2` 等）和最终光标位置（`$0`）。
- **`description`**: 对片段的简要描述。

重启编辑器后，输入相应的 `prefix` 即可触发代码片段自动补全功能。

```json
{
    "Print Statement": {
        "prefix": "print",
        "body": [
            "print(${1:\"Hello, World!\"})",
            "$0"
        ],
        "description": "Insert a print statement"
    },
    "For Loop": {
        "prefix": "forloop",
        "body": [
            "for ${1:element} in ${2:iterable}:",
            "    ${3:# do something}",
            "$0"
        ],
        "description": "Insert a for loop"
    },
    "If Statement": {
        "prefix": "if",
        "body": [
            "if ${1:condition}:",
            "    ${2:# code block}",
            "$0"
        ],
        "description": "Insert an if statement"
    },
    "Function Definition": {
        "prefix": "def",
        "body": [
            "def ${1:function_name}(${2:args}):",
            "    ${3:# function body}",
            "$0"
        ],
        "description": "Insert a function definition"
    },
    "Class Definition": {
        "prefix": "class",
        "body": [
            "class ${1:ClassName}(${2:object}):",
            "    def __init__(self, ${3:args}):",
            "        ${4:# initialization code}",
            "$0"
        ],
        "description": "Insert a class definition"
    },
    "Import Module": {
        "prefix": "import",
        "body": [
            "import ${1:module}",
            "$0"
        ],
        "description": "Import a module"
    },
    "List Comprehension": {
        "prefix": "listcomp",
        "body": [
            "[${1:expression} for ${2:element} in ${3:iterable} ${4:if condition}]",
            "$0"
        ],
        "description": "Insert a list comprehension"
    }
}

```



## 设置fileheader

1. 进入vscode选择文件，首选项下的用户代码片段

<img src="./Vscode%E4%BE%BF%E6%8D%B7%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.assets/c0a5899618c140b9a6f5569e71cc5e8a.webp" alt="3.png" style="zoom:67%;" />

2. 弹出框输入Python后回车

<img src="./Vscode%E4%BE%BF%E6%8D%B7%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.assets/e6992113557543a8aa635a689847ae69.webp" alt="4.png" style="zoom:67%;" />

3. 弹出文件（python.json）输入如下内容，原有内容不要修改或者删除

```json
{
	// Place your snippets for python here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"HEADER":{"prefix": "header",
	"body": [
		"#!/usr/bin/env python",
		"# -*- coding: utf-8 -*-",
		"\"\"\"",
		"@Author  :   HuiXiaHeYu ",
		"@Time    :   $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
		"@Site    :   https://HuiXiaHeYu.github.io",
		"@Desc    :   Entities should not be multiplied unnecessarily.",
		"\"\"\"",
		"",
		
		"$0"
		],
	}
}
```

4. 在新建python文件中，头部输入header，然后回车就在文件中加入了你想使用的头部内容
