const counts = document.querySelector("#counts");
const filter = document.querySelector("#filter");
const rows = document.querySelector("#rows");
const issues = document.querySelector("#issues");
const checkSummary = document.querySelector("#check-summary");

const chatgptBreed = document.querySelector("#chatgpt-breed");
const chatgptPrompt = document.querySelector("#chatgpt-prompt");
const chatgptFile = document.querySelector("#chatgpt-file");
const chatgptContent = document.querySelector("#chatgpt-content");
const chatgptSources = document.querySelector("#chatgpt-sources");
const chatgptMessage = document.querySelector("#chatgpt-message");

const geminiBreed = document.querySelector("#gemini-breed");
const geminiPrompt = document.querySelector("#gemini-prompt");
const geminiContent = document.querySelector("#gemini-content");
const geminiSources = document.querySelector("#gemini-sources");
const geminiMessage = document.querySelector("#gemini-message");
const geminiChoice = document.querySelector("#gemini-choice");
const geminiChoiceMessage = document.querySelector("#gemini-choice-message");
const geminiOurs = document.querySelector("#gemini-ours");
const geminiCandidates = document.querySelector("#gemini-candidates");
const geminiCopy = document.querySelector("#gemini-copy");
const geminiRetry = document.querySelector("#gemini-retry");

let suggestedFile = "";
let progressRows = [];

document.querySelector("#check").addEventListener("click", () => {
  void runCheck();
});
document.querySelector("#chatgpt-copy").addEventListener("click", () => {
  void copyChatgpt();
});
document.querySelector("#chatgpt-create").addEventListener("click", () => {
  void createFile();
});
document.querySelector("#chatgpt-add").addEventListener("click", () => {
  void addRecord();
});
geminiCopy.addEventListener("click", () => {
  void copyGemini();
});
geminiRetry.addEventListener("click", () => {
  void retryTheDog();
});
document.querySelector("#gemini-update").addEventListener("click", () => {
  void updateRecord();
});
filter.addEventListener("input", renderRows);

void refresh();

async function refresh() {
  const state = await getJson("/api/state");
  progressRows = state.rows;
  counts.textContent = `${state.counts.waiting} waiting, ${state.counts.R} ChatGPT in progress, ${state.counts.C} ready for Gemini, ${state.counts.CR} Gemini in progress, ${state.counts.CG} verified`;
  chatgptBreed.textContent = state.chatgpt
    ? `Next: ${state.chatgpt.index}:${state.chatgpt.name} ${state.chatgpt.status || "(waiting)"}`
    : "No breeds left for ChatGPT.";
  geminiBreed.textContent = state.gemini
    ? `Next: ${state.gemini.index}:${state.gemini.name} ${state.gemini.status}`
    : "No breeds left for Gemini.";
  if (!chatgptFile.value || chatgptFile.value === suggestedFile) {
    chatgptFile.value = state.chatgptFile;
  }
  suggestedFile = state.chatgptFile;
  renderRows();
}

function renderRows() {
  const query = filter.value.trim().toLowerCase();
  rows.replaceChildren();
  for (const row of progressRows) {
    const label = `${row.index}:${row.name}`;
    if (query && !label.toLowerCase().includes(query) && !row.status.toLowerCase().includes(query)) {
      continue;
    }
    const item = document.createElement("li");
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = row.status || "—";
    item.append(badge, document.createTextNode(label));
    rows.append(item);
  }
}

async function copyChatgpt() {
  clearMessage(chatgptMessage);
  const result = await postJson("/api/chatgpt/prompt", {});
  if (!result) return;
  chatgptPrompt.value = result.prompt;
  chatgptFile.value = result.filename;
  suggestedFile = result.filename;
  await copyText(result.prompt, chatgptPrompt);
  chatgptMessage.textContent = `Copied. ${result.breed.index}:${result.breed.name} is now R.`;
  await refresh();
}

async function createFile() {
  clearMessage(chatgptMessage);
  const result = await postJson("/api/chatgpt/file", { filename: chatgptFile.value });
  if (!result) return;
  chatgptMessage.textContent = `Created ${result.path}`;
}

async function addRecord() {
  clearMessage(chatgptMessage);
  const result = await postJson("/api/chatgpt/add", {
    filename: chatgptFile.value,
    content: chatgptContent.value,
    sources: chatgptSources.value,
  });
  if (!result) return;
  chatgptMessage.textContent = result.message;
  chatgptContent.value = "";
  chatgptSources.value = "";
  showCheck(result.check);
  await refresh();
}

async function copyGemini() {
  await runGemini("/api/gemini/prompt", "Copied");
}

