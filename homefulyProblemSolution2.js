var num = prompt("Enter size of the staircase");
var i, j, k;
for (i = 0; i < num; i++){
	for(j = 0; j < num - i - 1; j++){
		document.write("&nbsp;&nbsp;");
		}
	for(k = 0; k <= i; k++){
		document.write("#");
		}
	document.write("<br>");
}