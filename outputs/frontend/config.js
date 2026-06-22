// 配置文件 - 修改此文件以指向您的后端
// 
// 部署步骤：
// 1. 按照 gas_backend.js 中的说明部署 Google Apps Script
// 2. 复制 Web App URL 并替换下面的 GAS_URL
// 3. 将整个项目推送到 GitHub 并启用 GitHub Pages

// Google Apps Script Web App URL（部署后替换）
const CONFIG = {
  // 后端 API 基础 URL（末尾不要加斜杠）
  API_BASE: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  
  // 管理员密码（与 Google Apps Script 中设置的密码一致）
  ADMIN_PASSWORD: 'admin123',
  
  // 是否在本地开发模式（true = 使用 localhost:5000）
  LOCAL_DEV: false
};

// 本地开发模式
if (CONFIG.LOCAL_DEV) {
  CONFIG.API_BASE = 'http://localhost:5000';
}
