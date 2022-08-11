function getLength(str1, str2, str3){
    let sumLength = str1.length + str2.length + str3.length;
    console.log(sumLength);
    let avLength = Math.floor(sumLength/3);
    console.log(avLength);
}

getLength('chocolate', 'ice cream', 'cake');
getLength('pasta', '5', '22.3');