// PELAAJAT
var pelaaja1 = ""
var pelaaja2 = ""
var pelaaja3 = ""
var pelaaja4 = ""

// VUORO
var vuoro = 0

// PISTEET
var pisteet1 = 0
var pisteet2 = 0
var pisteet3 = 0
var pisteet4 = 0

// DOUBLE NOPAT
var noppadouble1 = false
var noppadouble2 = false
var noppadouble3 = false
var noppadouble4 = false
var noppadouble5 = false
var noppadouble6 = false

var putki = 0
// NOPPIEN NUMEROT
var nopanarvo = 0
var nopanarvo1 = 0
var nopanarvo2 = 0

var summa = nopanarvo1 + nopanarvo2

// PISTEITÄ KERÄTTY VUORON AIKANA
var pisteetkeratty = 0

// NOPAT HTML
noppa = document.getElementById("noppa")
noppa1 = document.getElementById("noppa1")
noppa2 = document.getElementById("noppa2")



// PELI YHDELLÄ NOPALLA

function yksinoppa(){
    document.getElementById("setup").style.display = "none"

    document.getElementById("yksinoppa").style.display = "block"

    pelaaja1 = document.getElementById("pelaaja1").value
    pelaaja2 = document.getElementById("pelaaja2").value

    document.getElementById("pisteetnimi1").innerHTML = pelaaja1 + ": " + pisteet1
    document.getElementById("pisteetnimi2").innerHTML = pelaaja2 + ": " + pisteet2

    vuoro = Math.floor(Math.random() * 2) + 1;

    if (vuoro == 1){
        document.getElementById("vuoro").innerHTML = pelaaja1
    } else if (vuoro == 2) {
        document.getElementById("vuoro").innerHTML = pelaaja2
    }
}


function pelaa1(){
    nopanarvo = Math.floor(Math.random() * 6) + 1;

    if (nopanarvo == 1){
        noppa.src = "dice1.png"
        pisteetkeratty = 0
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
        if (vuoro == 1){
            vuoro = 2
        } else {
            vuoro = 1
        }

    } else if (nopanarvo == 2){
        noppa.src = "dice2.png"

        pisteetkeratty = pisteetkeratty + 2
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty

    } else if (nopanarvo == 3){
        noppa.src = "dice3.png"

        pisteetkeratty = pisteetkeratty + 3
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
    } else if (nopanarvo == 4){
        noppa.src = "dice4.png"

        pisteetkeratty = pisteetkeratty + 4
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
    } else if (nopanarvo == 5){
        noppa.src = "dice5.png"
        
        pisteetkeratty = pisteetkeratty + 5
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
    } else if (nopanarvo == 6){
        noppa.src = "dice6.png"

        pisteetkeratty = pisteetkeratty + 6
        document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
    } 

    if (vuoro == 1){
        document.getElementById("vuoro").innerHTML = pelaaja1
    } else if (vuoro == 2) {
        document.getElementById("vuoro").innerHTML = pelaaja2
    }

    document.getElementById("pisteetnimi1").innerHTML = pelaaja1 + ": " + pisteet1
    document.getElementById("pisteetnimi2").innerHTML = pelaaja2 + ": " + pisteet2

}

function vuoro1(){
    if (vuoro == 1){
        if (pisteet1 + pisteetkeratty >= 100){
            document.getElementById("yksinoppa").style.display = "none"

            document.getElementById("voitto").style.display = "flex"

            document.getElementById("voittaja").innerHTML = pelaaja1
        } else {
            pisteet1 = pisteet1 + pisteetkeratty
            vuoro = 2
            pisteetkeratty = 0
        }
    } else if (vuoro == 2){
        if (pisteet2 + pisteetkeratty >= 100){
            document.getElementById("yksinoppa").style.display = "none"

            document.getElementById("voitto").style.display = "flex"

            document.getElementById("voittaja").innerHTML = pelaaja2
        } else {
            pisteet2 = pisteet2 + pisteetkeratty
            vuoro = 1
            pisteetkeratty = 0
        }
    }

    if (vuoro == 1){
        document.getElementById("vuoro").innerHTML = pelaaja1
    } else if (vuoro == 2) {
        document.getElementById("vuoro").innerHTML = pelaaja2
    }
    document.getElementById("pisteetnimi1").innerHTML = pelaaja1 + ": " + pisteet1
    document.getElementById("pisteetnimi2").innerHTML = pelaaja2 + ": " + pisteet2

    document.getElementById("pisteetkerätty").innerHTML = pisteetkeratty
}


// -----------------------------

// PELI KAHDELLA NOPALLA

function kaksinoppaa(){
    document.getElementById("setup").style.display = "none"

    document.getElementById("kaksinoppaa").style.display = "block"

    pelaaja3 = document.getElementById("pelaaja1").value
    pelaaja4 = document.getElementById("pelaaja2").value

    vuoro = Math.floor(Math.random() * 2) + 1;

    document.getElementById("pisteetnimi3").innerHTML = pelaaja3 + ": " + pisteet3
    document.getElementById("pisteetnimi4").innerHTML = pelaaja4 + ": " + pisteet4

    if (vuoro == 1){
        document.getElementById("vuoro2").innerHTML = pelaaja3
    } else if (vuoro == 2) {
        document.getElementById("vuoro2").innerHTML = pelaaja4
    }

}

