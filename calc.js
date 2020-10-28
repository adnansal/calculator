var f_up=document.querySelector('#inpbox')
var t_up=document.querySelector('#textar')

f_up.addEventListener("keydown",(event)=>{
event.preventDefault()
var typekey=event.which;
console.log("keydown")
if(( (typekey >=96 && typekey <=111) || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.' || (typekey >=48 && typekey <=57))){
    try{
        f_up.value+=event.key
        t_up.value=eval(f_up.value)
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            t_up.value=f_up.value
        }
    }
}
else if(typekey===8){
    f_up.value=f_up.value.substring(0,f_up.value.length*1-1)
    if(f_up.value.length >= 2)
    {
        try{
            t_up.value=eval(f_up.value)
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                t_up.value=f_up.value
            }
        }
        
    }
    else{
        t_up.value=""
    }
}

else 
return false
})

f_up.addEventListener("input",(event)=>{
    event.preventDefault()
    var typekey=f_up.value;
    var regex=/^[0-9*+-/]+$/;
    console.log("change")
    console.log(regex.test(typekey))
    if(regex.test(typekey)){
        try{
            t_up.value=eval(f_up.value)
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                t_up.value=f_up.value
            }
        }
        
    
    }
    /*else if(typekey===8){
        f_up.value=f_up.value.substring(0,f_up.value.length*1-1)
        if(f_up.value.length >= 2)
        {
            console.log(f_up.value.length)
            t_up.value=eval(f_up.value)
        }
        else{
            t_up.value=""
        }
    }*/
    
    else 
    return false
    })

document.querySelectorAll('.flex-item').forEach(anykey => {
    anykey.addEventListener('click',event => {
        console.log("I AM HERE")
        console.log(anykey.getAttribute("data-value") )
        console.log(anykey.getAttribute("data-value")!=='cls' )
        if(anykey.getAttribute("data-value")!=='cls' && anykey.getAttribute("data-value")!=='=' ){
            f_up.value+=anykey.getAttribute("data-value")
            f_up.dispatchEvent(new Event("input"))
        }
        else if(anykey.getAttribute("data-value")==='cls'){
            f_up.value=f_up.value.substring(0,f_up.value.length*1-1)
            if(f_up.value.length >= 2)
            {
                  try{
                    t_up.value=eval(f_up.value)
                  }
                  catch (e) {
                    if (e instanceof SyntaxError) {
                        t_up.value=f_up.value
                    }
                }
            }
            else{
                 t_up.value=""
                }
        }
        
    })
})

