function firstWord(s) {
  // your code here
	if (s=="") {
		return s;
	}
		s.trim();
	else if(s != ""){
		
		let str="";
		for (let t of s) {
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
