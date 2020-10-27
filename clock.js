const clockContainer=document.querySelector(".js-clock"),
      clockTitle= clockContainer.querySelector("span");

      function getTime(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${
          hours <10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      }

      function init(){
          getTime();
          setInterval(getTime, 1000);
      }

      init();


/*
${지정된 함수를 불러오는 것}  예를들면,
function color(red, blue){
  return ( `I like ${red} and ${blue}`)
}

document.write(color("peru", "purple"));

이런식으로 인자 x,y를 지정해준 뒤 해당 값을 리턴할 때, ${리턴인자}를 넣어준다

그리고 ? = if 와 같은개념 / : = or 과 같은개념
${ hour < 10 ? `0${hour}` : hours }
hour가 10보다 작으면(if) `0을 hour앞에 붙여주고` 그렇지않으면(:) 그냥 hour를 써준다는 뜻
*/
