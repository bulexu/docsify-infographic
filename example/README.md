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

## 配置说明

在 index.html 中配置 infographic 插件：

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
