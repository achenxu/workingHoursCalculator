// Tests for the behavior of the wageSum collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { WageSum }  from './wageSum.js';

if (Meteor.isServer) {
  describe('wageSum collection', function () {
    it('insert correctly', function () {
      let inputObj = {
        name: 'Scott Scala',
        personId: '2'
      };
      const wageSumId       =  WageSum.insert(inputObj),
            added           =  WageSum.find({ _id: wageSumId }),
            collectionName  =  added._getCollectionName(),
            count           =  added.count();

      assert.equal(collectionName, 'wageSum');
      assert.equal(count, 1);
    });
  });
}
