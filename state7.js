class S7{
    constructor (){
       this.title = createElement('h1');
       
      
    }

    display(){
        gs=7;
        this.title.position(displayWidth/2+200,30);
        this.title.html("GUJARAT");
        this.opt1 = createElement('h1.5');
        this.opt1.position(displayWidth/2+10,150);
        this.opt1.html("GUJARAT'S CAPITAL IS GANDHI NAGAR");
        this.opt2 = createElement('h1.5');
        this.opt2.position(displayWidth/2+10,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE IS GUJARATI");
        this.opt3 = createElement('h1.5');
        this.opt3.position(displayWidth/2+10,350);
        this.opt3.html("ITS AREA IS 196,024 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(displayWidth/2+10,450);
        this.opt4.html("ITS POPULATION IS ABOUT 6.27 CRORES");
        this.opt5 = createElement('h1.5');
        this.opt5.position(displayWidth/2+10,550);
        this.opt5.html("FESTIVAL CELEBRATED ARE INTERNATIONAL KITE FESTIVAL");
        this.opt6 = createElement('h1.5');
        this.opt6.position(displayWidth/2+10,650);
        this.opt6.html("GARABA IS A FAMOUS DANCE FORM AT GUJARAT");
        back.show();
        
        
    }
}

