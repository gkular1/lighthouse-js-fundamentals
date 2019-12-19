var ageCalculator = function(name, yearOfBirth, currentYear){

  displayName = name; 
  age = currentYear - yearOfBirth;
  return displayName + " is " + age + " years old."; 
}
console.log(ageCalculator("Gary",1995,2019));
