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
