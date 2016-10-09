var kilometersToMiles = function(kilometer) {
  kilometer = Number(kilometer);

  return kilometer * 0.621371;
};

var milesToKilometers = function(miles) {
  miles = Number(miles);

  return miles * 1.60934;
};

var findRunIndex = function(runningLog, id){
  for(var i = 0; i < runningLog.length; i++){
    if(runningLog[i]._id == id){
      var index = i;
    }
  }

  return index;
};

var findRun = function(runningLog, id){

  for(var i = 0; i < runningLog.length; i++){
    if(runningLog[i]._id == id){
      var run = runningLog[i];
    }
  }

  return run;
};

var calculatePace = function(time, miles){
  var pace = [];
  miles = Number(miles);
  time = time.split(':');

  //change each element to an integer
  for(var i = 0; i < time.length; i++){
    time[i] = Number(time[i]);
  }

  //change mhr/min/sec to all seconds
  if(time.length === 3){
    time[0] = time[0] * 60 * 60;
    time[1] = time[1] * 60;
  }else if(time.length === 2){
    time[0] = time[0] * 60;
  }

  //add all seconds together
  time = time.reduce(function(previous, current){
    return previous + current;
  });

  //divide time by miles and round
  time = Math.round(time/miles);

  //calculate new minutes and seconds and add to pace
  pace.push(Math.floor(time/60).toString());
  if(time%60 < 10){
    pace.push('0' + (time%60).toString());
  } else {
    pace.push((time%60).toString());
  }

  return pace.join(':');
};


module.exports = {
  findRunIndex: findRunIndex,
  findRun: findRun,
  calculatePace: calculatePace
};
