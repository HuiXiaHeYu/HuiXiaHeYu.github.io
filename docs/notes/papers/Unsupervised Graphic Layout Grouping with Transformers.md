This WACV paper is the Open Access version, provided by the Computer Vision Foundation. Except for this watermark, it is identical to the accepted version; the final published version of the proceedings is available on IEEE Xplore.  

# Unsupervised Graphic Layout Grouping with Transformers  

Jialiang $\mathrm { { Z h u ^ { 1 } } }$ , Danqing Huang2, Chunyu Wang2, Mingxi Cheng Ji $\mathrm { L i ^ { 2 } }$ , Han $\mathrm { H u ^ { 2 } }$ , Xin Geng1, Baining Guo1,2\* 1Southeast University, 2Microsoft Research Asia  

jialiang.zhu@outlook.com,dahua@microsoft.com,chnuwa@microsoft.com,mingxicheng@microsoft.com jili5@microsoft.com,hanhu@microsoft.com,xgeng@seu.edu.cn,bainguo@microsoft.com  

# Abstract  

Graphic design conveys messages through the combination of text, images and other visual elements. Unstructured designs such as overloaded social media graphics may fail to communicate their intended messages effectively. To address this issue, layout grouping offers a solution by organizing design elements into perceptual groups. While most methods rely on heuristic Gestalt principles, they often lack the context modeling ability needed to handle complex layouts. In this work, we reformulate the layout grouping task as a set prediction problem. It uses Transformers to learn a set of group tokens at various hierarchies, enabling it to reason the membership of the elements more effectively. The self-attention mechanism in Transformers boosts its context modeling ability, which enables it to handle complex layouts more accurately. To reduce annotation costs, we also propose an unsupervised learning strategy that pre-trains on noisy pseudo-labels induced by a novel heuristic algorithm. This approach then bootstraps to self-refine the noisy labels, further improving the accuracy of our model. Our extensive experiments demonstrate the effectiveness of our method, which outperforms existing state-of-the-art approaches in terms of accuracy and efficiency.  

# 1. Introduction  

Layout grouping aims to organize the elements in a graphic design into perceptual groups, forming a hierarchical structure for effective message delivery. For example in Fig. 1, elements in the slide can be grouped at two different levels: (a) the text box along with the diagram can be assigned into one large group; or (b) besides the title box, the text box on the left and the complicated diagrams composed of many elements can be assigned into two separate groups. By parsing the group structure, we can enable many potential applications in graphic design intelligence, such as graphic design understanding and summarizing, content extraction and generation, graphic design beautification and animation creation.  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/07200f402676977ed6a944a73ecbce47b50085fcdd568a68aaf4c5d78967bc91.jpg)  
Figure 1. An example slide with groupings in two levels, (a) large coarse groups to (b) small fine-grained groups. Elements outlined with the same color rectangle represent one group. Transparent overlays in various colors visualize distinct group regions.  

Layout grouping is challenging because of the combinatorial complexity of possible layout groups. The existing methods mainly use simple heuristics such as Gestalt laws [15] to parse the layout structures [4, 19, 24]. For example, proximity assumes that elements which are close in distance are more likely to be related and united, and vice versa. However, the lack of context modeling ability makes them less effective in handling complex designs. Recently, there have been some machine learning-based attempts to tackle this issue, such as those proposed in [25, 31], which predict the relatedness between pairs of elements and iteratively merge them into groups using a pre-defined threshold. While they show promising results, they are limited to training on pairwise labeled data due to the lack of available datasets with hierarchical group annotation. Moreover, the training objective of pairwise relatedness is not directly aligned with the goal of hierarchical grouping, and relying solely on threshold merging in post-processing cannot guarantee a reasonable grouping hierarchy.  

In this paper, we propose a highly performant approach for graphic layout grouping using the Transformer architecture. It learns a set of group tokens at various levels, to directly reason about the membership between each layout element and the group tokens. The group tokens are aware of the global context since they attend to all elements via the attention mechanism. Specifically, given a list of elements, our model progressively combines elements into groups with $L$ grouping layers. We use a set prediction loss which matches the predicted groups to the target groups using a bipartite graph. However, we find that this initial model barely converges during training. To address this, we incorporate explicit positional priors by enforcing each group token to predict the bounding box of the corresponding group. The mechanism allows the group tokens to focus on specific regions, resulting in faster convergence and better grouping results.  

We propose an approach to train the network in an unsupervised way. Firstly, we introduce a heuristic algorithm that utilizes the Gestalt principles to generate pseudo-labels, which recursively segments the elements based on their proximity to each other. Although the pseudo-labels may be incorrect in challenging cases, we find that they suffice to train a reasonable initial model. Then we adopt bootstrapping [5] to automatically refine the noisy labels and re-train the model. Particularly, after each epoch, we make grouping predictions using the current model. If the confidence of the predictions is larger than a threshold, we trust the predictions and use them to replace the original pseudo-labels. The threshold gradually decreases as the model becomes more accurate during training. We observe that the model can get accurate predictions on complex layouts, demonstrating the effectiveness of bootstrapping. The unsupervised training strategy allows the model to benefit from the large-scale unlabeled data.  

We construct a dataset of presentation slides for evaluation. We manually annotate the slides with each annotation being jointly reviewed by two people to ensure its quality. We compare our method with the baselines on this dataset. Besides, we also send the results to a group of people for human evaluation. Both quantitative and qualitative results show that our model achieves much better results. In particular, our method shows strong performance in handling complex layouts with many elements. Moreover, we conduct extensive ablation studies and will share some interesting observations in the experiment section.  

