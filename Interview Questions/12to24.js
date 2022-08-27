// Q. Convert 12 Hours format into 24 hours format
// 01:02 PM

const convert12to24=(time12hour)=>{
    const [time, modifier] = time12hour.split(" ");
    // console.log(time);
    // console.log(modifier);
    let [hours, minutes] = time.split(":");
    // console.log(hours);
    // console.log(minutes);
    // if it is 1:03 AM we reset hours to 1
    // if it is 1:03 PM we reset hours to 12+1 = 13
    // for that if hours is 12 reset the hours to zero
    if(hours === '12'){
        hours = '0'
    }
    if(modifier==="PM"){
        hours = parseInt(hours)+12
    }
    return `${hours}:${minutes}`
}
console.log(convert12to24('1:30 PM'));
console.log(convert12to24('1:30 AM'));
console.log(convert12to24('12:30 PM'));
console.log(convert12to24('12:30 AM'));
// outputs
// 13:30
// 1:30
// 12:30
// 0:30