import { Meteor } from 'meteor/meteor';
import Wages      from '/imports/api/wages';
import WageSum    from '/imports/api/wageSum';

allow = function() { return true;  }
deny  = function() { return false; }


/* Only Server is allowed to do any DB related operations */
/* Wages */
Wages.allow({
	insert : deny,
	update : deny,
	remove : deny
});
Wages.deny({
	insert : allow,
	update : allow,
	remove : allow
});


/* WageSum */
WageSum.allow({
	insert : deny,
	update : deny,
	remove : deny
});
WageSum.deny({
	insert : allow,
	update : allow,
	remove : allow
});