# 2. Related Work  

# 2.1. Visual Grouping  

We classify the existing methods into pixel-based and object-based ones. The former produces a hierarchical image representation. Some methods use hand-crafted features such as Gestalt cues (e.g., contour, texture and brightness) [22] and normalized cuts [1, 21, 26] to group pixels into superpixels. Recent approaches also use deep features for perceptual grouping. For example, [7,9] use CNN’s low resolution features for upsampling [17, 18] learn the multiscale deep graph features with LSTM. Furthermore, endto-end trainable models are proposed, such as DGM [16] with hierarchical graph operations and GroupViT [32] with Transformer-based layers.  

Beyond pixels, directly grouping objects is studied for graphic layouts. Several work target at grouping web pages [4, 33] which leverage rich structures inherited from the HTML DOM tree. Without such information, other work [11, 19, 20, 24, 33] implement heuristic parsing rules based on Gestalt laws (e.g., proximity, similarity) to identify the groupings. For example, [14] extract features to compute pairwise distance and iteratively combine objects with thresholds. More recent work are mostly learning-based. CanvasEmb [31] first pre-trains a large-scale unsupervised representation and then predicts the pairwise object relations by fine-tuning on a small annotated data. Similarly, Shi et al. [25] also train a model to predict the relatedness of object pairs. To recover the hierarchical structure, they recursively merge objects with relatedness score larger than an empirical threshold in the post-processing step. Different from the previous work, we propose an end-to-end trainable model to progressively group objects without the heavy cost of group label annotation.  

# 2.2. Graphic Design Layout Understanding  

Some work focus on element detection from pixel-based input, which separates the layout image into different element regions and classify their role (e.g., text, table, figure). Traditional approaches [6, 12, 27] propose algorithms with primitive heuristics to recursively merge pixel lines into element regions. Later work adopt neural network to automatically extract features for better detection [8, 28]. For a more systematic summary of related work, please refer to [2]. Besides detecting the elements, their inter-relationships are also very important in parsing and understanding the layout. Visual grouping studies how elements can be organized into a hierarchical structure for more effective message communication. This paper focus on this task and will introduce more in the next sections.  

# 3. Approach  

# 3.1. Task Formulation  

Each graphic layout is represented as a sequence of tokens $\{ e _ { i } \} _ { i = 0 } ^ { N }$ , where each token $e _ { i }$ contains a fixed set of properties $\{ p _ { i } ^ { k } \} _ { k = 0 } ^ { K }$ . The properties include type, position, color, font size, etc. The task is to organize the elements into groups in $L$ different levels where each level is responsible for one granularity and contains $G ^ { l }$ groups. Please note that $G ^ { l } > \bar { G ^ { l + 1 } }$ to ensure the fine-to-coarse granularities.  

According to the Gestalt psychology, grouping can be accomplished by considering but not limited to the following laws:  

• Proximity: Objects that are closer to one another are perceived to be more related than objects that are spaced farther apart.   
• Similarity: Objects that are similar in nature (such as size, shape, or color) tend to be grouped together.   
• Continuity: Objects that appear to be connected are grouped together. For example, lines and arrows can be indicators to connect elements.  

# 3.2. Grouping with Transformers  

An overview of the system is shown in Fig. 2. Our model consists of an element encoder and $L$ Transformer-based grouping layers.  

Element Encoder. We represent each element with propecratiensa(tie.ng.  htyeper,opoesrittyioenm)binedtdhienegsm $\{ \mathbf { p } ^ { k } \} _ { k = 0 } ^ { K }$ :space by con  

$$
\mathbf { e } _ { i } = \mathrm { M L P } ( \mathbf { p } _ { i } ^ { 1 } \oplus \mathbf { p } _ { i } ^ { 2 } \oplus \ldots \oplus \mathbf { p } _ { i } ^ { K } )
$$  

where $\oplus$ is the concatenation operator and MLP is a multilayer perceptron. For properties with categorical values such as type and color, we use the embedding matrix as the learning parameter. For properties with numerical values such as position and size, the positional encoding [30] is adopted.  

Grouping Layers. Inspired by GroupViT [32], each layer $l$ contains a Transformer-based block with $G ^ { l }$ learnable group tokens $\{ \mathbf { g } _ { i } ^ { l } \}$ . Element tokens $\{ \mathbf { e } _ { i } ^ { l } \}$ are concatenated with the group tokens into the self-attention for contextual representation learning:  

$$
\{ \mathbf { e } _ { i } ^ { l + 1 } \} \oplus \{ \mathbf { g } _ { j } ^ { l + 1 } \} = \mathrm { T r a n s f o r m e r } ( \{ \mathbf { e } _ { i } ^ { l } \} \oplus \{ \mathbf { g } _ { j } ^ { l } \} )
$$  

On top is an element-to-group cross attention which partitions elements $\{ \mathbf { e } _ { i } ^ { l } \}$ into $G ^ { l }$ groups and obtains the new element tokens $\{ { \bf e } _ { i } ^ { l + 1 } \}$ in the next layer:  

$$
\{ \mathbf { e } _ { i } ^ { l + 1 } \} = \mathrm { C r o s s A t t n } ( \{ \mathbf { e } _ { i } ^ { l } \} , \{ \mathbf { g } _ { j } ^ { l } \} )
$$  

