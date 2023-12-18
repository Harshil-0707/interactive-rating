const myLabel = document.getElementById("user-rating");
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const val = e.currentTarget.value;
     
        document.getElementById("submitBtn").onclick = () =>{
            if(val.empty){
                document.getElementById("rating-state").style.display = "block";
                document.getElementById("thank-you-state").style.display = "none";
            }else{
                document.getElementById("rating-state").style.display = "none";
                document.getElementById("thank-you-state").style.display = "flex";
                myLabel.innerHTML = val;
            }
        };
    });
});