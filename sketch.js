var form,gs=0,gas=0,back,currentSlide=1;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25,s26,s27,s28,ut1,ut2,ut3,ut4,ut5,ut6,ut7,ut8,ut,state;
function preload(){
    s = loadSound("Vande Matram - Revival (Original) 320Kbps.mp3");
    u = loadSound("saare-jaha-se-achchha-5041.mp3");
    i = loadImage("IMG-20210531-WA0012.jpg");
    slide1 = loadImage("slides/slide1.png");
    slide2 = loadImage("slides/slide2.png");
    slide3 = loadImage("slides/slide3.png");
    slide4 = loadImage("slides/slide4.png");
    slide5 = loadImage("slides/slide5.png");
    slide6 = loadImage("slides/slide6.png");
    slide7 = loadImage("slides/slide7.png");
    slide8 = loadImage("slides/slide8.png");
    slide9 = loadImage("slides/slide9.png");
    slide10 = loadImage("slides/slide10.png");
    slide11 = loadImage("slides/slide11.png");
    slide12 = loadImage("slides/slide12.png");
    slide13 = loadImage("slides/slide13.png");
    slide14 = loadImage("slides/slide15.png");
    back1 = loadImage("india.jpg");
    back2 =  loadImage("back2.jpg");
    back3 = loadImage("22.jpg");
    back4 = loadImage("chardrayan.jpg");
    back5 = loadImage("great banyan tree kolkata.jpg");
    back6 = loadImage("ICC-cricket-world-cup-2019-indian-team-squad.jpg");
    back7 = loadImage("kathakali Kerala.png");
    back8 = loadImage("kerala backwater.jpg");
    back9 = loadImage("mahatma gandhi father of nation.jpg");
    back10 = loadImage("statue_of_unity_sardar_patel-U205730969126CB--621x414@LiveMint.webp");
    back11 = loadImage("sundarban.jpg");
    back12 = loadImage("taj mahal 1.jpg");
    back13 = loadImage("Thar Desert.jpg");
    back14 = loadImage("Theyyam Kerala.jpeg");
    back15 = loadImage("Tiger.jpg");
    sound = loadSound("National-Anthem-Of-India.mp3");
    img1 = loadImage("s1Img.jpg");
    img = loadImage("S1iMG1.jpg");
    img2 = loadImage("s2Img.jpg");
    img3 = loadImage("s3.jpg");
    img4 = loadImage("s4.png");
    img5 = loadImage("s5.jpg");
    img6 = loadImage("s6.jpg");
    img7  = loadImage("s7.JPG");
    img8 = loadImage("s8.jpg");
    img9 = loadImage("S9.jpg");
    img10 = loadImage("s10.jpg");
    img11 = loadImage("s11.jpg");
    img12 = loadImage("s12.png");
    img13 = loadImage("s13.png");
    img14 = loadImage("s14.jpg");
    img15 = loadImage("s15.jpg");
    img16 = loadImage("s16.jpg");
    img17 = loadImage("s17.jpg");
    img18 = loadImage("s18.jpg");
    img19 = loadImage("s19.jpg");
    img20 = loadImage("s20.jpg");
    img21 = loadImage("s21.jpg");
    img22 = loadImage("s22.jpg");
    img23 = loadImage("s23.jpg");
    img24 = loadImage("s24.jpg");
    img25 = loadImage("s25.jpg");
    img26 = loadImage("s26.png");
    img27 = loadImage("s27.png");
    img28 = loadImage("s28.png");
    i1 = loadImage("u1.jpg");
    i2 = loadImage("u2.png");
    i3 = loadImage("u3.jpg");
    i4 = loadImage("u4.jpg");
    i5 = loadImage("u5.png");
    i6 = loadImage("u6.png");
    i7 = loadImage("u7.png");
    i8 = loadImage("u8.jpg");

    
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-50);
    form = new Form();
    back = createButton('BACK');
    back.position(displayWidth/2+1000,700);
    back.hide();
   s.play();
    // if(gs===0){
       
    // }
}

