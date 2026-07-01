# Doc Project — Obsidian-like Markdown 文档浏览器

> **项目名**: `easyagent-doc-viewer`  
> **定位**: EasyAgent 生态下的 Obsidian-like Markdown 文档浏览器与知识库工具  
> **路径**: `D:\Work_Area\AI\Doc_project`  
> **日期**: 2026-07-01

## 相关仓库

| 仓库 | 地址 | 说明 |
|------|------|------|
| 插件仓库 | [easyagent-plugin-obsidian-doc-viewer](https://github.com/ht182400-creator/easyagent-plugin-obsidian-doc-viewer) | EasyAgent 插件包装 |
| 插件模板 | [easyagent-plugin-template](https://github.com/ht182400-creator/easyagent-plugin-template) | 插件开发模板 |
| 注册表 | [easyagent-plugins](https://github.com/ht182400-creator/easyagent-plugins) | 官方插件注册表 |

---

## 已实现功能

| # | 功能 | 状态 | 说明 |
|---|------|------|------|
| 1 | 打开本地目录 | ✅ | 使用 File System Access API 选择文件夹 |
| 2 | 资源管理器树形结构 | ✅ | 仅显示 `.md` 文件，目录层级清晰 |
| 3 | 关系图谱 | ✅ | 自动根据 WikiLink 构建全局/邻居图谱 |
| 4 | 节点预览 | ✅ | 点击图谱节点或目录文件 → 右侧预览 MD |
| 5 | 全文搜索 | ✅ | 标题 + 内容搜索，结果卡片高亮显示 |
| 6 | 设置面板 | ✅ | 目录信息、图谱模式、搜索限制、示例数据 |

### 运行方式

```bash
cd D:\Work_Area\AI\Doc_project
pnpm install
pnpm dev
# 访问 http://localhost:5184
```

打开后点击右上角 **「打开目录」** 选择本地 Markdown 项目，或在 **「设置」** 中加载示例数据。

---

## 功能愿景

1. **目录树浏览**: 左侧展示项目下所有 Markdown 文件层级
2. **关系图谱**: 基于 `[[WikiLink]]` 构建文档间关系网络图
3. **节点预览**: 点击图谱节点 → 预览对应文档内容
4. **动态搜索**: 实时全文搜索文档标题与内容
5. **知识库索引**: 本地向量索引 + 语义搜索

---

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 测试
pnpm test
```

---

## 项目结构

```
Doc_project/
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/       # UI 组件
│   ├── hooks/            # React Hooks
│   ├── services/         # 业务逻辑服务
│   ├── stores/           # 状态管理
│   ├── types/            # TypeScript 类型
│   └── styles/           # 全局样式
├── public/               # 静态资源
├── tests/                # 测试
└── docs/                 # 项目文档
```

---

## 文档索引

| 文档 | 内容 |
|------|------|
| `docs/00_项目规划.md` | 项目目标、范围、路线图 |
| `docs/01_架构设计.md` | 系统架构、数据流、技术选型 |
| `docs/02_开发指南.md` | 本地开发、构建、贡献规范 |
| `docs/03_UIUX设计.md` | 界面原型、交互原则 |
| `docs/04_测试策略.md` | 测试用例、Mock 策略 |

---

## 许可证

MIT
