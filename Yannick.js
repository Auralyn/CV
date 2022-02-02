var today = new Date();
let themeColor = "#fe1f4f";

let currentYear = today.getFullYear();
let currentMonth = (today.getMonth()+1);
let currentDay = today.getDate();

let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

currentMonth = months[currentMonth];

let dateString = "undefined";
switch(currentDay){
    case 1:
        dateString = currentDay + "st " + currentMonth + " " + currentYear;
        break;
    case 2:
        dateString = currentDay + "nd " + currentMonth + " " + currentYear;
        break;
    case 3:
        dateString = currentDay + "rd " + currentMonth + " " + currentYear;
        break;
    default:
        dateString = currentDay + "th " + currentMonth + " " + currentYear;
        break;
}

var date = dateString;

document.getElementById("date").innerHTML = date; 


// function([string1, string2],target id,[color1,color2])    
consoleText(['Yannick Theiß', 'Developer', 'Analyzer'], 'text',['white', themeColor, 'white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 10000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 300)
}

function buttonClick() {
  var x = document.getElementById('form');
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}



function showPaper(numberColumn) {

  let paperVar = document.getElementById('paper')
  if (paperVar.style.display === 'none') {
    paperVar.style.display = 'block';
    } else {
    paperVar.style.display = 'none';
    }

    let x = document.getElementById('backGround')
  if (x.style.display === 'none') {
    x.style.display = 'block';
    } else {
    x.style.display = 'none';
    }
    
  switch(numberColumn) {
    case 1:
      document.getElementById("paperHeadline").innerHTML = "Skills";
      document.getElementById("paperText").innerHTML = "I started learning programming since I was 9 years old. I have started using Java and wrote a small Game in Eclipse (Space Invaders). Later in School I found out how you actually program and made first very easy programs and websites in HTML and Java. (e.g. Calculator).";
      document.getElementById("imgPaper").src = "https://logos-marques.com/wp-content/uploads/2021/03/Java-Logo.png";
      break;
    case 2:
      document.getElementById("paperHeadline").innerHTML = "Education";
      document.getElementById("paperText").innerHTML = "I visited the Rothenfeld Elementary School and there I have got a recommendation for the SPG (High School level) in which I continued to become better at english but also at programming and analyzing problems in computer class. I will take my Abitur (A-Levels) in 2024 and plan to go to an IT University.";
      document.getElementById("imgPaper").src = "https://yt3.ggpht.com/a/AATXAJw6uPB_syvaru2qnukxolWH82S1iBmtgNYzow=s900-c-k-c0xffffffff-no-rj-mo";
      break;
    case 3:
      document.getElementById("paperHeadline").innerHTML = "Other Skills";
      document.getElementById("paperText").innerHTML = "I started learning english since I was 6 years old. I can fluently speak and write it. Outside of programming I have also used programs like Blender 3D in order to create 3D Models and Animations. I am also invested in digital drawing.";
      document.getElementById("imgPaper").src = "https://www.logolynx.com/images/logolynx/63/632150f28960cba513ff90fb97813286.png";
      break;
    case 4:
      document.getElementById("paperHeadline").innerHTML = "Interests";
      document.getElementById("paperText").innerHTML = "I have created many videos for an online plattform and cut them myself with Adobe Premiere Pro. I designed and made my own Game in Unity 3D which was a 2D horror sprite Game based on the game 'House' by Bark Bark Games. I regularly draw digitally with Clip Studio Paint.";
      document.getElementById("imgPaper").src = "https://th.bing.com/th/id/OIP.158RnublK4FICIJvfk35rwHaCs?pid=ImgDet&rs=1";
      break;
    default:
      document.getElementById("paperText").innerHTML = "Something didn't work :(";
  }
  
}