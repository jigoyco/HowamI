let hue=0
let Phase=(0,200)
let Amp= 0
let Ampslider
let position=50
let button
let size=0
let Flag = true;
let flag = true
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	button = createButton('Time for a Party');
  button.position(90, 90);
	 button.mousePressed(changeBool);
	
	
Ampslider=createSlider(-height/2,height/2,10)
	Ampslider.position(10,10)
	Phaseslider=createSlider(-height/2,height/2,10)
	Phaseslider.position(30,30)
		Sizeslider=createSlider(-height/2,height/2,10)
	Sizeslider.position(70,70)
Hueslider=createSlider(-height/2,height/2,10)
	Hueslider.position(50,50)

	
}


function draw() {
	colorMode(hue,100, 200)      
  noStroke();
	hue= hue+Hueslider.value()
		hue= hue % 500
	background(255,255,255,10)
	
	let X = position;
	
	let Step = position;
	
	if (Flag == true) {
		
	let Amp = Ampslider.value();
		//Amp = Amp+.5
	
	let Freq = position;
	
	//let Phase = Phaseslider.value();
	Phase = Phase+Phaseslider.value()
	
	let Ave = height/2
	
	let size = Sizeslider.value();
	
	let Y = mysine(X,Amp,Freq,Phase,Ave);
	fill(hue,125,1125)
	ellipse(X,Y,size, size)
	
	X = X+position
	if (position>width){
		step= -1*step;
	}
	if (position<0){
	velocity= -1*velocity;
	}
 Y = mysine(X,Amp,Freq,Phase,Ave);//
		ellipse(X,Y,size,size)
	X = X+Step //
 
 Y = mysine(X,Amp,Freq,Phase,Ave);//
		ellipse(X,Y,size,size)
	X = X+Step //
 
	Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
	}
	if (Flag == false) {
		
		Amp = Amp+0.5
	
	let Freq = position;
	
	Phase = Phase+50
		
		size = 20
	
	let Ave = height/2
	
	let Y = mysine(X,Amp,Freq,Phase,Ave);
	fill(hue,125,1125)
	ellipse(X,Y,size,size)
	
	X = X+position
	if (position>width){
		step= -1*step;
	}
	if (position<0){
	velocity= -1*velocity;
	}
 Y = mysine(X,Amp,Freq,Phase,Ave);//
		ellipse(X,Y,size,size)
	X = X+Step //
 
	Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
			Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
	X = X+Step //
 Y = mysine(X,Amp,Freq,Phase,Ave);
		ellipse(X,Y,size,size)
		X = X+Step
	}
	

	
}
function changeBool() {
	Flag= !Flag;
}

function mysine(X,Amp,Freq,Phase,Ave) {
	angleMode(DEGREES);

	let Y = Amp*sin(Freq*X+Phase)+Ave;
	return Y;







	
	
}
