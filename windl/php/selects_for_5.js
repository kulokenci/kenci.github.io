$(document).ready(function () {
var urlimg = '//tb.rg-adguard.net/img/win10.png';
$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
$('#type_id').change(function () {
	var urlimg = '//tb.rg-adguard.net/img/win10.png';
	var type_id = $(this).val();
	if (type_id == '0') {
		$('#version_id').html('<option>- ' + selversion + ' -</option>');
		$('#version_id').attr('disabled', true);
		$('#edition_id').html('<option>- ' + seledition + ' -</option>');
		$('#edition_id').attr('disabled', true);
		$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
		$('#language_id').attr('disabled', true);
		$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
		$('#arch_id').attr('disabled', true);
		$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
		return(false);
	}
	$('#version_id').html('<option>- ' + sloading + '... -</option>');
	$('#version_id').attr('disabled', true);
	$('#edition_id').html('<option>- ' + seledition + '... -</option>');
	$('#edition_id').attr('disabled', true);
	$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
	$('#language_id').attr('disabled', true);
	$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
	$('#arch_id').attr('disabled', true);
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	
	var url = 'php/get_version.php';
	
	$.get(
		url,
		"type_id=" + type_id,
		function (result) {
			if (result.type == 'Error base SQL') {
				alert('Error base SQL');
				return(false);
			}
			else {
				var options = ''; 
				
				$(result.versions).each(function() {
					options += '<option value="' + $(this).attr('version_id') + '">' + $(this).attr('name') + '</option>';
				});
				
				$('#version_id').html('<option value="0">- ' + selversion + ' -</option>'+options);
				$('#version_id').attr('disabled', false);
				$('#edition_id').html('<option value="0">- ' + seledition + ' -</option>'+options);
				$('#edition_id').attr('disabled', true);
				$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
				$('#language_id').attr('disabled', true);
				$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
				$('#arch_id').attr('disabled', true);  	
			}
		},
		"json"
	);
});

$('#version_id').change(function () {
	var urlimg = '//tb.rg-adguard.net/img/win10.png';
	var version_id = $(this).val();
	if (version_id == '0') {
		$('#edition_id').html('<option>- ' + seledition + ' -</option>');
		$('#edition_id').attr('disabled', true);
		$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
		$('#language_id').attr('disabled', true);
		$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
		$('#arch_id').attr('disabled', true);
		$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
		return(false);
	}
	if (version_id == '9') {
		var urlimg = '//tb.rg-adguard.net/img/win7.png';
	}
	if (version_id == '10') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '11') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '22') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '23') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '24') {
		var urlimg = '//tb.rg-adguard.net/img/office2007.png';
	}
	if (version_id == '25') {
		var urlimg = '//tb.rg-adguard.net/img/office2011mac.png';
	}
	if (version_id == '35') {
		var urlimg = '//tb.rg-adguard.net/img/office2013.png';
	}
	if (version_id == '36') {
		var urlimg = '//tb.rg-adguard.net/img/office2016.png';
	}
	$('#edition_id').attr('disabled', true);
	$('#edition_id').html('<option>- ' + sloading + '... -</option>');
	$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
	$('#language_id').attr('disabled', true);
	$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
	$('#arch_id').attr('disabled', true);
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	
	var url = 'php/get_edition.php';
	
	$.get(
		url,
		"version_id=" + version_id + "&lang=" + namelang,
		function (result) {
			if (result.type == 'Error base SQL') {
				alert('Error base SQL');
				return(false);
			}
			else {
				var options = ''; 
				
				$(result.editions).each(function() {
					options += '<option value="' + $(this).attr('edition_id') + '" style="color: ' + $(this).attr('color') + '">' + $(this).attr(namelang) + '</option>';
				});
				
				$('#edition_id').html('<option value="0">- ' + seledition + ' -</option>'+options);
				$('#edition_id').attr('disabled', false);
				$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
				$('#language_id').attr('disabled', true);
				$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
				$('#arch_id').attr('disabled', true);  	
			}
		},
		"json"
	);
});

