const petFoireux = document.getElementById('pet-foireux');
const petFoireuxmp3 = document.getElementById('pet-foireux-mp3');

const nuclearfart = document.getElementById('nuclear-fart');
const nuclearfartmp3 = document.getElementById('nuclear-fart-mp3');

const petreverb = document.getElementById('petreverb');
const petreverbmp3 = document.getElementById('petreverbmp3');

const bassboosted = document.getElementById('bassboosted');
const bassboostedmp3 = document.getElementById('bassboostedmp3');

const sncfremix = document.getElementById('sncfremix');
const sncfremixmp3 = document.getElementById('sncfremixmp3');

petFoireux.addEventListener("click", function() {
    petFoireuxmp3.play();
});

nuclearfart.addEventListener("click", function() {
    nuclearfartmp3.play();
});

petreverb.addEventListener("click", function() {
    petreverbmp3.play();
});

bassboosted.addEventListener("click", function() {
    bassboostedmp3.play();

    if(bassboostedmp3.currentTime > 0) {
        bassboostedmp3.pause();
        bassboostedmp3.currentTime = 0;
    }
});

sncfremix.addEventListener("click", function() {
    sncfremixmp3.play();

    if(sncfremixmp3.currentTime > 0) {
        sncfremixmp3.pause();
        sncfremixmp3.currentTime = 0;
    }
});


