// heart section
const hearts = document.querySelectorAll(".heart");
for (const hrt of hearts) {
  hrt.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-cnt");
    const heartCountNumber = parseInt(heartCount.innerText);

    heartCount.innerText = heartCountNumber + 1;
  });
}

// copy button 
const copyButton = document.querySelectorAll('.copy-btn');
for(const copyBtn of copyButton){
  copyBtn.addEventListener('click',function(e){
    const cardContainer = e.target.closest('.card');
    const number = cardContainer.querySelector('.phn-number').innerText;

    navigator.clipboard.writeText(number)
    alert(`Number Copied: ${number}`)

    const copyCntBtn = document.getElementById('copy-cnt-btn');
    const copyCntBtnNumber = parseInt(copyCntBtn.innerText);

    copyCntBtn.innerText = copyCntBtnNumber+1;
  })
  
}

// call, coin & history add
const callButton = document.querySelectorAll(".btn-call");
const coin = document.getElementById("coin-number");
const historyDiv = document.getElementById("history-container");

for (const btn of callButton) {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector(".phn-number").innerText;

    let coins = parseInt(coin.innerText);

    if (coins < 20) {
      alert(
        `Not enough coins to make a call!...You need at least 20 coins to proceed`
      );
    } 
    else {
      alert(`Calling ${serviceName} at ${serviceNumber}.....`);
      coins -= 20;
      coin.innerText = coins;

      const time = new Date().toLocaleTimeString();

      const div = document.createElement("div");
      div.classList.add(
        "flex",
        "justify-between",
        "p-3",
        "mb-3",
        "bg-[#F2F2F280]",
        "rounded-md"
      );
      div.innerHTML = `
         <div >
            <p class='font-semibold'>${serviceName}</p>
            <h3 class='font-semibold'>${serviceNumber}</h3>
          </div>
          <span class='font-semibold'>${time}</span>
      `;

      historyDiv.appendChild(div);
    }
  });
}

// history-clear
document.getElementById("history-clear").addEventListener("click", function () {
  historyDiv.innerText = "";
});
