(document).ready({
$.ajax({
url: "test.js",
context: document.body
}).done(function() {


document.write('<button id="foo">no!</button>');
foo.onclick = function () {
    window.open('http://aceinsight.websense.com/',"_blank");
};

});
});