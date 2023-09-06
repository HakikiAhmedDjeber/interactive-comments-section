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
    console.log("current user : ", this.currentUser);
    // create a comment
    this.comment = document.createElement("div");
    this.comment.setAttribute("class", "comment");
    this.mainComment = document.createElement("div");
    this.mainComment.classList.add("main-comment");
    this.mainComment.classList.add("comment-prototype");
    // replys-section
    this.replySection = document.createElement("div");
    this.replySection.classList.add("replys-section");
    this.replyline = document.createElement("div");
    this.replyline.classList.add("reply-line");
    this.commentReplys = document.createElement("div");
    this.commentReplys.classList.add("comment-replys");
    // replys-section
    //score
    this.scoreElement = document.createElement("div");
    this.scoreElement.classList.add("score");
    this.up = document.createElement("span");
    this.up.classList.add("up");
    this.up.innerText = "+";
    this.scoreValue = document.createElement("p");
    this.scoreValue.classList.add("score-value");
    this.down = document.createElement("span");
    this.down.classList.add("down");
    this.down.innerText = "-";
    //score
    // text-content
    this.textContent = document.createElement("div");
    this.textContent.classList.add("text-content");
    this.commentHead = document.createElement("div");
    this.commentHead.classList.add("comment-head");
    //info
    this.info = document.createElement("div");
    this.info.classList.add("info");
    this.infoImg = document.createElement("img");
    this.infoImg.classList.add("profile");
    this.infoName = document.createElement("p");
    this.infoName.classList.add("name");
    this.date = document.createElement("span");
    this.date.classList.add("date");
    //info
    // buttons
    this.buttons = document.createElement("div");
    this.buttons.classList.add("buttons");
    // reply
    this.reply = document.createElement("span");
    this.reply.classList.add("reply");
    this.reply.classList.add("btn");
    this.replyIcon = document.createElement("img");
    this.replyIcon.src = "./images/icon-reply.svg";
    this.replyText = document.createElement("span");
    this.replyText.innerText = "Reply";
    // reply
    // edite
    this.edite = document.createElement("span");
    this.edite.classList.add("edit");
    this.edite.classList.add("btn");
    this.editeIcon = document.createElement("img");
    this.editeIcon.src = "./images/icon-edit.svg";
    this.editeText = document.createElement("span");
    this.editeText.innerText = "Edite";
    // edite
    // delet
    this.delet = document.createElement("span");
    this.delet.classList.add("delete");
    this.delet.classList.add("btn");
    this.deleteIcon = document.createElement("img");
    this.deleteIcon.src = "./images/icon-delete.svg";
    this.deleteText = document.createElement("span");
    this.deleteText.innerText = "Delete";
    // delet
    // buttons
    // content
    this.contentComment = document.createElement("p");
    this.contentComment.classList.add("content");
    // content
    // text-content
    //
    // set data to elements
    //
    this.comment.id = `comment${this.id}`;
    this.scoreValue.innerText = this.score;
    this.scoreElement.setAttribute("value", this.score);
    this.infoImg.src = this.img;
    this.infoName.innerText = this.name;
    this.date.innerText = this.time;
    this.contentComment.innerText = this.content;
    // start set group elements
    // main-comment group //
    // score
    this.scoreElement.append(this.up);
    this.scoreElement.append(this.scoreValue);
    this.scoreElement.append(this.down);
    // text content
    // comment head
    this.info.append(this.infoImg);
    this.info.append(this.infoName);
    this.info.append(this.date);
    if (this.currentUser.username == this.name) {
      console.log(this.currentUser);
      // if the user is you make a you stick before the name
      this.you = document.createElement("span");
      this.you.classList.add("you");
      this.you.innerText = "you";
      this.infoName.after(this.you);
      this.mainComment.classList.add("your-comment");
      // if the user is you show you edite and delete buttons
      this.buttons.append(this.delet);
      this.buttons.append(this.edite);
      this.edite.append(this.editeIcon);
      this.edite.append(this.editeText);
      this.delet.append(this.deleteIcon);
      this.delet.append(this.deleteText);
    } else {
      this.buttons.append(this.reply);
      this.reply.append(this.replyIcon);
      this.reply.append(this.replyText);
    }
    this.commentHead.append(this.info);
    this.commentHead.append(this.buttons);
    this.textContent.append(this.commentHead);
    this.textContent.append(this.contentComment);
    // set to main-comment element
    this.mainComment.append(this.scoreElement);
    this.mainComment.append(this.textContent);
    // main-comment group //
    //
    // reply section group //
    // reply line
    this.replySection.append(this.replyline);
    this.replySection.append(this.commentReplys);
    // reply section group //
    // set all groups in comment
    this.comment.append(this.mainComment);
    this.comment.append(this.replySection);
    //
    //_____________________//
    // check if there is replys for this comment
    if (replys.length > 0) {
      replys.forEach((ele) => {
        new Reply(
          ele.id,
          ele.content,
          ele.createdAt,
          ele.score,
          ele.user.image.png,
          ele.user.username,
          data.currentUser,
          ele.replyingTo,
          this.commentReplys
        );
      });
      // show the element in the console
      this.sendFiled = document.getElementById("send").parentElement;
      this.sendFiled.before(this.comment);
      console.log(this.comment);
    } else {
      this.sendFiled = document.getElementById("send").parentElement;
      this.sendFiled.before(this.comment);
      console.log(this.comment);
    }
    // refrech the edite btns
    editeComment();
    if (this.currentUser.username == this.name) deleteComment(this.comment);
  }
}
// reply class
class Reply extends Comment {
  constructor(
    id,
    content,
    time,
    score,
    img,
    name,
    currentUser,
    replyTo,
    repliesSection
  ) {
    super(id, content, time, score, img, name, "", currentUser);
    this.replyTo = replyTo;
    this.mainComment.setAttribute("replyTo", this.replyTo);
    // tag the name of the reply to
    this.replyToEle = document.createElement("span");
    this.replyToEle.innerText = this.replyTo;
    this.replyToEle.classList.add("replyTo");
    this.contentComment.prepend(this.replyToEle);
    this.repliesSection = repliesSection;
    console.log(this.repliesSection);
    this.repliesSection.append(this.comment);
  }
}
// comment creation class
class CreateComment {
  constructor(id, currentUser, type, replyTo) {
    this.id = id;
    this.currentUser = currentUser;
    this.type = type;
    // create the main element
    this.writeElement = document.createElement("div");
    this.writeElement.classList.add("write-prototype");
    this.image = document.createElement("img");
    this.image.src = this.currentUser.image.png;
    this.image.classList.add("myPhoto");
    this.textArea = document.createElement("textarea");
    this.textArea.setAttribute("name", "send-comment");
    this.textArea.placeholder = "Add a comment...";
    this.input = document.createElement("input");
    this.input.setAttribute("type", "button");
    this.input.classList.add("sendBtn");
    if (this.type == "send") {
      this.writeElement.classList.add("send-filed");
      this.input.id = "send";
      this.input.value = "Send";
    } else {
      this.writeElement.setAttribute("replyto", replyTo);
      this.input.value = "Reply";
    }
    // start collect elements
    this.writeElement.append(this.image, this.textArea, this.input);
    console.log(this.writeElement);
  }
  setCreateComment(place) {
    if (this.input.id == "send") {
      place.prepend(this.writeElement);
      console.log("I am the main send filed");
    } else {
      place.after(this.writeElement);
      console.log("I am just a reply");
    }
  }
}
// test comment
// let firstComment = new Comment(
//   1,
//   "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//   "1 month ago",
//   12,
//   "./images/avatars/image-amyrobson.png",
//   "amyrobson",
//   "",
//   { image: "", username: "amyrobson" }
// );
// test reply
// let firstComment = new Reply(
//   1,
//   "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//   "1 month ago",
//   12,
//   "./images/avatars/image-amyrobson.png",
//   "amyrobson",
//   { image: "", username: "amyrobson" },
//   "maxblagun"
// );

