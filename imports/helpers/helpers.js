/* SOME HELPER FUNCTIONS THAT COULD BE USED BOTH ON CLIENT AND SERVER */
import { Meteor }  from 'meteor/meteor';
import moment      from 'moment';


/* HELPER FUNCTION FOR CREATING A DATE */
export function createDate(date, time) {
  return moment(date + " " + time, "DD-MM-YYYY HH:mm");
}

/* HELPER FUNCTION FOR CHECKING EVENING WORKING HOUR */
export function eveningWorkingHour(time) {
  let date     =  time.get("date")+"."+(time.get("month")+1)+"."+time.get("year"),
      morning  =  createDate(date, "06:00"),
      evening  =  createDate(date, "18:00");

  return (time < morning || time >= evening);
}

/* HELPER FUNCTION FOR OVER TIME MULTIPLIER IF NEEDED  */
export function overTimeMultiplier(segment) {
    check(segment, Number);
    let increment = 1;

    if ( segment > 32 ) { increment = 1.25; } 
    if ( segment > 40 ) { increment = 1.50; }
    if ( segment > 48 ) { increment = 2.00; }

    return increment;
}
