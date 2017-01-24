/*  SERVER SIDE DB API  */
/*  ALL DB OPERAIONS ARE MEANT TO BE DONE HERE  */
import { Meteor }  from 'meteor/meteor';
import Wages       from '/imports/api/wages';
import WageSum     from '/imports/api/wageSum';


export function insertDayWageAndIncrementSum(wage) {
    check(wage, Object);

    var id = Wages.insert(wage);
    /* wage inserted successfully, now lets increment sum */
    if (id){

      let amount =  wage.amount,
          query  =  { personId: wage.personId, month: wage.month },
          update =  {
            $inc: {
              'amount.total'            :  amount['total'],
              'amount.evening'          :  amount['evening'],
              'amount.overtime'         :  amount['overtime'],
              'amount.evening+overtime' :  amount["evening+overtime"],
              'totalMinutes'            :  wage['totalMinutes']
            },
            $setOnInsert : {
              'name' : wage.name
            }
          },
          options = { upsert: true };

       return WageSum.update(query, update, options);

    }
}
