## 目标检测经典方法



![image-20241118211701591](./Yolo%E7%B3%BB%E5%88%97.assets/image-20241118211701591.png)

![image-20241118212947353](./Yolo%E7%B3%BB%E5%88%97.assets/image-20241118212947353.png)

### One-Stage（单阶段）

`直接得到检测结果`

> 如：Yolo系列
>
> 优点：速度快，适合做实时监测任务
>
> 缺点：效果稍劣

### Two-Stage（两阶段）

`第一阶段生成预选结果，第二阶段通过预选结果得到最终结果`

> 如：Faster-Rcnn、Mask-Rcnn系列
>
> 优点：效果不错
>
> 缺点：速度较慢（5fps）

Mask-Rcnn：

<img src="./Yolo%E7%B3%BB%E5%88%97.assets/image-20241118212752057.png" alt="image-20241118212752057" style="zoom:67%;" />

### 指标解析

#### IOU

`Intersection over Union，交集和并集的比值`

> 越高越重合模型越好

<img src="./Yolo%E7%B3%BB%E5%88%97.assets/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20241118214229.png" alt="微信截图_20241118214229" style="zoom:65%;" />

#### mAP

##### 评判检测效果

> 精度（Precision）【查准率】：检测到的样本有多少是正确的？模型挑出来的西瓜有多少比例是好瓜？
>
> 召回率（Recall）【查全率】：正确样本有多少被检测出来？所有的好瓜中有多少比例是被模型挑出来的？
>
> 置信度阈值（p-threshold）：有多少概率相信是正确的？

|                      | 相关/正类                                     | 无关/负类                                     |
| -------------------- | --------------------------------------------- | --------------------------------------------- |
| 被检测到（Retrived） | true positives（TP：实际正类，被检测为正类）  | false positives（FP：实际负类，被检测为正类） |
| 未被检测到           | false negatives（FN：实际正类，被检测为负类） | true negatives（TN：实际负类，被检测为负类）  |

$$
Precision=\frac{TP}{TP+FP}=\frac{TP}{all \quad detections}\\ Recall=\frac{TP}{TP+FN}=\frac{TP}{all \quad ground \quad truths}
$$

##### PR曲线

`Precision-Recall Curve`

> 评估分类模型在不同阈值下精确率和召回率之间的权衡关系
>
> 怎么画？在不同阈值下的精度-召回率数据
>
> - 高阈值（查得准）：高精度、低召回率
> - 低阈值（查的全）：低精度、高召回率

<img src="./Yolo%E7%B3%BB%E5%88%97.assets/image-20241119090253289.png" alt="image-20241119090253289" style="zoom:70%;" />



##### AP

> 1. 所有图片的某一类
> 2. PR曲线下的面积：对不同召回率点上精度的平均（通常算水平最大精度的线下的面积）

$$
AP=\int_0^1P(R)dR=\sum_{k=0}^nP(k)\Delta R(k)
$$

##### mAP

`每次不可能只检测到一种，在COCO数据库有80种类别， 所以mAP就是每一种物体的AP算完后的平均值。`

> 1. 所有图片的多类别
> 2. 多个物体类别的AP的平均

$$
mAP=\frac{\sum_{i=1}^cAP_i}{C}
$$

## V1

`You Only Look Once`

> - 将检测问题转化为回归问题
> - 可对视频进行实时检测





## V2



## V3



## V4



## V5



## V7



## 基于transformer的detr目标检测算法

