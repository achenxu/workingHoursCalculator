// Test whether the function is properly calculating
//
// View following pages for guidance
// http://bit.ly/2jPXtJN
// http://bit.ly/2kmwh6L


import { processDayField }  from  '/imports/helpers/server/helpers';


describe("day field is correctly processed", function() {

  it('should be able to return total amount of working minutes correctly', function(){
    let dayField  =  [ 'Scott Scala', '2', '28.3.2014', '8:30', '19:00' ],
        wageObj   =  processDayField( dayField );
    expect( wageObj.totalMinutes ).toEqual(630);
  });


  it('should be able to return total amount earned correctly', function(){
    let dayField  =  [ 'Larry Lolcode', '3', '30.3.2014', '8:00', '16:00' ],
        wageObj   =  processDayField( dayField );
    expect( wageObj.amount.total ).toEqual(30);
  });

});
