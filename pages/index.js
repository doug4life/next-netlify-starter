import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GHOST JOSEF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi Maya GRRR <3!!!" />
       
         <code>//The Phantastic Homage to Josef Albers 
//by Doug Johnson 


//helliosquarte

i=0;
j = 0;
z = 0;
pt1 = "Hello, I am a square--the kind of square you can see.";
pt2 = " I am not The Real Square, I am an homage.";

pt3 = "My father Josef died, and ever since I feel lost. I fear that The Real Square might also have died.";

pt4 = "My father found The Real Square, but said he could not show It to me yet.";

pt5 = " My father told me that after he died, he would become a square too, but not like me- because then he would have no bounds.";

pt6 = "Since my father died, the game he made began to show ghosts.";

pt7  = '"There are many spirits," my father said, "each with its own face. But The Real Square has an infinite face. It appears as multiples of itself. If you see two identical ghosts, you will see the face of The Real Square."';

pt8 = "I have never seen The Real Square, even after long searching.";

pt9 = "Leagues of phantoms, is there any end?";

pt10 = "I will spend my life looking…but I am weary.";

pt11 = "Will you help me look for a while?";

//var
hue1 = [];
hue2 = [];
hue3 = [];
hue4 = [];
hue5 = [];
hue6 = [];

huez = [];

framedom = [];
blendA = [];
blendB = [];







function setup() {
  createCanvas(1000, 500);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont('Arial');
  textAlign(RIGHT,BOTTOM);
  noStroke();
  fill(100);
  square(250,275,350);
  noCursor();
  
  //TITLE SCREEN
  titleScreen();
  
  
  
   deltaTime;
  
   
  hue1[i] = random(255);
  hue2[i] = random(255);
  hue3[i] = random(255);
   
  hue4[i] = random(255);
  hue5[i] = random(255);
  hue6[i] = random(255);
 
  
  hue1[z] = random(255);
  hue2[z] = random(255);
  hue3[z] = random(255);
  hue1_3 = (hue1[i],hue2[i],hue3[i]);

  framedom[i] = random(12,61); 
  frameRate(framedom[i]);
  blendA = [BLEND,ADD,DARKEST,LIGHTEST,DIFFERENCE, EXCLUSION,MULTIPLY,SCREEN,REPLACE,REMOVE,OVERLAY,HARD_LIGHT,SOFT_LIGHT,DODGE,BURN,]
  blendB = [BLEND,ADD,DARKEST,LIGHTEST,DIFFERENCE, EXCLUSION,MULTIPLY,SCREEN,REPLACE,REMOVE,OVERLAY,HARD_LIGHT,SOFT_LIGHT,DODGE,BURN]
  spell_1 = random (blendA);
  spell_2 = random (blendB);

  
}



function draw() {
 
   
 
       helloSquare();
  

  
    

  interact();
  
 
}
  
  

//FUNCTIONS
  
function titleScreen(){
    //background(66,10);
  
  
  //square bg left
  fill (66);
  square(250,250,500);
  
  //squares left
  fill(100);
  square(250,250,400);
  fill(255,10);
  square(250,290,240);
  fill(0,50);
  square(250,310,160);
  
  
   //square bg right
  fill (66);
  square(750,250,500);
  
   
  //squares right
  fill(100);
  square(750,250,400);
  fill(255,10);
  square(750,290,240);
   fill(0,50);
  square(750,310,160);
  
  //PressEnter
    pop();
    textFont('Arial');
    textStyle(ITALIC);
    textSize(14);
    noStroke();
    fill(225,225,225);
    
    textAlign(CENTER);
    text('press enter to play', 500,250);
    push();
  
   //pointer and titles
  
 
  
  //mouse pointer
  if(pmouseX <= 325){
  //stroke(110);
  //strokeWeight(5);
  fill(255,50);
  square(pmouseX,pmouseY,10);
    
    
   //LEFT SIDE  
   //title left
    pop();
    noStroke();
    textAlign(RIGHT);
  textStyle(NORMAL);
  textSize(40);
  
  fill(255);
  text('Josef',179,108); 
  text('Josef',180,108);
  text('Josef',181,108);
  
  fill(180);
 
  //text("Albers",421,108);
  text("Albers'",301,108);
  
  fill(0,75);
  textStyle(ITALIC);
  text('Ghost',196,140); 
    text('Ghost',193,140);
      text('Ghost',191,140);
    push();
    
  }
  else if(pmouseX > 325 && pmouseX < 675){
    blendMode(SOFT_LIGHT);
  //pointer
  
     fill(255,98);
  square(pmouseX,pmouseY,10);
    blendMode(BLEND);
  
  }
 
  else if(pmouseX >= 575){ 
   blendMode(BLEND);
    fill(255,50);
  square(pmouseX,pmouseY,10);
  
    
    
//RIGHT SIDE
    
  //title right
    pop();
  noStroke();
    textAlign(RIGHT);
  textStyle(NORMAL);
  textSize(40);
  
  fill(255);
  text('Josef',801,108); 
    text('Josef',800,108);
      text('Josef',799,108);
  
  fill(180);
  //text("Albers",921,108);
  text("Albers'",921,108);
  
  fill(0,75);
  textStyle(ITALIC);
  text('Ghost',916,140);
     text('Ghost',913,140);
       text('Ghost',911,140);
    push();
  }
 
  noStroke();

}
function helloSquare(){
    
  //z=0;
  
   background(66);
  
 
  
//RIGHT SIDE //maybe have this change acc to z text timing
  fill(66);
    square(750,250,500);
  fill(175);
    square(750,250,400);
  fill(200);
    square(750,290,240);
   fill(100);
    square(750,310,160);
  
  //HELLOBOX
  rectMode(CENTER);
  noStroke();
  textFont("Arial");
  textAlign(RIGHT);
  textStyle(ITALIC);
  textSize(28);
  textLeading(25);
 fill(195);
  if((keyCode == 13)== false){
if(z < 200){
    text(pt1,width - 644,height - 300, 300,400);}
else if(z < 300){
  text(pt2,width - 644,height - 300, 300,400);}
else if(z < 400){
  text(pt3,width - 644,height - 300, 300,400);}
else if(z < 600){
  text(pt4,width - 644,height - 300, 300,400);}
else if(z < 800){
  text(pt5,width - 644,height - 300, 300,400);}
else if(z < 950){
  text(pt6,width - 644,height - 300, 300,400);}
else if(z < 1100){
  text(pt7,width - 644,height - 300, 300,400);}
else if(z < 1250){
  text(pt8,width - 644,height - 300, 300,400);}
else if(z < 1400){
  text(pt9,width - 644,height - 300, 300,400);}
else if(z < 1550){
  text(pt10,width - 644,height - 300, 300,400);}
else if(z < 1700){
  text(pt11,width - 644,height - 300, 300,400);}
else if(z < 1850){
  text("...", width - 644,height - 300, 300,400);}
  }
    else if((keyCode == 13)==true){
      ghostGame();
    }
if(z>1850)
  {
    titleScreen();
  }
 

  //josefJet();
//noFill();
  z = z + 1;
 if(z > 2200){
    z = 0;
  }
  
  
}

