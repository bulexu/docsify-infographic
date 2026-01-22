# docsify-infographic

A docsify plugin to render [AntV Infographic](https://infographic.antv.vision/) diagrams.

## 使用方法

在 docsify 中添加 Infographic 和插件：

```html
<script>
  window.$docsify = {
    infographicConfig: {
      width: '100%',
      height: '100%'
    }
  };
</script>

<!-- 加载 AntV Infographic -->
<script src="https://unpkg.com/@antv/infographic@latest/dist/infographic.min.js"></script>
<!-- 加载插件 -->
<script src="https://unpkg.com/docsify-infographic@latest/dist/docsify-infographic.js"></script>
```

## 配置选项

通过 `window.$docsify.infographicConfig` 配置渲染参数：

| 选项 | 默认值 | 说明 |
|------|--------|------|
| width | '100%' | 信息图宽度，支持百分比或像素 |
| height | '100%' | 信息图高度，支持百分比或像素 |

## 示例

在 Markdown 中使用 `infographic` 作为代码块语言标识：

```shell
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
```

### 自定义尺寸

可以为单个信息图指定宽度和高度。支持像素（px）和百分比（%）：

```shell
    ```infographic 100px*100px
    infographic list-row-simple-horizontal-arrow
      data
        title: 小尺寸图表
    ```

    ```infographic 50%*80%
    infographic chart-column-simple
      data
        title: 宽图表
    ```

    ```infographic 400px*auto
    infographic chart-pie-donut-pill-badge
      data
        title: 固定宽度图表
    ```
```

- `infographic 100px*100px` - 固定像素尺寸
- `infographic 50%*80%` - 相对父容器的百分比尺寸
- 未指定时使用全局配置的默认值

更多图表类型和语法请参考 [AntV Infographic 文档](https://infographic.antv.vision/learn)。

## 开发

```bash
# 安装依赖
npm install

# 构建插件
npm run build

# 运行示例
npm run example
```

## License

ISC
