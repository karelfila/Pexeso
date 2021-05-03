var flipped = 0;  //var protože je to globalní
var lng = 0;
var emojis2 = [];
var first = 0;
var second = 0;
var Count = 0;

function reveal(i) {
    if (flipped == 0) {
        first = i;
    }
    if (flipped == 1) {
        second = i;
    }
    if (flipped < 2) {
        document.getElementById(i).style.visibility = "hidden";  //getElementById = element co má id i, getElementByClass = elemt co má class
        flipped++;
    } else {
        for (let j = 0; j < lng * 2; j++) {
            document.getElementById(j).style.visibility = "visible";
        }
        flipped = 0;
        first = -1;
        second = -1;
    }
    if (emojis2[first] == emojis2[second]) {
        document.getElementById(first).style.backgroundColor = "green";
        document.getElementById(second).style.backgroundColor = "green";
        document.getElementById(first).setAttribute("onclick", "");
        document.getElementById(second).setAttribute("onclick", "");
        document.getElementById(first).innerHTML = emojis2[first];
        document.getElementById(second).innerHTML = emojis2[first];
        Count++;
    }
    if (Count == lng){
       window.location.replace("https://www.youtube.com/watch?v=sAXZbfLzJUg&ab_channel=sethandthecrew");
    }
}

function didLoad() {

    let emojis = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"];
    // let emojis2 = [];
    let r;
    lng = emojis.length;
    let pocet = 0;


    for (let i = 0; i < lng; i++) {
        emojis.push(emojis[i]);
    }

    while (emojis.length !== 0) {
        r = Math.floor((Math.random() * emojis.length));
        emojis2.push(emojis[r]);

        pocet++;
        emojis.splice(r, 1);
    }
    console.log(emojis2);
    console.log(emojis);


    let all = document.createElement("div");
    for (let i = 0; i < lng * 2; i++) {

        let mujdiv = document.createElement("div");
        let mujdiv1 = document.createElement("div");

        /*  if((i + 1)%4 == 0) {
              mujdiv.className = "mujdiv";
              mujdiv.innerHTML = emojis2[i];
              mujdiv1.className = "mujdiv1";
              mujdiv1.innerHTML;

          } else { */
        mujdiv.className = "mujdiv";
        mujdiv.innerText = emojis2[i];
        mujdiv1.className = "mujdiv1";
        mujdiv1.setAttribute("Id", i);
        mujdiv1.setAttribute("onclick", "reveal(" + i + ")");
        mujdiv1.innerHTML;

        // }
        all.appendChild(mujdiv);
        mujdiv.appendChild(mujdiv1);
        all.setAttribute("id", "Id");


    }
    document.getElementById("tvmm").appendChild(all)


}


window.onload = didLoad;