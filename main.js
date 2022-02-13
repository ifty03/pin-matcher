document.getElementById("bigBtn").addEventListener("click",function randomNumber(){
    const rendomOutput = document.getElementById("formOutput");
    const randomly = Math.round(Math.random()*10000);
    const stringNum = randomly + "";
    if(stringNum.length == 4){
        rendomOutput.value = randomly
    }
    else{
        console.log("jhiu");
        randomNumber();
    }
})
document.getElementById("key-pad").addEventListener("click",function(event){
    const key = event.target;
    const keyValue = key.innerText;
    const formInput = document.getElementById("formInput");
    if(isNaN(keyValue)){
        if(keyValue == "C"){
            formInput.value = "";
        }
    }
    else{
        const previusNum = formInput.value;
        const newNum = formInput.value = previusNum + keyValue;
    }  
})

document.getElementById("submitBtn").addEventListener("click",function(){
    const rendomOutput = document.getElementById("formOutput").value;
    const formInput = document.getElementById("formInput").value;

    const succesNotify = document.getElementById("succesNotify");
    const failNotify = document.getElementById("failNotify");
    debugger;
    if(rendomOutput == formInput){
        
        failNotify.style.display = "none";
        succesNotify.style.display = "block";
    }
    else{
        
        succesNotify.style.display = "none";
        failNotify.style.display = "block";
    }
})