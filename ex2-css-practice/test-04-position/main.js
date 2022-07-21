window.onload = function () {
    let counrt_box = 105;
    for (let i = 1; i <= counrt_box; i++) {
        document.getElementById(
            'box'
        ).innerHTML += `<div class="box box${i}">${i}</div>`;
    }
};
