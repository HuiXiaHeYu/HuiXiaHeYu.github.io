import { defineClientConfig } from "vuepress/client";
import ChartJS from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.0_echarts@6.0.0_flowchart.ts@_43def153fcd403a153eb4e53ed59a521/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import ECharts from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.0_echarts@6.0.0_flowchart.ts@_43def153fcd403a153eb4e53ed59a521/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ECharts.js";
import FlowChart from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.0_echarts@6.0.0_flowchart.ts@_43def153fcd403a153eb4e53ed59a521/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/FlowChart.js";
import Mermaid from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.112_chart.js@4.5.0_echarts@6.0.0_flowchart.ts@_43def153fcd403a153eb4e53ed59a521/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
});