Specifically the CrossAttn assigns each element token ${ \bf e } _ { i } ^ { l }$ to a group token $\mathbf { g } _ { j } ^ { l }$ with maximum score in the elementto-group attention matrix (i.e., $\mathrm { a r g m a x } _ { j \in G ^ { l } } ( A _ { i , j } ^ { l } ) )$ .  

Since the one-hot assignment operation via argmax is non-differentiable, we instead obtain the attention matrix using Gumbel-Softmax [10]:  

$$
A _ { i , j } ^ { l } = \frac { \exp ( W _ { q } \mathbf { \mathbf { g } } _ { j } ^ { l } W _ { k } \mathbf { \mathbf { e } } _ { i } ^ { l } + \gamma _ { j } ) } { \sum _ { h = 0 } ^ { G ^ { l } } \exp ( W _ { q } \mathbf { \mathbf { g } } _ { h } ^ { l } W _ { k } \mathbf { \mathbf { e } } _ { i } ^ { l } + \gamma _ { h } ) }
$$  

where $W _ { q }$ and $W _ { k }$ are the linear projection weights for group and element tokens respectively. $\left\{ \gamma _ { h } \right\}$ of groups $\{ 0 , \ldots , h , \ldots , G ^ { l } \}$ are i.i.d random samples drawn from the Gumbel(0, 1) distribution. We then apply the straightthrough trick in [29] to assign elements to corresponding groups:  

$$
\hat { A } ^ { l } = \mathsf { o n e - h o t } ( A _ { \mathrm { a r g m a x } } ^ { l } ) + A ^ { l } - \mathsf { s g } ( A ^ { l } )
$$  

where sg is the stop gradient operator. With the trick, $\hat { A } _ { i } ^ { l }$ has the one-hot value of assignment to a single group, and its gradient is equal to the one of $A _ { i } ^ { l }$ , which makes the attention matrix differentiable and end-to-end trainable. The elements in the next layer $l + 1$ can be obtained by merging all elements in each group in layer $l$ :  

$$
\mathbf { e } _ { i } ^ { l + 1 } = \mathbf { g } _ { j } ^ { l } + W _ { o } \frac { \sum _ { i } \hat { \mathbf { A } } _ { i j } ^ { l } W _ { v } \mathbf { e } _ { i } ^ { l } } { \sum _ { i } \hat { \mathbf { A } } _ { i j } ^ { l } }
$$  

where $W _ { v }$ and $W _ { o }$ are the learnable projection weights.  

For each layer, we set the following two learning objectives.  

Objective 1: Set Prediction. To train the model, we need to match the predicted groups to the target groups, which can be viewed as a set prediction problem. Inspired by recent end-to-end object detection framework [3], we conduct a bipartite graph matching with score function $s ( g _ { j } ^ { l } , \hat { g } _ { j } ^ { l } )$ which considers the number of overlap elements and the box IoU between a predicted group and a target group. The calculation of the score and the BCE loss $\mathcal { L } _ { s e t }$ are:  

$$
s ( g _ { j } ^ { l } , \hat { g } _ { j } ^ { l } ) = \beta _ { 1 } \frac { | g _ { j } ^ { l } \cap \hat { g } _ { j } ^ { l } | } { | g _ { j } ^ { l } | } + \beta _ { 2 } \mathrm { I o U } ( g _ { j } ^ { l } , \hat { g } _ { j } ^ { l } )
$$  

$$
\mathcal { L } _ { s e t } = [ e _ { i } ^ { l } \in g _ { j } ^ { l } ] \cdot \log ( A _ { i j } ^ { l } ) + ( 1 - [ e _ { i } ^ { l } \in g _ { j } ^ { l } ] ) \cdot \log ( 1 - A _ { i j } ^ { l } )
$$  

where $\{ \beta \}$ are the hyper-parameters to sum the two weights.  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/527f7b240f796f2201f7c609ddfeccf899ca2e6cb62c649c87d599f903c63a0c.jpg)  
Figure 2. The overview of our approach. (a): model architecture with fine-to-coarse grouping layers to progressively combine elements $\{ e \}$ with learnable group tokens $\{ g \}$ . (b): an example of the hierarchical grouping process, elements outlined with the same color rectangle represent one group, corresponding to the “group tokens” in (a).  

Objective 2: Anchor Prediction. In addition, we add an auxiliary prediction head to predict the box coordinate of each group (i.e., the minimum box covering all elements in the group) using the group token. By injecting explicit positional priors, this does not only help improve group token representation, but also eliminate the slow training convergence issue in set matching.  

$$
b b o x _ { j } ^ { l } = \mathrm { s i g m o i d } ( \mathrm { M L P } ( g _ { j } ^ { l } ) )
$$  

$$
\mathcal { L } _ { a n c h o r } = \lambda _ { 1 } | | b b o x _ { j } ^ { l } - { b \hat { b _ { O } } } { x _ { j } } ^ { l } | | _ { 1 } + \lambda _ { 2 } \mathcal { L } _ { i o u } ( b b o x _ { j } ^ { l } , b { \hat { b o x } _ { j } } ^ { l } )
$$  

We use a linear combination of the $L _ { 1 }$ loss and the generalized IoU loss [23] which is scale-invariant. In total, our objective contains two losses: (1) set prediction loss; (2) group anchor loss:  

