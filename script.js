function firstWord(s1) {
  // your code here
	let s = s1.trim() ;
	let strArr = s.split(' ');
	return strArr[0];
}

// Do not change the code below

const s1 = prompt("Enter String:");
alert(firstWord(s1));
