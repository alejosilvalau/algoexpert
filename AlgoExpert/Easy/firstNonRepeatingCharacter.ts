export function firstNonRepeatingCharacter(string: string) {
	const characterFrequencies: { [character: string]: number } = {};

	for (const character of string) {
		if (!(character in characterFrequencies))
			characterFrequencies[character] = 0;
		characterFrequencies[character]++;
	}

	for (let idx = 0; idx < string.length; idx++) {
		const character = string[idx];
		if (characterFrequencies[character] === 1) return idx;
	}

	return -1;
}
