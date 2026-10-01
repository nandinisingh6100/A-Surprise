let effectInterval = null;

/* SHOW A PARTICULAR SCREEN */

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

/* OPENING SURPRISE */

function showLoveReveal() {
    showScreen("loveReveal");
    startEffects();
}

/* MOVE TO THE NEXT SCREEN */

function goToScreen(number) {
    showScreen("screen" + number);
    stopEffects();
}

/* REVEAL THE PHOTOGRAPH */

function revealPhoto() {
    const photo = document.getElementById("photoReveal");
    const button = document.getElementById("photoButton");

    photo.classList.add("show");
    button.style.display = "none";
}

/* GO TO FINAL SCREEN */

function showFinal() {
    showScreen("finalScreen");
}

/* SHOW SAVE POPUP */

function showPopup() {
    document.getElementById("savePopup").classList.add("show");
    startEffects();
}

/* CLOSE SAVE POPUP */

function closePopup() {
    document.getElementById("savePopup").classList.remove("show");
    stopEffects();
}

/* REPLAY THE CARD */

function restartCard() {
    stopEffects();

    document.getElementById("photoReveal").classList.remove("show");
    document.getElementById("photoButton").style.display = "inline-block";
    document.getElementById("savePopup").classList.remove("show");

    showScreen("screen1");
}

/* CREATE FALLING PETALS AND HEARTS */

function createEffect() {
    const container = document.getElementById("effects");
    const item = document.createElement("div");

    const isHeart = Math.random() > 0.5;

    item.className = isHeart ? "heart" : "petal";

    item.textContent = isHeart
        ? ["❤️", "💗", "💕", "💖"][Math.floor(Math.random() * 4)]
        : ["🌹", "🌸", "🌺"][Math.floor(Math.random() * 3)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = (3 + Math.random() * 4) + "s";
    item.style.fontSize = (18 + Math.random() * 18) + "px";

    container.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 7500);
}

/* START EFFECTS */

function startEffects() {
    stopEffects();

    const container = document.getElementById("effects");
    container.innerHTML = "";

    // Create initial petals and hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createEffect, i * 120);
    }

    // Continue the animation
    effectInterval = setInterval(createEffect, 250);
}

/* STOP EFFECTS */

function stopEffects() {
    if (effectInterval !== null) {
        clearInterval(effectInterval);
        effectInterval = null;
    }

    document.getElementById("effects").innerHTML = "";
}