var maks = [45,66,7,54,95,7,1,5,7,448,547,111,54,999]
var maz = maks[0]
for(var i = 0; i< maks.length;i++){
    var element = maks[i]
    if(element > maz){
        maz = element
      }

}

console.log(maz)