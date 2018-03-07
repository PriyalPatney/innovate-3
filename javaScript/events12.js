// {
//
//     class BoxCreator{
//         constructor(el,opt){
//             this.el = el;
//             this.opt = opt;
//             this.init();
//         }
//         init(){
//             if(this.opt === 'teachers'){
//                 this.data = JSON.parse(TeacherDetails);
//             }
//             if(this.opt === 'students'){
//                 this.data = JSON.parse(StudentDetails);
//             }
//             this.DataSize = Object.keys(this.data[0]).length;
//             console.log(this.data[0][1].name);
//             var self = this;
//             for(var i = 1 ; i <= this.DataSize ; i++){
//                 let name = this.data[0][i].name;
//                 let desc = this.data[0][i].desc;
//                 let link = this.data[0][i].link;
//                 self.createBox(name,desc,link);
//             }
//         }
//         createBox(name,dpt,link){
//
//
//             const template = `<div class="col s12 m6 l4"><div class="card small">
//         <div class="card-image waves-effect waves-block waves-light">
//           <img class="activator" src="${link}.jpg">
//         </div>
//         <div class="card-content">
//           <span class="card-title activator grey-text text-darken-4"> ${name}<i class="material-icons right">more_vert</i></span>
//           <p><a href="#">This is a link</a></p>
//         </div>
//         <div class="card-reveal">
//           <span class="card-title grey-text text-darken-4"> ${name}<i class="material-icons right">close</i></span>
//           <p> ${dpt}</p>
//         </div>
//       </div></div>`;
//             let box = document.createElement('box');
//             box.innerHTML = template;
//             box.className = 'box';
//             this.el.appendChild(box);
//         }
//     }
//
//     var foo = document.querySelector('.section-tech');
//     new BoxCreator(foo,"teachers");
//     var foo = document.querySelector('.section-stu');
//     new BoxCreator(foo,"students");
// }
//




