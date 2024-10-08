// O(n) time | O(n) space
// n = number of nodes in the tree
// It uses the breadth-first search technique,
// where a queue is used to store the nodes of the tree.
// This is the iterative solution.

class BinaryTree {
	value: number;
	left: BinaryTree | null;
	right: BinaryTree | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export function invertBinaryTree(tree: BinaryTree | null) {
	const queue: Array<BinaryTree | null> = [tree];
	while (queue.length) {
		const current = queue.shift()!;
		if (current === null) continue;
		swapLeftAndRight(current);
		queue.push(current.left);
		queue.push(current.right);
	}
}

function swapLeftAndRight(tree: BinaryTree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}