function pelaa2(){
    nopanarvo1 = Math.floor(Math.random() * 6) + 1;
    nopanarvo2 = Math.floor(Math.random() * 6) + 1;

    if (nopanarvo1 == 1){
        noppa1.src = "dice1.png"
        if (nopanarvo2 == 1){
            putki = putki + 1
            noppa2.src = "dice1.png"
            pisteetkeratty = pisteetkeratty + 25
            noppadouble1 = true
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            pisteetkeratty = 0
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
            if (vuoro == 1){
                vuoro = 2
            } else {
                vuoro = 1
            }
        }
    } else if (nopanarvo1 == 2){
        noppa1.src = "dice2.png"
        if (nopanarvo2 == 2){
            putki = putki + 1
            noppa2.src = "dice2.png"
            pisteetkeratty = pisteetkeratty + (4 * 2)
            noppadouble2 = true
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            putki = 0
            pisteetkeratty = pisteetkeratty + 2
        }
    } else if (nopanarvo1 == 3){
        noppa1.src = "dice3.png"
        if (nopanarvo2 == 3){
            putki = putki + 1
            noppa2.src = "dice3.png"
            pisteetkeratty = pisteetkeratty + (6 * 2)
            noppadouble3 = true


            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            putki = 0
            pisteetkeratty = pisteetkeratty + 3
        }
    } else if (nopanarvo1 == 4){
        noppa1.src = "dice4.png"
        if (nopanarvo2 == 4){
            putki = putki + 1
            noppa2.src = "dice4.png"
            pisteetkeratty = pisteetkeratty + (8 * 2)
            noppadouble4 = true


            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            putki = 0
            pisteetkeratty = pisteetkeratty + 4
        }
    } else if (nopanarvo1 == 5){
        noppa1.src = "dice5.png"
        if (nopanarvo2 == 5){
            putki = putki + 1
            noppa2.src = "dice5.png"
            pisteetkeratty = pisteetkeratty + (10 * 2)
            noppadouble5 = true


            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            putki = 0
            pisteetkeratty = pisteetkeratty + 5
        }
    } else if (nopanarvo1 == 6){
        noppa1.src = "dice6.png"
        if (nopanarvo2 == 6){
            putki = putki + 1
            noppa2.src = "dice6.png"
            pisteetkeratty = pisteetkeratty + (12 * 2)
            noppadouble6 = true


            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        } else {
            putki = 0
            pisteetkeratty = pisteetkeratty + 6
        }
    }
    if (nopanarvo2 == 1){
        noppa2.src = "dice1.png"
        if (noppadouble1 == true){
            noppadouble1 = false
        } else {
            pisteetkeratty = 0
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
            if (vuoro == 1){
                vuoro = 2
            } else {
                vuoro = 1
            }
        }
    } else if (nopanarvo2 == 2){
        noppa2.src = "dice2.png"
        if (noppadouble2 == true){
            noppadouble2 = false
        } else if (nopanarvo1 == 1){
            
        } else {
            pisteetkeratty = pisteetkeratty + 2
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        }
    } else if (nopanarvo2 == 3){
        noppa2.src = "dice3.png"
        if (noppadouble3 == true) {
            noppadouble3 = false
        } else if (nopanarvo1 == 1){

        } else {
            pisteetkeratty = pisteetkeratty + 3
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        }
    } else if (nopanarvo2 == 4){
        noppa2.src = "dice4.png"
        if (noppadouble4 == true) {
            noppadouble4 = false
        } else if (nopanarvo1 == 1) {

        } else {
            pisteetkeratty = pisteetkeratty + 4
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        }
    } else if (nopanarvo2 == 5){
        noppa2.src = "dice5.png"
        if (noppadouble5 == true) {
            noppadouble5 = false
        } else if (nopanarvo1 == 1) {

        } else {
            pisteetkeratty = pisteetkeratty + 5
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        }
    } else if (nopanarvo2 == 6){
        noppa2.src = "dice6.png"
        if (noppadouble6 == true) {
            noppadouble6 = false
        } else if (nopanarvo1 == 1){

        } else {
            pisteetkeratty = pisteetkeratty + 6
            document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        }
    }

    if (putki == 3){
        pisteetkeratty = 0
        putki = 0
        document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
        if (vuoro == 1){
            vuoro = 2
        } else {
            vuoro = 1
        }
    }

    document.getElementById("pisteetnimi3").innerHTML = pelaaja3 + ": " + pisteet3
    document.getElementById("pisteetnimi4").innerHTML = pelaaja4 + ": " + pisteet4

    if (vuoro == 1){
        document.getElementById("vuoro2").innerHTML = pelaaja3
    } else if (vuoro == 2) {
        document.getElementById("vuoro2").innerHTML = pelaaja4
    }
}

function vuoro2(){
    if (vuoro == 1){
        if (pisteet3 + pisteetkeratty >= 100){
            document.getElementById("kaksinoppaa").style.display = "none"

            document.getElementById("voitto").style.display = "flex"

            document.getElementById("voittaja").innerHTML = pelaaja3
        } else {
            pisteet3 = pisteet3 + pisteetkeratty
            vuoro = 2
            pisteetkeratty = 0
        }
    } else if (vuoro == 2){
        if (pisteet4 + pisteetkeratty >= 100){
            document.getElementById("kaksinoppaa").style.display = "none"

            document.getElementById("voitto").style.display = "flex"

            document.getElementById("voittaja").innerHTML = pelaaja4
        } else {
            pisteet4 = pisteet4 + pisteetkeratty
            vuoro = 1
            pisteetkeratty = 0
        }
    }

    document.getElementById("pisteetnimi3").innerHTML = pelaaja3 + ": " + pisteet3
    document.getElementById("pisteetnimi4").innerHTML = pelaaja4 + ": " + pisteet4

    if (vuoro == 1){
        document.getElementById("vuoro2").innerHTML = pelaaja3
    } else if (vuoro == 2) {
        document.getElementById("vuoro2").innerHTML = pelaaja4
    }
    document.getElementById("pisteetkerätty2").innerHTML = pisteetkeratty
}
// -----------------------------