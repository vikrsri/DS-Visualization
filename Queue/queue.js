class queue {
	constructor() {
		this.queueArr = new Array();
	}
	add() {
		var e = prompt("Please enter a value:");
		this.queueArr.push(e);
	}
	pop() {
		if (this.queueArr.length > 0) {
			var returnVal = this.queueArr[0];
			this.queueArr.shift();
			return returnVal;
		}
	}
	size() {
		return this.queueArr.length;
	}
}