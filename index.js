let func = ()=>{console.log("lets get funcky")}

function receivesAFunction(func){

return func();

}

function returnsANamedFunction(){
    let func = ()=>{console.log("hello")};
    return func;
}

function returnsAnAnonymousFunction(){
    return ()=>{
        console.lo("hi");
    }
}