$$
\mathcal { L } = \lambda _ { 3 } \mathcal { L } _ { s e t } + \lambda _ { 4 } \mathcal { L } _ { a n c h o r }
$$  

where $\{ \lambda \}$ are hyperparameters for the loss weights.  

# 3.3.1 Pre-Training with Pseudo-Labeling  

Similar to the traditional rule-based approaches in visual grouping [11,24], we propose a heuristic labeling algorithm using Gestalt principle of proximity to generate pseudoannotations. Intuitively, we assume that elements with closer distance tend to be in the same group as mentioned in Sec. 3.1. As shown in Algorithm 1, the main function is SegmentRegion. Given a list of elements, we sort them in the ascending order of top-left corner coordinate $( x _ { l } , y _ { t } )$ . By iterating the ordered list, we calculate the horizontal or vertical margin between two neighbouring elements. If the margin is larger than a pre-defined threshold, we segment the two elements, otherwise we keep them in the same group. Starting with all the elements in a layout, we recursively apply the function SegmentRegion for each segmented group and finally obtain the hierarchical labels. In this way, we are able to collect a large-scale pseudo-labels for pre-training.  

# 3.3. Unsupervised Bootstrapped Training  

Labeling of the visual groupings can be time-consuming. To the best of our knowledge, currently there are no available datasets with complete hierarchical annotation. To alleviate the data bottleneck, this paper proposes a two-stage unsupervised training without annotation cost, namely pretraining and bootstrapping.  

# 3.3.2 Bootstrapping with Self-Improved Labels.  

Although we can get a reasonable initial model with pretraining, pseudo-labels are noisy and might limit the model learning capability. Hence we adopt a simple but effective bootstrapping strategy to self-refine the training labels using the model predictions. For each training instance, we compute the model confidence by averaging the element  

# Algorithm 1 Heuristic Label Induction.  

<html><body><table><tr><td>Require: N elements, each with box coordinate (xt, Yt, xr, Yb margin threshold m</td></tr><tr><td>1: SEGMENTREGION({ei}, xAxis, m)</td></tr><tr><td>2: procedure SEGMENTREGION({ei}, d, m)</td></tr><tr><td>3: Sort {ei} in ascending order of left-top (xt, yt).</td></tr><tr><td>4: endx, endy = eo[xr], eo[yb]</td></tr><tr><td>5: of fset = 0</td></tr><tr><td>6: for i = 1, ..., G do</td></tr><tr><td>7: if d = xAxis and e;[xr]  endx > m then 2-1</td></tr><tr><td>8: group elements {e}'f f set </td></tr><tr><td>9: Aris m</td></tr><tr><td>10: else if d = yAxis and e;[ys] - endy > m then</td></tr><tr><td>11: group elements {e}offset</td></tr><tr><td>12: SEGMeENTREGION(e .. Aris, m)</td></tr><tr><td>13: else</td></tr><tr><td>14: endx = max(endx, e [xr])</td></tr><tr><td>15: endy = max(endy, ei[yb])</td></tr></table></body></html>  

to-group attention scores:  

$$
c ( \{ g ^ { l } \} ) = \arg \sum _ { j } { \frac { ( \sum _ { e _ { i } \in g _ { j } } A _ { i j } ) } { | g _ { j } | } }
$$  

After training the model in several epochs to a stable checkpoint, our bootstrapping replaces the training labels with our model predictions if the model confidence is larger than a threshold. We empirically try different threshold strategies and will show more results in the experiments.  

# 4. Experiments  

# 4.1. Experimental Settings  

To the best of our knowledge, there are currently no publicly available datasets, baselines, or well-defined quantitative metrics for evaluating the task of visual grouping. In this paper, we formally define the settings and establish a systematic approach for evaluating this task.  

# 4.1.1 Datasets.  

We start by collecting a large-scale dataset of public presentation slides in the .pptx format for training our model. To obtain grouping annotations, we utilize our proposed heuristic algorithm presented in Sec. 3.3.1 to assign pseudolabels to each slide. We then filter out the training samples that yield empty group results. Our final training dataset consists of 369,347 slides, with each slide containing an average of approximately 2 levels of pseudo-groups. More specifically, there are 4.82 groups in each slide in level 0 (fine-grained) on average, with each group containing 2.28 shapes. In level 1 (coarse-grained), there are 2.93 groups on average, each with 3.92 shapes. For evaluation, we created a human-labeled dataset consisting of 79 slides. Two annotators were provided with guidelines and examples to group the shapes in a slide hierarchically. The evaluation set consists of slides with at most two levels of annotated groups, with an average of 4.11 groups, each with 2.06 shapes at level 0 and an average of 2.25 groups, each with 4.01 shapes at level 1. More information about the annotation process can be found in the supplementary materials.  

# 4.1.2 Evaluation Metrics.  

We propose two quantitative metrics to evaluate the system performance. Given a prediction with $P$ levels of groups $\{ g _ { P } \} _ { l = 0 } ^ { l _ { P - 1 } }$ and a target with $T$ levels $\{ g _ { T } \} _ { l = 0 } ^ { l _ { T - 1 } }$ , we define (1) Acc (soft) to determine a prediction as correct if any level in the prediction matches with any level in the target. On the other hand, (2) Acc (strict) requires a stricter exact match where each level of group prediction must be equal to the corresponding level in the target. The metric formulas are as follows:  

$$
\mathrm { A c c } ( \mathrm { s o f t } ) = \frac { 1 } { | \{ g _ { T } \} | } \sum _ { \substack { p , t \in \{ g _ { P } \} , \{ g _ { T } \} } } \bigg [ \bigvee _ { l _ { i } = 0 } ^ { l _ { P } - 1 l _ { T } - 1 } \big ( p _ { i } ^ { l } = t _ { j } ^ { l } \big ) \bigg ]
$$  

$$
\mathrm { A c c } ( \mathrm { s t r i c t } ) = \frac { 1 } { | \{ g _ { T } \} | } \sum _ { \substack { p , t \in \{ g _ { P } \} , \{ g _ { T } \} } } \bigg [ \bigwedge _ { i = 0 } ^ { l _ { T } - 1 } ( p _ { i } ^ { l } = t _ { i } ^ { l } ) \bigg ]
$$  

Besides, we also conduct human evaluation to see how people rate the grouping outputs by our approach and the other ones. We invite 3 participants and each participant is given 60 pairs of grouping candidates. Each pair consists of our system’s prediction as well as one baseline’s output of the same slide. Participants are asked to determine which hierarchical grouping is better. We calculate the win rate of our approach in the user study.  

# 4.1.3 Baselines.  

We consider the following two baselines for comparison: (1) Heuristic: we apply our algorithm mentioned in Sec. 3.3.1 in the evaluation set to test its performance; (2) Pair-Merge [25]: a Transformer-based model to predict the relatedness of pairwise shapes and then iteratively merge shape pairs with a pre-determined threshold. In their original approach, the authors collect presentations with user-created groups (without complete and hierarchical annotations) on the web. In order to train their model on our pseudo-labeled hierarchical dataset, we re-implemented their approach by keeping the same Transformer backbone and training one copy of the pairwise prediction head for each grouping level (in total pre-defined $L$ levels).  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/4b7caa575acadbe06f64c77517578f45ffa52ba17e7865cc8990d32276cfce93.jpg)  
Figure 3. Two example slides with grouping predictions from heuristic algorithm, Pair-Merge, our system, and the ground truth. Each slide contains hierarchical groupings with a coarse-level (1st row) and a fine-level (2nd row).  

