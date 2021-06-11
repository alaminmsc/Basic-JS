//AND-  && : both condition true.
//OR-   || : Any condition true
//NOT-  !  : if condition not true

var jobPaiso = true;
var savingAmount = 5000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log('Aso tomar patri khuji');
}
else {
    console.log('Tor kopal a biya nai')
}

//Multiple condition
if (jobPaiso == true && savingAmount > 10000) {
    return "Looking"
}
else if (jobPaiso == true) {
    return "Wait sometimes"
} else {
    return "Cannot Marry";
}