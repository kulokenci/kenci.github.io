<?php
error_reporting(0);
//include 'inc/JavaScriptUnpacker_.php';
$ipclient = $_SERVER['REMOTE_ADDR'] ?: ($_SERVER['HTTP_X_FORWARDED_FOR'] ?: $_SERVER['HTTP_CLIENT_IP']);
/* gets the data from a URL */
function qr_loadUrl($url){
    if (is_callable('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        header("Access-Control-Allow-Origin: *");
        header("X-Forwarded-For: $ipclient");
        $data = curl_exec($ch);
        curl_close($ch);
    }
    if (empty($data) || !is_callable('curl_init')) {
        $opts     = array(
            'http' => array(
                'header' => 'Connection: close'
            )
        );
        $context  = stream_context_create($opts);
        $headers  = get_headers($url);
        $httpcode = substr($headers[0], 9, 3);
        if ($httpcode == '200')
            $data = file_get_contents($url, false, $context);
        else {
            $data = '{"div":"Error ' . $httpcode . ': Invalid Url<br />"}';
        }
    }
    return $data;
}
function get_data($url)
{
    $ch      = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    header("Access-Control-Allow-Origin: *");
    header("X-Forwarded-For: $ipclient");
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
if($_GET['type_id'] != ""){
	$type_id = $_GET['type_id'];
	$url = qr_loadUrl('https://tb.rg-adguard.net/php/get_version.php?type_id='.$type_id);
    echo $url;
} else {
    $url = qr_loadUrl('https://tb.rg-adguard.net/php/get_version.php');
    echo $url;
}
?>