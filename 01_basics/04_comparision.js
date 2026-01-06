/*
Comparison operators are used to compare two values.
Comparison operators always return true or false.


==	(equal to)
--------------
9 == 8	    false	
5 == 5	    true	
5 == "5"	true	

===	equal value and equal type	
------------------
5 === 5  	true	
5 === "5"	false	

!=	not equal	
-----------------
5 != 8	 true	

!==	not equal value or not equal type	
---------------------------
5 !== 5	    false	
5 !== "5"	true	
5 !== 8	    true	

>	greater than	
----------------
5 > 8	   false	

<	less than	
----------------
5 < 8	   true	

>=	greater than or equal to	
--------------------------
5 >= 8	   false	

<=	less than or equal to
----------------------------
5 <= 8   	true

*/

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


console.log("2" === 2);