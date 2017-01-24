import { Mongo } from 'meteor/mongo';
import WageSum   from '/imports/api/wageSum';
/* Wages collection that would store wage related documents */

const Wages = new Mongo.Collection('wages');

export default Wages;