var evt = {"events":
   [{

           "name" : "Game Of Drones",
           "desc" : "Description :- Game of drones is an event related to drones. The theme of the field is inspired by “game of thrones”. The fpv pilots have to overcome the obstacles given to them. The pilots will be judged on the basis of the efficiency, accuracy and stability of the drone flight. The event consists of four rounds, of which two will on the first day and other two the next day.Event Details:- Rules:LEVEL - Follow the given track and land on the given specific area. Participants going off track will    lead to negative marking. It is a time based round. Accuracy will be judged on the basis of piloting skills.LEVEL-2 Follow the given track. Damaging or hitting the arena will lead to negative marking. Time based round where accuracy will be judged according to piloting skills.LEVEL-3Follow the given track. Off tracking leads to negative marking. Time based round. Judgment done on the basis of piloting skills.LEVEL-4Speed and time based round. Hitting or damaging opponent’s drone leads to disqualification. Accuracy is to be maintained.",
           "link" : "FlgEvents/GameOfDrones"
       },

        {
           "name" : "Circuit Phobia",
           "desc" : "Description Circuit phobia is based on practical knowledge of the core subjects of electronics and communication. The participants will be given some challenges to test their basic knowledge of ECE. The event consists of three rounds, of which two rounds will on the first day and final round will be on the second day. Event Details:- RULES: LEVEL-1:Time based round, the participants are expected to arrange the given setup in    minimum time and with accuracy. Any fault leads to negative marking.LEVEL-2: Aim will be provided to design a setup. If participants are able to design the desired setup with proper execution, no marks will be deducted. If participants fail to achieve the desired setup, negative marking will be done and hint will be given to proceed further with the design.LEVEL-3: MCQ round. There is Negative marking, for this round. ",
           "link" : "FlgEvents/CircuitPhobia"
       },
       {
           "name" : "Walk Along Glider",
           "desc" : "A walk-along glider is a light weight, slow fling model aircraft designed to kept aloft by controllable slope soaring in the rising air generated by the pilot who walks along with the glider as it flies ,usually holding a paddle. In this event students will be given sufficient time to create a working model of glide along with the provision of the materials required.Judgement Criteria Stability of Glider Cost Efficient Manueverability of Glider EVENT COORDINATOR – ABHIJEET PRATAP SINGH Contact no. -8447082152 ",
           "link" : "FlgEvents/WalkOnGlider"
       },
        {
           "name" : "Paper Tower",
           "desc" : "The participant will have to make a tallest free standing lower with the help of newspaper The challenge is to design tower to make optimum use of newspapers to achieve the greatest tower height.EVENT COORDINATOR : Akshit GuptaContct no. - 8266925913",
           "link" : "FlgEvents/PaperTower"
       },
        {
           "name" : "Business Bazaar",
           "desc" : "Business bazaar is an event where students will get an opportunity to showcase their entrepreneurial and marketing skills. In this event, teams of students are invited from various b-schools and universities to participate. Teams will study Innovate 2018 in detail and considering the tastes and preferences of the participants and audience in the event, they will set-up a stall which will be provided by us in the form of a business bazaar.Team Member- Upto 4 Duration- 2 Days Registration Fee- Rs. 800/- Prizes:-1st Prize- Momento, Certificate and Rs 10,000/- Date: 9th & 10th March, 2018 (Two Day) Time: 10 am to 4 pm Venue: Lawn area near canteen",
           "link" : "FlgEvents/BuisnessBazzar"
       },
        {
           "name": "Start Up Showcase",
           "desc": "Everything which is providing ease and comfort today is the output of the innovative and creative minds of past. And the ideas that float in the young minds of the nation are the seeds of innovations. India in its current phase is facing a lot of problems which are not even that big, that it can't be solved, the only thing we need to do is a little bit of brainstorming and discussion. This event aims at solving the major problems or issues of the society that requires brainstorming of the young minds of the nation. To build a better tomorrow and to proliferate joy amongst the countrymen, Let’s Innovate!Event Details:1. ROUNDS-1.\tIdea pitching Are you solving real problem?2.\tBusiness-Model  Will it generate cashflow?3 .Implement Is it scalable, team required, funding needed?2. SCHEDULE-1.\tDay 1  1PM - 3PM (9th March) - Beside Fountain SRM IST2. Day 2  1PM - 2PM (10th March) Beside Fountain SRM IST 3. PRIZES-1. Winner Prizes total worth of  1 LAKH2. First Runner up:Prizes total worth of  50K3. Second Runner up:Prizes total worth of  25 LAKH4. JUDGES-1.\tMR. AVINASH CO-FOUNDER WE-CODERS LLP (PRODUCT DEV. DOMAIN)2.\tMR. BHATT CO-FOUNDER ASH PLAN MEDIA (MARKETING DOMAIN)3.\tCA. PRATEEK KAPOOR (FINANCE DOMAIN)5. CO-ORDINATORS-1. Ms. Monika Johri (AP-CSE) & Mr. Akhtar (AP-CSE) 2. Mr. Prithu R. Agarwal (Founder & Convener SRMWE club) 3. Mr. Rahul Dhawan & Mr. Prateek Kumar (Executive SRMWE club)",
           "link": "FlgEvents/StartUpShowcase"
        },
        {
              "name": "Green Tomorrow-Seminar",
              "desc": "Today rapid developments are taking place in the field of science and technology. New ideas grow into the minds of students and new discoveries and innovations help society in many ways. This event is an excellent opportunity where ideas will begin to bloom for the development of Green society.(A) Exhibition of Working Models/Exhibits The exhibit/models may be either: (a)\tWorking model to explain the concept, principle or process (b)\tAn investigation based project DATE:09th March 2018 TIMINGS: 2pm - 4pm VENUE: Area Near Lift on Ground floor ( Arrangement to display models) Event Charges – No Prize – Cash prize for best two models (B) Seminar on Applied Engineering Modelling and Simulation Event Description:Event will have Invited Talks, Oral/Poster Presentations by delegates from academia, industries, research and technology on the below mentioned topics:Green Supply Chain Management : Robotics Soft Computing: Mat-Lab Waste Management:Energy Resource Management Nano-energy and Power: Nano-electronics and Physics VENUE – Mini Auditorium DATE- 09-10th March 2018 TIMINGS – 10am – 12.30pm Event Charges: Registration fee for the participants Internal Students – Rs. 100 ",
              "link": "FlgEvents/Greentomorrowseminar"
           },
       {
           "name" : "Code War",
           "desc" : "Code War will be a competition based on coding which is going to be held under the Annual Technical Fest “INNOVATE-2K18”. Every year, we try to scheme the competition in such a way that the coders can break their own bounds in this field. We intent to provide the student community a reputed platform to rise above their limitations regarding the programming languages. The competition is mainly designed to attract and appeal to the students who are going to shape the digital future of the country.Event Details: 1. Individual Event 2. Programming Language supported: C,C++,Java 3. The Judges decision is final 4. Only problem statement will be provided 5. Participants need to type the code with MONITERS SWITCHED OFF 6. There will be 5 simple programming questions. 7. Winners will be announced based on the results of compilation and execution. Cash Prize to be awarded to the winners.",
           "link" : "FlgEvents/CodeWar"
       },
        {
           "name" : "Cybo Run",
           "desc" : "Walking and running are considered the most complex motions which involve the maximum number of muscles. Imagine these movements executed by HUMANOID ROBOTS. Coordination and fluidity of movement while keeping balance to accomplish a given task would be an open challenge for the humanoid. We at INNOVATE believe in the concept of mutual coexistence of human and technology and therefore warm heartedly invite you to witness the biggest technical extravaganza of the season. ",
           "link" : "FlgEvents/CyboRun"
       },

        {
              "name": "Well Of Death",
              "desc": "ROUND:LEVEL 1: The bot needs to follow the track .It is a time based round.LEVEL 2:The complexity of the track will be increased with the presence of hurdles. Negative marking will be awarded LEVEL 3:This is the final round in which  the participants qualified from level 1 and level 2 will continue for level 3.SPECIFICATION:•\tMaximum weight limit-2.5kg•\tDimension 25*25cm •\tPower supply(on board)-12v ",
              "link": "FlgEvents/WellOfDeath"
       },

       {
           "name": "Laser-O-Reflect",
           "desc": "The right angle produces the right reflection. We welcome you to our FUN event where the laws of reflection matter. Come along and enjoy a game of adventure adrenal and race against time. Event Details:- RULES: 1.\tThe position of the laser source and the target is fixed.2.\tThe distance between mirrors and target is also fixed. 3.\tThe event should be completed within time limit otherwise there’ll be a  disqualification.4.\tTo score maximum and to win the event you should play with greater accuracy and better level of precision.5.\tThe laser source can only be shifted once before the starting of each round.6.\tThe decision of the judges is final.",
           "link": "FlgEvents/LaserOReflect"
        },
       {
           "name" : "Battle Bots",
           "desc" : "Task: Teams have to build Design and construct a remote controlled robot capable of fighting a one on one tournament Rounds: The competition will be the knock out round. There will be 2 teams fighting against each other to will the title of winner. ",
           "link" : "FlgEvents/BattleBots"
       },
        {
           "name" : "Soccer Bots",
           "desc" : "Consider it a Robocop arena and lets your bots play soccer with your intellect. Football and Robotics technology and will provide you with memorable experience of fun and thrill.",
           "link" : "FlgEvents/SoccerBots"
       },
        {
           "name" : "Scav-Tech-Hunt",
           "desc" : "Scav tech hunt is an engineering event testing the ability of participants to compete with the clock, team spirit, crisis situation handling & practical knowledge regarding basic concepts of engineering and clue solving ability. This event also promises loads of fun and entertainment to all its participants and audience. THEME:The theme of the event is somewhat similar to treasure hunt in which teams will have to clue out the problem given to them as a riddle. At the end of each clue a dissembled machine part will be placed, like wise teams have to solve out each riddle and collect all parts of machine and in the end they have to assemble the part to form a resp. Machine OUTLINE:The event will be contested between teams with 4-5 members each. The event will compromise challenges with variations as the teams will strive to achieve the target. ",
           "link" : "FlgEvents/ScavTechHunt"
       }
   ]};

var card = document.getElementsByClassName(".section-tech")[0];
console.log(card)
var item = evt.events;

for(i=0; i<=item.length - 1; i++){
   let name = item[i].name;
   // console.log(name);
   let desc = item[i].desc;
   let link = item[i].link;
   self.cardCreator(name,desc,link);

}
function cardCreator(name,desc,link){
   const template = `<div class="col s12 m6 l4"><div class="card small">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${link}.jpg">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4"> ${name}<i class="material-icons right">more_vert</i></span>

            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"> ${name}<i class="material-icons right">close</i></span>
              <p> ${desc}</p>
            </div>
          </div></div>`;
let box = document.createElement('box');
box.innerHTML = template;
box.className = 'card';
document.querySelector(".section-tech").appendChild(box);

}
