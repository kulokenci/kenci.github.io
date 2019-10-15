<?php
error_reporting(0);
//include 'inc/JavaScriptUnpacker_.php';
$ipclient = $_SERVER['REMOTE_ADDR'] ?: ($_SERVER['HTTP_X_FORWARDED_FOR'] ?: $_SERVER['HTTP_CLIENT_IP']);
/* gets the data from a URL */

function runCurl($sUrl, $bDownload = false){
    $oCurl = curl_init($sUrl);
    curl_setopt_array($oCurl,
        [
        CURLOPT_BINARYTRANSFER => ($bDownload ? true : false),
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_ENCODING       => '',
        CURLOPT_FOLLOWLOCATION => 0,
        CURLOPT_FRESH_CONNECT  => 0,
        CURLOPT_HEADER         => ($bDownload ? false : true),
        CURLOPT_HTTPHEADER     => [
            'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Charset: utf-8, iso-8859-1;q=0.5',
            'Accept-Language: en-US,en;q=0.9'
            ],
        CURLOPT_REFERER        => "https://tb.rg-adguard.net",
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_USERAGENT      => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0',
        CURLOPT_VERBOSE        => 0
        ]);
    $sOutput   = curl_exec($oCurl);
    $aCurlInfo = curl_getinfo($oCurl);
    curl_close($oCurl);
    $aCurlInfo['contents'] = $sOutput;

    if (200 !== $aCurlInfo['http_code'] && 302 !== $aCurlInfo['http_code']) {
        if (true === false) {
            echo '<pre><b>cURL returned wrong HTTP code “' . $aCurlInfo['http_code'] . '”, aborting.</b></pre>';
        }

        return false;
    }

    return $aCurlInfo;
}

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
if($_GET['fileName'] != "" && $_GET['lang'] != ""){
	$fileName = $_GET['fileName'];
	$lang = $_GET['lang'];
	$url = get_data('https://tb.rg-adguard.net/dl.php?fileName='.$fileName.'&lang='.$lang);
    //echo $url;
    //https://tb.rg-adguard.net/dl.php?go=56b3c333
    $mencari = "tb.rg-adguard.net/dl.php?go=";
    $dianti = "coba.lurulagu.net/win-dl/dl.php?go=";
    $jadiUrl = str_replace($mencari,$dianti,$url);
    echo $jadiUrl;
    // echo $url;
    exit;
} else if($_GET['go'] != "") {
    $go = $_GET['go'];
// 	$url = get_data('https://tb.rg-adguard.net/dl.php?go='.$go);
// 	var_dump(runCurl('https://tb.rg-adguard.net/dl.php?go='.$go));
    header('Location:https://tb.rg-adguard.net/dl.php?go='.$go);
    // header('Content-Description: File Transfer');
    // header('Content-Type: application/octet-stream');
    // header('Content-Disposition: attachment; filename="'.basename($url).'"');
    // header('Expires: 0');
    // header('Cache-Control: must-revalidate');
    // header('Pragma: public');
    // header('Content-Length: ' . filesize($url));
    // flush(); // Flush system output buffer
    // readfile($url);
    exit;
} else {
    $url = qr_loadUrl('https://tb.rg-adguard.net/dl.php');
    echo $url;
}
?>