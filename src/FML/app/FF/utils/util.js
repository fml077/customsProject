export function randomRange(under, over) { //get a random number
	return Math.ceil(Math.random() * (over - under) + under);
}