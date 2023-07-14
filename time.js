let seconds = 667;
let minute = seconds / 60;
let hour = 0;
if (seconds % 60 != 0) {
	minute = parseInt(minute); // parseInt is used to convert float number (decimal) to integer (without decimal)
}
let sec = seconds % 60;

if ( minute >= 60) {
	hour = parseInt(minute / 60);
	minute = minute % 60;
	console.log('total time is ' + hour + ' hours, ' + minute + ' minute and ' + sec + ' seconds');
} else {
	console.log('total time is ' + minute + ' minute and ' + sec + ' seconds');
}
