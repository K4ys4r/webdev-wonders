const ai_template = document.getElementById("ai-response");
const user_template = document.getElementById("user-question");
const user_prompt = document.getElementById("chat-prompt-input");
const btn_chat = document.getElementById("chat-prompt-btn");
const chat_body = document.getElementById("chat-body");
const form_chat = document.getElementById("form-chat");
const ai = await window.ai.languageModel.create();

function handleChat(event) {
  event.preventDefault();
  let question = user_prompt.value;
  handelUserQuestion(question);
  handelAIResponse(question);
  user_prompt.value = "";
}

form_chat.onsubmit = handleChat;
btn_chat.onclick = handleChat;

function updateChatBodyScroll() {
  chat_body.scrollTop = chat_body.scrollHeight - chat_body.clientHeight;
}

function handelUserQuestion(question) {
  let template = user_template.content.cloneNode(true);
  template.querySelector("#question").innerText = question;
  chat_body.appendChild(template);
  updateChatBodyScroll();
}

async function handelAIResponse(question) {
  let template = ai_template.content.cloneNode(true);
  let res = template.querySelector("#response");
  chat_body.appendChild(template);
  try {
    let response = (await ai.promptStreaming(question)).getReader();

    let oldLength = 0;
    while (true) {
      const { done, value } = await response.read();
      if (done) break;

      for (let i = oldLength; i < value.length; i++) {
        res.textContent += value[i];
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
      oldLength = value.length;
      updateChatBodyScroll();
    }
  } catch (error) {
    res.textContent = error.message;
  }
}
