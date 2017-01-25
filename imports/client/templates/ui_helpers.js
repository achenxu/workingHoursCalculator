import { Template } from 'meteor/templating';
import moment       from 'moment';
import accounting   from 'accounting';


Template.registerHelper("formatAmount", function(amount){
  let format =  accounting.formatNumber(amount, 2, " ");
  return `$ ${format}`;
});


Template.registerHelper("totalDuration", function(minutes){
  let hours  =  Math.floor( minutes / 60),
      mins   =  minutes % 60;
  return `${hours}h ${mins}m`;
});

Template.registerHelper("formatDate", function(date){
  return moment(date).format('LT');
});

Template.registerHelper("getMonth", function(idx, format){
  let mL  =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      mS  =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  return (typeof format !="undefined" && format=='l') ? mL[idx] : mS[idx];
});