# 4.1.4 Model and Training Parameters.  

For model architecture, the maximum input sequence length is 224. The token embedding size and hidden size are all 384. According to the data statistics, we set two grouping layers, with the number of group tokens 42 and 8 respectively. The first grouping layer consists of 6 attention layers, each with 6 heads, while the other grouping layers each consist of 3 attention layers, also with 6 heads. The attention dropout rate is set to 0.5. We train the model for 60 epochs with a learning rate $5 \times 1 0 ^ { - 5 }$ and batch size 64 using 4 GPUs. Adam [13] is used as optimizer with $\beta _ { 1 } = 0 . 9$ and $\beta _ { 2 } = 0 . 9 9$ . The loss weights $\lambda _ { 1 } , \lambda _ { 2 } , \lambda _ { 3 } , \lambda _ { 4 }$ are set to 1, 1, 10, 1 respectively. We use adaptive thresholds 0.7, 0.5, 0.3 during the epoch of 40, 50, 55 for bootstrapping, which will be described more in the Sec. 4.3.2. Bounding box coordinates are normalized from 0 to 1. For the heuristic algorithm, we set the margin threshold to 0.05 in both $\mathbf { \boldsymbol { x } }$ and y axis.  

Table 1. Overall results on the human labeled evaluation dataset.   


<html><body><table><tr><td>Methods</td><td>Acc (soft)</td><td>Acc (strict)</td><td>win-rate</td></tr><tr><td>Heuristic</td><td>44.3</td><td>12.7</td><td>80.85</td></tr><tr><td>Pair-Merge</td><td>60.8</td><td>0.0</td><td>94.92</td></tr><tr><td>ours (w/o bootstrapping)</td><td>40</td><td>15</td><td>82.86</td></tr><tr><td>ours</td><td>62.5</td><td>22.5</td><td>-</td></tr></table></body></html>  

# 4.2. Overall Performance  

The overall results are presented in Tab. 1. Without bootstrapping, our approach is comparable to the heuristic baseline. This is expected since the model is trained to fit the noisy labeled data provided by the heuristic algorithm. We can see a large performance increase using bootstrapping $( 2 2 . 5 \%$ relative gain in soft accuracy and $7 . 5 \%$ in strict accuracy) and achieves the best results compared to the two baselines, which indicates that our model has captured representative features and bootstrapping helps correct noisy labels. Moreover, it is interesting to see that the Pair-Merge baseline performs well in terms of soft accuracy but extremely bad in strict accuracy. We then take a deeper look and observe that this baseline tends to predict correctly in one of the grouping levels but fail to merge elements hierarchically. Therefore, its strict accuracy related to the hierarchical exact match results in 0. This indicates that a system with the pairwise relatedness learning objective might not be sensitive enough to construct a hierarchical grouping structure. While being compared, our approach outperforms the others in terms of strict accuracy, demonstrating that our multiple grouping layers effectively capture the hierarchical structure.  

As for human evaluation, our approach beats the heuristic and Pair-Merge baselines as well as ours (w/o bootstrapping) with a win-rate of $8 0 . 8 5 \%$ , $9 4 . 9 2 \%$ and $8 2 . 8 6 \%$ respectively, which is consistent with the automatic metric results.  

