// ============================================================
// 纺织类毕业生就业追踪问卷 - 全局配置
// ============================================================
// 
// 部署说明：
//   问卷前端已部署到 GitHub Pages，无需任何后端即可使用。
//   问卷数据默认保存在用户浏览器中（localStorage）。
//   如需收集数据到服务器，请部署后端并修改下方 API_BASE。
//
// ============================================================

(function() {
  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const isGithubPages = location.hostname.endsWith('.github.io');

  window.SURVEY_CONFIG = {
    // --------------------------------------------------
    // 后端 API 地址
    // 默认：空字符串 → 使用 localStorage 离线模式
    // 如需云后端，替换为 Google Apps Script Web App URL
    // --------------------------------------------------
    API_BASE: '',

    // --------------------------------------------------
    // 管理员密码
    // --------------------------------------------------
    ADMIN_PASSWORD: 'admin123',

    // --------------------------------------------------
    // 本地开发模式
    // --------------------------------------------------
    LOCAL_DEV: isLocalhost
  };

  if (isLocalhost) {
    // 本地开发 → 连接本地 Flask 后端
    window.SURVEY_CONFIG.API_BASE = 'http://localhost:5000';
  }

  // 如果设置了 GAS 后端 URL，优先使用
  // 取消下面注释并填入你的 GAS Web App URL：
  // window.SURVEY_CONFIG.API_BASE = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

  console.log('[Config]', window.SURVEY_CONFIG.API_BASE 
    ? '后端模式: ' + window.SURVEY_CONFIG.API_BASE 
    : '离线模式: 数据保存在浏览器本地');
})();
