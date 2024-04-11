function firstWord(s) {
  // your code here
	if (s=="") {
		return s;
	}
	else if(s != ""){
		
		let str="";
		for (let t of s) {
			if(s[0] == " ") continue;
			str += t;
			if (t == " ") {
				break;
			}
		}
		return str;
		
	}
	
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
