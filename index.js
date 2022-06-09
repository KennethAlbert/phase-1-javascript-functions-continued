// code your solution here
function saturdayFun(activity="roller-skate"){
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
   return  `This Monday, I will ${activity}.`
}

function wrapAdjective(visual="*"){
    const adjective=function string(message){
       return  `You are ${visual}${message}${visual}!`
    }
    return adjective;
}