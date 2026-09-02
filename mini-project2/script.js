document.getElementById("addbtn").onclick = () => {
    const input = document.getElementById("studentname");
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById("studentList").appendChild(li);

    input.value = "";
};