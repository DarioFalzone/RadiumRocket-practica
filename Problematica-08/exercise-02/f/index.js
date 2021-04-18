const loremString = "functioNAL programMIng";

const stringResult =
					loremString.substring(0, 1).toUpperCase() +
					loremString.substring(1, 10).toLowerCase() +
					" " +
					loremString.substring(11, 12).toUpperCase() +
					loremString.substring(12, 24).toLowerCase();

document.write(stringResult);