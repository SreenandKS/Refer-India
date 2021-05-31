class S8{
    constructor (){
       this.title = createElement('h1');
       
      
    }

    display(){
        gs=8;
        this.title.position(displayWidth/2+200,30);
        this.title.html("HARYANA");
        this.opt1 = createElement('h1.5');
        this.opt1.position(displayWidth/2+10,150);
        this.opt1.html("HARYANA'S CAPITAL IS CHANDIGARH");
        this.opt2 = createElement('h1.5');
        this.opt2.position(displayWidth/2+10,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE IS HARYANI");
        this.opt3 = createElement('h1.5');
        this.opt3.position(displayWidth/2+10,350);
        this.opt3.html("ITS AREA IS 44,212 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(displayWidth/2+10,450);
        this.opt4.html("ITS POPULATION IS ABOUT 2.54 CRORES");
        this.opt5 = createElement('h1.5');
        this.opt5.position(displayWidth/2+10,550);
        this.opt5.html("FESTIVAL CELEBRATED IS KURUKSHETRA FESTIVAL");
        this.opt6 = createElement('h1.5');
        this.opt6.position(displayWidth/2+10,650);
        this.opt6.html("NAACH IS A FAMOUS DANCE FORM AT HARYANA");
        back.show();
        
        
    }
}