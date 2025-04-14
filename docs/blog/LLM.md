---
title: LLM
createTime: 2025/03/24 09:26:50
permalink: /article/x3feqx82/
---
## 概述

|          | 预训练                                             | 有监督微调                                       | 奖励建模                                 | 强化学习                             |
| -------- | -------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- | ------------------------------------ |
| 数据集合 | 原始数据<br />[==数千亿==单词：图书、百科、网页等] | 标注用户指令<br />[==数万==用户指令和对应的答案] | 标注对比对<br />[==数万量级==标注对比对] | 用户指令<br />[==十万量级==用户指令] |
| 算法     | 语言模型训练                                       | 语言模型训练                                     | 二分类模型                               | 强化学习方法                         |
| 模型     | 基础模型                                           | SFT模型                                          | RM模型                                   | RL模型                               |
| 资源需求 | 1000+GPU[月]                                       | 1-100GPU[天]                                     | 1-100GPU[天]                             | 1-100GPU[天]                         |



## 参数调整策略

### token数量

与回复量呈正相关



### 调用ollama代码

```py
import requests

def query_ollama(prompt, model="deepseek-r1:32b", host="http://10.201.8.244:11434"):
    url = f"{host}/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False  # 设置为 True 可流式输出
    }
    
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # 检查请求是否成功
        return response.json()["response"]
    except Exception as e:
        return f"Error: {e}"

# 示例调用
prompt = "解释量子力学的基本概念"
response = query_ollama(prompt)
print(response)

import json
import requests

def stream_response(prompt):
    response = requests.post(
        "http://10.201.8.244:11434/api/generate",
        json={"model": "qwq:32b", "prompt": prompt, "stream": True},
        stream=True
    )
    for line in response.iter_lines():
        if line:
            data = json.loads(line.decode("utf-8"))
            print(data.get("response", ""), end="", flush=True)

stream_response("如何学习Python？")
```

