    /*
    var numberList=[1,2,3,4,5,6,7,8,9];
    var numberArray=[];

    for(var i = 0; i<4; i=i+1){
        var pick=numberList.pop();  //pop은 마지막 순서대로 뽑는것(9,8,7,6)  =  뽑는것  
        numberArray.unshift(pick);     //push는 마지막 순서대로 추가하는 것 (9,8,7,6)  =  넣는것  
        }
  
        document.write(numberArray);
//shift는 처음 순서대로 뽑기(1,2,3,4)  =  뽑는것
//unshift 처음 순서대로 추가하는 것(4,3,2,1)  = 넣는것
//splice()  랜덤으로 뽑는 것 -> splice(3(자리수), 2(뽑으려는 갯수)) - 3번째 자리 이후부터 2개를 뽑겠다(4,5)
//splice(math.floor(math.random()*9),1)[0];
    for(var i = 0; i<6; i=i+1){
        var pick=numberList.shift();  //pop은 마지막 순서대로 뽑는것(9,8,7,6)  =  뽑는것  
        numberArray.push(pick);     //push는 마지막 순서대로 추가하는 것 (9,8,7,6)  =  넣는것  
        }

        document.write(numberArray);
    */

    const page1=document.querySelector(".page")   
    function intro(soup, taste){
        return(`I like 본죽 brand and ${soup}  is so ${taste} <br>`);
    }
        document.write(intro("불낙죽", "delicious"));
        document.write(intro("콩나물죽", "healthy"));
        document.write(intro("불고기죽", "amazing"));
        document.write(intro("갈비죽", "cool"));
        document.write(intro("짬뽕죽", "yammy"));
        document.write(intro("전복죽", "nice" ));
        document.write(intro("호박죽", "bravo"));
        document.write(intro("새우죽", "lucky"));
        document.write(intro("새우짬뽕죽", "happy"));
        document.write(intro("크림죽", "really delicious"));
        document.write(intro("전죽", "never forget"));

        document.title= "I never give up!"

        const title=document.getElementById("title");
        // const title=document.querySelector("#title");
        title.innerHTML="Hi! Im going to introduce about the list of dishes and it's taste";
        title.style.color="peru"
        
        console.log(document)

        const base_color="peru";
        const other_color="green";

        function handleClick(){
            const current_color=title.style.color;
           if(current_color===base_color){
            title.style.color=other_color;
           }else{
            title.style.color=base_color
           }
        }

        function init(){
            title.style.color=base_color
            title.addEventListener("click", handleClick);
        }
        
        init();
        
        