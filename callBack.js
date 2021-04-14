 function callBack(name, age,task){
     console.log('hello !!!!' , name)
     console.log('My age :' , age)
     task();
 }

 function playCricket(){
     console.log('I play cricket')
 }
 
 function playFootBall(){
     console.log('I play FootBal')
 }


 callBack('sumos', 17,playCricket)
 callBack('ruble', 21, playFootBall)


 