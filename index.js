// code your solution here
function saturdayFun(activity = "roller-skate"){
    return 'This Saturday, I want to '+activity+'!';
}

// function saturdayFun(activity = 'bathe my dog'){
//     return ("This Saturday,I want to bathe my dog!")

// }
function mondayWork(activity = 'go to the office'){
    return 'This Monday, I will '+ activity + '.';
}

function wrapAdjective(tool = '*'){
    return function(adjective = 'special'){
        return 'You are ' + tool + adjective + tool + '!';
    }
}