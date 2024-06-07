
window.watsonAssistantChatOptions = {
    integrationID: "197ca881-8293-47b9-bc91-be8f21956940", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "700c8b59-4dcd-4be3-980d-cb3895342e5c", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
