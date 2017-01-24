import { Template } from 'meteor/templating';
import { _ }        from 'meteor/underscore';
import WageSum      from '/imports/api/wageSum';
import './monthlyWages.html';
import '../ui_helpers.js';


Template.monthlyWages.events({
  "change #monthSelect": function(evt, tmpl){
      let month = $('#monthSelect').val();
      if (!_.isEmpty(month)){
          Meteor.subscribe("WageSumList", parseInt(month) );
      }
    },

    'click .vertical-timeline-content' : function(e, tmpl){
      let wageSum  =  this,
          params   =  {
            personId : wageSum.personId,
            month      : wageSum.month
      };

      Router.go('wageList', params);
    }
});


Template.monthlyWages.helpers({
  wageSumList: function(){
    return WageSum.find();
  }
});
