document.getElementById("theme-toggle").addEventListener("change", function() {
    const body = document.body;
    if (body.getAttribute("tema") === "light") {
        body.setAttribute("tema", "dark");
    } else {
        body.setAttribute("tema", "light");
    }
});

document.addEventListener('DOMContentLoaded', function () {
   
    document.body.classList.remove('dark-mode');
    
    
});

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme || savedTheme === 'light') {
       
        document.body.classList.remove('dark-mode');
    } else if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }


    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });
});
