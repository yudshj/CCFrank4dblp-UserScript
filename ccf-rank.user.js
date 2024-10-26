// ==UserScript==
// @name        CCF Rank (UserScript)
// @namespace   http://tampermonkey.net/
// @version     4.4.1
// @description CCF Rank for DBLP, Google Scholar, ConnectedPapers, Semantic Scholar, Web of Science
// @icon        https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/icon/64x64.png
// @match       *://dblp.org/*
// @match       *://dblp.uni-trier.de/*
// @match       *://dblp2.uni-trier.de/*
// @match       *://dblp.dagstuhl.de/*
// @match       *://scholar.google.*
// @match       *://www.connectedpapers.com/main/*
// @match       *://www.webofscience.com/*
// @match       *://www.semanticscholar.org/*
// @grant       GM_addStyle
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/dblp.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/connectedpapers.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/scholar.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/semanticscholar.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/wos.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/apiCache.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/ccf.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/js/fetchRank.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfRankAbbr.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfRankFull.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfRankDb.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfRankUrl.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfFullUrl.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/data/ccfAbbrFull.js
// @require     https://raw.githubusercontent.com/yudshj/CCFrank4dblp-UserScript/refs/heads/master/script.js
// ==/UserScript==

// 将CSS直接添加到脚本中
GM_addStyle(`
.ccf-rank {
    display: inline-block;
    height: 18.35px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
    border-radius: 9px;
    padding: 1px 8px;
    margin-left: 5px;
    margin-right: 5px;
}

.ccf-a {
    background-color: #dc3545;
}

.ccf-b {
    background-color: #ffc107;
}

.ccf-c {
    background-color: #28a745;
}

.ccf-none {
    background-color: #6c757d;
}

.ccf-tooltip {
    display: inline-block;
    position: relative;
}

.ccf-tooltip .ccf-tooltiptext {
    visibility: hidden;
    background-color: #007bff;
    border-radius: 6px;
    padding: 5px 5px;
    bottom: 100%;
    left: 50%;
    position: absolute;
    z-index: 980624;
    margin-left: -60px;
}

.ccf-tooltip:hover .ccf-tooltiptext {
    visibility: visible;
}
  `);

// // Tampermonkey主体代码部分

// (function () {
//     'use strict';
//     dblp.rankSpanList.push(ccf.getRankSpan);
//     scholar.rankSpanList.push(ccf.getRankSpan);
//     connectedpapers.rankSpanList.push(ccf.getRankSpan);
//     semanticscholar.rankSpanList.push(ccf.getRankSpan);
//     wos.rankSpanList.push(ccf.getRankSpan);

//     if (window.location.hostname.startsWith("dblp")) {
//         dblp.run();
//     } else if (window.location.hostname.startsWith("scholar.google")) {
//         scholar.run();
//     } else if (window.location.hostname.includes("connectedpaper")) {
//         connectedpapers.run();
//     } else if (window.location.hostname.includes("semanticscholar")) {
//         semanticscholar.run();
//     } else if (window.location.hostname.includes("webofscience")) {
//         wos.run();
//     }
// })();
