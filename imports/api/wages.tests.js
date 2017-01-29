// Tests for the behavior of the wages collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Wages }  from './wages.js';

if (Meteor.isServer) {
  describe('wages collection', function () {
    it('insert correctly', function () {
      let inputObj = {
        name: 'Scott Scala',
        personId: '2'
      };
      const wageId          =  Wages.insert(inputObj),
            added           =  Wages.find({ _id: wageId }),
            collectionName  =  added._getCollectionName(),
            count           =  added.count();

      assert.equal(collectionName, 'wages');
      assert.equal(count, 1);
    });
  });
}
