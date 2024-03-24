//Function to detect speeding and calculate points
function speedDetector(speed){
    //define speed limit
    const speedLimit = 70;
    //calculate points based on the difference between the speed and the limit
    let points =Math.floor( (speed - speedLimit)/ 5)
    
    // Check if the speed is within the limit
if (speed <= speedLimit){
     return"Ok"}
    else if(points >=12){
        return "license suspended"}
else if(points >0){
     return `${points} points`
    }
    }

 //test function with speed example:
console.log(speedDetector(200));