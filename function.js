function loopOver(start, end) {
	if (start > end) {
		return true;
	}
	console.log(start);
	start++;
	loopOver(start, end);
}

loopOver(1, 20);