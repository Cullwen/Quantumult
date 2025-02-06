/******************************

脚本功能：边框水印大师——解锁VIP
下载地址：https://t.cn/A6QLHJ20
软件版本：1.6.7
更新时间：2024-3-4

*******************************

[rewrite_local]

^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Cullwen/Quantumult/refs/heads/main/Script/Hasmash.js

[mitm] 

hostname = photoby.hasmash.com

*******************************/

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/is_ios_product":\w+/g,'is_ios_product":true').replace(/memberExpire":\d+/g,'memberExpire":8888888888')
$done({ body });
