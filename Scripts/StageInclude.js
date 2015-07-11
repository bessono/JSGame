// functions for including stageFiles "js"
// 


    
// возвращает cookie если есть или undefined
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined 
}

// уcтанавливает cookie
function setCookie(name, value, props) {
	props = props || {}
	var exp = props.expires
	if (typeof exp == "number" && exp) {
		var d = new Date()
		d.setTime(d.getTime() + exp*1000)
		exp = props.expires = d
	}
	if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

	value = encodeURIComponent(value)
	var updatedCookie = name + "=" + value
	for(var propName in props){
		updatedCookie += "; " + propName
		var propValue = props[propName]
		if(propValue !== true){ updatedCookie += "=" + propValue }
	}
	document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {
	setCookie(name, null, { expires: -1 })
}


function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
}

function getParam(){
	var tmp = new Array();        
	var tmp2 = new Array();    
	var param = new Array();    
        
	var get = location.search; 
	if(get != '')    
	{    
	tmp = (get.substr(1)).split('&');   
	for(var i=0; i < tmp.length; i++)    
	{    
        tmp2 = tmp[i].split('=');       
        param[tmp2[0]] = tmp2[1];         
	}    
	var obj = document.getElementById('greq');     
  
	for (var key in param)    
	{    
		return param[key];  
	}     
	} else {
		return "1";
	}    
   }
//============= end of functions ================
var cookieStage = getCookie("level");
    cookieStage = parseInt(cookieStage,10);
var stageNumber = "1";
//alert(cookieStage);

if((cookieStage > 1) && (getParam() == 1)){
 stageNumber = cookieStage;
 include("./Scripts/Stage"+stageNumber+"Map.js");
} else {   
 stageNumber = getParam();   
 include("./Scripts/Stage"+stageNumber+"Map.js");
}