// verify if the local storage has data if not set data from json file to it
if (localStorage.getItem("data") == null || "" || "{}") {
  // fetch data from local json file
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // set the data as json in localstorage
      data = JSON.stringify(data);
      localStorage.setItem("data", data);
    });
}
// get the data from localstroge and transfrom it into object
let data = JSON.parse(localStorage.getItem("data"));
console.log(data);
// comment class
class comment {
  constructor(id, content, time, score, img, name, replys) {
    this.id = id;
    this.content = content;
    this.time = time;
    this.score = score;
    this.img = img;
    this.name = name;
    this.replys = replys;
    // create a comment
    const comment = document.createElement("div");
    comment.setAttribute("class", "comment");
    const mainComment = document.createElement("div");
    mainComment.classList.add("main-comment comment-prototype");
    // replys-section
    const replySection = document.createElement("div");
    replySection.classList.add("replys-section");
    const replyline = document.createElement("div");
    replyline.classList.add("reply-line");
    const commentReplys = document.createElement("div");
    commentReplys.classList.add("comment-replys");
    // replys-section
    //score
    const scoreElement = document.createElement("div");
    scoreElement.classList.add("score");
    const up = document.createElement("span");
    up.classList.add("up");
    up.innerText = "+";
    const down = document.createElement("span");
    down.classList.add("down");
    down.innerText = "-";
    //score
    // text-content
    const textContent = document.createElement("div");
    textContent.classList.add("text-content");
    const commentHead = document.createElement("div");
    commentHead.classList.add("comment-head");
    //info
    const info = document.createElement("div");
    info.classList.add("info");
    const infoImg = document.createElement("img");
    infoImg.classList.add("profile");
    const infoName = document.createElement("p");
    infoName.classList.add("name");
    const date = document.createElement("span");
    date.classList.add("date");
    //info
    // buttons
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    // reply
    const reply = document.createElement("a");
    reply.classList.add("btn reply");
    const replyIcon = document.createElement("img");
    replyIcon.src = "./images/icon-reply.svg";
    const replyText = document.createElement("p");
    replyText.innerText = "Reply";
    // reply
    // edite
    const edite = document.createElement("a");
    edite.classList.add("btn edite");
    const editeIcon = document.createElement("img");
    editeIcon.src = "./images/icon-edite.svg";
    const editeText = document.createElement("p");
    editeText.innerText = "edite";
    // edite
    // delet
    const delet = document.createElement("a");
    delet.classList.add("btn delete");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./images/icon-delete.svg";
    const deleteText = document.createElement("p");
    deleteText.innerText = "delete";
    // delet
    // buttons
    // content
    const contentComment = document.createElement("p");
    contentComment.classList.add("content");
    // content
    // text-content
    //
    // set data to elements
    //
    comment.id = this.id;
    scoreElement.innerText = this.score;
    infoImg.src = this.img;
    infoName.innerText = this.name;
    date.innerText = this.time;
    contentComment.innerText = this.content;
  }
}
// reply class
class reply extends comment {
  constructor(id, content, time, score, img, name, replyTo) {
    super(id, content, time, score, img, name);
    this.replyTo = replyTo;
  }
}
