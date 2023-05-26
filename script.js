const todos = async () => {

    const responce = await fetch('https://www.coursehubiitg.in/api/codingweek/contributions');                  
    const data = await responce.json();
    return data;

};


todos()
.then(data => {


/*
If the given API endpoint contain more than 8 data's than the javascript automaticaly add new data's by creating new div's through required number of loops (extra data).
BUT IT WILL WORK ONLY IF THE NUMBER OF DATA IS MORE THAN OR EQUAL TO 3.
*/ 

if(data.length > 3){

for(var i=0;i<data.length-3;i++){

 const NewSpace = document.createElement("div");
document.getElementsByClassName("box2")[0].appendChild(NewSpace);                                                 //Here I have created new div's which is white in color (between two data's)
console.log(document.getElementsByClassName("box2")[0].getElementsByTagName("div")[3*i]);
document.getElementsByClassName("box2")[0].getElementsByTagName("div")[3*i].setAttribute("class","white");   

const NewPerson = document.createElement("div");


document.getElementsByClassName("box2")[0].appendChild(NewPerson);
document.getElementsByClassName("box2")[0].getElementsByTagName("div")[1+3*i].setAttribute("class","names");           //Here I have created new div's shows new data's
document.getElementsByClassName("box2")[0].getElementsByTagName("div")[1+3*i].innerHTML = "<span class='remaining-num'>" + (4+i) + "</span><div class='circle big" + (4+i) + "'></div> <span class='there-num n" + (4+i) + "'>333</span> <span class='remaining-name t" + (4+i) + "'>James</span>"; 
console.log(document.getElementsByClassName("box2")[0].getElementsByTagName("div")[1+3*i].innerHTML);
}

}





 /*
 Here i have used loops to display the content of API endpoint
 */

var b = [data.length];             /*Declare two array (both are same)*/
var x = [data.length];


for(var i=0;i<data.length;i++){      /* assigning the value of points to array*/
b[i] = data[i].points;
x[i] = b[i];
}

var c = [data.length];               /*creating a array which is in sorted form of b */

c = b.sort((a,b) => {
    
 return b - a; 

});


for(var i=0;i<data.length;i++){
    document.getElementsByClassName("n"+ (i+1))[0].innerHTML = c[i];             //displaying points
    console.log(c[i]);
}

var d = [data.length];

for(var i=0;i<data.length;i++){                                                 //declaring another array which contain the index of element of c initially present in b 
    for(var j=0;j<data.length;j++){
     if(c[i] == x[j]){
        d[i] = j;
     }
    }
}



for(var i=0;i<data.length;i++){

    document.getElementsByClassName("t" + (i+1))[0].innerHTML = data[d[i]].name;        //diplaying name

}






/*
Displaying the images, seperately for bigger circles and in loop for smaller ones.
*/

 document.getElementsByClassName("big2")[0].innerHTML = "<img src = " + data[d[0]].avatar + " alt = 'Image' style =' border-radius: 50% ;width: 200px;height: 200px '>";
document.getElementsByClassName("big1")[0].innerHTML = "<img src = " + data[d[1]].avatar + " alt = 'Image' style =' border-radius: 50% ;width: 160px;height: 160px '>";
document.getElementsByClassName("big3")[0].innerHTML = "<img src = " + data[d[2]].avatar + " alt = 'Image' style =' border-radius: 50% ;width: 160px;height: 160px '>";

for(var i=0;i<data.length-3;i++){

    document.getElementsByClassName("big" + (i+4))[0].innerHTML = "<img src = " + data[d[i+3]].avatar + " alt = 'Image' style =' border-radius: 50% ;width: 60px;height: 60px '>";

}

});

