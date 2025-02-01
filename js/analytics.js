// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// 支持多个 Analytics ID
const analyticsIds = [
    'G-Y49E0RHQ7F',  // 主要ID
    'G-9GZV2LJVDG',  // 平台 2 的 ID
];

// 为每个 ID 初始化 Google Analytics
analyticsIds.forEach(id => {
    gtag('config', id, {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
    });
}); 