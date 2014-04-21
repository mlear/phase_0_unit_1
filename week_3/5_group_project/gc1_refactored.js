/* Below you will find the code you are looking for I believe.  It first creates a formula what will determine the sum of a set
of numbers that you give it.  It will tell which numbers you are adding up, what type of item you are adding, and what number
you are beginning at.  It will then proceed to add up all of the numbers, giving you a progress report as it goes.

This formula can be run by typing sumFormula((array name)).  

You will also find a second formula that will calculate the average of the group of numbers that you give to the forumla.  It will
tell you that it is running, tell you what type of of item it is averaging, and tell you the total sum and average.

This formula can be run by typing avgFormula((array name)).

Finally you will find a formula that will calculate the median of the set of numbers that you give it.  The formula will tell you
that it is running, what you are taking the median of, and tell you what the median is.

This formula can be run by typing medianFormula((array name)).

*/




// Context: two groups of numbers, one group has an even number of numbers the other has an odd number of numbers.
oddArray1 = [1, 2, 3, 4, 5, 6, 6];
oddArray2 = [1, 2, 3, 4, 5, 6, 7];
evenArray1 = [1, 2, 3, 4, 5, 6, 7, 15];
evenArray2 = [1, 2, 3, 4];

// 1)
// Define sum formula 
// 
function sumFormula(array) {

	console.log("Running sumFormula on [" + array + "]...");

	var sum = 0;
	console.log("Sum variable is a " + typeof(sum));
	console.log("Sum variable is set to " + sum);

	for (var i = 0; i < array.length; i++) {
		sum = (sum + array[i]);
		console.log("Sum variable is now set to " + sum);
	}
}

// 2)
// Find sum of numbers in odd group of numbers: 

sumFormula(oddArray1);
sumFormula(oddArray2);

// 3)
// Find sum of numbers in odd group of numbers:

sumFormula(evenArray1);
sumFormula(evenArray2);


// 4)
// Define average formula

function avgFormula(array) {

	console.log("Running avgFormula on [" + array + "]...");

	var avg = 0;
	var sum = 0;
	console.log("Avg variable is a " + typeof(avg));

	for (var i = 0; i < array.length; i++) {
		sum = (sum + array[i]);

		if (i === (array.length - 1)) {
			console.log("The total sum of all numbers in [" + array + "] is " + sum);
			avg = (sum / array.length);
			console.log("The mean value of all numbers in [" + array + "] is " + avg);
		}
	}
}

// 5)

avgFormula(oddArray1);
avgFormula(oddArray2);


// 6) 

avgFormula(evenArray1);
avgFormula(evenArray2);

// 7) 
// write formula for median
// provide the object type of median (i.e. typeof median)

function medianFormula(array) {
	
	console.log("Running medianFormula on [" + array + "]...");
	
	var median = 0;
	console.log("Median variable is a " + typeof(median));

	if (array.length % 2 === 0) {
		median = (((array[(array.length / 2) - 1]) + (array[(array.length / 2)])) / 2);
	} else {
		median = (array[(array.length / 2) - 0.5]);
	}

	console.log("The median of [" + array + "] is " + median);
}

// 8)
// Median of the numbers in the odd group of numbers

medianFormula(oddArray1);
medianFormula(oddArray2);


// 9) 
// Median of the numbers in the even group of numbers

// NOTE FROM ZACH: The test number given to me for this section was 5.5, which was incorrect for both arrays. So I changed it to 4.5.
medianFormula(evenArray1);
medianFormula(evenArray2);