// test create a comment

// let sendSection = new CreateComment(
//   1,
//   {
//     image: {
//       png: "./images/avatars/image-juliusomo.png",
//       webp: "./images/avatars/image-juliusomo.webp",
//     },
//     username: "juliusomo",
//   },
//   "Reply"
// );
// sendSection.setCreateComment(document.querySelector(".container"));

// access to data
const data = JSON.parse(localStorage.getItem("data"));

// create the send filed
const mainSend = new CreateComment(
  0,
  data.currentUser,
  "send",
  ""
).setCreateComment(document.querySelector(".container"));

// start the creation of comment from the data

console.log(data.comments);
if (data.comments.length > 0) {
  data.comments.forEach((ele) => {
    let comment = new Comment(
      ele.id,
      ele.content,
      ele.createdAt,
      ele.score,
      ele.user.image.png,
      ele.user.username,
      ele.replies,
      data.currentUser
    );
    console.log(comment);
  });
}

//_______________________________________//
// create a new comment
const sendBtn = document.getElementById("send");
console.log(sendBtn);
sendBtn.addEventListener("click", () => {
  // get the textarea
  const textArea = sendBtn.previousElementSibling;
  // get the id
  console.log(document.querySelectorAll(".comment-prototype").length + 1);
  console.log(textArea.value != "");
  // get the date
  if (textArea.value != "") {
    new Comment(
      document.querySelectorAll(".comment-prototype").length + 1,
      textArea.value,
      "now",
      0,
      data.currentUser.image.png,
      data.currentUser.username,
      "",
      data.currentUser
    );
    // set the comment on the local storage
    let dataComment = JSON.parse(localStorage.getItem("data"));
    dataComment.comments.push({
      id: document.querySelectorAll(".comment-prototype").length + 1,
      content: textArea.value,
      createdAt: "now",
      score: 0,
      user: {
        image: {
          png: dataComment.currentUser.image.png,
          webp: dataComment.currentUser.image.webp,
        },
        username: dataComment.currentUser.username,
      },
      replies: [],
    });
    localStorage.setItem("data", JSON.stringify(dataComment));
    textArea.value = "";
  }
});
//_______________________________________//
// create a new reply
const repliesBtns = document.querySelectorAll(".reply");
console.log(repliesBtns);
// function to get the parent
function getNthParent(element, n) {
  let parent = element;
  for (let i = 0; i < n; i++) {
    if (parent && parent.parentNode) {
      parent = parent.parentNode;
    } else {
      return null; // Parent not found
    }
  }
  return parent;
}
repliesBtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    // after any creation of reply fileds we need to refrech the btns
    // of send to be able to create new comment
    replyBtns = document.querySelectorAll(".sendBtn:not(#send)");
    console.log(replyBtns);
    console.log(getNthParent(ele, 5));
    if (getNthParent(ele, 5).nextElementSibling) {
      if (
        getNthParent(ele, 5).nextElementSibling.className !==
          "write-prototype" &&
        getNthParent(ele, 4).nextElementSibling.className !== "write-prototype"
      ) {
        new CreateComment(
          1,
          data.currentUser,
          "reply",
          ele.closest(".comment").id
        ).setCreateComment(
          getNthParent(
            ele,
            getNthParent(ele, 4).nextElementSibling.offsetHeight == 0 ? 5 : 4
          )
        );
        // after any creation of reply fileds we need to refrech the btns
        // of send to be able to create new comment
        replyBtns = document.querySelectorAll(".sendBtn:not(#send)");
        console.log(replyBtns);
        sendReply();
      }
    } else {
      new CreateComment(
        1,
        data.currentUser,
        "reply",
        ele.closest(".comment").id
      ).setCreateComment(
        getNthParent(
          ele,
          getNthParent(ele, 4).nextElementSibling.offsetHeight == 0 ? 5 : 4
        )
      );
      // after any creation of reply fileds we need to refrech the btns
      // of send to be able to create new comment
      replyBtns = document.querySelectorAll(".sendBtn:not(#send)");
      console.log(replyBtns);
      sendReply();
    }
  });
});
// creat a new reply
let replyBtns = document.querySelectorAll(".sendBtn:not(#send)");
function sendReply() {
  replyBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
      // get the textarea
      const textArea = ele.previousElementSibling;
      // get the id
      console.log(document.querySelectorAll(".comment-prototype").length + 1);
      console.log(textArea.value != "");
      // get the reply to
      const replyTo = ele.parentElement.getAttribute("replyto");
      // check if the replyto is a comment or a reply
      let place;
      if (
        document.querySelector(`#${replyTo}`).parentElement.className ==
        "comment-replys"
      ) {
        place = document.querySelector(`#${replyTo}`).parentElement;
      } else if (
        document.querySelector(`#${replyTo}`).parentElement.className ==
        "container"
      ) {
        place = document.querySelector(`#${replyTo} .comment-replys`);
      }
      console.log(replyTo);
      if (textArea.value != "") {
        new Reply(
          document.querySelectorAll(".comment-prototype").length + 1,
          textArea.value,
          "now",
          0,
          data.currentUser.image.png,
          data.currentUser.username,
          data.currentUser,
          document.querySelector(`#${replyTo} .name`).innerText,
          place
        );
        textArea.value = "";
        // hide the comment filed after send the reply
        ele.parentElement.remove();
      }
    });
  });
}
//_____________________//
// score functions
const upScore = document.querySelectorAll(".up");
const downScore = document.querySelectorAll(".down");
upScore.forEach((ele) => {
  // get the inital score value
  const intialValue = ele.parentElement.getAttribute("value");
  // check if this is not your comment (you can't rate your comment)
  if (!ele.closest(".comment-prototype").className.includes("your-comment")) {
    ele.addEventListener("click", () => {
      if (ele.nextElementSibling.innerText <= intialValue) {
        ele.classList.add("clicked");
        ele.nextElementSibling.classList.add("clicked");
        ele.nextElementSibling.innerText =
          +ele.nextElementSibling.innerText + 1;
        // remove the style from down icon
        ele.parentElement.lastElementChild.classList.remove("clicked");
        // remove the style of all icons if the value is inital
        if (ele.nextElementSibling.innerText == intialValue)
          ele.classList.remove("clicked");
      }
    });
  }
});
downScore.forEach((ele) => {
  // get the inital score value
  const intialValue = ele.parentElement.getAttribute("value");
  // check if this is not your comment (you can't rate your comment)
  if (!ele.closest(".comment-prototype").className.includes("your-comment")) {
    ele.addEventListener("click", () => {
      if (ele.previousElementSibling.innerText >= intialValue) {
        ele.classList.add("clicked");
        ele.previousElementSibling.classList.add("clicked");
        ele.previousElementSibling.innerText -= 1;
        // remove the style from up icon
        ele.parentElement.firstElementChild.classList.remove("clicked");
        // remove the style of all icons if the value is inital
        if (ele.previousElementSibling.innerText == intialValue)
          ele.classList.remove("clicked");
      }
    });
  }
});

