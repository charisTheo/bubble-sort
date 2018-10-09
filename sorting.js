let myArray = [1,9,2,7,6,8,11,15,12,10,3];

let compare = function(a, b) {
 return a - b;
}

sortAscending(myArray);
sortDescending(myArray);

function sortDescending(arrayToSort) {
 for (var sortCount = 0; sortCount < arrayToSort.length/2; sortCount++) {
	for (var i = 0; i < arrayToSort.length -1; i++) {
  	for (var j = i+1; j <= i+2 && j < arrayToSort.length; j++) {
  		var comparison = compare(arrayToSort[i], arrayToSort[j]);
    	if (comparison < 0) {
    	//comparison is positive (a is greater than b)
    		var temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[i];
        arrayToSort[i] = temp;
    	}
    }
  }
 }
 console.log("Decending: " + arrayToSort.toString());
}

function sortAscending(arrayToSort) {
 for (var sortCount = 0; sortCount < arrayToSort.length/2; sortCount++) {
	for (var i = 0; i < arrayToSort.length -1; i++) {
  	for (var j = i+1; j <= i+2 && j < arrayToSort.length; j++) {
  		var comparison = compare(arrayToSort[i], arrayToSort[j]);
    	if (comparison > 0) {
    	//comparison is positive (a is greater than b)
    		var temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[i];
        arrayToSort[i] = temp;
    	}
    }
  }
 }
 console.log("Ascending: " + arrayToSort.toString());
}

