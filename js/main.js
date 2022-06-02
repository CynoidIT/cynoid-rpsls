document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const player1Name = document.querySelector("#player1Name").value;
  const player2Name = document.querySelector("#player2Name").value;
  
  const res = await fetch(`/api?player1=${player1Name}&player2=${player2Name}`)
  const data = await res.json()

  console.log(data);

  document.querySelector("#player1").textContent = data.name1
  document.querySelector("#player1Results").textContent = data.results1
  document.querySelector("#player2").textContent = data.name2
  document.querySelector("#player2Results").textContent = data.results2
  document.querySelector("#winner").textContent = data.winner
}