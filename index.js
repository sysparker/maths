function maths(opt,x,y){

    if(opt == 'add'){
        return x+y;
    }
    if(opt == 'sub'){
        return x-y;
    }
    if(opt == 'mul'){
        return x*y;
    }
    if(opt == 'div'){
        return x/y;
    }
    if(opt == 'mod'){
        return x%y;
    }
    return 0;
}

module.exports.maths=maths;