// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['meta', { name: 'keywords', content: '圈木云,圈木云科技,圈木云源码'}],
  ['meta', { name: 'description', content: 'php直播go直播,短视频,直播带货,语音聊天室,陪玩系统源码'}],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-XTHlNlGNAV' }], // 百度统计的站长验证
  ['meta', { name: 'baidu_union_verify', content: '3577780f2f16660fd2dafc7bb6889b85' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['script', {}, `
             var _hmt = _hmt || [];
            (function() {
              var s = document.getElementsByTagName("script")[0];
              
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?3577780f2f16660fd2dafc7bb6889b85";
              s.parentNode.insertBefore(hm, s);
              
              // gitter
              var gitter = document.createElement("script");
              gitter.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
              s.parentNode.insertBefore(gitter, s);
              
              // 万维广告  https://cdn.wwads.cn/js/makemoney.js
              var makemoney = document.createElement("script");
              makemoney.src = "";
              s.parentNode.insertBefore(makemoney, s);
            })();
            
            ((window.gitter = {}).chat = {}).options = {
              room: 'DOUBLE-Baller/momo'
            };
            
            // huoyan
            (function(para) {
                var p = para.sdk_url, n = 'huoYan', w = window, d = document,
                s = 'script',x = null,y = null;
                if(typeof(w['huoyanDataAnalytic']) !== 'undefined') {return false;}
                w['huoyanDataAnalytic'] = n;
                w[n] = w[n] || function(a) {
                return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
                w[n]['quick'] = w[n].call(null, 'quick');
                w[n]['search'] = w[n].call(null, 'search');
                x = d.createElement(s), y = d.getElementsByTagName(s)[0];x.async = 1;
                x.src = p;w[n].para = para;y.parentNode.insertBefore(x, y);
                })({
                sdk_url: 'https://identify.tankeai.com/assets/js/identify.js',
                server_url: 'https://identify.tankeai.com'
            });
            var g_huoyan_opt = {
                site_id : 1924,
                user_company:1965
            };
            huoYan.quick('autoTrack',g_huoyan_opt);
            
            // 万维广告：“禁止”广告拦截
            // function called if wwads is blocked
            // https://github.com/bytegravity/whitelist-wwads
            function ABDetected() {
              var adBlockDetected_div = document.createElement("div");
              adBlockDetected_div.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; background: #fc6600; color: #fff; z-index: 9999999999; font-size: 14px; text-align: center; line-height: 1.5; font-weight: bold; padding-top: 6px; padding-bottom: 6px;";
              adBlockDetected_div.innerHTML = "我们的git地址 <a style='color:#fff;text-decoration:underline' target='_blank' href='https://github.com/DOUBLE-Baller'>请给个start</a>，为了支持本站的长期运营，请将我们的网站 <a style='color: #fff;text-decoration:underline' target='_blank' href='https://wwads.cn/page/whitelist-wwads'>加入广告拦截器的白名单</a>。";
              document.getElementsByTagName("body")[0].appendChild(adBlockDetected_div);
              // add a close button to the right side of the div
              var adBlockDetected_close = document.createElement("div");
              adBlockDetected_close.style.cssText = "position: absolute; top: 0; right: 10px; width: 30px; height: 30px; background: #fc6600; color: #fff; z-index: 9999999999; line-height: 30px; cursor: pointer;";
              adBlockDetected_close.innerHTML = "×";
              adBlockDetected_div.appendChild(adBlockDetected_close);
              // add a click event to the close button
              adBlockDetected_close.onclick = function() {
              this.parentNode.parentNode.removeChild(this.parentNode);
              };
            }
            
            function docReady(t) {
                "complete" === document.readyState ||
                "interactive" === document.readyState
                  ? setTimeout(t, 1)
                  : document.addEventListener("DOMContentLoaded", t);
            }
            
            //check if wwads' fire function was blocked after document is ready with 3s timeout (waiting the ad loading)
            docReady(function () {
              setTimeout(function () {
                if( window._AdBlockInit === undefined ){
                    //ABDetected();
                    
                }
              }, 3000);
            });
        `]
]
