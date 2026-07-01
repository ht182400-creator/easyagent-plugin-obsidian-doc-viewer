/**
 * EasyAgent Plugin: Obsidian Doc Viewer
 *
 * 该插件在 EasyAgent 中注册一个工具，用于启动文档浏览器。
 * 完整 UI 位于 D:\Work_Area\AI\Doc_project，此处为入口包装。
 *
 * @param {import('@easyagent/core').IPluginContext} context
 */
export default function plugin(context) {
  context.registerTool({
    name: 'open-doc-viewer',
    description: '打开 Obsidian 风格的文档浏览器，查看项目 Markdown 文档的关系图谱',
    parameters: {
      type: 'object',
      properties: {
        workspacePath: {
          type: 'string',
          description: '要浏览的文档目录路径，默认为当前工作区',
        },
      },
    },
    async execute({ workspacePath }) {
      // MVP 阶段：返回启动提示
      // 后续可调用 Electron API 打开独立窗口或嵌入面板
      return `文档浏览器已启动，工作区: ${workspacePath || '当前目录'}`;
    },
  });
}
