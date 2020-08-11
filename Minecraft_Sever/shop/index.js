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
/* ******************************************************* */

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var from=GetQueryString("from");
console.log("来自" + from)