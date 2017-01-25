import { Template } from 'meteor/templating';
import { _ }        from 'meteor/underscore';
import { Router }   from 'meteor/iron:router';
import WageSum      from '/imports/api/wageSum';
import Wages        from '/imports/api/wages';
import './wageList.html';
import '../ui_helpers.js';


Template.wageList.helpers({
  wageSum: function(){
    return WageSum.findOne({personId: Router.current().params.personId});
  },
  wageList: function(){
    return Wages.find({"personId" : Router.current().params.personId},{sort:{_id:1}});
  }
});
