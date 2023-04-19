document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
   alert("검색을 수행합니다!"); 
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
    let ban_words =["씨발","씨발련아","개새끼","니엄"]
    if(ban_words.some(word => search_str.value.includes(word))) { // 제한 단어가 포함되어 있는지 확인
      alert("해당 단어는 검색할 수 없습니다."); // 제한 단어가 포함되어 있으면 경고 메시지 표시
   }
    else if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교
       alert("검색어가 비었습니다. 입력해주세요"); }
    else{
       alert("검색을 수행합니다!");
       let text = document.getElementById("search_message").innerHTML = search_str.value;
       document.querySelector("#form_main").submit();
    }
   document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   console.log(search_str.value); // 콘솔에 출력

}


