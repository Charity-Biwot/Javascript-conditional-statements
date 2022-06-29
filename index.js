// #Assignment 1: Conditionals & Loops1.
//Write a JavaScript program which iterates the integers from 1 to 100. But for
// #multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for ( var int = 1; int <= 100; int++ )
{
  if ( int%3 === 0 && int%5 === 0 )
  {
    console.log( int + " FizzBuzz" );
  }
  else if ( int%3 === 0 ) 
  {
    console.log(int+ " Fizz" );
  }
  else if ( int%5 === 0 ) 
  {
    console.log(int+ " Buzz" );
  }
  else
  {
    console.log(int);
  }
}




// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var num = 0; num < 1000; num++)
{
    if (num % 3 === 0 || num % 5 === 0)//===checks if two operands are equal
    {
        sum += num;
    } 
}
console.log(sum);


// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// var numbers = 0
for (var ints = 0; ints <= 20; ints++){
    if (ints === 0){ 
        console.log(ints + "i s even");
    }
    else if (ints %2 === 0) {
        console.log(ints + " is even");
    }
    else {
        console.log(ints + " is odd");
    }

}



// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
    var num = [-2, 4,-5, 6,]
    largest = 0
    for ( y = 0; y > largest; y++){
    if (num>largest) {
      var largest = [y];
    }

    }
    console.log(largest)

    



// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largestone(x,y){
if (x>y){
  console.log(x)
}
else{
  return y
}

}
console.log(largestone(10,40))
// 6. Write a JavaScript program to find leap years from 2000 to 2022
for (b=2000;y<=2022;b++){
  if ((b%4===0 && b%100!==0) || (b%100===0 && b%400===0)){
    console.log(b);

  }
  else{
    console.log(false);
  }
}
