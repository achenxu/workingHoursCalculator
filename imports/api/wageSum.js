import { Mongo } from 'meteor/mongo';

/* Sum of wages wrt to month and employee */

const WageSum = new Mongo.Collection('wageSum');


export default WageSum;
