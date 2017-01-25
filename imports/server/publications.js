import { Meteor } from 'meteor/meteor';
import { _ }      from 'meteor/underscore';
import Wages      from '/imports/api/wages';
import WageSum    from '/imports/api/wageSum';



Meteor.publish('WageSumList', function (month) {
  check(month, Number);
  let   publication =  this,
        query       =  { 'month': month };
  const wageSums    =  WageSum.find(query).fetch();
  /* Non-reactive publication of data - for cpu profiling */
  if ( wageSums.length ){
    wageSums.forEach( wageSum => publication.added('wageSum', wageSum._id, wageSum) );
  }

  publication.ready();
});


Meteor.publish("wageList", function(query){
  check(query, Object);

  let   publication =  this;
  const wages       =  Wages.find(query).fetch();
  const wageSums    =  WageSum.find(query).fetch();

  if ( wageSums.length ){
    wageSums.forEach( wageSum => publication.added('wageSum', wageSum._id, wageSum) );
  }
  if (wages.length){
    wages.forEach( wage => publication.added('wages', wage._id, wage) );
  }


  publication.ready();
});