//__________________//
// confirmation popup
class Confirmation {
  constructor(node) {
    // elements creation
    this.confirmation = document.createElement("div");
    this.confirmation.classList.add("confirmation");
    this.card = document.createElement("div");
    this.card.classList.add("card");
    this.title = document.createElement("h2");
    this.title.classList.add("title");
    this.content = document.createElement("p");
    this.content.classList.add("content");
    this.noBtn = document.createElement("button");
    this.yesBtn = document.createElement("button");
    this.noBtn.classList.add("btn", "no");
    this.yesBtn.classList.add("btn", "yes");
    // set content
    this.title.innerText = "Delete comment";
    this.content.innerText =
      "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
    this.noBtn.innerText = "NO, Cancel";
    this.yesBtn.innerText = "YES, Delete";
    // create the element
    this.card.append(this.title, this.content, this.noBtn, this.yesBtn);
    this.confirmation.append(this.card);
    // set at body
    document.body.append(this.confirmation);
    // check
    this.noBtn.addEventListener("click", () => {
      this.confirmation.remove();
    });
    this.yesBtn.addEventListener("click", () => {
      node.remove();
      this.confirmation.remove();
    });
    console.log("from popup");
  }
}

//__________________//
// edite my own comment
function editeComment() {
  const editeBtns = document.querySelectorAll(".edit");
  editeBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
      const commetContent = ele
        .closest(".text-content")
        .querySelector(".content");
      console.log(commetContent.nodeName);
      const replyTo = commetContent.querySelector(".replyTo");
      let replyToRm;
      if (replyTo) {
        replyToRm = replyTo.cloneNode(true);
        replyTo.remove();
      }
      const changeableTxt = document.createElement("textarea");
      changeableTxt.value = commetContent.textContent;
      commetContent.replaceWith(changeableTxt);
      // create an update button
      const updateBtn = document.createElement("input");
      updateBtn.classList.add("sendBtn");
      updateBtn.value = "UPDATE";
      updateBtn.setAttribute("type", "button");
      changeableTxt.after(updateBtn);
      // click update
      updateBtn.addEventListener("click", () => {
        const content = document.createElement("p");
        content.textContent = changeableTxt.value;
        // set the reply span
        if (replyToRm) content.prepend(replyToRm);
        content.classList.add("content");
        changeableTxt.replaceWith(content);
        updateBtn.remove();
      });
    });
  });
}
editeComment();
// delete my own comment
function deleteComment(comment) {
  console.log("delete");
  const deleteBtn = comment.querySelector(".delete");
  console.log(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    new Confirmation(comment);
  });
}
