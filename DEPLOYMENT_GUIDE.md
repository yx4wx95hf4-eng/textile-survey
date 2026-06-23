# 纺织问卷平台 - 部署指南

## 概述
本指南将帮助您将问卷平台部署到云端，实现 24 小时在线访问（不需要保持电脑开机）。

---

## 方案一：GitHub Pages + Google Apps Script（推荐，完全免费）

### 架构说明
- **前端**：部署到 GitHub Pages（免费静态托管，全球 CDN）
- **后端**：使用 Google Apps Script（免费，数据存到 Google Sheets）
- **优点**：完全免费、不需要自己的服务器、24 小时在线

### 步骤 1：部署后端（Google Apps Script）

1. 打开 [script.google.com](https://script.google.com)
2. 点击「新建项目」
3. 删除默认代码，粘贴 `outputs/backend/gas_backend.js` 中的代码
4. 点击「部署」→「新建部署」
5. 选择「Web 应用」：
   - 执行身份：选择「我」
   - 访问权限：选择「任何人」
6. 点击「部署」，复制生成的 Web App URL（类似 `https://script.google.com/macros/s/XXXXXXXX/exec`）

### 步骤 2：配置前端

1. 打开 `outputs/frontend/config.js`
2. 将 `YOUR_SCRIPT_ID` 替换为您的实际 Script ID（URL 中的 XXXXXXXX 部分）
3. 保存文件

### 步骤 3：部署前端到 GitHub Pages

#### 3.1 创建 GitHub 仓库
```bash
# 在 GitHub 上创建新仓库（手动操作）
# 1. 访问 https://github.com/new
# 2. 仓库名填：textile-survey
# 3. 选择「Public」
# 4. 不要勾选「Initialize this repository with a README」
# 5. 点击「Create repository」
```

#### 3.2 推送代码到 GitHub
```bash
# 在您的电脑上运行以下命令（请替换 YOUR_USERNAME 为您的 GitHub 用户名）
cd /c/Users/wisdo/WorkBuddy/2026-06-22-16-16-28

git remote add origin https://github.com/YOUR_USERNAME/textile-survey.git
git branch -M main
git push -u origin main
```

#### 3.3 启用 GitHub Pages
1. 访问您的 GitHub 仓库
2. 点击「Settings」→「Pages」
3. Source 选择「main」分支
4. 点击「Save」
5. 等待 1-2 分钟，访问 `https://YOUR_USERNAME.github.io/textile-survey/outputs/frontend/survey.html`

---

## 方案二：使用 Vercel（更简单，自动部署）

### 步骤
1. 访问 [vercel.com](https://vercel.com)，用 GitHub 账号登录
2. 点击「New Project」
3. 导入您刚创建的 GitHub 仓库
4. Vercel 会自动检测并部署
5. 部署完成后，您会获得一个 `https://your-project.vercel.app` 的网址

---

## 方案三：仅使用 Google Apps Script（最简单）

如果您只想快速上线，可以：
1. 将 `survey.html` 和 `admin.html` 直接上传到 Google Apps Script 作为 HTML 服务
2. 直接获得一个 `script.google.com` 开头的网址
3. 缺点：网址较长，不够专业

---

## 访问网址

部署完成后，您将获得以下网址：

- **问卷前台**：`https://YOUR_USERNAME.github.io/textile-survey/outputs/frontend/survey.html`
- **管理后台**：`https://YOUR_USERNAME.github.io/textile-survey/outputs/frontend/admin.html`
  - 密码：`admin123`（可在 `config.js` 中修改）

---

## 常见问题

### Q：GitHub Pages 网址在国内访问慢怎么办？
A：可以使用 Gitee Pages（国内代码托管平台），步骤类似。

### Q：如何修改后端 API 地址？
A：编辑 `outputs/frontend/config.js`，修改 `API_BASE` 的值。

### Q：如何查看问卷数据？
A：登录 Google Sheets，打开与 Google Apps Script 关联的表格即可查看所有答卷。

---

## 文件清单

| 文件 | 说明 |
|------|------|
| `outputs/frontend/survey.html` | 问卷前台 |
| `outputs/frontend/admin.html` | 管理后台 |
| `outputs/frontend/config.js` | 前端配置文件（需修改） |
| `outputs/backend/gas_backend.js` | Google Apps Script 后端代码 |
| `DEPLOYMENT_GUIDE.md` | 本部署指南 |