$('#edition_id').change(function () {
	var version_id = $('#version_id :selected').val();
	var urlimg = '//tb.rg-adguard.net/img/win10.png';
	if (version_id == '9') {
		var urlimg = '//tb.rg-adguard.net/img/win7.png';
	}
	if (version_id == '10') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '11') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '22') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '23') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '24') {
		var urlimg = '//tb.rg-adguard.net/img/office2007.png';
	}
	if (version_id == '25') {
		var urlimg = '//tb.rg-adguard.net/img/office2011mac.png';
	}
	if (version_id == '35') {
		var urlimg = '//tb.rg-adguard.net/img/office2013.png';
	}
	if (version_id == '36') {
		var urlimg = '//tb.rg-adguard.net/img/office2016.png';
	}
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	var edition_id = $(this).val();
	if (edition_id == '0') {
		$('#language_id').html('<option>- ' + sellanguage + ' -</option>');
		$('#language_id').attr('disabled', true);
		$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
		$('#arch_id').attr('disabled', true);
		$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
		return(false);
	}
	$('#language_id').attr('disabled', true);
	$('#language_id').html('<option>- ' + sloading + '... -</option>');
	$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
	$('#arch_id').attr('disabled', true);
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	
	var url = 'php/get_language.php';
	
	$.get(
		url,
		"edition_id=" + edition_id + "&lang=" + namelang,
		
		function (result) {
			if (result.type == 'Error base SQL') {
				alert('Error base SQL');
				return(false);
			}
			else {
				var options = ''; 
				$(result.languages).each(function() {
					options += '<option value="' + $(this).attr('language_id') + '">' + $(this).attr(namelang) + '</option>';
				});
				$('#language_id').html('<option value="0">- ' + sellanguage + ' -</option>'+options);		
				$('#language_id').attr('disabled', false);
				$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
				$('#arch_id').attr('disabled', true);
			}
		},
		"json"
	);
});
	
$('#language_id').change(function () {
var version_id = $('#version_id :selected').val();
	var urlimg = '//tb.rg-adguard.net/img/win10.png';
	if (version_id == '9') {
		var urlimg = '//tb.rg-adguard.net/img/win7.png';
	}
	if (version_id == '10') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '11') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '22') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '23') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '24') {
		var urlimg = '//tb.rg-adguard.net/img/office2007.png';
	}
	if (version_id == '25') {
		var urlimg = '//tb.rg-adguard.net/img/office2011mac.png';
	}
	if (version_id == '35') {
		var urlimg = '//tb.rg-adguard.net/img/office2013.png';
	}
	if (version_id == '36') {
		var urlimg = '//tb.rg-adguard.net/img/office2016.png';
	}
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	var language_id = $(this).val();
	if (language_id == '0') {
		$('#arch_id').html('<option>- ' + selachitecture + ' -</option>');
		$('#arch_id').attr('disabled', true);
		$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
		return(false);
	}
	$('#arch_id').attr('disabled', true);
	$('#arch_id').html('<option>- ' + sloading + '... -</option>');
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	
	var url = 'php/get_arch.php';
	
	$.get(
		url,
		"language_id=" + language_id,
		
		function (result) {
			if (result.type == 'Error base SQL') {
				alert('Error base SQL');
				return(false);
			}
			else {
				var options = ''; 
				$(result.archs).each(function() {
					options += '<option value="' + $(this).attr('arch_id') + '">' + $(this).attr('name') + '</option>';
				});
				$('#arch_id').html('<option value="0">- ' + selachitecture + ' -</option>'+options);
				$('#arch_id').attr('disabled', false);
				}
		},
		"json" 
	);
});
					
$('#arch_id').change(function(){
var version_id = $('#version_id :selected').val();
	var urlimg = '//tb.rg-adguard.net/img/win10.png';
	if (version_id == '9') {
		var urlimg = '//tb.rg-adguard.net/img/win7.png';
	}
	if (version_id == '10') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '11') {
		var urlimg = '//tb.rg-adguard.net/img/win8.png';
	}
	if (version_id == '22') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '23') {
		var urlimg = '//tb.rg-adguard.net/img/office2010.png';
	}
	if (version_id == '24') {
		var urlimg = '//tb.rg-adguard.net/img/office2007.png';
	}
	if (version_id == '25') {
		var urlimg = '//tb.rg-adguard.net/img/office2011mac.png';
	}
	if (version_id == '35') {
		var urlimg = '//tb.rg-adguard.net/img/office2013.png';
	}
	if (version_id == '36') {
		var urlimg = '//tb.rg-adguard.net/img/office2016.png';
	}
	$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
	var arch_id = $(this).val();
	var arch_id = $('#arch_id :selected').val();
	if (arch_id == '0') {
			$('#selectBoxInfo').html('<img src="' + urlimg + '" class="microsoft">', true);
			return(false);
		}
	$('#selectBoxInfo').html('<div align="center"><img src="//tb.rg-adguard.net/img/loading.gif" class="microsoft"></div>', true);
	$('#selectBoxInfo').load('dl.php?fileName=' + arch_id + "&lang=" + lang);
	return(false);
});
});

