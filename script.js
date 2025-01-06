const doubt = "I'm Jeevan S, just believe me...";
const answer1 = "My name is Jeevan S.";
const answer2 = "Im from  annechakanahalli hassan";
const answer3 = "I'm pursuing a BE in Computer Science at MYCEM Engineering College, VTU, Mysore.";
const answer4 = "Right now, I'm 21 years old.";
const answer5 = "One of my favorite foods is Biryani. Among snacks, I love egg rolls, shawarma, and more.";
const answer6 = "My favorite pets are dogs, cats, rabbits, calves, and sheep.";
const answer7 = "My usual hobbies are drawing, singing, cooking, traveling, and content writing.";
const answer8 = "My goal is to become a successful developer in the field of web development and a short movie creator.";
const answer9 = "My favorite actors are Yash and Upendra, and among heroines, I like Radhika Pandith.";
const answer10 = "The most recent movie I watched was Max and Lucky Basker.";
const answer11 = "My academic percentages are: PU - 85%, 10th - 70%, Engineering - around 86% or an 8 SGPA each semester.";
const answer12 = "My favorite color is black.";
const answer13 = "Email: sathishjeevan2004@gmail.com | Contact number: 7892652247";
const answer14 = "This is my Instagram ID: pro_dreamer_12";
const answer15 = "Yeah, I need to have my food right 😄.what about you ?";
const answer16 = "My name is Jeevan S from Mysore. I completed my engineering at MYCEM Engineering College and my PU at Gopalswamy PU College, Mysore. My native place is Hassan. My father's name is Sathish, my mother's name is Akamahadevi, and I have a younger brother named Prajwal.";
const answer17 = "My father's name is Sathish, my mother's name is Akamahadevi T.R., and I have a younger brother named Prajwal.";
const answer18 ="I admire your company's commitment to innovation and the positive impact it has on the industry. Your projects and culture align with my values, and I believe my skills and passion for technology would be a great fit here."
const answer19="My strengths include strong problem-solving skills and the ability to work well under pressure. A weakness I'm working on is delegating tasks; I sometimes take on too much myself, but I'm learning to trust and rely on my team more."
const answer20 ="I handle stress by staying organized and prioritizing my tasks. I also make sure to take breaks and practice mindfulness to keep myself focused and calm."
const answer21 ="In a previous job, we faced a major project deadline with several setbacks. I took the initiative to reorganize the team, set clear priorities, and worked extra hours to ensure we met the deadline. The project was successful, and we received positive feedback from the client."
const answer22="I use a combination of digital tools and traditional planners to keep track of my tasks and deadlines. I also break down larger projects into smaller, manageable tasks and set specific goals for each day."
const answer23 = "I view feedback and criticism as opportunities for growth. I listen carefully, ask for clarification if needed, and use the insights to improve my work and performance."
const answer24="I'm motivated by the desire to achieve excellence and make a positive impact. I enjoy overcoming challenges and continuously learning new things to improve my skills."
const answer25="I prioritize my work by assessing the urgency and importance of each task. I use tools like to-do lists and project management software to keep track of deadlines and ensure that I'm focusing on the most critical tasks first."
const answer27="In a previous role, our team was tasked with developing a new software feature. We held regular meetings to discuss progress, divided tasks based on individual strengths, and collaborated closely to troubleshoot issues. Our teamwork resulted in a successful launch ahead of schedule."
const answer28="I know that your company is a leader in the tech industry, known for its innovative products and commitment to sustainability. Your culture promotes collaboration, continuous learning, and a strong sense of community, which are all values I deeply appreciate."
const answer29 ="ok.";
const answer30="still single.😑,";
const answer31="completed PUC with 85%";
const answer32 ="Male";
const answer33="skills like Web development (HTML,CSS,BOOTSTRAP,TAILWIND CSS,JAVASCRIPT,REACT,NEXT JS,JQUERY,AJAX)...popular UI library like(material UI, ShadCN UI,andD UI,clerk)AI tools like  CHAT GPT etc, and other programming basics like c C++, java ,python,sql,mysql,php,EXCEL, ";
const answer34="english modrate and native mother toung kannada";
const answer35="my salary that i expect is all about my passion towards and the skills that you required and concern about and yeah arount 8lpa"
window.onload = function() {
    document.getElementById("input").focus();
};






