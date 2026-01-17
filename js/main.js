// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if (topBtn) topBtn.style.display = "block";
    } else {
        if (topBtn) topBtn.style.display = "none";
    }
};

if (topBtn) {
    topBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}
