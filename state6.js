class S6{
    constructor (){
       this.title = createElement('h1');
       
      
    }

    display(){
        gs=6;
        this.title.position(displayWidth/2+200,30);
        this.title.html("GOA");
        this.title.style('color','white');
        this.opt1 = createElement('h1.5');
        this.opt1.position(displayWidth/2+10,150);
        this.opt1.html("GOA'S CAPITAL IS PANAJI");
        this.opt1.style('color','white');
        this.opt2 = createElement('h1.5');
        this.opt2.position(displayWidth/2+10,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE IS KONKANI");
        this.opt2.style('color','white');
        this.opt3 = createElement('h1.5');
        this.opt3.position(displayWidth/2+10,350);
        this.opt3.html("ITS AREA IS 3702 km²");
        this.opt3.style('color','white');
        this.opt4 = createElement('h1.5');
        this.opt4.position(displayWidth/2+10,450);
        this.opt4.html("ITS POPULATION IS ABOUT 18.2 LAKHS");
        this.opt4.style('color','white');
        this.opt5 = createElement('h1.5');
        this.opt5.position(displayWidth/2+10,550);
        this.opt5.html("FESTIVAL CELEBRATED ARE SAO JAO");
        this.opt5.style('color','white');
        this.opt6 = createElement('h1.5');
        this.opt6.position(displayWidth/2+10,650);
        this.opt6.html("DHALO IS A FAMOUS DANCE FORM AT GOA");
        this.opt6.style('color','white');
        back.show();
        
        
    }
}

