"use strict";
let banner = document.getElementById('banner');
let timeout = setTimeout(() => {
    banner === null || banner === void 0 ? void 0 : banner.classList.add('hidden');
}, 6000);
