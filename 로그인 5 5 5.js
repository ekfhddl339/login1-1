function login() {
    /*1)로그인 아이디를 반영하여 
      2)환영메시지 출력하기*/
    const el = document.getElementById("ID").value;
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = "Welcome to 'Naevis' world' mr/ms. " + el + " !";

    //a element(요소)의 href attribute(속성)를 업데이트
    const naevisDoneMovie = document.getElementById("naevisDoneMovie");
    naevisDoneMovie.href= "https://www.youtube.com/watch?v=2ZdVzQRkS4c)";

    /*1)img element의 src attribute를 업데이트
      2)이미지의 스타일을 업데이트*/
    const naevisImg = document.querySelector("img");
    naevisImg.src = "https://i.pinimg.com/736x/fc/9d/2a/fc9d2a04d72719a724fc86c5612407e2.jpg";
    naevisImg.style = "width: 600px; border-radius: 0"
}