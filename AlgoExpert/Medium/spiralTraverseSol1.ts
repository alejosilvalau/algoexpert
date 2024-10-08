// O(n) Time | O(n) Space
// n is the length of the array
// the O(n) space comes from the result array
// The O(n) time comes from the fact that we have to traverse the entire two-dimensional array

export function spiralTraverse(array: number[][]) {
	const result: number[] = [];
	let startRow = 0,
		endRow = array.length - 1;
	let startCol = 0,
		endCol = array[0].length - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let col = startCol; col <= endCol; col++) {
			result.push(array[startRow][col]);
		}

		for (let row = startRow + 1; row <= endRow; row++) {
			result.push(array[row][endCol]);
		}

		for (let col = endCol - 1; col >= startCol; col--) {
			if (startRow === endRow) break;
			result.push(array[endRow][col]);
		}

		for (let row = endRow - 1; row > startRow; row--) {
			if (startCol === endCol) break;
			result.push(array[row][startCol]);
		}

		startRow++;
		endRow--;
		startCol++;
		endCol--;
	}

	return result;
}
