(function () {
  const popup = document.createElement("div");
  popup.id = "quotex-popup";
  popup.style = `
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: #1f1f1f;
    color: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.7);
    font-family: Arial, sans-serif;
    z-index: 999999;
    width: 350px;
  `;

  popup.innerHTML = `
    <h2 style="margin-top: 0;">👑 Leaderboard Control</h2>
    <label>Leaderboard Name:
      <input id="lbName" style="width: 100%; margin-bottom: 10px;" />
    </label>
    <label>Amount:
      <input id="lbAmount" type="number" style="width: 100%; margin-bottom: 10px;" />
    </label>
    <label>Position:
      <input id="lbPosition" type="number" style="width: 100%; margin-bottom: 10px;" />
    </label>
    <label>Country:
      <input id="lbCountry" style="width: 100%; margin-bottom: 10px;" />
    </label>
    <label>Mode:
      <select id="accountMode" style="width: 100%; margin-bottom: 10px;">
        <option value="demo">Demo</option>
        <option value="live">Live</option>
      </select>
    </label>
    <button id="applyLeaderboard" style="width: 100%; padding: 10px; background: lime; color: black; font-weight: bold; margin-top: 10px; cursor: pointer;">Apply</button>
    <button id="closePopup" style="width: 100%; padding: 8px; margin-top: 5px; background: red; color: white; border: none; cursor: pointer;">Close</button>
  `;

  document.body.appendChild(popup);

  document.getElementById("applyLeaderboard").onclick = function () {
    const name = document.getElementById("lbName").value;
    const amount = document.getElementById("lbAmount").value;
    const position = document.getElementById("lbPosition").value;
    const country = document.getElementById("lbCountry").value;
    const mode = document.getElementById("accountMode").value;

    // Simulate switching account type
    const balanceType = document.querySelector(".select-balance span");
    if (balanceType) {
      balanceType.textContent = mode.toUpperCase();
      balanceType.style.color = mode === "live" ? "lime" : "gold";
    }

    // Update leaderboard (create or modify existing box)
    let board = document.getElementById("floating-leaderboard");
    if (!board) {
      board = document.createElement("div");
      board.id = "floating-leaderboard";
      board.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2c2c2c;
        color: #fff;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 0 10px #000;
        font-size: 14px;
        z-index: 999999;
      `;
      document.body.appendChild(board);
    }

    board.innerHTML = `
      <b>🏆 Leaderboard</b><br/>
      Name: ${name}<br/>
      Amount: $${amount}<br/>
      Position: #${position}<br/>
      Country: ${country}<br/>
      Mode: ${mode.toUpperCase()}
    `;
  };

  document.getElementById("closePopup").onclick = () => popup.remove();
})();
