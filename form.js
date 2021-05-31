class Form{
    constructor(){
       this.next1 = createButton('NEXT');
       this.next2 = createButton('NEXT');
       this.next3 = createButton('NEXT');
       this.next4 = createButton('NEXT');
       this.next5 = createButton('NEXT');
       this.next6 = createButton('NEXT');
       this.next7 = createButton('NEXT');
       this.next8 = createButton('NEXT');
       this.next9 = createButton('NEXT');
       this.next10 = createButton('NEXT');
       this.next11 = createButton('NEXT');
       this.next12 = createButton('NEXT');
       this.next13 = createButton('NEXT');
       this.next14 = createButton('NEXT');
       this.next15 = createButton('NEXT');
       this.back1 = createButton('BACK');
       this.back2 = createButton('BACK');
       this.back3 = createButton('BACK');
       this.back4 = createButton('BACK');
       this.back5 = createButton('BACK');
       this.back6 = createButton('BACK');
       this.back7 = createButton('BACK');
       this.back8 = createButton('BACK');
       this.back9 = createButton('BACK');
       this.back10 = createButton('BACK');
       this.back11 = createButton('BACK');
       this.back12 = createButton('BACK');
       this.back13 = createButton('BACK');
       this.back14 = createButton('BACK');
       this.back15 = createButton('BACK');
       this.back16 = createButton('BACK');
       this.home = createButton('HOME');
       
       this.next2.hide();
       this.next3.hide();
       this.next4.hide();
       this.next5.hide();
       this.next6.hide();
       this.next7.hide();
       this.next8.hide();
       this.next9.hide();
       this.next10.hide();
       this.next11.hide();
       this.next12.hide();
       this.next13.hide();
       this.next14.hide();
       this.next15.hide();
       this.back1.hide();
       this.back2.hide();
       this.back3.hide();
       this.back4.hide();
       this.back5.hide();
       this.back6.hide();
       this.back7.hide();
       this.back8.hide();
       this.back9.hide();
       this.back10.hide();
       this.back11.hide();
       this.back12.hide();
       this.back13.hide();
       this.back14.hide();
       this.back15.hide();
       this.back16.hide();

       
        this.state = createButton('STATES AND UNION TERRITORIES OF INDIA');
        this.state.hide();
        this.ut = createButton('UNION TERRITORIES');
        this.ut.hide();
    }

    display(){
       
        this.home.position(displayWidth/2+1000,displayHeight/2-350);
        this.back1.position(displayWidth/2-200,700);
        this.back2.position(displayWidth/2-200,700);
        this.back3.position(displayWidth/2-200,700);
        this.back4.position(displayWidth/2-200,700);
        this.back5.position(displayWidth/2-200,700);
        this.back6.position(displayWidth/2-200,700);
        this.back7.position(displayWidth/2-200,700);
        this.back8.position(displayWidth/2-200,700);
        this.back9.position(displayWidth/2-200,700);
        this.back10.position(displayWidth/2-200,700);
        this.back11.position(displayWidth/2-200,700);
        this.back12.position(displayWidth/2-200,700);
        this.back13.position(displayWidth/2-200,700);
        this.back14.position(displayWidth/2-200,700);
        this.back15.position(displayWidth/2-200,700);
        this.back16.position(displayWidth/2-200,700);
        this.next1.position(displayWidth/2+1000,700);
        this.next1.style('background','lightGreen');
        this.next2.position(displayWidth/2+1000,700);
        this.next2.style('background','lightGreen');
        this.next3.position(displayWidth/2+1000,700);
        this.next3.style('background','lightGreen');
        this.next4.position(displayWidth/2+1000,700);
        this.next4.style('background','lightGreen');
        this.next5.position(displayWidth/2+1000,700);
        this.next5.style('background','lightGreen');
        this.next6.position(displayWidth/2+1000,700);
        this.next6.style('background','lightGreen');
        this.next7.position(displayWidth/2+1000,700);
        this.next7.style('background','lightGreen');
        this.next8.position(displayWidth/2+1000,700);
        this.next8.style('background','lightGreen');
        this.next9.position(displayWidth/2+1000,700);
        this.next9.style('background','lightGreen');
        this.next10.position(displayWidth/2+1000,700);
        this.next10.style('background','lightGreen');
        this.next11.position(displayWidth/2+1000,700);
        this.next11.style('background','lightGreen');
        this.next12.position(displayWidth/2+1000,700);
        this.next12.style('background','lightGreen');
        this.next13.position(displayWidth/2+1000,700);
        this.next13.style('background','lightGreen');
        this.next14.position(displayWidth/2+1000,700);
        this.next14.style('background','lightGreen');
        this.next15.position(displayWidth/2+1000,700);
        this.next15.style('background','lightGreen');
        

        

        this.next1.mousePressed(()=>{
            this.back1.hide();
            this.back2.show();
            this.next1.hide();
            this.next2.show();
            gs = 39;
            currentSlide  = 2;
           
        })
         this.next2.mousePressed(()=>{
            this.back2.hide();
            this.back3.show();
             this.next2.hide();
             this.next3.show();
            gs = 40;
            currentSlide = 3;
            
        })
        this.next3.mousePressed(()=>{
            this.back3.hide();
            this.back4.show();
            this.next3.hide();
            this.next4.show();
           gs = 41;
           currentSlide = 4;
          
       })
       this.next4.mousePressed(()=>{
        this.back4.hide();
        this.back5.show();
        this.next4.hide();
        this.next5.show();
       gs = 42;
       currentSlide  = 5;
       
   })
   this.next5.mousePressed(()=>{
    this.back5.hide();
    this.back6.show();
    this.next5.hide();
    this.next6.show();
    gs = 43;
    currentSlide = 6;
    
  
})
this.next6.mousePressed(()=>{
    this.back6.hide();
    this.back7.show();
    this.next6.hide();
    this.next7.show();
   gs = 44;
   currentSlide = 7;
   
})

this.next7.mousePressed(()=>{
    this.back7.hide();
    this.back8.show();
    this.next7.hide();
    this.next8.show();
   gs = 45;
   currentSlide = 8;
  
})
this.next8.mousePressed(()=>{
    this.back8.hide();
    this.back9.show();
    this.next8.hide();
    this.next9.show();
   gs = 46;
   currentSlide = 9;
   
})
this.next9.mousePressed(()=>{
    this.back9.hide();
    this.back10.show();
    this.next9.hide();
    this.next10.show();
   gs = 47;
   currentSlide = 10;
  
})
this.next10.mousePressed(()=>{
    this.back10.hide();
    this.back11.show();
    this.next10.hide();
    this.next11.show();
   gs = 48;
   currentSlide = 11;
  
})
this.next11.mousePressed(()=>{
    this.back11.hide();
    this.back12.show();
    this.next11.hide();
    this.next12.show();
   gs = 49;
   currentSlide = 12;
   
})
this.next12.mousePressed(()=>{
    this.back12.hide();
    this.back13.show();
    this.next12.hide();
    this.next13.show();
   gs = 50;
   currentSlide = 13;
   
})
this.next13.mousePressed(()=>{
    this.back13.hide();
    this.back14.show();
    this.next13.hide();
    this.next14.show();
   gs = 51;
   currentSlide = 14;
  
})
this.next14.mousePressed(()=>{
    this.back14.hide();
   
    this.next14.hide();
       gs = 37;
   currentSlide =  15;
   this.state.show();
   gs = 37;
   currentSlide = 15;
   this.next15.hide();
   this.back15.hide();
   this.state.position(displayWidth/2+250,displayHeight/2);
   this.state.style('width','300px');
   this.state.style('height','30px');
   // this.state.hide();
   this.state.mousePressed(()=>{
       this.home.hide();
       currentSlide = 16;
      gs=53;
       this.state.hide();
       state = new State();
       state.display();
})

    
    })
   if(currentSlide===1){
       this.back1.hide();
   }
   if(currentSlide===2){
       this.back1.show();
       this.back2.mousePressed(()=>{
           this.back1.hide();
        this.next1.show();
        this.next2.hide();
        gs=38;
        currentSlide = 1;
    })
   }
   if(currentSlide===3){
       
       this.back2.show();
    this.back3.mousePressed(()=>{
        this.back2.hide();
        this.next2.show();
        this.next3.hide();
        gs=39;
        currentSlide = 2;
    })
   }
   if(currentSlide===4){
       this.back3.show();
    this.back4.mousePressed(()=>{
        this.back3.hide();
        this.next3.show();
        this.next4.hide();

        gs=40;
        currentSlide = 3;
    })
   }
   if(currentSlide===5){
    this.back4.show();
    this.back5.mousePressed(()=>{
        this.next4.show();
        this.next5.hide();
        this.back4.hide();
        gs=41;
        currentSlide = 4;
    })
   }
   if(currentSlide===6){
    this.back5.show();
    this.back6.mousePressed(()=>{
        this.next5.show();
        this.next6.hide();
        this.back5.hide();
        gs=42;
        currentSlide = 5;
    })
   }
   if(currentSlide===7){
    this.back6.show();
    this.back7.mousePressed(()=>{
        this.next6.show();
        this.next7.hide();
        this.back6.hide();
        gs=43;
        currentSlide = 6;
    })
   }
   if(currentSlide===8){
    this.back7.show();
    this.back8.mousePressed(()=>{
        this.next7.show();
        this.next8.hide();
        this.back7.hide();
        gs=44;
        currentSlide = 7;
    })
   }
   if(currentSlide===9){
    this.back8.show();
    this.back9.mousePressed(()=>{
        this.next8.show();
        this.next9.hide();
        this.back8.hide();
        gs=45;
        currentSlide = 8;
    })
   }
   if(currentSlide===10){
    this.back9.show();
    this.back10.mousePressed(()=>{
        this.next9.show();
        this.next10.hide();
        this.back9.hide();
        gs=46;
        currentSlide = 9;
    })
   }
   if(currentSlide===11){
    this.back10.show();
    this.back11.mousePressed(()=>{
        this.next10.show();
        this.next11.hide();
        this.back10.hide();
        gs=47;
        currentSlide = 10;
    })
   }
   if(currentSlide===12){
    this.back11.show();
    this.back12.mousePressed(()=>{
        this.next11.show();
        this.next12.hide();
        this.back11.hide();
        gs=48;
        currentSlide = 11;
    })
   }
   if(currentSlide===13){
    this.back12.show();
    this.back13.mousePressed(()=>{
        this.next12.show();
        this.next13.hide();
        this.back12.hide();
        gs=49;
        currentSlide = 12;
    })
   }
   if(currentSlide===14){
    this.back13.show();
    this.back14.mousePressed(()=>{
        this.next13.show();
        this.next14.hide();
        this.back13.hide();
        gs=50;
        currentSlide = 13;
    })
   }
   if(currentSlide===15){
    this.next2.hide();
    this.next3.hide();
    this.next4.hide();
    this.next5.hide();
    this.next6.hide();
    this.next7.hide();
    this.next8.hide();
    this.next9.hide();
    this.next10.hide();
    this.next11.hide();
    this.next12.hide();
    this.next13.hide();
    this.next14.hide();
    this.next15.hide();
    this.back1.hide();
    this.back2.hide();
    this.back3.hide();
    this.back4.hide();
    this.back5.hide();
    this.back6.hide();
    this.back7.hide();
    this.back8.hide();
    this.back9.hide();
    this.back10.hide();
    this.back11.hide();
    this.back12.hide();
    this.back13.hide();
    this.back14.hide();
    this.back15.hide();
    this.back16.hide();
   }
   if(currentSlide===16){
    
   }


           

        
        
//             this.next.mousePressed(()=>{
                
//                 gs=39;
                
                
               
//                this.next.mousePressed(()=>{
//                    gs=40;
                   

//                    this.next.mousePressed(()=>{
//                        gs=41;
                      
//                    })

//                    this.next4.mousePressed(()=>{
//                        this.op28.hide();
//                        this.op29.hide();
//                        this.op30.hide();
//                        this.op31.hide();
//                        this.op32.hide();
//                        this.op33.hide();
//                        this.op34.hide();
//                        this.op35.hide();
//                        this.op36.hide();
//                        this.op37.hide();
//                        this.op38.hide();
//                        this.op39.hide();
//                        this.op40.hide();
//                        this.op41.hide();
//                        this.op42.hide();
//                        this.op43.hide();
//                        this.op44.hide();
//                        this.op45.hide();
//                        this.op46.hide();
//                        this.next4.hide();
//                        this.next5.show();

//                        this.op47 = createElement('h3');
//                        this.op47.position(displayWidth-600,100);
//                        this.op47.html("•	Sushruta is regarded as the Father of Surgery. Over2600 years ago Sushrata & his ");

//                        this.op48 = createElement('h3');
//                        this.op48.position(displayWidth-600,130);
//                        this.op48.html("team conducted complicated surgeries like cataract, artificial limbs, cesareans, ");

//                        this.op49 = createElement('h3');
//                        this.op49.position(displayWidth-600,160);
//                        this.op49.html("fractures, urinary stones, plastic surgery and brain surgeries.");

//                        this.op50 = createElement('h3');
//                        this.op50.position(displayWidth-600,190);
//                        this.op50.html("•	Usage of anaesthesia was well known in ancient Indian medicine. Detailed ");

//                        this.op51= createElement('h3');
//                        this.op51.position(displayWidth-600,220);
//                        this.op51.html("knowledge of anatomy, embryology, digestion, metabolism,physiology, etiology, ");

//                        this.op52= createElement('h3');
//                        this.op52.position(displayWidth-600,250);
//                        this.op52.html("genetics and immunity is also found in many ancient Indian texts.");

//                        this.op53= createElement('h3');
//                        this.op53.position(displayWidth-600,280);
//                        this.op53.html("•	The four religions born in India - Hinduism, Buddhism, Jainism, and Sikhism, are ");
             
//                        this.op54= createElement('h3');
//                        this.op54.position(displayWidth-600,310);
//                        this.op54.html("followed by 25% of the world's population.");

//                        this.op55= createElement('h3');
//                        this.op55.position(displayWidth-600,340);
//                        this.op55.html("•	Jainism and Buddhism were founded in India in 600 B.C. and 500 B.C. respectively.");

//                        this.op56= createElement('h3');
//                        this.op56.position(displayWidth-600,370);
//                        this.op56.html("•	Islam is India's and the world's second largest religion.");

//                        this.op57= createElement('h3');
//                        this.op57.position(displayWidth-600,400);
//                        this.op57.html("•	The oldest European church and synagogue in India are in the city of Cochin. They ");

//                        this.op58= createElement('h3');
//                        this.op58.position(displayWidth-600,430);
//                        this.op58.html("were built in 1503 and 1568 respectively.");

//                        this.op59= createElement('h3');
//                        this.op59.position(displayWidth-600,460);
//                        this.op59.html("•	Jews and Christians have lived continuously in India since 200 B.C. and 52 A.D. ");

//                        this.op60= createElement('h3');
//                        this.op60.position(displayWidth-600,490);
//                        this.op60.html("respectively.");

//                        this.op61= createElement('h3');
//                        this.op61.position(displayWidth-600,520);
//                        this.op61.html("•	The largest religious building in the world is Angkor Wat, a Hindu Temple in  ");

//                        this.op62= createElement('h3');
//                        this.op62.position(displayWidth-600,550);
//                        this.op62.html("Cambodia built at the end of the 11th century.");

//                        this.op63= createElement('h3');
//                        this.op63.position(displayWidth-600,580);
//                        this.op63.html("•	Sikhism originated in the Holy city of Amritsar in Punjab. Famous for housing the");

//                        this.op64 = createElement('h3');
//                        this.op64.position(displayWidth-600,610);
//                        this.op64.html(" Golden Temple, the city was founded in 1577.");

                     
//                    })

//                    this.next5.mousePressed(()=>{
//                        this.op47.hide();
//                        this.op48.hide();
//                        this.op49.hide();
//                        this.op50.hide();
//                        this.op51.hide();
//                        this.op52.hide();
//                        this.op53.hide();
//                        this.op54.hide();
//                        this.op55.hide();
//                        this.op56.hide();
//                        this.op57.hide();
//                        this.op58.hide();
//                        this.op59.hide();
//                        this.op60.hide();
//                        this.op61.hide();
//                        this.op62.hide();
//                        this.op63.hide();
//                        this.op64.hide();
//                        this.next5.hide();
//                        this.next6.show();

//                        	  this.op65 = createElement('h3');
// 	                      this.op65.position(displayWidth-600,100);
// 	                      this.op65.html("•    Varanasi, also known as Benaras, was called the Ancient City when Lord Buddha ");

//                           this.op66 = createElement('h3');
// 	                      this.op66.position(displayWidth-600,130);
// 	                      this.op66.html("	visited it in 500 B.C., and is the oldest, continuously inhabited city in the world today.");

//                           this.op67 = createElement('h3');
// 	                      this.op67.position(displayWidth-600,160);
// 	                      this.op67.html("•	His Holiness, the Dalai Lama, the exiled spiritual leader of Tibetan Buddhists, runs ");

//                           this.op68 = createElement('h3');
// 	                      this.op68.position(displayWidth-600,190);
// 	                      this.op68.html("his government in exile from Dharmashala in northern India.");

//                           this.op69 = createElement('h3');
// 	                      this.op69.position(displayWidth-600,220);
// 	                      this.op69.html("•	Martial Arts were first created in India, and later spread to Asia by Buddhist ");

//                           this.op70 = createElement('h3');
// 	                      this.op70.position(displayWidth-600,250);
// 	                      this.op70.html("missionaries.");

//                           this.op71 = createElement('h3');
// 	                      this.op71.position(displayWidth-600,280);
// 	                      this.op71.html("•	Yoga has its origins in India and has existed for over 5,000 years.");

                        

//                    })

//                    this.next6.mousePressed(()=>{
//                        image(back1,displayWidth/2,displayHeight/2,100,100);
//                        background(back1);
//                        gs=37;
//                     // this.img1 = document.createElement("img");
                    
//                     // this.img1.setAttribute("src","india.jpg");
//                     // this.img1.setAttribute("width",displayWidth-50);
//                     // this.img1.setAttribute("height",displayHeight-50);
//                     // this.img1.setAttribute("alt","indiaImg");
                   
//                     // document.body.appendChild(this.img1);
//                        this.op65.hide();
//                        this.op66.hide();
//                        this.op67.hide();
//                        this.op68.hide();
//                        this.op69.hide();
//                        this.op70.hide();
//                        this.op71.hide();
//                        this.next6.hide();
//                        this.op.hide();
//                        this.next7.show();

//                        this.op72 = createElement('h1');
//                        this.op72.position(650,30);
//                        this.op72.html("States and Union Territories");

//                        this.op73 = createElement('h3');
//                        this.op73.position(displayWidth-600,200);
//                        this.op73.html("India, a union of states, is a Sovereign, Secular, Democratic Republic with a ");

//                        this.op74 = createElement('h3');
//                        this.op74.position(displayWidth-600,230);
//                        this.op74.html("Parliamentary system of Government. The President is the constitutional head of ");

//                        this.op75 = createElement('h3');
//                        this.op75.position(displayWidth-600,260);
//                        this.op75.html("Executive of the Union. In the states, the Governor, as the representative of the");

//                        this.op76 = createElement('h3');
//                        this.op76.position(displayWidth-600,290);
//                        this.op76.html(" President, is the head of Executive. The system of government in states closely ");

//                        this.op77 = createElement('h3');
//                        this.op77.position(displayWidth-600,320);
//                        this.op77.html("resembles that of the Union. There are 28 states and 8 Union territories in the ");

//                        this.op78 = createElement('h3');
//                        this.op78.position(displayWidth-600,350);
//                        this.op78.html("country. Union Territories are administered by the President through an ");

//                        this.op79 = createElement('h3');
//                        this.op79.position(displayWidth-600,380);
//                        this.op79.html("Administrator appointed by him/her. From the largest to the smallest, each State/UT ");

//                        this.op80 = createElement('h3');
//                        this.op80.position(displayWidth-600,410);
//                        this.op80.html("of India has a unique demography, history and culture, dress, festivals, language etc. ");

//                        this.op81 = createElement('h3');
//                        this.op81.position(displayWidth-600,440);
//                        this.op81.html("This section introduces you to the various States/UTs in the Country and urges you to ");

//                        this.op82 = createElement('h3');
//                        this.op82.position(displayWidth-600,470);
//                        this.op82.html("explore their magnificent uniqueness.");
//                    })

//                    this.next7.mousePressed(()=>{
//                        this.op72.hide();
//                        this.op73.hide();
//                        this.op74.hide();
//                        this.op75.hide();
//                        this.op76.hide();
//                        this.op77.hide();
//                        this.op78.hide();
//                        this.op79.hide();
//                        this.op80.hide();
//                        this.op81.hide();
//                        this.op82.hide();
//                        this.next7.hide();
//                        this.next.hide();
//         this.state.position(displayWidth/2+300,displayHeight/2);
//                 this.state.style('background','orange');
//                 this.state.style('width','300px');
//                 this.state.style('height','30px');

              
                
//               this.state.mousePressed(()=>{
//                   this.state.hide();
//                   this.ut.hide();
//                   state = new State();
//                   state.display();
//               })
            

//                    })

//                })
        
//             })

        
    }
}


//Sare jaham se acha in the first slide
//home button