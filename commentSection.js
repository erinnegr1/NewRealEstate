const commentBtn = document.createElement("button");
commentBtn.textContent = "add Comment"
commentBtn.addEventListener("click", () => {
const input = document.createElement("input");
input.type = "text";
input.placeholder ="Add Comments"
input.maxLength = "280"

const sendBtn = document.createElement("button");
sendBtn.addEventListener('cick', () => {
    append(this.input.value);
})
})
