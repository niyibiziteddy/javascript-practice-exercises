const weeklyForecast = [
  { day: 'monday', hi: 90, lo: 70 },
  { day: 'tuesday', hi: 93, lo: 76 },
  { day: 'wednesday', hi: 89, lo: 74 },
  { day: 'thursday', hi: 91, lo: 76 },
  { day: 'friday', hi: 82, lo: 71 },
  { day: 'saturday', hi: 81, lo: 68 },
  { day: 'sunday', hi: 86, lo: 64 },
];
let i = 0
weeklyForecast.forEach(item => {
    let day = weeklyForecast[i].day;
    let highTemp = weeklyForecast[i].hi;
    let lowTemp = weeklyForecast[i].lo;
    console.log(`On ${day}, the high will be ${highTemp} degrees and the low will be ${lowTemp} degrees`);
    i++;
})