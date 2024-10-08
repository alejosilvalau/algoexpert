// O(n) Time | O(1) Space
// n is the length of the array
// Uses the two pointer technique to move all instances of a number to the end of the array

export function moveElementToEnd(array: number[], toMove: number) {
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		while (i < j && array[j] === toMove) j--;
		if (array[i] === toMove) swap(i, j, array);
		i++;
	}
	return array;
}

function swap(i: number, j: number, array: number[]) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
