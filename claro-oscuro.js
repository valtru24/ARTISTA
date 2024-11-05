document.getElementById("theme-toggle").addEventListener("change", function() {
    const body = document.body;
    if (body.getAttribute("tema") === "light") {
        body.setAttribute("tema", "dark");
    } else {
        body.setAttribute("tema", "light");
    }
});
