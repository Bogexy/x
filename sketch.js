var terrainImage;

var z,z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12,z13,z14,z15,z16,z17,z18,z19,z20,z21,z22,z23,z24,z25,z26,z27,z28,z29,z30,z31,z32,z33,z34,z35,z36,z37,z38,z39,z40;
function preload(){
    terrainImage = loadImage("./assets/cesped.jpeg");
    
}
function setup(){
    createCanvas(1280,720);

    z = new terrain(0,0);
    z1 = new terrain(0,100);
    z2 = new terrain(0,200);
    z3 = new terrain(0,300);
    z4 = new terrain(0,400);
    z5 = new terrain(0,500);
    z6 = new terrain(0,600);
    z7 = new terrain(100,0);
    z8 = new terrain(200,0);
    z9 = new terrain(300,0);
    z10 = new terrain(400,0);
    z11 = new terrain(500,0);
    z12 = new terrain(600,0);
    z13 = new terrain(700,0);
    z14 = new terrain(800,0);
    z15 = new terrain(900,0);
    z16 = new terrain(1000,0);
    z17 = new terrain(1100,0);
    z18 = new terrain(1200,0);
    z19 = new terrain(1200,100);
    z20 = new terrain(1100,100);
    z12 = new terrain(1000,100);
    z22 = new terrain(900,100);
    z32 = new terrain(800,100);
    z24 = new terrain(700,100);
    z25 = new terrain(600,100);
    z26 = new terrain(500,100);
    z27 = new terrain(400,100);
    z28 = new terrain(300,100);
    z29 = new terrain(200,100);
    z30 = new terrain(100,100);
    z32 = new terrain(0,100);
    z33 = new terrain(0,100);
    z34 = new terrain(0,100);
    z35 = new terrain(0,100);
    z36 = new terrain(0,100);
    z37 = new terrain(0,100);
    z39 = new terrain(0,100);
    z40 = new terrain(0,100);

  
}
function draw(){
    background('black');
    
    

   
    //display
    z.display();
    z1.display();
    z2.display();
    z3.display();
    z4.display();
    z5.display();
    z6.display();
    z7.display();
    z8.display();
    z9.display();
    z10.display();
    z11.display();
    z12.display();
    z13.display();
    z14.display();
    z15.display();
    z16.display();
    z17.display();
    z18.display();
    z19.display();
    z20.display();
    z12.display();
    z22.display();
    z32.display();
    z24.display();
    z25.display();
    z26.display();
    z27.display();
    z28.display();
    z29.display();
    z30.display();
    z32.display();
    z33.display();
    z34.display();
    z35.display();
    z36.display();
    z37.display();
    z39.display();
    z40.display();

    //addImage
    image(terrainImage,z.x,z.y,100,100);
    image(terrainImage,z1.x,z1.y,100,100);
    image(terrainImage,z2.x,z2.y,100,100);
    image(terrainImage,z3.x,z3.y,100,100);
    image(terrainImage,z4.x,z4.y,100,100);
    image(terrainImage,z5.x,z5.y,100,100);
    image(terrainImage,z6.x,z6.y,100,100);
    image(terrainImage,z7.x,z7.y,100,100);
    image(terrainImage,z8.x,z8.y,100,100);
    image(terrainImage,z9.x,z9.y,100,100);
    image(terrainImage,z10.x,z10.y,100,100);
    image(terrainImage,z11.x,z11.y,100,100);
    image(terrainImage,z12.x,z12.y,100,100);
    image(terrainImage,z13.x,z13.y,100,100);
    image(terrainImage,z14.x,z14.y,100,100);
    image(terrainImage,z15.x,z15.y,100,100);
    image(terrainImage,z16.x,z16.y,100,100);
    image(terrainImage,z17.x,z17.y,100,100);
    image(terrainImage,z18.x,z18.y,100,100);
    image(terrainImage,z19.x,z19.y,100,100);
    image(terrainImage,z20.x,z20.y,100,100);
    image(terrainImage,z21.x,z21.y,100,100);
    image(terrainImage,z22.x,z22.y,100,100);
    image(terrainImage,z23.x,z23.y,100,100);
    image(terrainImage,z24.x,z24.y,100,100);
    image(terrainImage,z25.x,z25.y,100,100);
    image(terrainImage,z26.x,z26.y,100,100);
    image(terrainImage,z27.x,z27.y,100,100);
    image(terrainImage,z28.x,z28.y,100,100);
    image(terrainImage,z29.x,z29.y,100,100);
    image(terrainImage,z30.x,z30.y,100,100);
    image(terrainImage,z31.x,z31.y,100,100);
    image(terrainImage,z32.x,z32.y,100,100);
    image(terrainImage,z33.x,z33.y,100,100);
    image(terrainImage,z34.x,z34.y,100,100);
    image(terrainImage,z35.x,z35.y,100,100);
    image(terrainImage,z36.x,z36.y,100,100);
    image(terrainImage,z37.x,z37.y,100,100);
    image(terrainImage,z38.x,z38.y,100,100);
    image(terrainImage,z39.x,z39.y,100,100);
    image(terrainImage,z40.x,z40.y,100,100);
}


//function timerCounter(){
    
    
    
    
   // }