Case Study. We show two examples with predictions from different systems as well as the ground truths in Fig. 3. For each case, we present two levels of groupings (coarse-grained in the 1st row and fine-grained in the 2nd row respectively). We can see that our approach correctly parses the slide grouping structure in both two cases. In the first case (Fig. 3a), the heuristic algorithm wrongly treats the horizontally-aligned elements as separate groups in the coarse level, which is a commonly seen error pattern since the algorithm scans along the x/y-axis to divide elements into groups. As for the second case (Fig. 3b), PairMerge correctly merges the the elements to two columnwise groups, but fail to combine them into a larger group for a hierarchical structure.  

# 4.3. Model Analysis  

To give a better understanding of our model, we conduct an in-depth model investigation in this subsection.  

# 4.3.1 Group Token Analysis  

Group tokens are a crucial component of our model as they learn to attend and associate with elements. In order to gain insight, we examine their physical meanings through visualization and conduct ablation experiments to study the impact of the number of group tokens on model performance.  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/9c399b62c573cd77d20c41a421fa239821a27c013caa1e586969a43aa72e94ca.jpg)  
Figure 4. Heatmaps of all box predictions on 11k sampled slides from training dataset. We only visualize the active group tokens: 3 out of 8 in coarse level (1st row) and 4 out of 42 in fine-grained level (2nd row).  

Visualization. To see what the group tokens have actually learnt, we visualize the boxes predicted by different group tokens for a randomly-sampled slides $( \sim 1 1 \mathrm { k } )$ from the training dataset. As there are excessive group tokens where some are associated without any elements (i.e., not triggered), we filter those null tokens with the triggered rate less than $1 \%$ in the dataset and only show the triggered group tokens. As shown in Fig. 4, our model learns different specialization for each group token. We observe that each token has several modes of operation focusing on different regions. For example, the three group tokens in the coarse level (1st row) mainly attend in the top, center and bottom region respectively. Moreover, group tokens in different layers tend to predict boxes in different sizes. The tokens in the fine-grained level (2nd row) are responsible for smaller groups while the ones in the coarse level are more likely to favor larger groups (e.g., title $^ +$ content). This observation well explains the mechanism of our hierarchical grouping model that different grouping layers handles different granularities and each group token controls its corresponding regions.  

Effects of Group Token Numbers. As the group tokens have been shown to carry physical meanings via visualization, we are also curious to see if a larger number of the learnable group tokens can have a higher trigger rate and capture more meaningful patterns. Here we try different numbers of group tokens in the two corresponding group layers and show the results in Tab. 2. Moreover, we calculate the number of group tokens being triggered which has been associated with at least one element. We observe that the increasing number of group tokens does not result in better performance but instead introduce more noise. We argue that this is because there are only several key group tokens for a limited set of regions while others act as null tokens. As the group token number increases (e.g., $\{ 2 8 , 6 \}$ to $\{ 1 2 8 , 1 6 \} )$ , the number of triggered tokens stays around $\{ 5 , 3 \}$ , which further supports our argument.  

Table 2. Ablation study of different numbers of group tokens in two levels $\{ G ^ { 0 } , G ^ { 1 } \}$ (fine and coarse level). We also show the statistics of number of tokens being triggered (2nd column).   


<html><body><table><tr><td># Group Token</td><td># Triggered</td><td>Acc (soft)</td><td>Acc (strict)</td></tr><tr><td>28 6</td><td>5 3</td><td>60.00</td><td>22.50</td></tr><tr><td>42 8</td><td>74</td><td>62.50</td><td>22.50</td></tr><tr><td>64 10</td><td>5 3</td><td>62.50</td><td>21.25</td></tr><tr><td>92 12</td><td>7 4</td><td>58.75</td><td>23.75</td></tr><tr><td>110 14</td><td>4 3</td><td>53.75</td><td>18.75</td></tr><tr><td>128 16</td><td>5 3</td><td>61.25</td><td>15.00</td></tr></table></body></html>  

# 4.3.2 Effects of Bootstrapping  

In this section, we investigate how different strategies of bootstrapping affect the overall results. Starting from 40 epoch, we experiment with (1) fixed bootstrapping threshold (0.7 in this study) (2) adaptive thresholds which accepts an increasing percentage of label refinement with lower thresholds (0.7, 0.5, 0.3) along training epochs. As shown in Fig. 5, both fixed (green line) and adaptive thresholds (blue line) perform better than the setting without bootstrapping (red line), indicating that our model is able to capture representative features and refine the noisy training labels correctly. Moreover, the adaptive thresholds work better than the fixed one, which means that the decreasing thresholds to include more refined labels do not deteriorate the performance but instead help denoise more training samples as our model becomes more robust during training iterations. Moreover, we calculate the percentage of re-labeled training samples during the bootstrapping epochs. As we can see, the replace rate of labels starts from $70 \%$ to $90 \%$ , which means that our model effectively utilizes the bootstrapping for data relabeling and denoising.  

# 4.3.3 Effects of Different Learning Objectives  

