function didLoad() {

    let emojis = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"];
    let r;
    let a = 7;
    let lng = emojis.length;

    for (let i = 0; i < lng; i++) {
        emojis.push(emojis[i]);

    }
    console.log(emojis)

    for (let i = 0; i < emojis.length; i++) {
        r = Math.floor((Math.random() * lng));
        lng -= 1;    

    }



    /* for (let i = 0; i < emojis.length; i++) {
         let mujdiv = document.createElement("div");
         mujdiv.className = "mujdiv";
         r = Math.floor((Math.random() * a));
         mujdiv.innerText = emojis[i];
         document.body.appendChild(mujdiv);
         emojis.splice(r, 1);
         a = a - 1;
     }
     for (let i = 0; i < emojis.length; i++) {
         let mujdiv1 = document.createElement("div");
         mujdiv1.className = "mujdiv1";

         mujdiv1.innerText = emojis[i];
         document.body.appendChild(mujdiv1);
     }
     */
    let all = document.createElement("div");
    for (let i = 0; i < lng * 2; i++) {
        let mujdiv = document.createElement("div");

        mujdiv.className = "mujdiv";
        mujdiv.innerText = emojis[i];
        all.appendChild(mujdiv);
        all.setAttribute("id", "Id");
    }
    document.getElementById("tvmm").appendChild(all)


}


window.onload = didLoad;