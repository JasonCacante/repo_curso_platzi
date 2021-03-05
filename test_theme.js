import param from param
const test =param.param
updateDocument(document, TextDocument);
const documentDecoration = getDocumentDecorations(document);
if (documentDecoration){
    documentDecoration.triggerUpdateDecoration();       
}

console.log("Hello World")