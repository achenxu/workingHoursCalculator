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
