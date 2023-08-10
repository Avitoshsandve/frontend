//fixes callback hell
//basically a asynchronous chaining in which two instructions can be passed to the same function consecutively one after other in the same function
function college()
{
    console.log("mark attendance");
}
function library(){
    console.log("study silently");
    setTimeout(college,1000)
}
setTimeout(library,1500)

//callback hell implementation;
function library(){
    console.log("study silently");
}
function college(){
    console.log("mark attendance");
    setTimeout(library,1500)
}
setTimeout(college,1000)