const years = document.getElementById('years');
 const months = document.getElementById('months');
 const days = document.getElementById('days');
 const hours = document.getElementById('hours');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');
 const countdown = document.getElementById('countdown');
 const year = document.getElementById('year');
 const loading = document.getElementById('loading');


 let selectedBirthday = Date.now();
 let currentTime = Date.now();
 let totalExtraTimeAsMS = 0;
 window.addEventListener("load", () => {
   // Show spinner before countdown
   setTimeout(() => {
     loading.remove();
     countdown.style.display = 'flex';
   }, 1000);

   years.innerHTML = "00";
   months.innerHTML = "00";
   days.innerHTML = "00";
   hours.innerHTML = "00";
   minutes.innerHTML = "00";
   seconds.innerHTML = "00";
   // Set background year
   year.innerHTML = new Date().getFullYear();
 });
 document.querySelector("input[name=birthday]").addEventListener("change", (e) => {
   selectedBirthday = new Date(e.target.value);
   if (selectedBirthday > currentTime) {
     alert("Doğum tarihiniz bugünden küçük olamaz!");
     //with and without return!!!
     return;
   }
   // Set background image
   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";
   year.innerHTML = selectedBirthday.getFullYear();
   let yearDiff = new Date().getFullYear() - selectedBirthday.getFullYear();

   //yearly 126 hours extra time
   let yearlyExtraTimeAsMS = 126 * 60 * 60 * 1000;
   totalExtraTimeAsMS = yearDiff * yearlyExtraTimeAsMS;
   // Run every second internal func.
   setInterval(updateCountdown, 1000);
 });

 // Update countdown time
 const updateCountdown = () => {
   let msDiff = (new Date() - selectedBirthday) - totalExtraTimeAsMS;
   let year,
     month,
     day,
     hour,
     minute,
     second;

     second = Math.floor(msDiff / 1000),
     minute = Math.floor(second / 60),
     hour = Math.floor(minute / 60),
     day = Math.floor(hour / 24),
     month = Math.floor(day / 30),
     year = Math.floor(day / 365);

     second %= 60;
     minute %= 60;
     hour %= 24;
     day %= 30;
     month %= 12;

   // year = Math.abs(currentTime.getFullYear() - selectedBirthday.getFullYear());
   // month = Math.abs(currentTime.getMonth() - selectedBirthday.getMonth());
   // day = Math.abs(currentTime.getDay() - selectedBirthday.getDay());

   // hour = Math.floor(msDiff / 1000 / 60 / 60) % 24;
   // minute = Math.floor(msDiff / 1000 / 60) % 60;
   // second = Math.floor(msDiff / 1000) % 60;


   // Add values to DOM
   years.innerHTML = year;
   months.innerHTML = month < 10 ? '0' + month : month;
   days.innerHTML = day < 10 ? '0' + day : day;
   hours.innerHTML = hour < 10 ? '0' + hour : hour;
   minutes.innerHTML = minute < 10 ? '0' + minute : minute;
   seconds.innerHTML = second < 10 ? '0' + second : second;
 }