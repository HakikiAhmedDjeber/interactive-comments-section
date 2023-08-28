// verify if the local storage has data if not set data from json file to it
async function getData() {
  if (localStorage.length == 0) {
    // fetch data from local json file
    await fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("show the data after fetch if from the json file");
        console.log(data);
        // set the data as json in localstorage
        data = JSON.stringify(data);
        localStorage.setItem("data", data);
      });
  }
  // get the data from localstroge and transfrom it into object
  let data = JSON.parse(localStorage.getItem("data"));
  console.log("show the data form the local storage");
  console.log(data);
}
getData();
// comment class
class Comment {
  constructor(id, content, time, score, img, name, replys, currentUser) {
    this.id = id;
    this.content = content;
    this.time = time;
    this.score = score;
    this.img = img;
    this.name = name;
    this.replys = replys;
    this.currentUser = currentUser;
    // create a comment
    const comment = document.createElement("div");
    comment.setAttribute("class", "comment");
    const mainComment = document.createElement("div");
    mainComment.classList.add("main-comment");
    mainComment.classList.add("comment-prototype");
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
    const scoreValue = document.createElement("p");
    scoreValue.classList.add("score-value");
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
    reply.classList.add("reply");
    reply.classList.add("btn");
    const replyIcon = document.createElement("img");
    replyIcon.src = "./images/icon-reply.svg";
    const replyText = document.createElement("span");
    replyText.innerText = "Reply";
    // reply
    // edite
    const edite = document.createElement("a");
    edite.classList.add("edit");
    edite.classList.add("btn");
    const editeIcon = document.createElement("img");
    editeIcon.src = "./images/icon-edit.svg";
    const editeText = document.createElement("span");
    editeText.innerText = "Edite";
    // edite
    // delet
    const delet = document.createElement("a");
    delet.classList.add("delete");
    delet.classList.add("btn");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./images/icon-delete.svg";
    const deleteText = document.createElement("span");
    deleteText.innerText = "Delete";
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
    scoreValue.innerText = this.score;
    infoImg.src = this.img;
    infoName.innerText = this.name;
    date.innerText = this.time;
    contentComment.innerText = this.content;
    // start set group elements
    // main-comment group //
    // score
    scoreElement.append(up);
    scoreElement.append(scoreValue);
    scoreElement.append(down);
    // text content
    // comment head
    info.append(infoImg);
    info.append(infoName);
    info.append(date);
    if (this.currentUser.username == this.name) {
      console.log(currentUser);
      // if the user is you make a you stick before the name
      const you = document.createElement("span");
      you.classList.add("you");
      you.innerText = "you";
      infoName.after(you);
      mainComment.classList.add("your-comment");
      // if the user is you show you edite and delete buttons
      buttons.append(delet);
      buttons.append(edite);
      edite.append(editeIcon);
      edite.append(editeText);
      delet.append(deleteIcon);
      delet.append(deleteText);
    } else {
      buttons.append(reply);
      reply.append(replyIcon);
      reply.append(replyText);
    }
    commentHead.append(info);
    commentHead.append(buttons);
    textContent.append(commentHead);
    textContent.append(contentComment);
    // set to main-comment element
    mainComment.append(scoreElement);
    mainComment.append(textContent);
    // main-comment group //
    //
    // reply section group //
    // reply line
    replySection.append(replyline);
    replySection.append(commentReplys);
    // reply section group //
    // set all groups in comment
    comment.append(mainComment);
    comment.append(replySection);
    //
    //_____________________//
    // show the element in the console
    const container = document.querySelector(".container");
    container.append(comment);
    console.log(comment);
  }
}
// reply class
class Reply extends Comment {
  constructor(id, content, time, score, img, name, replyTo) {
    super(id, content, time, score, img, name);
    this.replyTo = replyTo;
  }
}

let firstComment = new Comment(
  1,
  "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  "1 month ago",
  12,
  "./images/avatars/image-amyrobson.png",
  "amyrobson",
  "",
  { image: "", username: "amyrobson" }
);
