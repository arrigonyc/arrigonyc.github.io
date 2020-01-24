var m;

function setup() {
	createCanvas(800,800); 
	// store and print initial minute
	m = minute();
	print(m);
}

function draw() {
	// each draw() tick, check if minute has changed, if so update variable and print
	if(minute() != m){
		m = minute();
		print(m);
	}

	background(255);
	noStroke();
	
	// get hour color from gradient pink->purple
	let hr = hour();
	let hrRed = map(hr, 0, 23, 248, 30);
	let hrBlue = map(hr, 0, 23, 205, 43);
	let hrGreen = map(hr, 0, 23, 218, 100);

	// get hour diameter so minute can be sized accordingly
	let hrDiam = map(hr, 0, 23, 500, 800);
	fill(hrRed, hrBlue, hrGreen);
	circle(0, 0, hrDiam);

	// get minute color from gradient redish -> purple
	let minRed = map(m, 0, 59, 195, 29);
	let minBlue = map(m, 0, 59, 55, 38);
	let minGreen = map(m, 0, 59, 100, 113);

	// get minute diameter based on hour's diameter so seconds be sized accordingly
	let minDiam = map(m, 0, 59, 350, hrDiam - 50);
	fill(minRed, minBlue, minGreen);
	circle(0,0, minDiam);

	// get second color from gradient yellow -> darker yellow
	let sec = second();
	let secRed = map(sec, 0, 59, 242, 200);
	let secBlue = map(sec, 0, 59, 248, 200);
	let secGreen = map(sec, 0, 59, 166, 50);

	// get second diameter based on minute's diameter
	let secDiam = map(sec, 0, 59, 100, minDiam - 10);
	fill(secRed,secBlue,secGreen);
	circle(0, 0, secDiam);
}