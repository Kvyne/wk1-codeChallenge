//creating a function that ensures the score only allows values between 1 -100
function scoreLimit(score){
    if (score >= 0 && score <= 100){
    return studentScore(score);
  }
  
  else { return "Invalid Score Value"}
  }
  
  
  //creating a function that will return grades according to score
  function studentScore (score){
    if (score > 79){
    return "Grade A";
  }
  else if (score >= 60 && score <=79){
    return "Grade B";
  }
  else if (score >= 49 && score <= 59){
    return "Grade C";
  }
  else if (score >=40 && score <=50){
    return "Grade D";
  }
  else {
    return "Grade E";
  }
  }
  //input score using example
  console.log(scoreLimit(50));