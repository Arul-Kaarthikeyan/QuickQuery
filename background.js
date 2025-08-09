chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.create({
    id: "text",
    title: "Ask OpenAI about \"%s\"",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "image",
    title: "Ask OpenAI about this image",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  let query = "";
  if (info.menuItemId === "text") {
    query = encodeURIComponent(info.selectionText);
  } else if (info.menuItemId === "image") {
    query = encodeURIComponent(`Describe this image: ${info.srcUrl}`);
  }

  if (query) {
    chrome.tabs.create({
      url: `https://chat.openai.com/?q=${query}`
    });
  }
});
