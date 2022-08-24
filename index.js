function receivesAFunction(spy){
    spy ();
}
function returnsANamedFunction (){
    return function fn(){
        fn();
    }
}

function returnsAnAnonymousFunction (){
   return function (){
        console.log ('function');
    };
}