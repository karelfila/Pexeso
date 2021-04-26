function didLoad() {

    let emojis = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"];
    let emojis2 = [];
    let r;
    let lng = emojis.length;
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

        if((i + 1)%4 == 0) {
            mujdiv.className = "mujdiv";
            mujdiv.innerHTML = emojis2[i];
            mujdiv1.className = "mujdiv1";
            mujdiv1.innerHTML;
            mujdiv1.click()
        } else {
            mujdiv.className = "mujdiv";
            mujdiv.innerText = emojis2[i];
            mujdiv1.className = "mujdiv1";
            mujdiv1.innerHTML;
            mujdiv1.click()
        }
        all.appendChild(mujdiv);
        mujdiv.appendChild(mujdiv1);
        all.setAttribute("id", "Id");


    }
    document.getElementById("tvmm").appendChild(all)


}


window.onload = didLoad;