var images = ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"];
var random_array;

var points;
var imageNumber;

function newgame() {
	random_array = getRandList(0, 18);
	points = 0;
	imageNumber = 0;
	document.getElementById("point").innerHTML = "Pontszám: " + points + "/19";
	rndImg();
}

function ellenorzes(element) {
	var imageName = document.getElementById("image").src.split("/").pop().split(".")[0];
	var i;

	if (element.textContent.localeCompare(decodeURIComponent(imageName)) == 0) {
		element.style.background='green';
		points++;
		document.getElementById("point").innerHTML = "Pontszám: " + points + "/19";
	}
	else {
		for(i=1; i<5; i++) {
			var button = document.getElementById("button" + i);
			if (button.textContent.localeCompare(decodeURIComponent(imageName)) == 0) {
				button.style.background='green';
			} else {
				button.style.background='red';
			}
		}
	}

	if (imageNumber < 18) {
		imageNumber++;	
		setTimeout(rndImg, 1500);
	}
	if (imageNumber == 18) {
		alert("A játék véget ért!\nPontszám: " + points + "\nÚj játék kezdéshez kattints az OK-ra!");
		newgame();
	} 
	
		
}

function rndImg(){
	var number = random_array[imageNumber];
    var result = "images/" + images[number] + ".jpg";
    document.getElementById("image").src = result;

    var buttons = getRandList(0, 18, 4);

    for (i=1; i<5; i++) {
    	var button = document.getElementById("button" + i);
    	button.style.background = 'lightgray';
    	button.innerHTML = images[buttons[i-1]];
    }
    
    if (!buttons.includes(number)) {
    	document.getElementById("button" + (Math.floor(Math.random() * 4) + 1)).innerHTML = images[number];	
    }
}

function arrayShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function getRandList(min, max, count = max - min + 1) {
    const range = max - min + 1;
    const isValid = (
        Number.isInteger(min) &&
        Number.isInteger(max) &&
        Number.isInteger(count) &&
        max > min &&
        count > 0 &&
        count <= range
    );

    if (!isValid) {
        console.warn('Invalid arguments supplied', arguments);

        return [];
    }

    const list = (new Array(range)).fill(0).map((currentValue, index) => min + index);

    return arrayShuffle(list).slice(0, count);
}


newgame();