function createChat() {
    const inpt = document.getElementById("input").value;
    const box = document.getElementById("box");
    const msg = document.createElement('div');

    msg.className = 'msg'; 

    if (inpt.toLowerCase().includes("your name")) { 
        msg.textContent = answer1;
         document.getElementById("input").value="";
    }
     else if (
        inpt.toLowerCase().includes("studying") || 
        inpt.toLowerCase().includes("current education") || 
        inpt.toLowerCase().includes("education")||
        inpt.toLowerCase().includes("collage")||
        inpt.toLowerCase().includes("university")
    ) {
        msg.textContent = answer3;
        document.getElementById("input").value="";
    } 
    else if (inpt.toLowerCase().includes("where are you from")||inpt.toLowerCase().includes("you are from")||inpt.toLowerCase().includes("u r frm")||inpt.toLowerCase().includes("your native")){
        msg.textContent = answer2;
        document.getElementById("input").value="";
    }
    else if (inpt.toLowerCase().includes("your age")||inpt.toLowerCase().includes("about your age")){
        msg.textContent = answer4;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("my name")||inpt.toLowerCase().includes("My Name")){
        msg.textContent = doubt;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("fav food")||inpt.toLowerCase().includes("favourite food")||inpt.toLowerCase().includes("food")){
        msg.textContent = answer5;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("animals")||inpt.toLowerCase().includes("animal")||inpt.toLowerCase().includes("pet")){
        msg.textContent = answer6;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("hobbies")||inpt.toLowerCase().includes("hobby")||inpt.toLowerCase().includes("activities")){
        msg.textContent = answer7;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("aims")||inpt.toLowerCase().includes("goals")||inpt.toLowerCase().includes("dream")||inpt.toLowerCase().includes("goal")||inpt.toLowerCase().includes("aim")){
        msg.textContent = answer8;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("actor")||inpt.toLowerCase().includes("actress")||inpt.toLowerCase().includes("heroes")||inpt.toLowerCase().includes("actors")||inpt.toLowerCase().includes("hero")){
        msg.textContent = answer9;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("percentage")||inpt.toLowerCase().includes("score")||inpt.toLowerCase().includes("marks")||inpt.toLowerCase().includes("cgpa")){
        msg.textContent = answer11;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("recent")||inpt.toLowerCase().includes("movies")||inpt.toLowerCase().includes("marks")||inpt.toLowerCase().includes("cgpa")){
        msg.textContent = answer10;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("color")||inpt.toLowerCase().includes("colour")||inpt.toLowerCase().includes("colours")||inpt.toLowerCase().includes("colors")){
        msg.textContent = answer12;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("conatct")||inpt.toLowerCase().includes("contact details")||inpt.toLowerCase().includes(" phone number")||inpt.toLowerCase().includes("email")){
        msg.textContent = answer13;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("instagram")||inpt.toLowerCase().includes("instagram Id")||inpt.toLowerCase().includes(" social media")||inpt.toLowerCase().includes("insta")){
        msg.textContent = answer14;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("your food")||inpt.toLowerCase().includes("lunch")||inpt.toLowerCase().includes(" breakfast")||inpt.toLowerCase().includes("dinner")||inpt.toLowerCase().includes("utta")){
        msg.textContent = answer15;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("had")||inpt.toLowerCase().includes("not yet")||inpt.toLowerCase().includes("no")||inpt.toLowerCase().includes("just finished")||inpt.toLowerCase().includes("having ")||inpt.toLowerCase().includes("yeah having ")||inpt.toLowerCase().includes("having now")||inpt.toLowerCase().includes("late")){
        msg.textContent = answer29;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes(" self")||inpt.toLowerCase().includes("introduce your self")||inpt.toLowerCase().includes(" about you")||inpt.toLowerCase().includes("know about you")||inpt.toLowerCase().includes("introduce your self")){
        msg.textContent = answer16;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("parents name")||inpt.toLowerCase().includes("father")||inpt.toLowerCase().includes(" mother")||inpt.toLowerCase().includes("brother")||inpt.toLowerCase().includes("parents")){
        msg.textContent = answer17;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("sister")||inpt.toLowerCase().includes("sisters")){
        msg.textContent = "no, i have my one younger brother.";
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("work at")||inpt.toLowerCase().includes("wish to work at our company")||inpt.toLowerCase().includes("want to work at our company")){
        msg.textContent = answer18;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("strengths and weaknesses")||inpt.toLowerCase().includes("strength")||inpt.toLowerCase().includes("strengths")||inpt.toLowerCase().includes("weaknesses")||inpt.toLowerCase().includes("weakness")){
        msg.textContent = answer19;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("you handle stress")||inpt.toLowerCase().includes("you handle stress and pressure")||inpt.toLowerCase().includes("your stress")||inpt.toLowerCase().includes("your pressure")||inpt.toLowerCase().includes("handle your pressure")){
        msg.textContent = answer20;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("hard situations")||inpt.toLowerCase().includes("hard situation")||inpt.toLowerCase().includes("challenging situation")||inpt.toLowerCase().includes("chalenging situations")||inpt.toLowerCase().includes("challenging situations")||inpt.toLowerCase().includes("tough situations")||inpt.toLowerCase().includes("tough situation")){
        msg.textContent = answer21;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("organize and manage your time effectively")||inpt.toLowerCase().includes("time effectively")||inpt.toLowerCase().includes("manage your time")){
        msg.textContent = answer22;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("handle feedback")||inpt.toLowerCase().includes("handle feedbacks")||inpt.toLowerCase().includes("handle criticism")||inpt.toLowerCase().includes("handle criticisms")||inpt.toLowerCase().includes("handle feedback and  criticism")||inpt.toLowerCase().includes("handle feedbacks and  criticisms")){
        msg.textContent = answer23;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("motivates")||inpt.toLowerCase().includes("motivate")||inpt.toLowerCase().includes("motivates you to perform well in your job")||inpt.toLowerCase().includes("motivates you to do well in your job")){
        msg.textContent = answer24;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("prioritize your work")||inpt.toLowerCase().includes("prioritize")||inpt.toLowerCase().includes("comprove with work")){
        msg.textContent = answer25;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("work experiences")||inpt.toLowerCase().includes("work experience in team")||inpt.toLowerCase().includes("time you worked in a team")||inpt.toLowerCase().includes(" worked with your team")||inpt.toLowerCase().includes("worked in group")){
        msg.textContent = answer27;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("know abour our company")||inpt.toLowerCase().includes("know our company")||inpt.toLowerCase().includes("What do you know about our company and its culture")||inpt.toLowerCase().includes("know our company and its culture")||inpt.toLowerCase().includes("know our culture")){
        msg.textContent = answer28;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("marrage portal")||inpt.toLowerCase().includes("married")||inpt.toLowerCase().includes("are you married")||inpt.toLowerCase().includes("marrage")||inpt.toLowerCase().includes("single")){
        msg.textContent = answer30;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("educational qualification")||inpt.toLowerCase().includes("highest educational qualification")||inpt.toLowerCase().includes(" education completed")||inpt.toLowerCase().includes("completed")||inpt.toLowerCase().includes("qualificational level")||inpt.toLowerCase().includes("qualification level")){
        msg.textContent = answer31;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("gender")||inpt.toLowerCase().includes("sex")){
        msg.textContent = answer32;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("Skills")||inpt.toLowerCase().includes("skill")||inpt.toLowerCase().includes("programming languages")||inpt.toLowerCase().includes("tech skills")||inpt.toLowerCase().includes("indemand skills")||inpt.toLowerCase().includes("coding skills")||inpt.toLowerCase().includes("coding")||inpt.toLowerCase().includes("programming")){
        msg.textContent = answer33;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("language")||inpt.toLowerCase().includes("communication")||inpt.toLowerCase().includes("language known")||inpt.toLowerCase().includes("lang")){
        msg.textContent = answer34;
        document.getElementById("input").value="";
    }
    else if(inpt.toLowerCase().includes("salary")||inpt.toLowerCase().includes("expect salary")||inpt.toLowerCase().includes("how much salary")||inpt.toLowerCase().includes("salary expectations")){
        msg.textContent = answer35;
        document.getElementById("input").value="";
    }
    else{
        msg.textContent = "ask me some good question i could share with you people.😁";
        document.getElementById("input").value="";
    }




    box.appendChild(msg);
}

function show() {
    document.getElementById("input").value = "whats my name";
}

function keyEnter(e) {
    if (e.key === "Enter") {
        createChat();
    }
}



