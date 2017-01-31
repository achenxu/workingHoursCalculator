import { Meteor } from  'meteor/meteor';
import { _ }      from  'meteor/underscore';
import csv        from  'csv';
import Wages      from  '/imports/api/wages';
import Fiber      from  'fibers';

/* import some helper functions */
import { insertDayWageAndIncrementSum } from  '/imports/helpers/server/db';
import { processDayField }              from  '/imports/helpers/server/helpers';

/* import some files */
import '/imports/server/publications';
import '/imports/server/permissions';



Meteor.startup(() => {
  // code to run on server at startup
  if ( !Wages.find().count() ){
    console.log('No Data in DB - Lets seed...');
    var data = Assets.getText('HourList201403.csv');
    csv.parse(data, function(err, res) {
      /* _.rest() - skip the 1st row */
      wageHandler( _.rest(res) );
  	});
  }

});


function wageHandler(wageData){
  check(wageData, Array)
  wageData.forEach(function(dayField){
    var wage = processDayField(dayField);
    if(wage){
      Fiber(function() {
        insertDayWageAndIncrementSum(wage);
      }).run();
    }
  })
}
