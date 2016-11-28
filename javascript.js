/*Bitwise Functions
function bitwiseAnd(x,y)
{
 return x & y;
}
function bitwiseOr(x,y)
{
 return x | y;
}
function bitwiseNot(x)
{
  return ~x;
}
function bitwiseXor(x,y)
{
  return x ^ y;
}
function bitwiseLeftShift(x,y)
{
  return x << y;
}
function bitwiseRightShift(x,y)
{
  return x >> y;
}
*/

/*Palindrome question
function palindrome(x)
{
  return x.split("").reverse().join("");
}
*/

/*Substring question
function removeSubstring(x,y)
{
  return x.split(y).join("");
}
*/
/* Repeating "I am awesome" question
function awesomeRepeat(x)
{ 
 return "I am awesome ".repeat(x);
}
*/

 //Ordering 3 numbers


/*Sort number Question
function sortNumbers() {
   return points.sort(function(a, b){return a - b});
    
}
*/
function grades(x)
{
  switch(true) {
    case (x <= 100 && x >= 90):
        return "grade = A";
    case (x <= 89 && x >= 80):
        return "grade = B";
    case (x <= 89 && x >= 70):
        return "grade = C";
    case (x <= 79 && x >= 60):
        return "grade = D";
    case (x <= 59):
        return "grade = F" ;  
  }
}