let balance = 500;
let miners = 0;
let config = {
  miner_price: 100,
  miner_power: 1,
  mining_speed: 1,
  max_miners: 5
};

// load config.json
fetch("config.json")
  .then(res => res.json())
  .then(data => {
    config = data;
    startMining();
  })
  .catch(() => {
    // fallback if config.json not loaded
    startMining();
  });

function buyMiner() {
  if (miners >= config.max_miners) {
    alert("❌ Max miners limit reached");
    return;
  }

  if (balance < config.miner_price) {
    alert("❌ Not enough balance");
    return;
  }

  balance -= config.miner_price;
  miners++;
  updateUI();
}

function startMining() {
  setInterval(() => {
    if (miners > 0) {
      const income =
        miners * config.miner_power * config.mining_speed;
      balance += income;
      document.getElementById("income").innerText = income.toFixed(1);
      updateUI();
    }
  }, 1000);
}

function updateUI() {
  document.getElementById("balance").innerText = balance.toFixed(0);
  document.getElementById("miners").innerText = miners;
}
