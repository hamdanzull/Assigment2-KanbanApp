const addPlanButton = document.getElementById("add-plan-button");
const addPlanForm = document.getElementById("add-plan-form");
const planInput = document.getElementById("plan-input");
const planList = document.querySelector(".list ul");
const example = document.getElementById('example')

// Event listener untuk tombol "Add new plan"
addPlanButton.addEventListener("click", () => {
    addPlanForm.style.display = "block";
    planInput.focus();
});

// Event listener untuk form "Add plan"
addPlanForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah pengiriman form default
    const planText = planInput.value.trim();
    if (planText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
                <img src="Assets/grip-dots.svg">
                <p>${planText}</p>
            `;
        planList.appendChild(li);
        planInput.value = ""; // Kosongkan input setelah ditambahkan
        addPlanForm.style.display = "none"; // Sembunyikan form
        example.style.display = 'none'; // Sembunyikan example plan
    }
});




const todoList = document.getElementById("todo-list");
const doingList = document.getElementById("doing-list");
const doneList = document.getElementById("done-list");

const sortableTodo = new Sortable(todoList, {
    group: "kanban-list",
    // animation: 150,
    delay: 0,
    swapThreshold: 0.5,
    onAdd: function (evt) {
        const item = evt.item;
        const id = item.getAttribute("data-id");
    }
});

const sortableDoing = new Sortable(doingList, {
    group: "kanban-list",
    // animation: 150,
    delay: 0,
    onAdd: function (evt) {
        const item = evt.item;
        const id = item.getAttribute("data-id");
    }
});

const sortableDone = new Sortable(doneList, {
    group: "kanban-list",
    // animation: 150,
    delay: 0,
    onAdd: function (evt) {
        const item = evt.item;
        const id = item.getAttribute("data-id");
    }
});




// Event listener untuk elemen tempat sampah (delete)
const deleteElement = document.querySelector(".delete");

deleteElement.addEventListener("dragover", (e) => {
    e.preventDefault();
});

deleteElement.addEventListener("dragenter", (e) => {
    // Menampilkan indikasi penghapusan ketika item ditarik ke atasnya
    deleteElement.classList.add("delete-active");
});

deleteElement.addEventListener("dragleave", (e) => {
    // Menghilangkan indikasi penghapusan ketika item ditarik keluar
    deleteElement.classList.remove("delete-active");
});

deleteElement.addEventListener("drop", (e) => {
    // Mendapatkan elemen yang ditarik
    const draggedItem = document.querySelector(".sortable-chosen");

    // Hapus elemen yang ditarik dari daftar
    if (draggedItem) {
        draggedItem.remove();
    }

    // Menghilangkan indikasi penghapusan
    deleteElement.classList.remove("delete-active");
});