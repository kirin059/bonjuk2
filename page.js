

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
