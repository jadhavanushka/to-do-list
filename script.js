// delete button
function addDeleteButton(item) {
    const btn = document.createElement("button");
    const txt = document.createTextNode("\u00D7");
    btn.className = "delete";
    btn.appendChild(txt);
    item.appendChild(btn);

    btn.onclick = function () {
        const div = this.parentElement;
        div.remove();
        updateEmptyMessage();
    }
}

// Add "checked" when task is done
document.querySelector('ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

// Add tasks
function addTask() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("task_input").value;
    const taskName = document.createElement("p");
    taskName.className = "task_name";
    const t = document.createTextNode(inputValue);
    taskName.appendChild(t);
    li.appendChild(taskName);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("task_list").appendChild(li);
        addDeleteButton(li);
        updateEmptyMessage();
    }
    document.getElementById("task_input").value = "";
}

// Show/hide empty message 
function updateEmptyMessage() {
    const taskList = document.getElementById("task_list");
    const emptyMessage = document.getElementById("empty_msg");
    emptyMessage.style.display = taskList.children.length === 0 ? "block" : "none";
}

// Initial display of empty message
updateEmptyMessage();