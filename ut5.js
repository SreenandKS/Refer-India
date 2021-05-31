class U5{
    constructor(){
        this.title = createElement('h1');
    }
    display(){
        gs = 33;
        this.title.position(displayWidth/2+200,30);
        this.title.html("JAMMU AND KASHMIR");
        this.opt1 = createElement('h1.5');
        this.opt1.position(displayWidth/2+10,150);
        this.opt1.html("IT HAS TWO CAPITALS,JAMMU AND SRINAGAR");
        this.opt2 = createElement('h1.5');
        this.opt2.position(displayWidth/2+10,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE ARE KASHMIRI,DOGRI,URDU,HINDI AND ENGLISH");
        this.opt3 = createElement('h1.5');
        this.opt3.position(displayWidth/2+10,350);
        this.opt3.html("ITS AREA IS 42,241 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(displayWidth/2+10,450);
        this.opt4.html("ITS POPULATION IS ABOUT 1.2 CORES");
        this.opt5 = createElement('h1.5');
        this.opt5.position(displayWidth/2+10,550);
        this.opt5.html("THERE ARE 20 DISTRICTS");
        this.opt6 = createElement('h1.5');
        this.opt6.position(displayWidth/2+10,650);
        this.opt6.html("IT IS ESTABLISHED AT 31 DECEMBER 2019");
        back.show();
    }
}