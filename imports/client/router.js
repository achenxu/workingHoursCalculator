/**
 * dependencies
 */
import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router'

/**
 * Collections
 */
import Wages      from '/imports/api/wages';
import WageSum    from '/imports/api/wageSum';

/**
 * templates
 */
import '/imports/client/templates/layouts/blankLayout.js';
import '/imports/client/templates/common/error.js';
import '/imports/client/templates/monthlyWages/monthlyWages.js';
import '/imports/client/templates/wageList/wageList.js';


/* Route Config */

Router.configure({
  layoutTemplate:   'blankLayout',
  notFoundTemplate: 'error'
});


Router.route('/', function() {
  Router.go('monthlyWages');
});

Router.route('monthlyWages', {
  path : '/monthlyWages',
  template: 'monthlyWages'
});

Router.route('wageList', {
  path : '/wageList/:personId/:month',
  template: 'wageList',
  subscriptions : function(){
    let query = {
      personId: String(this.params.personId),
      month: parseInt(this.params.month)
    }
    this.subscribe("wageList", query).wait();
  },
});
