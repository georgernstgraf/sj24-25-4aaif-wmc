document.querySelectorAll(".card").forEach((_) =>
    _.addEventListener("click", function () {
        this.classList.toggle("flipped");
    })
);
