import { createDate, eveningWorkingHour, overTimeMultiplier } from '/imports/helpers/helpers';


export function processDayField(day){

  let _date         =  day[2].replace(/\./g, '-'),
      _startTime    =  createDate(_date, day[3]),
      _endTime      =  createDate(_date, day[4]),
      wageSumObject =  {
        'total'     :0,
        'evening'   :0,
        'overtime'  :0,
        'evening_overtime':0
      },
      wage          = {
        'name'      :  day[0],
        'personId'  :  day[1],
        'date'      :  _date,
        'startTime' :  new Date( _startTime ),
        'endTime'   :  new Date( _endTime ),
        'month'     :  new Date( _startTime ).getMonth()
      };


  if (_endTime < _startTime){
    _endTime = _endTime.add(1, 'days');
    wage['endTime'] = new Date(_endTime);
  }
  wage['totalMinutes'] = _endTime.diff(_startTime, 'minutes');
  wage['amount']       = getWageForTheDay(_startTime, wage['totalMinutes'], _date, wageSumObject, 1);

  return wage;
}




function getWageForTheDay (begin, total, date, wage, i){
  if ( i <= total/15 ){
    let evening     =  eveningWorkingHour(begin),
        overTime    =  overTimeMultiplier(i);

    wage['total'] += 0.25*(3.75+(evening*1.15))*overTime;
    if ( evening && overTime == 1 ){
      wage['evening'] += 0.25*(3.75+(evening*1.15))*overTime;
    }
    if( !evening && overTime > 1 ){
      wage['overtime'] += 0.25*(3.75+(evening*1.15))*overTime;
    }
    if ( evening && overTime > 1 ){
      wage['evening_overtime'] += 0.25*(3.75+(evening*1.15))*overTime;
    }

    return getWageForTheDay(begin.add(15, "minutes"), total, date, wage, i+1);
  }

  return wage;
}
