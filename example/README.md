# Infographic Docsify 示例

这是一个展示如何在 docsify 中使用 infographic 插件的示例项目。

## 基础示例

### 步骤流程图

```infographic
infographic list-row-simple-horizontal-arrow
  data
    lists
      - label 步骤 1
        desc 开始
      - label 步骤 2
        desc 进行中
      - label 步骤 3
        desc 完成
```

### 列表卡片

```infographic
infographic chart-column-simple
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  values
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
  data
    lists
      - time 2024-01
        title 项目启动
        desc 完成需求分析和方案设计
      - time 2024-03
        title 开发阶段
        desc 完成核心功能开发
      - time 2024-06
        title 上线发布
        desc 产品正式发布
```

### 时间线

```infographic
infographic chart-line-plain-text
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  values
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
  data
    lists
      - time 2024-01
        title 项目启动
        desc 完成需求分析和方案设计
      - time 2024-03
        title 开发阶段
        desc 完成核心功能开发
      - time 2024-06
        title 上线发布
        desc 产品正式发布
```

### 流程步骤

```infographic
infographic chart-pie-donut-pill-badge
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  values
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
  data
    lists
      - time 2024-01
        title 项目启动
        desc 完成需求分析和方案设计
      - time 2024-03
        title 开发阶段
        desc 完成核心功能开发
      - time 2024-06
        title 上线发布
        desc 产品正式发布
```

### 节点连接图

```infographic
infographic hierarchy-tree-distributed-origin-rounded-rect-node
data
  title 用户调研
  desc 通过用户调研，了解用户需求和痛点，指导产品设计和优化
  root
    children
      - label 用户为什么要使用某个音乐平台
        value 80
        icon mingcute/music-2-ai-line
        children
          - label 用户从哪些渠道了解到这个平台
            value 70
            icon mingcute/ad-circle-line
          - label 这个平台是哪些方面吸引了用户
            value 65
            icon mingcute/mushroom-line
      - label 用户在什么场景下使用这个平台
        value 75
        icon mingcute/time-line
        children
          - label 用户从什么事件什么场景下使用
            value 60
            icon mingcute/calendar-time-add-line
          - label 用户在某个场景下用到哪些功能
            value 55
            icon mingcute/danmaku-line
    icon mingcute/user-question-line
    label 用户调研
    value 100
```

## 尺寸控制

### 使用像素尺寸

```infographic 200px*150px
infographic list-row-simple-horizontal-arrow
  data
    lists
      - label 小尺寸
        desc 200px*150px
      - label 流程
        desc 使用固定像素
```

### 使用百分比尺寸

```infographic 50%*80%
infographic chart-column-simple
data
  title 百分比尺寸示例
  desc 宽 50%，高 80%
  values
    - label A
      value 100
    - label B
      value 80
    - label C
      value 60
```

### 固定宽度，自适应高度

```infographic 400px*auto
infographic chart-line-plain-text
data
  title 固定宽度示例
  desc 宽度 400px，高度自适应
  values
    - label 一月
      value 50
    - label 二月
      value 75
    - label 三月
      value 90
    - label 四月
      value 110
  data
    lists
      - time 2024-01
        title Q1计划
        desc 制定季度目标
      - time 2024-02
        title 实施阶段
        desc 按计划推进
```

### 大尺寸图表

```infographic 600px*500px
infographic hierarchy-tree-distributed-origin-rounded-rect-node
data
  title 大尺寸组织架构
  desc 600px*500px 的大图表
  root
    label 总部
    value 100
    icon mingcute/building-4-line
    children
      - label 研发部
        value 80
        icon mingcute/code-line
        children
          - label 前端组
            value 40
          - label 后端组
            value 40
      - label 产品部
        value 70
        icon mingcute/lightbulb-line
        children
          - label 设计组
            value 35
          - label 规划组
            value 35
```

### 未指定尺寸（使用全局配置）

```infographic
infographic chart-pie-donut-pill-badge
data
  title 全局配置尺寸
  desc 使用 index.html 中配置的默认尺寸
  values
    - label 产品A
      value 40
      icon lucide/package
    - label 产品B
      value 30
      icon lucide/box
    - label 产品C
      value 20
      icon lucide/shopping-bag
    - label 其他
      value 10
      icon lucide/more-horizontal
  data
    lists
      - time Q1
        title 销售分析
        desc 统计各产品销售占比
      - time Q2
        title 增长预测
        desc 预计整体增长15%
```

## 配置说明

在 index.html 中配置 infographic 插件的全局默认尺寸：

```html
<script>
  window.$docsify = {
    infographicConfig: {
      width: '100%',
      height: '400px'
    }
  };
</script>
```

### 尺寸语法说明

- **固定像素**: `infographic 200px*150px` - 宽 200px，高 150px
- **百分比**: `infographic 50%*80%` - 宽 50%，高 80%（相对于父容器）
- **自适应**: `infographic 400px*auto` - 固定宽度，高度自适应
- **全局配置**: 未指定尺寸时，使用 `infographicConfig` 中的默认值
