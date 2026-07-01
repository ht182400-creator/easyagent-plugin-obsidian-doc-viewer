# EasyAgent Plugin: Obsidian Doc Viewer

> Obsidian-like Markdown 文档浏览器与知识库工具 — EasyAgent 生态第三方插件
> 
> **仓库**: [easyagent-plugin-obsidian-doc-viewer](https://github.com/ht182400-creator/easyagent-plugin-obsidian-doc-viewer)
> **本地路径**: `D:\Work_Area\AI\Doc_project`

---

## 功能

- 📂 **目录树浏览** — 左侧展示项目下所有 Markdown 文件层级
- 🕸️ **关系图谱** — 基于 `[[WikiLink]]` + 标准链接 + 关键字共现构建文档间关系网络
- 📖 **节点预览** — 点击图谱节点或目录文件 → 右侧预览 Markdown 内容
- 🔍 **全文搜索** — 标题 + 内容实时搜索，结果高亮
- 🎨 **颜色同步** — 图谱与文件树同目录同色显示

| # | 功能 | 状态 |
|---|------|------|
| 1 | 打开本地目录 (File System Access API) | ✅ |
| 2 | 资源管理器树形结构 | ✅ |
| 3 | 关系图谱 (D3.js Force + 强弱关联) | ✅ |
| 4 | 节点预览 (react-markdown) | ✅ |
| 5 | 全文搜索 (Fuse.js) | ✅ |
| 6 | 两阶段加载 (快速扫描→8并发读取) | ✅ |
| 7 | 示例数据离线可用 | ✅ |

## 安装 (EasyAgent 插件)

1. 在 EasyAgent 设置 → 第三方插件 → 社区插件市场中搜索 "Obsidian Doc Viewer"
2. 点击安装并启用

## 独立运行

```bash
cd D:\Work_Area\AI\Doc_project
pnpm install
pnpm dev
# 访问 http://localhost:5184
```

打开后点击右上角 **「打开目录」** 选择本地 Markdown 项目，或在 **「设置」** 中加载示例数据。

## 项目结构

```
Doc_project/
├── manifest.json          # EasyAgent 插件清单
├── plugin.js              # EasyAgent 插件入口
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/        # UI 组件
│   │   ├── FileTree.tsx
│   │   ├── GraphView.tsx
│   │   ├── MarkdownPreview.tsx
│   │   └── SearchPanel.tsx
│   ├── stores/            # Zustand 状态管理
│   ├── services/          # 业务逻辑
│   ├── types/             # TypeScript 类型
│   ├── utils/             # 工具函数
│   └── styles/            # 全局样式
├── public/
├── tests/
└── docs/                  # 项目文档
```

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite |
| 图谱 | D3.js (force-directed) |
| MD 渲染 | react-markdown + remark-gfm |
| 全文搜索 | Fuse.js |
| 状态 | Zustand |
| 样式 | Tailwind CSS |

## 文档索引

| 文档 | 内容 |
|------|------|
| `docs/00_项目规划.md` | 项目目标、范围、路线图 |
| `docs/01_架构设计.md` | 系统架构、数据流、技术选型 |
| `docs/02_开发指南.md` | 本地开发、构建、贡献规范 |
| `docs/03_UIUX设计.md` | 界面原型、交互原则 |
| `docs/04_测试策略.md` | 测试用例、Mock 策略 |

## 许可证

MIT
