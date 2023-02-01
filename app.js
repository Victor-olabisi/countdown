 const getElement = (selection)=>{
  const element = document.querySelector(selection);
  if (selection) {
    return element
  }
else {
    throw new Error ("please check the element you select ")
}
 }

 const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];
 const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];

 const deadline = getElement(".deadline");
 const giveaway = getElement(".giveaway");
 const items = document.querySelectorAll(".deadline-format h4");

//  console.log(items);
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDays= tempDate.getDate();

 let  futureDate = new Date(tempYear, tempMonth, tempDays +10,11, 30);

 let year = futureDate.getFullYear();
 let month= futureDate.getMonth();
 let day = futureDate.getDay();
 let date = futureDate.getDate();
 let hours= futureDate.getHours();
 let minutes = futureDate.getMinutes();

// futureDate in milliseconds 
let futureTime= futureDate.getTime();
  month = months[month];
  day= weekdays[day];
  

 giveaway.textContent= `giveaway ends on ${day} ${date} of ${month} ${year} ${hours}:${minutes}am`


 function getRemainingTime(){
const today = new Date().getTime();
// time different
const t = futureTime - today;
// value in millleseconds 
const oneDay = 24 *60* 60* 1000;
const oneHour = 60*60*1000;
const oneMinute =60*1000;
// caculate values
let days =t / oneDay; 
days = Math.floor(days);
let hours =(t%oneDay)/oneHour;
hours=Math.floor(hours)
let minutes = (t%oneHour)/oneMinute;
minutes = Math.floor(minutes);
let seconds= Math.floor((t%oneMinute)/1000);

 let values =[days, hours, minutes, seconds];
//  format values
function format(item){
  if (item < 10) {
    return(`0${item}`)
  }
  return item
}
//  display values
 items.forEach((item,index)=>{
  item.textContent=format(values[index]);
 })
 if (t<0) {
  clearInterval(countdown)
  deadline.innerHTML=`<h4 class="expired">sorry this giveaway has expired <h4/>`;
 }
 }
 let countdown = setInterval(getRemainingTime , 1000)


getRemainingTime()
