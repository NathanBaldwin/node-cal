module.exports = (year, month, day) => {
 // var [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] =

  var months = ["      January ", "      February ", "       March ", "       April ",
    "        May ",   "        June ", "        July ", "       August ", "     September ", 
    "      October ", "      November ", "      December "];

    //console.log("months[1]", months[1]);
    return months[month - 1];
}
