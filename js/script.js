document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".name-btn");
    const garden = document.querySelector(".garden");
    const flowers = document.querySelectorAll(".flower");
    const audioPlayer = document.getElementById("audio-player");

    const songs = {
        yulia: "songs/yulia_song.mp3",
        anya: "songs/anya_song.mp3",
        oksana: "songs/oksana_song.mp3",
        tanya: "songs/tanya_song.mp3"
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");

            // Прячем все цветы
            flowers.forEach(flower => {
                flower.style.display = "none";
                flower.style.opacity = "0";
            });

            // Показываем нужный цветок
            const selectedFlower = document.getElementById(name);
            selectedFlower.style.display = "block";

            garden.classList.remove("hidden");

            // Анимация "распускания"
            gsap.to(selectedFlower, { opacity: 1, duration: 1.5, ease: "power2.out", scale: 1 });

            // Запускаем музыку
            if (songs[name]) {
                audioPlayer.src = songs[name];
                audioPlayer.play();
            }
        });
    });
});

