//Sorting Algorithms

// Bubble Sorting
function bubbleSort(arr) {
	console.time('bubbleSort');
	let x = arr;
	let n = arr.length;
	do {
		var sort = false;
		for(let i = 0; i < n; i++) {
			if(x[i] > x[i+1]) {
				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				sort = true;

			}
		}
		n--;
	} while (sort)
	return x;
	console.timeEnd('bubbleSort');
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 4223, 545, 23, 274, 213]));

// Selection sort
function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function selectionSort(arr) {
	let n = arr.length,
		min;
	for(let i = 0; i < n; i++) {
		min = i; //set minimum to this position

		//check the rest of the array to see if anything is smaller
		for(let j=i+1; j < n; j++) {
			if(arr[j] < arr[min]) {
				min = j;
			}
		}

		//if the minimum isn't in the position, swap it
		if (i != min) {
			swap(arr, i, min);
		}
	}
	return arr;
}
console.log(selectionSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 4223, 545, 23, 274, 213]));

// Insertion sort
function insertionSort(arr) {
	for(let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[0]) {
			//move current element to the first position
			arr.unshift(arr.splice(i,1)[0]);
		} else if (arr[i] > arr[i-1]) {
			//leave current element where it is
      		continue;
		} else {
			//find where element should go
			for (let j = 1; j < i; j++) {
				if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
					//move element
          			arr.splice(j,0,arr.splice(i,1)[0]);
				}
			}
		}
	}
	return arr;
}
console.log(insertionSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 4223, 545, 23, 274, 213]));