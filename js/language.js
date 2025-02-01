// 存储不同地区的 App Store URL
const appStoreUrls = {
    'en': 'https://apps.apple.com/us/app/steplisten/id6740468855',
    'es': 'https://apps.apple.com/es/app/steplisten/id6740468855',
    'de': 'https://apps.apple.com/de/app/steplisten/id6740468855',
    'fr': 'https://apps.apple.com/fr/app/steplisten/id6740468855',
    'ja': 'https://apps.apple.com/jp/app/steplisten/id6740468855',
    'ko': 'https://apps.apple.com/kr/app/steplisten/id6740468855',
    'ru': 'https://apps.apple.com/ru/app/steplisten/id6740468855',
    'th': 'https://apps.apple.com/th/app/steplisten/id6740468855',
    'vi': 'https://apps.apple.com/vn/app/steplisten/id6740468855',
    'zh-Hans': 'https://apps.apple.com/cn/app/steplisten/id6740468855'
};

// 存储不同语言的文档链接
const docUrls = {
    'en': 'doc/doc.html',
    'es': 'doc/doc-es.html',
    'de': 'doc/doc-de.html',
    'fr': 'doc/doc-fr.html',
    'ja': 'doc/doc-ja.html',
    'ko': 'doc/doc-ko.html',
    'ru': 'doc/doc-ru.html',
    'th': 'doc/doc-th.html',
    'vi': 'doc/doc-vi.html',
    'zh-Hans': 'doc/doc-zh-Hans.html'
};

// 存储不同语言的隐私政策链接
const privacyUrls = {
    'en': 'privacy/privacy-policy.html',
    'es': 'privacy/privacy-policy-es.html',
    'de': 'privacy/privacy-policy-de.html',
    'fr': 'privacy/privacy-policy-fr.html',
    'ja': 'privacy/privacy-policy-ja.html',
    'ko': 'privacy/privacy-policy-ko.html',
    'ru': 'privacy/privacy-policy-ru.html',
    'th': 'privacy/privacy-policy-th.html',
    'vi': 'privacy/privacy-policy-vi.html',
    'zh-Hans': 'privacy/privacy-policy-zh-Hans.html'
};

// 获取当前语言
function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.includes('index-')) {
        return path.split('index-')[1].split('.')[0];
    }
    return 'en'; // 默认英语
}

// 更新所有链接
function updateLinks() {
    const currentLang = getCurrentLanguage();
    
    // 更新 App Store 链接
    const storeUrl = appStoreUrls[currentLang] || appStoreUrls['en'];
    const appStoreLinks = document.querySelectorAll('.mac-store-button');
    appStoreLinks.forEach(link => {
        if (!link.classList.contains('free-trial')) {
            link.href = storeUrl;
        }
    });

    // 更新文档链接
    const docUrl = docUrls[currentLang] || docUrls['en'];
    const docLinks = document.querySelectorAll('.cta-button');
    docLinks.forEach(link => {
        if (link.textContent.includes('User Guide') || 
            link.textContent.includes('使用指南') || 
            link.textContent.includes('ユーザーガイド') ||
            link.textContent.includes('사용자 가이드') ||
            link.textContent.includes('Guía del Usuario') ||
            link.textContent.includes('Benutzerhandbuch') ||
            link.textContent.includes("Guide d'utilisation") ||
            link.textContent.includes('คู่มือช่วยเหลือ') ||
            link.textContent.includes('Hướng dẫn sử dụng')) {
            link.href = docUrl;
        }
    });

    // 更新隐私政策链接
    const privacyUrl = privacyUrls[currentLang] || privacyUrls['en'];
    const privacyLink = document.getElementById('privacy-policy');
    if (privacyLink) {
        privacyLink.href = privacyUrl;
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', updateLinks); 