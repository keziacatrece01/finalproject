let likeBtn = document.querySelector("#like-btn");
let showLikes = document.querySelector("#show-likes");
let followerList = document
  .querySelector("#follower-list")
  .querySelectorAll("input[type=checkbox]");
let likes = [];

followerList.forEach((follower) => {
  follower.addEventListener("change", function (e) {
    likes = Array.from(followerList)
      .filter((e) => e.checked)
      .map((e) => e.value);
  });
});

likeBtn.addEventListener("click", (e) => {
  showLikes.innerHTML = countLikes(likes);
  console.log(countLikes(likes));
});

function countLikes(likes) {
  switch (likes.length) {
    case 1:
      return `${likes[0]} likes this.`;
    case 2:
      return `${likes[0]} and ${likes[1]} like this.`;
    case 3:
      return `${likes[0]}, ${likes[1]} and ${likes[2]} like this.`;
    default:
      return likes.length > 3
        ? `${likes[0]}, ${likes[1]} and ${likes.length - 2} others like this.`
        : `No one, but only I like this.`;
  }
}