//function keyPressed(){
//shift
  //  if(keyCode === 16){
    //  ghostGame();
  //  }
//}
function ghostGame(){
  
  background(66);
   //squares left
 noStroke();
  fill (hue4[i]);
  square(250,250,500);
  
  //bigSquare left

  
  fill(hue5[i]);
  square(250,250,400);
  fill(hue1[i]);
  square(250,290,240);
  fill(hue6[i]);
  square(250,310,160);

  
   //squares right
  //bg
  fill (hue4[i]);
  square(750,200,500);
  
  //bigsquare right 2:3:5
  blendMode(spell_1);
  fill(hue5[i]);
  square(750,250,400);
  fill(hue1[i]);
  square(750,290,240);
   fill(hue6[i]);
  square(750,310,160);
  blendMode(BLEND);
  
  
pop();
  textAlign(LEFT);
  textSize(24);
  noStroke();
  textStyle(BOLD);
  fill(10);
// text('>INTERACT',50, 485);
 // fill(200,100,100);
  textAlign(RIGHT);
text('>EXIT',950, 485);
 // stroke(20),
   // strokeWeight(2);
  //line(50,486,950,486);
  
  //menu bar
 // pop();
 // fill(hue1_3);
 // rectMode(CORNER);
  
//  rect(0,450,1000,500);
 // rectMode(CENTER);
 // push();
  //menu squares
     noFill();
     strokeWeight(1);
 stroke(hue1[i]);
 square(27, 450 - 6,30); 
 stroke (hue2[i]);
 square(27, 450 - 2, 18 );
 stroke (hue3[i]);
 square(27, 450 ,12 );
  
  

  push();
  
  
josefLost();
  
 
  
}



function interact(){
//enter
    if(keyCode === 13){
      ghostGame();
    }
}
function josefLost(){
  
  
  //mouse square
   if(i < 100){
     noStroke();
 fill(hue1[i]);
 square(pmouseX, pmouseY - 6, 50); 
 fill (hue2[i]);
 square(pmouseX, pmouseY - 2, 30);
 fill (hue3[i]);
 square(pmouseX, pmouseY , 20);
  
  //center square interact
     noFill();
     strokeWeight(1);
 stroke(hue1[i]);
 square(width/2, pmouseY - 6,50); 
 stroke (hue2[i]);
 square(width/2, pmouseY - 2,  30 );
 stroke (hue3[i]);
 square(width/2, pmouseY ,20 );
     
  //snapping
     //while(dist(pmouseX,pmouseY,width/2,pmouseY)<55){
        // pmouseX = 500;
       // }
 
       if(dist(pmouseX,pmouseY,width/2,pmouseY) < 75){
       
         //L+R GHOSTS
         leftGhost();
         rightGhost();
         
         if((leftGhost == rightGhost) == true){
           
           circle(500,250,100);
         }
      
       }
     

     
z=z+5;
     if(z>500){
       z=0;
     }
   }
}
function leftGhost(){
   noStroke();
         blendMode(spell_1);
         fill(hue1[i],hue2[i],hue3[i]);
         square(250 + z, 250 , 400);
         blendMode(spell_2);
         fill(hue2[i],hue3[i],hue1[i]);
         square(250 + z, 290 , 240);
         blendMode(spell_1);
         fill(hue3[i],hue1[i],hue2[i]); 
         square(250 + z, 310 , 160);
}

function rightGhost(){
    noStroke();
    blendMode(spell_2);
         fill(hue4[i],hue5[i],hue6[i]);
          square(750 - z, 250, 400);
        blendMode(spell_1);
         fill(hue5[i],hue6[i],hue4[i]);
          square(750 - z, 290, 240);
        blendMode(spell_2);
         fill(hue6[i],hue4[i],hue5[i]);
          square(750 - z, 310, 160);
}
</code>
       
      </main>

      <Footer />
    </div>
  )
}
