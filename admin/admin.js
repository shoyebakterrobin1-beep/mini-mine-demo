// load current config
fetch("../config.json")
  .then(res => res.json())
  .then(cfg => {
    document.getElementById("price").value = cfg.miner_price;
    document.getElementById("power").value = cfg.miner_power;
    document.getElementById("speed").value = cfg.mining_speed;
    document.getElementById("max").value = cfg.max_miners;
  });

function saveConfig() {
  alert(
    "Demo mode only ⚠️\n\n" +
    "Static hosting cannot save files.\n" +
    "Please edit config.json manually in GitHub."
  );
}
