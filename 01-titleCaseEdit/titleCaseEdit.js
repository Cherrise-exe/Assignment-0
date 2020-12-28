function titleCaseEdit(title) {
  // Insert code here;
  	var array = title.split(" ");
	var correctedTitle = array.map(
		function (value){
				return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
		});
	return correctedTitle.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
