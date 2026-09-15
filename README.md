# Wendy.resume — 个人简历作品集网站

李文文（Wendy）· 资深产品经理 / 产品总监 · 智慧人居 · AI 产品 的个人简历作品集单页网站。

## 技术栈

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4（`@tailwindcss/vite`）
- lucide-react 图标
- 单页滚动、深浅色主题切换、移动端适配

## 本地运行

```bash
npm install
npm run dev      # 开发预览 http://localhost:5173
npm run build    # 生产构建，产物在 dist/
```

> 若 npm 缓存目录报 EPERM，可加 `--cache ./.npm-cache` 使用项目本地缓存。

## 目录结构

```
src/
  content.ts              # 全站文案数据源（改这里即可更新内容）
  palette.ts              # 卡片配色与渐变工具（全站视觉风格单一来源）
  components/             # 各板块组件
    Nav / Hero / SkillCloud / About / Experience
    Skills / Projects / Thinking / Toolbox / Contact / Footer / Eyebrow
  hooks/useReveal.ts      # 滚动揭示动画
public/
  images/                 # 插画与配图素材
  resume.pdf              # 简历 PDF（"查看我的简历"按钮）
scripts/extract_docx.py   # 简历 docx 解析脚本
```

## 板块

首页 Hero（技能云图）· 关于我 · 工作经历 · 专业技能 · 项目案例（点击切换）· 我的产品思考 · AI 工具箱 · 联系我

## 素材说明

- `public/images/data-cubes.jpg`、`office-scene.jpg`：摄图网素材（非企业商用授权）
- `public/images/ai-pm.jpg`：AI 生成的动漫插画风形象图