async function retryTheDog() {
  await runGemini("/api/gemini/thedog/retry", "Fetched again");
}

async function chooseTheDog(breedId) {
  await runGemini("/api/gemini/thedog/choose", "Copied", { breedId });
}

async function runGemini(url, label, body = {}) {
  clearMessage(geminiMessage);
  geminiMessage.textContent = "Fetching The Dog API…";
  geminiCopy.disabled = true;
  geminiRetry.disabled = true;
  try {
    const result = await postJson(url, body);
    if (!result) {
      hideChoice();
      return;
    }
    geminiPrompt.value = result.prompt;
    const breed = `${result.breed.index}:${result.breed.name}`;
    if (result.thedog.status === "choose") {
      showChoice(result.thedog);
      geminiMessage.textContent = `${breed} is now CR. ${result.thedog.message}`;
      geminiMessage.classList.add("warn");
    } else {
      hideChoice();
      if (result.copyPrompt) await copyText(result.prompt, geminiPrompt);
      const detail = result.thedog.message || "";
      geminiMessage.textContent = `${label}. ${breed} is now CR. ${detail}`;
      if (result.thedog.status === "failed") geminiMessage.classList.add("error");
      else if (result.thedog.status === "missing" || (result.thedog.warnings || []).length > 0) {
        geminiMessage.classList.add("warn");
      }
    }
    await refresh();
  } finally {
    geminiCopy.disabled = false;
    geminiRetry.disabled = false;
  }
}

function showChoice(thedog) {
  geminiChoice.hidden = false;
  geminiChoiceMessage.textContent = thedog.message;
  geminiOurs.replaceChildren();
  const ours = document.createElement("article");
  ours.className = "ours-card";
  const name = document.createElement("p");
  name.textContent = thedog.ours.name;
  ours.append(name);
  if (thedog.ours.images.length === 0) {
    const note = document.createElement("p");
    note.textContent = "The ChatGPT file has no photograph yet.";
    ours.append(note);
  }
  for (const url of thedog.ours.images) {
    ours.append(photo(url, thedog.ours.name));
  }
  geminiOurs.append(ours);
  geminiCandidates.replaceChildren();
  for (const candidate of thedog.candidates) {
    const card = document.createElement("article");
    if (candidate.imageUrl) card.append(photo(candidate.imageUrl, candidate.name));
    else {
      const note = document.createElement("p");
      note.textContent = "No photograph from The Dog API.";
      card.append(note);
    }
    const label = document.createElement("p");
    label.textContent = [candidate.name, candidate.group, candidate.origin].filter(Boolean).join(" · ");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Use this breed";
    button.addEventListener("click", () => {
      void chooseTheDog(candidate.id);
    });
    card.append(label, button);
    geminiCandidates.append(card);
  }
}

function photo(url, alt) {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  return image;
}

function hideChoice() {
  geminiChoice.hidden = true;
  geminiOurs.replaceChildren();
  geminiCandidates.replaceChildren();
}

async function updateRecord() {
  clearMessage(geminiMessage);
  const result = await postJson("/api/gemini/update", {
    content: geminiContent.value,
    sources: geminiSources.value,
  });
  if (!result) return;
  geminiMessage.textContent = result.message;
  geminiContent.value = "";
  geminiSources.value = "";
  hideChoice();
  showCheck(result.check);
  await refresh();
}

async function runCheck() {
  checkSummary.textContent = "Checking…";
  const result = await postJson("/api/validate", {});
  if (result) showCheck(result);
}

function showCheck(result) {
  checkSummary.textContent = result.summary;
  issues.replaceChildren();
  for (const issue of result.errors) issues.append(issueItem(issue, "error-row"));
  for (const issue of result.warnings) issues.append(issueItem(issue, "warn-row"));
}

function issueItem(issue, className) {
  const item = document.createElement("li");
  item.className = className;
  const where = issue.breed ? `${issue.breed} › ${issue.path}` : issue.path;
  item.textContent = `${where}: ${issue.message}`;
  return item;
}

async function copyText(text, field) {
  field.focus();
  field.select();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // The prompt box stays selected so it can be copied manually.
  }
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  return readResponse(response);
}

async function getJson(url) {
  const response = await fetch(url);
  return readResponse(response);
}

async function readResponse(response) {
  const body = await response.json();
  if (!response.ok) {
    const target = response.url.includes("gemini") ? geminiMessage : chatgptMessage;
    target.textContent = body.error || "Request failed.";
    target.classList.add("error");
    return null;
  }
  return body;
}

function clearMessage(element) {
  element.textContent = "";
  element.classList.remove("error");
}
