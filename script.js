// script.js
document.addEventListener("DOMContentLoaded", () => {
  const queueList = document.getElementById("queueList");
  const addBtn = document.getElementById("addBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const buyerNameInput = document.getElementById("buyerName");
  const orderNameInput = document.getElementById("orderName");
  const totalQueue = document.getElementById("totalQueue");

  const queue = [];

  addBtn.addEventListener("click", () => {
    const buyerName = buyerNameInput.value.trim();
    const orderName = orderNameInput.value.trim();

    if (buyerName && orderName) {
      const queueNumber = queue.length + 1; // Menghasilkan nomor antrian otomatis
      queue.push({ buyerName, orderName, queueNumber, completed: false });
      updateQueueList();
      buyerNameInput.value = ""; // Reset input field
      orderNameInput.value = ""; // Reset input field
    } else {
      alert("Semua kolom harus diisi!");
    }
  });

  clearAllBtn.addEventListener("click", () => {
    queue.length = 0; // Menghapus semua antrian
    updateQueueList();
  });

  function updateQueueList() {
    queueList.innerHTML = "";
    queue.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("border", "rounded-md", "p-3", "mb-2", "flex", "justify-between", "items-center", "bg-white", "shadow-md");
      if (item.completed) {
        listItem.classList.add("bg-gray-200");
      }
      listItem.innerHTML = `
                <span class="font-normal text-black ${item.completed ? "line-through text-gray-500" : ""}"><span class="font-bold">No Antrian : </span> ${item.queueNumber} <br><span class="font-bold">Nama Pembeli:</span> ${item.buyerName}<br> <span class="font-bold"> Pesanan :</span> ${item.orderName}</span>
                <div>
                    <button class="bg-green-500 text-white p-2 rounded-md ml-4 hover:bg-green-600 transition duration-300" onclick="markAsCompleted(${index})"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="10px" y="0px" viewBox="0 0 507.506 507.506" style="enable-background:new 0 0 507.506 507.506;" xml:space="preserve" width="12" height="12">
<g>
	<path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
</g>
</svg></button>
                    <button class="bg-red-500 text-white p-2 rounded-md ml-2 hover:bg-red-600 transition duration-300" onclick="removeFromQueue(${index})"><?xml version="1.0" encoding="UTF-8"?>
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="12" height="12"><polygon points="18.707 6.707 17.293 5.293 12 10.586 6.707 5.293 5.293 6.707 10.586 12 5.293 17.293 6.707 18.707 12 13.414 17.293 18.707 18.707 17.293 13.414 12 18.707 6.707"/></svg>

</button>
</div>
            `;
      queueList.appendChild(listItem);
    });
    totalQueue.innerText = `Total Antrian: ${queue.length}`; // Update total antrian
  }

  window.markAsCompleted = (index) => {
    queue[index].completed = true;
    updateQueueList();
  };

  window.removeFromQueue = (index) => {
    queue.splice(index, 1);
    updateQueueList();
  };
});
