// click function write out of the window.onload.
window.onload = () => {
    let e = document.getElementById('demo');
    //<body><p id='demo'>.innerHTML</p></body>
    e.addEventListener('click', foo, false);
};

function foo() {
    document.getElementById('demo').innerHTML = 'Cookies associated with this document: ' + document.cookie;
}
