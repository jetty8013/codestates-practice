// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);


// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement('img');
  avatarImg.className = "discussion__avatar--img"
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = 'avatar of ' + obj.author;
  avatarWrapper.append(avatarImg)
  
  const agoraTtitle = document.createElement("h2");
  agoraTtitle.className = "discussion__title";
  discussionContent.append(agoraTtitle);

  const agoraLink = document.createElement("a");
  agoraLink.href = obj.url;
  agoraLink.textContent = obj.title;
  agoraTtitle.append(agoraLink);

  const writerName = document.createElement("div");
  discussionContent.append(writerName);
  
  writerName.classList.add("discussion__information");
  writerName.textContent = `${obj.author} /  ${new Date(obj.createdAt).toLocaleString("ko-KR")}`;

  const isAnswerd = document.createElement("p");
  isAnswerd.className = "discussion__answered"
  isAnswerd.textContent = obj.answer ? "☑" : "☒";
  discussionAnswered.append(isAnswerd);


  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

const addDial = document.querySelector("section.dial_number");

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    const writerName2 = document.createElement("span");
    writerName2.textContent = i
    addDial.append(writerName2)
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

const scroll_discussion = document.querySelector("section.discussion__wrapper");

scroll_discussion.onmouseover=function(){
  // console.log(getIndex(this))
}

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

const submit = document.getElementById('submit')

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const obj = {
    id: "id",
    createdAt: new Date(),
    title: document.getElementById('usertitle').value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: document.getElementById('username').value,
    answer: null,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/112256786?v=4",
  };

  ul.prepend(convertToDiscussion(obj))
});