// トースト表示関数
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000); // 2秒で消える
  }
  
  // Copy
  document.querySelectorAll(".command__btn--copy").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const command = document.getElementById(targetId).innerText;
      navigator.clipboard.writeText(command).then(() => {
        showToast("✅ Copied!");
      });
    });
  });
  
  
  // Generate
  document.querySelectorAll(".command__btn--generate").forEach(btn => {
    btn.addEventListener("click", () => {
      const inputId = btn.dataset.input;
      const outputIds = btn.dataset.output.split(","); // ← 複数対応
      const prefix = btn.dataset.prefix;
  
      const inputValue = inputId ? document.getElementById(inputId).value.trim() : "";
  
      outputIds.forEach((id, index) => {
        let command;
        if (index === 0) {
          // 通常版
          command = `${prefix} ${inputValue}`;
        } else if (index === 1) {
          // 2つ目は -u を追加
          command = `${prefix} -u ${inputValue}`;
        }
        document.getElementById(id).innerText = command;
      });
    });
  });
  