// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  return Math.abs(someValue - 42);  
}

function distanceFromHqInFeet(someValue){
  return distanceFromHqInBlocks(someValue) * 264; 
}

function distanceTravelledInFeet(start, end){
  let diff = Math.abs(end-start) * 264;
  return diff;
}

function calculatesFarePrice(start, end){
  let far = distanceTravelledInFeet(start, end)
  let fare = 0;
 
  if(far <= 400){
    return 0; 
  }

  if(far > 400 && far < 2000){
    fare = (far - 400) * 0.02;
  }

  if(far > 2000 && far < 2500){
    return 25; 
  }
  if(far > 2500){
    return "cannot travel that far"
  }
  return fare;

}
