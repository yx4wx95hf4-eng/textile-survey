#!/bin/bash
# 纺织问卷平台 - GitHub Pages 一键部署脚本
# 使用方法：在 Git Bash 中运行此脚本

echo "========================================="
echo "纺织问卷平台 - GitHub Pages 部署"
echo "========================================="
echo ""

# 检查 git
if ! command -v git &> /dev/null; then
    echo "错误：未安装 git，请先安装 git"
    exit 1
fi

# 获取用户输入
read -p "请输入您的 GitHub 用户名: " GITHUB_USER
read -p "请输入新仓库名称 (默认: textile-survey): " REPO_NAME
REPO_NAME=${REPO_NAME:-textile-survey}

echo ""
echo "即将创建 GitHub 仓库: $REPO_NAME"
echo "请确保您已登录 GitHub"
echo ""
read -p "按 Enter 继续，或按 Ctrl+C 取消..."

# 初始化 git（如果还没有）
if [ ! -d ".git" ]; then
    git init
    git config user.name "$GITHUB_USER"
    git config user.email "$GITHUB_USER@example.com"
fi

# 添加文件
git add outputs/frontend/
git commit -m "Initial commit: survey platform frontend" 2>/dev/null || echo "已提交"

# 创建 GitHub 仓库（需要 GitHub Token）
echo ""
echo "请在 GitHub 上手动创建仓库:"
echo "1. 访问 https://github.com/new"
echo "2. 仓库名: $REPO_NAME"
echo "3. 选择 Public"
echo "4. 不要勾选 Initialize"
echo ""
read -p "创建完成后按 Enter 继续..."

# 推送代码
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git

echo ""
echo "正在推送代码到 GitHub..."
echo "如果需要认证，请输入您的 GitHub 用户名和密码（或 Token）"
git push -u origin main

echo ""
echo "========================================="
echo "部署完成！"
echo "========================================="
echo ""
echo "请访问以下网址启用 GitHub Pages:"
echo "https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo ""
echo "启用后，您的问卷网址为:"
echo "https://$GITHUB_USER.github.io/$REPO_NAME/outputs/frontend/survey.html"
echo ""
