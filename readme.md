### 以前做的一个PHP微信扫码关注登录实例，首页判断是否首次关注公众号，扫码关注公众号获取微信用户头像、openid和省市等信息。

第一步：获取关注二维码ticket,并且传参二维码qrcode表主键id
$sql = "INSERT INTO `qrcode` (`addtime`) VALUES ('" . time() . "')"; 
 
mysql_query($sql); 
$scene_id = mysql_insert_id(); 
 
$url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $appsecret; 
$access_token_array = json_decode(curlGet($url), true); 
$access_token = $access_token_array['access_token']; 
$qrcode_url = 'https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=' . $access_token; 
 
$post_data = array(); 
$post_data['expire_seconds'] = 3600 * 24; //有效时间 
$post_data['action_name'] = 'QR_SCENE'; 
$post_data['action_info']['scene']['scene_id'] = $scene_id; //传参用户uid，微信端可获取 
$json = curlPost($qrcode_url, json_encode($post_data)); 
if (!$json['errcode']) { 
 
    $ticket = $json['ticket']; 
    $ticket_img = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' . urlencode($ticket); 
} else { 
    echo '发生错误：错误代码 ' . $json['errcode'] . '，微信返回错误信息：' . $json['errmsg']; 
    exit; 
}
第二步：微信服务端接受数据，并且用户登录信息
$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA); 
$scene_id = str_replace("qrscene_", "", $postObj->EventKey); 
 
$openid = $postObj->FromUserName; //openid 
$ToUserName = $postObj->ToUserName;  //转换角色 
$Event = strtolower($postObj->Event); 
if ($Event == 'subscribe') {//首次关注 
    $is_first = 0; 
} elseif ($Event == 'scan') {//已关注 
    $is_first = 1; 
} 
$access_token = $this->getAccessToken(); 
 
$userinfo = $this->getUserinfo($openid, $access_token); 
$sql = "UPDATE `qrcode` SET `openid` = '" . $openid . "',logintime='" . time() . "',is_first=" . $is_first . ",nickname='" . $userinfo['nickname'] . "'" 
        . ",avatar='" . $userinfo['avatar'] . "',sex='" . $userinfo['sex'] . "',province='" . $userinfo['province'] . "',city='" . $userinfo['city'] . "',country='" . $userinfo['country'] . "' WHERE `id` =" . $scene_id . ""; 
 
mysql_query($sql);


第三步：每隔2秒检测是否关注微信公众号
<script> 
    check_login(); 
    function check_login() { 
        $.post("check_login.php", {scene_id: <?php echo $scene_id; ?>}, function(data) { 
            var attention = '首次关注'; 
            if (data.is_first == 1) { 
                attention = '已关注过'; 
            } 
            if (data.openid != null) { 
                alert("扫码成功，openid为" + data.openid + "nickname:" + data.nickname); 
                location.reload(); 
 
            } else { 
                setTimeout("check_login()", 2000); 
            } 
        }, "json"); 
    } 
</script>
通过微信openid和access_token获取微信用户信息，并存入表当中的信息如下：
<tr> 
    <th>openid</th> 
    <th>昵称</th> 
    <th>性别</th> 
    <th>国家</th> 
    <th>省份</th> 
    <th>城市</th> 
    <th>头像</th> 
    <th>是否关注过</th> 
    <th>登录时间</th> 
</tr>
