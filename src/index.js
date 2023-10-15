import $ from "jquery";

$(document).ready(function () {
  $(".but").click(function () {
    var textToCopy = $("#textField").val();
    var tempTextArea = $("<textarea>");
    tempTextArea
      .val(textToCopy)
      .css("position", "absolute")
      .css("left", "-9999px")
      .appendTo("body");

    tempTextArea[0].select();
    document.execCommand("copy");
    tempTextArea.remove();
    alert("Text copied to clipboard: " + textToCopy);
  });
});