function draw(){
    background(back1); 
    var o = createSprite(400,100,500,500);
    o.addImage("img",img2); 
    form.display();  
    if(gs===1){
        background(img1);
    }
    if(gs===2){
        background(img2);
    }
    if(gs===3){
        background(img3);
    }
    if(gs===4){
        background(img4);
    }
    if(gs===5){
        background(img5);
    }
    if(gs===6){
        background(img6);
    }
    if(gs===7){
        background(img7);
    }
    if(gs===8){
        background(img8);
    }
    if(gs===9){
        background(img9);
    }
    if(gs===10){
        background(img10);
    }
    if(gs===11){
        background(img11);
    }
    if(gs===12){
        background(img12);
    }
    if(gs===13){
        background(img13);
    }
    if(gs===14){
        background(img14);
    }
    if(gs===15){
        background(img15);
    }
    if(gs===16){
        background(img16);
    }
    if(gs===17){
        background(img17);
    }
    if(gs===18){
        background(img18);
    }
    if(gs===19){
        background(img19);
    }
    if(gs===20){
        background(img20);
    }
    if(gs===21){
        background(img21);
    }
    if(gs===22){
        background(img22);
    }
    if(gs===23){
        background(img23);
    }
    if(gs===24){
        background(img24);
    }
    if(gs===25){
        background(img25);
    }
    if(gs===26){
        background(img26);
    }
    if(gs===27){
        background(img27);
    }
    if(gs===28){
        background(img28);
    }
    if(gs===29){
        background(i1);
    }
    if(gs===30){
        background(i2);
    }
    if(gs===31){
        background(i3);
    }
    if(gs===32){
        background(i4);
    }
    if(gs===33){
        background(i5);
    }
    if(gs===34){
        background(i6);
    }
    if(gs===35){
        background(i7);
    }
    if(gs===36){
        background(i8);
    }
    
    if(gs===37){
        background(back1);
    }
    if(gs===38){
        background(slide1);
    }
    if(gs===39){
        background(slide2);
    }
    if(gs===40){
        background(slide3);
    }
    if(gs===41){
        background(slide4);
    }
    if(gs===42){
        background(slide5);
    }
    if(gs===43){
        background(slide6);
    }
    if(gs===44){
        background(slide7);
    }
    if(gs===45){
        background(slide8);
    }
    if(gs===46){
        background(slide9);
    }
    if(gs===47){
        background(slide10);
    }
    if(gs===48){
        background(slide11);
    }
    if(gs===49){
        background(slide12);
    }
    if(gs===50){
        background(slide13);
    }
    if(gs===51){
        background(slide14);
    }
    if(gs===52){
        background(back3);
        image(i,displayWidth/2-670,displayHeight/2+50);
    }
    if(gs===54){
        background("lightGreen");
    }
    if(gs===0){
        background(slide1);
    }
form.home.mousePressed(()=>{
    form.next1.show();
    form.next2.hide();
    form.next3.hide();
    form.next4.hide();
    form.next5.hide();
    form.next6.hide();
    form.next7.hide();
    form.next8.hide();
    form.next9.hide();
    form.next10.hide();
    form.next11.hide();
    form.next12.hide();
    form.next13.hide();
    form.next14.hide();
    form.next15.hide();
    form.back1.hide();
    form.back2.hide();
    form.back3.hide();
    form.back4.hide();
    form.back5.hide();
    form.back6.hide();
    form.back7.hide();
    form.back8.hide();
    form.back9.hide();
    form.back10.hide();
    form.back11.hide();
    form.back12.hide();
    form.back13.hide();
    form.back14.hide();
    form.back15.hide();
    form.back16.hide();
    form.state.hide();
  
  
    form.ut.hide();
    
   
    gs = 38;
    currentSlide = 1;
})
}