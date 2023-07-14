let name = 'vinay is my brother';



function vowel (string) {
	const vowelList = 'aeiouAEIOU';
	let vcount = 0;
	for (let i = 0;i < string .length; i++){
        if (vowelList.includes(string[i])){
        	vcount++
	    }
    }
    return vcount;
}

console.log(vowel(name));