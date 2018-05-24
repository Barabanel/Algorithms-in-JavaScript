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

// END OF SORTING ALGORITHMS

// Searching algorithms

// Linear search
function linearSearch(arr, toFind) {
	for (let i=0; i < arr.length; i++) {
		if (arr[i] === toFind) return i; //return index
	}
	return -1;
}
console.log(linearSearch([2,4,'JavaScript', 99], 'JavaScript'));
console.log(linearSearch([2,4,'JavaScript', 99], 7));

// Binary search
function binarySearch(arr, toFind) {
	let sorted = arr.sort();
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if(sorted[mid] === toFind) {
			//return toFind
			return sorted[mid];
		} else if (sorted[mid] < toFind) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
console.log(binarySearch([2,4,90,65,1,99], 65));

// END OF SEARCHING ALGORITHMS

// Factorial Algorithm
//recursive
function factorial(x) {
	if (x === 0) {
		return 1;
	}

	return x * factorial(x-1);
}
console.log(factorial(5));
// non recursive
function nonRecursiveFactorial(x) {
	let res = 1;
	for(let i = 1; i <= x; i++){
		res *= i;
	}
	return res;
}
console.log(nonRecursiveFactorial(5));

// Fibonnaci number
//recursive
function recFib(len) {
	if(len === 1) {
		return [0,1];
	} else {
		var s = recFib(len - 1);
		s.push(s[s.length - 1] + s[s.length - 2]);
	}
	return s;
}
console.log(recFib(9));
// non recursive
function fibonacci(len) {
	let fArr = [0,1];
	let fNum = 1;
	for (let i = 1; i < len-1; i++) {
		fArr.push(fNum);
		fNum = fNum + fArr[i];
	}
	return fArr;
}
console.log(fibonacci(9));