Our model architecture contains two prediction heads per grouping layer, set prediction and anchor prediction respectively. We would like to see how much they contribute to the overall performance. Here we try different loss weight combinations of $\lambda _ { 3 }$ (set prediction), $\lambda _ { 4 }$ (anchor prediction) and show the results in Tab. 3. We can see that both the two learning objectives are important, as the performance drops dramatically without any of two losses. Moreover, the setting of $\lambda _ { 3 } : \lambda _ { 4 } = 1 0 : 1$ achieves the best results, which indicates that the set prediction objective dominates the optimization while anchor prediction acts as auxiliary objective to stabilize the training.  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/dd2d0574f3999ed390e0ea23b735049c841959b7fcdabedcf4c4e3ea64f2c07e.jpg)  
Figure 5. Accuracy curves with different bootstrapping strategies. Bootstrapping starts from epoch 40. Adaptive thresholds work the best (blue line).  

Table 3. Results with different loss weights in terms of set prediction $( \lambda _ { 3 } )$ and anchor prediction $( \lambda _ { 4 } )$ .   


<html><body><table><tr><td>A3</td><td>A4</td><td>Acc (strict)</td><td>Acc (soft)</td></tr><tr><td>1</td><td>0</td><td>1.25</td><td>54.06</td></tr><tr><td>0</td><td>1</td><td>0.00</td><td>38.75</td></tr><tr><td>1</td><td>1</td><td>0.00</td><td>47.50</td></tr><tr><td>5</td><td>1</td><td>13.75</td><td>47.50</td></tr><tr><td>1</td><td>5</td><td>0.00</td><td>55.00</td></tr><tr><td>10</td><td>1</td><td>22.50</td><td>62.50</td></tr><tr><td>15</td><td>1</td><td>21.25</td><td>57.50</td></tr></table></body></html>  

# 4.3.4 Error Analysis  

We observe two main errors that left to be solved in the future work.  

Error 1: Weak Global Contextualization. Though our model has learned the interactions between elements via the attention mechanism, it is still weak at capturing repetitive patterns in a layout. As shown in Fig. 6a, there should be four image-caption groups in the slide. However, our model fails to detect the pattern and therefore predicts wrongly in this case. To address this error type, it might need further explicit modeling of global constraints to increase model capability.  

Error 2: Missing Semantic Content. Currently our model only utilizes the visual properties of elements (e.g., type, position, font setting). We observe that there are a certain amount of error cases that element content (e.g., images and texts) plays an decisive role. For example in Fig. 6b, our model wrongly recognizes pictures and textboxes as two separate groups, while each textbox describes its horizontally-aligned picture and should be grouped as an image-caption pair. If the semantic contents of elements are taken into consideration, the ambiguity would be resolved. Multi-modality with text and vision could be a promising future direction.  

