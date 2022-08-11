function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
    return ("This one is on me!");
  }
  else if(someValue <=2500){
    return ("I will gladly take your thirty bucks.");
  }
  else {
    return("No can do.");
  }
  
}

function ternaryCheckCity(cityName){
  // Write your code here!
  const toGo = cityName === "NYC" ? "Ok, sounds good.":"No go.";
  return (toGo);
}

function switchOnCharmFromTip(someFeedback){
  // Write your code here!
  switch(someFeedback){
    case "generous":
      return ("Thank you so much.");
    case "not as generous":
      return("Thank you.");
    default:
      return("Bye.");
  }
}