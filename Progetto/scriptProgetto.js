$(document).ready(function () {
    for (var i = 0; i < 11; i++) {
        $(".ack" + i).hide();
    }
    $("#start").click(function(){
        muovi1();
    });

    $(".frame3 button").click(interrompiTrasferimento);
    $(".frame4 button").click(interrompiTrasferimento2);


});
var velocita = 2000;
var nuovoPacchettoId;
var bool = [true, true, true, true, true, true, true, true, true];

function muovi1() {
    muoviPacchetto();
    ackGiusto();
}

function muovi2(){
        muoviPacchetto3();
        ackGiusto3();
    
}

function muoviPacchetto() {
    function animatePacchetto(i) {
        if (i < 5) {

            $("#busta" + i).animate({ top: "400px" }, velocita, function () {
                $(".ack" + i).show();
                bool[i - 2] = false;
            });
            $("#busta" + i).attr("src", "immagini/ack.png");
            animatePacchetto(i + 1);
        }
    }
    animatePacchetto(0);
}

function muoviPacchetto2() {
    function animatePacchetto(i) {
        if (i < 5) {

            $("#busta" + i).show();
            $("#busta" + i).animate({ top: "400px" }, velocita, function () {
                $(".ack" + i).show();
            });
            $("#busta" + i).attr("src", "immagini/ack.png");
            animatePacchetto(i + 1);
        }
    }
    animatePacchetto(0);
}

function ackGiusto() {
    function animateBusta(i) {
        if (i < 5) {
            $("#busta" + i).animate({ top: "11px" }, velocita, function () {
            });
            setTimeout(function () {
                animateBusta(i + 1);
            }, 1000);
        }
    }
    animateBusta(0);
}

function ackGiusto2() {
    function animateBusta(i) {
        if (i < 5) {
            if (bool[i - 2] == false) {
                console.log(bool);
                $("#p1").show();
                $("#busta" + i).attr("src", "immagini/nack.png");
                setTimeout(function () {
                    $("#busta" + i).hide();
                }, 1000);

                setTimeout(function () {
                    animateBusta(i + 1);
                }, 1000);
            } else {
                $("#busta" + i).animate({ top: "11px" }, velocita, function () {
                });
                setTimeout(function () {
                    animateBusta(i + 1);
                }, 1000);


            }
        }
    }
    animateBusta(0);
}

function interrompiTrasferimento() {
    var pacchettoId = parseInt($(this).attr("id").replace("bottone", ""));
    $("#busta" + pacchettoId).stop().hide();
    CominciaCountdown();
        setTimeout(function () {
            inviaNuovoPacchetto();
        }, 5000);
    
}


function inviaNuovoPacchetto() {
    muoviPacchetto2();
    ackGiusto2();
    setTimeout(function () {
        $("#messaggio").hide(); // Nascondi il messaggio dopo un certo periodo di tempo
    }, 4500); // Nascondi dopo 5 secondi (come nel setTimeout all'interno di interrompiTrasferimento)
}



var countdownInterval; // Variabile per tenere traccia dell'intervallo

function CominciaCountdown() {
    var secondi = 4;
    var CD = $("#countdown");
    var messaggio = $("#messaggio");
    CD.show();

    // Cancella l'intervallo precedente se presente
    clearInterval(countdownInterval);

    function calcoloConto() {
        CD.text("Timer = " + secondi);
        if (secondi <= 0) {
            messaggio.show();
            CD.hide();
            clearInterval(countdownInterval); // Ferma il conto alla rovescia
        }
        secondi--;
    }
    countdownInterval = setInterval(calcoloConto, 1000);
}

//pacchetti 4 5 6


function muoviPacchetto3() {
    function animatePacchetto(i) {
        if (i < 8) {

            $("#busta" + i).animate({ top: "400px" }, velocita, function () {
                $(".ack" + i).show();
                bool[i - 2] = false;
            });
            $("#busta" + i).attr("src", "immagini/ack.png");
            animatePacchetto(i + 1);
        }
    }
    animatePacchetto(5);
}

function muoviPacchetto4() {
    function animatePacchetto(i) {
        if (i < 8) {
            $("#busta" + i).show();
            $("#busta" + i).animate({ top: "400px" }, velocita, function () {
                $(".ack" + i).show();
            });
            $("#busta" + i).attr("src", "immagini/ack.png");
            animatePacchetto(i + 1);
            
        }
    }
    animatePacchetto(5);
}

function ackGiusto3() {
    function animateBusta(i) {
        if (i < 8) {
            $("#busta" + i).animate({ top: "11px" }, velocita, function () {
            });
            setTimeout(function () {
                animateBusta(i + 1);
            }, 1000);
        }
    }
    animateBusta(5);
}

function ackGiusto4() {
    function animateBusta(i) {
        if (i < 8) {
            if (bool[i - 2] == false) {
                console.log(bool);
                $("#p1").show();
                $("#busta" + i).attr("src", "immagini/nack.png");
                setTimeout(function () {
                    $("#busta" + i).hide();
                }, 1000);

                setTimeout(function () {
                    animateBusta(i + 1);
                }, 1000);
            } else {
                $("#busta" + i).animate({ top: "11px" }, velocita, function () {
                });
                setTimeout(function () {
                    animateBusta(i + 1);
                }, 1000);


            }
        }
    }
    animateBusta(5);
}

function interrompiTrasferimento2() {
    var pacchettoId = parseInt($(this).attr("id").replace("bottone", ""));
    $("#busta" + pacchettoId).stop().hide();
    CominciaCountdown();
        setTimeout(function () {
            inviaNuovoPacchetto2();
        }, 5000);
    
}


function inviaNuovoPacchetto2() {
    muoviPacchetto4();
    ackGiusto4();
    
    setTimeout(function () {
        $("#messaggio").hide(); // Nascondi il messaggio dopo un certo periodo di tempo
    }, 4500); // Nascondi dopo 5 secondi (come nel setTimeout all'interno di interrompiTrasferimento)
}