![](https://cdn-mineru.openxlab.org.cn/extract/cb749751-3e04-4cda-8c4d-94c68535a66e/33c8f85ba6fa559107a0915338294e1c65e982eabeb186afd9443b90c14c91ca.jpg)  
Figure 6. Examples of two main error types in our approach.  

# 5. Conclusion  

This paper presents the first end-to-end trainable model for hierarchical visual grouping in graphic design layouts. Since obtaining grouping labels requires a significant amount of annotation effort, we propose a two-stage unsupervised training strategy. In the first stage, our model is pre-trained on heuristic-labeled data using Gestalt laws. In the second stage, we adopt bootstrapping to iteratively refine the noisy labels. Our experimental results demonstrate the effectiveness of our approach, and we provide extensive analysis to explain our model behaviors. Finally, we conclude by identifying two representative error types of our approach for further investigation in future work.  

# References  

[1] Pablo Arbel´aez, Jordi Pont-Tuset, Jon Barron, Ferran Marques, and Jitendra Malik. Multiscale combinatorial grouping. In 2014 IEEE Conference on Computer Vision and Pattern Recognition, pages 328–335, 2014. 2   
[2] Galal M. Binmakhashen and Sabri A. Mahmoud. Document layout analysis: A comprehensive survey. ACM Comput. Surv., 52(6), oct 2019. 2 [3] Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, and Sergey Zagoruyko. End-toend object detection with transformers. In European Conference on Computer Vision (ECCV), page 213–229, Berlin, Heidelberg, 2020. Springer-Verlag. 3 [4] Yu Chen, Wei-Ying Ma, and Hong-Jiang Zhang. Detecting web page structure for adaptive viewing on small form factor devices. In Proceedings of the 12th International Conference on World Wide Web, WWW ’03, page 225–233, New York, NY, USA, 2003. Association for Computing Machinery. 1, 2 [5] Bradley Efron and Robert J. Tibshirani. An Introduction to the Bootstrap. Number 57 in Monographs on Statistics and Applied Probability. Chapman & Hall/CRC, Boca Raton, Florida, USA, 1993. 2   
[6] Stefano Ferilli, Marenglen Biba, Floriana Esposito, and Teresa Maria Altomare Basile. A distance-based technique for non-manhattan layout analysis. 2009 10th International Conference on Document Analysis and Recognition, pages 231–235, 2009. 2 [7] Raghudeep Gadde, Varun Jampani, Martin Kiefel, Daniel Kappler, and Gehler V. Peter. Superpixel convolutional networks using bilateral inceptions. In European Conference on Computer Vision (ECCV), 2016. 2 [8] Yupang Huang, Tengchao Lv, Lei Cui, Yutong Lu, and Furu Wei. Layoutlmv3: Pre-training for document ai with unified text and image masking. arXiv preprint arXiv:2204.08387, 2022. 2 [9] Varun Jampani, Deqing Sun, Ming-Yu Liu, Ming-Hsuan Yang, and Jan Kautz. Superpixel samping networks. In European Conference on Computer Vision (ECCV), 2018. 2   
[10] Eric Jang, Shixiang Gu, and Ben Poole. Categorical reparameterization with gumbel-softmax. arXiv preprint arXiv:1611.01144, 2016. 3   
[11] Zhaoyun Jiang, Shizhao Sun, Jihua Zhu, Jian-Guang Lou, and Dongmei Zhang. Coarse-to-fine generative modeling for graphic layouts. In AAAI’22, February 2022. 2, 4   
[12] R. G. Casey K. Y. Wong and F. M. Wahl. Document analysis system. In IBM Journal of Research and Development, volume 26, pages 647–656, November 1982. 2   
[13] Diederik P Kingma and Jimmy Ba. Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980, 2014. 6   
[14] Janin Koch and Antti Oulasvirta. Computational layout perception using gestalt laws. In Proceedings of the 2016 CHI Conference Extended Abstracts on Human Factors in Computing Systems, CHI EA ’16, page 1423–1429, New York, NY, USA, 2016. Association for Computing Machinery. 2   
[15] Kurt Koffka. Principles of Gestalt psychology, volume 44. routledge, 2013. 1   
[16] Zhiheng Li, Wenxuan Bao, Jiayang Zheng, and Chenliang Xu. Deep grouping model for unified perceptual parsing. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, June 2020. 2   
[17] Xiaodan Liang, Liang Lin, Xiaohui Shen, Jiashi Feng, Shuicheng Yan, and P. Eric Xing. Interpretable structureevolving lstm. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, June 2018. 2   
[18] Xiaodan Liang, Xiaohui Shen, Jiashi Feng, Liang Lin, and Shuicheng Yan. Semantic object parsing with graph lstm. In European Conference on Computer Vision (ECCV), 2016. 2   
[19] Min Lu, Chufeng Wang, Joel Lanir, Nanxuan Zhao, Hanspeter Pfister, Daniel Cohen-Or, and Hui Huang. Exploring visual information flows in infographics. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems, CHI ’20, page 1–12, New York, NY, USA, 2020. Association for Computing Machinery. 1, 2   
[20] Peter O’Donovan, Aseem Agarwala, and Aaron Hertzmann. Learning Layouts for Single-Page Graphic Designs. IEEE Transactions on Visualization and Computer Graphics, 20(8):1200–1213, 2014. 2   
[21] Jordi Pont-Tuset, Pablo Arbel´aez, Jonathan T. Barron, Ferran Marques, and Jitendra Malik. Multiscale combinatorial grouping for image segmentation and object proposal generation. IEEE Transactions on Pattern Analysis and Machine Intelligence, 39(1):128–140, 2017. 2   
[22] Ren and Malik. Learning a classification model for segmentation. In Proceedings Ninth IEEE International Conference on Computer Vision, pages 10–17 vol.1, 2003. 2   
[23] Hamid Rezatofighi, Nathan Tsoi, JunYoung Gwak, Amir Sadeghian, Ian Reid, and Silvio Savarese. Generalized intersection over union: A metric and a loss for bounding box regression. In 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 658–666, 2019. 4   
[24] Ruth Rosenholtz, Nathaniel R. Twarog, Nadja SchinkelBielefeld, and Martin Wattenberg. An intuitive model of perceptual grouping for hci design. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, CHI ’09, page 1331–1340, New York, NY, USA, 2009. Association for Computing Machinery. 1, 2, 4   
[25] Danqing Shi, Weiwei Cui, Danqing Huang, Haidong Zhang, and Nan Cao. Reverse-engineering information presentations: Recovering hierarchical grouping from layouts of visual elements, 2022. 2, 5   
[26] Jianbo Shi and J. Malik. Normalized cuts and image segmentation. IEEE Transactions on Pattern Analysis and Machine Intelligence, 22(8):888–905, 2000. 2   
[27] Hung-Ming Sun. Page segmentation for manhattan and nonmanhattan layout documents via selective crla. In Eighth International Conference on Document Analysis and Recognition (ICDAR’05), pages 116–120, 2005. 2   
[28] Xin Li Xiangcheng Du Zhao Zhou Liang Xue Cheng Jin Tianlong Ma, Xingjiao Wu. Document layout analysis with aesthetic-guided image augmentaiton. arXiv preprint arXiv:2111.13809, 2021. 2   
[29] Aaron van den Oord, Oriol Vinyals, and koray kavukcuoglu. Neural discrete representation learning. In Advances in Neural Information Processing Systems, volume 30. Curran Associates, Inc., 2017. 3   
[30] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. In Proceedings of the 31st International Conference on Neural Information Processing Systems, page 6000–6010, 2017. 3   
[31] Yuxi Xie, Danqing Huang, Jinpeng Wang, and Chin-Yew Lin. Canvasemb: Learning layout representation with largescale pre-training for graphic design. In Proceedings of the 29th ACM International Conference on Multimedia, page 4100–4108, New York, NY, USA, 2021. Association for Computing Machinery. 2   
[32] Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, and Xiaolong Wang. Groupvit: Semantic segmentation emerges from text supervision. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 18134–18144, June 2022. 2, 3   
[33] Zhen Xu and James Miller. Identifying semantic blocks in web pages using gestalt laws of grouping. World Wide Web, 19(5):957–978, sep 2016. 2  