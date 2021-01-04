function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode);
    frame.close();
  }