// heart section
const hearts = document.querySelectorAll(".heart");
for (const hrt of hearts) {
  hrt.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-cnt");
    const heartCountNumber = parseInt(heartCount.innerText);

    heartCount.innerText = heartCountNumber + 1;
  });
}
