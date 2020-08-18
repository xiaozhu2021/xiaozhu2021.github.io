/*
function siteTime() {
window.setTimeout("siteTime()", 1000);
}
var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var today = new Date();
var startYear = "2020"; //开始日期：年
var startMonth = "8";//开始日期：月
var startDate = "1";//开始日期：日
var startHour = "0";//开始日期：小时
var startMinute = "0";//开始日期：分钟
var startSecond = "0";//开始日期：秒
var todayYear = today.getFullYear();
var todayMonth = today.getMonth() + 1;
var todayDate = today.getDate();
var todayHour = today.getHours();
var todayMinute = today.getMinutes();
var todaySecond = today.getSeconds();
var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
var diff = t2 - t1;
var diffYears = Math.floor(diff / years);
var diffDays = Math.floor((diff / days) - diffYears * 365);
var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
minutes);
var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
if (startYear == todayYear) {
document.getElementById("year").innerHTML = todayYear;
}
setInterval(siteTime, 1000);

*/

// 浏览器标题切换  
var OriginTitile = document.title;    // 保存之前页面标题  
var titleTime;  
document.addEventListener('visibilitychange', function(){  
    if (document.hidden){  
        document.title = '看不见我-看不见我！';  
        clearTimeout(titleTime);  
    }else{  
        document.title = '哎~还是发现了~';  
        titleTime = setTimeout(function() {  
            document.title = OriginTitile;  
        }, 1800); // 2秒后恢复原标题  
    }  
});  

