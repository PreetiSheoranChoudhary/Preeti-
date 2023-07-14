function upperCase(str)
{
	// aray ko split kiya
	var array1 = str.split( " ");
	var newarray1 = [ ];
	// ab for loop chla diya
	for (var i = 0;i < array1.length ;  i++) {
		newarray1.push ( array1[i].chatat(0).toupperCase() + array1[i].slice(1));
	}
}