import param from param
const test =param.param
public updateDocument(document, TextDocument){
    const documentDecoration = this.getDocumentDecorations(document);
    if (documentDecoration){
        documentDecoration.triggerUpdateDecoration();       
    }
}