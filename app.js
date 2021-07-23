// chapters 31 to 34 

// task = 1 

var ndate = new Date();
document.write(ndate);

// Task = 2

var mnthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var curr = new Date();
document.write( "<br/>" + "<br/>" + "The current month is: " + mnthsName[curr.getMonth()]);

// Task = 3


document.write("<br/>"+"<br/>")

var dNames = ["Sun","Mon","tue","Wed","Thus","Fri","Sat"]
var currentD = new Date();
document.write("<br/><br/>" + " Today is " + dNames[currentD.getDay()]);


//task = 4

var days = new Date();
var currentDay = days.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
if (dayNames[currentDay] === "Sat" || dayNames[currentDay] === "Sun") {
    document.write("<br/><br/>" + "It`s Fun day");
}

// task = 5

document.write("<br/><br/>");
var dateofMonth = new Date();
var currentDate = dateofMonth.getDate();
if (currentDate >= "1" && currentDate <= "15") {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}




//  task = 6

document.write("<br/><br/><br/><br/>");
var today = new Date();
var otherDay = new Date("January 1, 1970");
var msToday = today.getTime();
var msOtherDay = otherDay.getTime();
var msDiff = msToday - msOtherDay;
var mDiff = msDiff / (3600000);
document.write("Current Date: " + today + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + msDiff + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + mDiff)

// task = 7

document.write("<br/><br/><br/><br/>");
var timeNow = new Date();
var hours = timeNow.getHours();
if (hours >= 0 && hours < 12) {
    document.write("It`s AM");
} else {
    document.write("It`s PM");
}

// Task = 8

document.write("<br/><br/><br/><br/>");
var laterDate = new Date("Thu December 31, 2020");
document.write("Later date: " + laterDate);

Task = 9
document.write("<br/><br/><br/><br/>");
var firstRamadan = new Date("June 18, 2015");
var todaysDay = new Date();
var days1 = (todaysDay.getTime() - firstRamadan.getTime()) / (1000 * 60 * 60 * 24);
days1 = Math.floor(days1);
document.write(days1 + " days have passed since 1st Ramadan,2015 ");

// task =10

document.write("<br/><br/><br/><br/>");
var ref = new Date("Dec 05, 2015 22:50:16");
var date = new Date("Jan 01, 2015");
var sec = (ref.getTime() - date.getTime()) / (1000 * 60);
sec = Math.ceil(sec);
document.write("On reference date " + ref + "<br>");
document.write(sec + " seconds had passed since beginning of 2015 ");

// Task = 11

document.write("<br/><br/><br/><br/>");
var cur = new Date();
document.write("Current date : " + cur);
var agotime = new Date();
agotime.setHours(agotime.getHours() - 1);
document.write("<br>1 hour ago, it was " + agotime);

// Task = 12

document.write("<br/><br/><br/><br/>");
var curDate = new Date();
var lstDate = new Date();
lstDate.setFullYear(lstDate.getFullYear() - 100);
document.write("Current date: " + curDate + ",<br>100 years back, it was " + lstDate);

// Task = 13

var age = prompt("Enter your age");
var currentDate = new Date();
var curYear = currentDate.getFullYear();
brtYear = curYear - age;
document.write("Your age is " + age + "<br>Your birth year is " + brtYear);

// task = 14

document.write("<br/><br/><br/><br/>");
document.write("<h5>K-ELECTRIC BILL<h5/>");
var nowDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Deember"];
var curMonth = months[nowDate.getMonth()];
var customerName = "Sameer Faisal";
var units = 411.55894723;
var amountPerUnit = 16;
var lateSurcharge = 350;
var amountDue = parseFloat((units * amountPerUnit).toFixed(2));
var amountAftDue = parseFloat((amountDue + lateSurcharge).toFixed(2));;
document.write("Customer name:" + customerName + "</b><br>Month: " + curMonth + "</b><br>Number of units: " + units + "</b><br>Charges per unit: " + amountPerUnit + "</b><br><br>Net amount payable(within due date): " + amountDue + "</b><br>Late payment surcharge: " + lateSurcharge + "</b><br>Gross amount payable after due date: " + amountAftDue + "</b>");




















































