'use strict';
{
    const Swt = document.querySelector('button');
    const elapsed = document.getElementById('elapsed');
    const next = document.getElementById('next');
    const elapsedText = document.getElementById('elapsedText');
    const nextText = document.getElementById('nextText');
    const title = document.getElementById('title');
    let faiseCount = 0;
    const time = new Date();
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    let id1;
    let id2;
    let id3;
    let id4;
    let id5;
    let id6;
    let id7;
    let id8;
    let id9;
    let id10;

    let waitingTime = 0;
    let elapsedTime = 0;
    let totalTime = 0;
    const startTime = new Date(`${y}/${m}/${d} 22:48:00`);
    const firstTarmTime = new Date(`${y}/${m}/${d} 22:48:10`);
    const secondTarmTime = new Date(`${y}/${m}/${d} 22:48:20`);
    const thirdTarmTime = new Date(`${y}/${m}/${d} 22:48:30`);
    const fourthTarmTime = new Date(`${y}/${m}/${d} 22:48:40`);
    const fifthTarmTime = new Date(`${y}/${m}/${d} 22:48:50`);
    const sixthTarmTime = new Date(`${y}/${m}/${d} 22:49:00`);
    const seventhTarmTime = new Date(`${y}/${m}/${d} 22:49:10`);
    const eighthTarmTime = new Date(`${y}/${m}/${d} 22:49:20`);
    const ninthTarmTime = new Date(`${y}/${m}/${d} 22:49:30`);
    // let audioElem;

    // function Playsound() {
    //     audioElem = new Audio();
    //     audioElem.src = "audio/testStart.mp3";
    //     audioElem.play();
    //     }


    function countUp0() {
        waitingTime = startTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`);
        id1 = setTimeout(() =>{
            countUp0();
        },10);
    };

    function countUp1() {
            elapsedTime = Date.now() - startTime.getTime();
            let he = String(Math.round(elapsedTime / (1000 * 60 * 60 ))).padStart(1,"0");
            let hcalce = Math.round(elapsedTime % (1000 * 60 * 60 ))
            let me = String(Math.round( hcalce / (1000 * 60 ))).padStart(2,"0");
            let mcalce = Math.round(hcalce %     (1000 * 60 ))
            let se = String(Math.round(mcalce / 1000 )).padStart(2,"0");
            elapsed.textContent = (`${he}:${me}:${se}`)

            waitingTime = firstTarmTime.getTime() - Date.now();
            let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
            let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
            let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
            let mcalc = Math.round(hcalc % (1000 * 60 ))
            let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
            next.textContent = (`${h}:${m}:${s}`)
            id2 = setTimeout(()=> {
                countUp1();
            },10);
        }

    function countUp2() {
        waitingTime = secondTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`);
        id3 = setTimeout(() =>{
            countUp2();
        },10);
    };

    function countUp3() { //for Test
        totalTime = elapsedTime + (Date.now() - secondTarmTime.getTime());
        let he = String(Math.round(totalTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalce = Math.round(totalTime % (1000 * 60 * 60 ))
        let me = String(Math.round( hcalce / (1000 * 60 ))).padStart(2,"0");
        let mcalce = Math.round(hcalce %     (1000 * 60 ))
        let se = String(Math.round(mcalce / 1000 )).padStart(2,"0");
        elapsed.textContent = (`${he}:${me}:${se}`);

        waitingTime = thirdTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`)
        id4 = setTimeout(()=> {
            countUp3();
        },10);
    }

    function countUp4() { //for Rest
        waitingTime = fourthTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`);
        id5 = setTimeout(() =>{
            countUp4();
        },10);
    };

    function countUp5() { //for Test
        totalTime = elapsedTime + (Date.now() - fourthTarmTime.getTime());
        let he = String(Math.round(totalTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalce = Math.round(totalTime % (1000 * 60 * 60 ))
        let me = String(Math.round( hcalce / (1000 * 60 ))).padStart(2,"0");
        let mcalce = Math.round(hcalce %     (1000 * 60 ))
        let se = String(Math.round(mcalce / 1000 )).padStart(2,"0");
        elapsed.textContent = (`${he}:${me}:${se}`);

        waitingTime = fifthTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`)
        id6 = setTimeout(()=> {
            countUp5();
        },10);
    }

    function countUp6() { //for Rest
        waitingTime = sixthTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`);
        id7 = setTimeout(() =>{
            countUp6();
        },10);
    };

    function countUp7() { //for Test
        totalTime = elapsedTime + (Date.now() - sixthTarmTime.getTime());
        let he = String(Math.round(totalTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalce = Math.round(totalTime % (1000 * 60 * 60 ))
        let me = String(Math.round( hcalce / (1000 * 60 ))).padStart(2,"0");
        let mcalce = Math.round(hcalce %     (1000 * 60 ))
        let se = String(Math.round(mcalce / 1000 )).padStart(2,"0");
        elapsed.textContent = (`${he}:${me}:${se}`);

        waitingTime = seventhTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`)
        id8 = setTimeout(()=> {
            countUp7();
        },10);
    }

    function countUp8() { //for Rest
        waitingTime = eighthTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`);
        id9 = setTimeout(() =>{
            countUp8();
        },10);
    };

    function countUp9() { //for Test
        totalTime = elapsedTime + (Date.now() - eighthTarmTime.getTime());
        let he = String(Math.round(totalTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalce = Math.round(totalTime % (1000 * 60 * 60 ))
        let me = String(Math.round( hcalce / (1000 * 60 ))).padStart(2,"0");
        let mcalce = Math.round(hcalce %     (1000 * 60 ))
        let se = String(Math.round(mcalce / 1000 )).padStart(2,"0");
        elapsed.textContent = (`${he}:${me}:${se}`);

        waitingTime = ninthTarmTime.getTime() - Date.now();
        let h = String(Math.round(waitingTime / (1000 * 60 * 60 ))).padStart(1,"0");
        let hcalc = Math.round(waitingTime % (1000 * 60 * 60 ))
        let m = String(Math.round( hcalc / (1000 * 60 ))).padStart(2,"0");
        let mcalc = Math.round(hcalc % (1000 * 60 ))
        let s = String(Math.round(mcalc / 1000 )).padStart(2,"0");
        next.textContent = (`${h}:${m}:${s}`)
        id10 = setTimeout(()=> {
            countUp9();
        },10);
    }

    const wait = function (seconds) {
        return new Promise(function (resolve) {
          setTimeout(resolve, seconds);
        });
      };
      
        Swt.addEventListener('click',() => {
            nextText.textContent = ('課題開始まで');
            countUp0();
            wait(waitingTime)　// 待って欲しい○秒書く
            .then(() => {
                clearTimeout(id1);
                title.textContent = ('第一シフト中');　//1stTarm
                nextText.textContent = ('休憩まで');
                countUp1();
                return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id2); 
                title.textContent = ('休憩中'); //1stRest
                nextText.textContent = ('作業再開まで');
                countUp2();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id3);
                title.textContent = (' 第二シフト中');  //2ndTarm
                nextText.textContent = ('昼休憩まで');
                countUp3();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id4);
                elapsedTime = totalTime;
                title.textContent = ('昼休憩中');  //2ndRest
                nextText.textContent = ('作業再開まで');
                countUp4();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id5);
                title.textContent = ('第三シフト中'); //3rdTarm
                nextText.textContent = ('休憩まで');
                countUp5();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id6);
                elapsedTime = totalTime;
                title.textContent = ('休憩中'); //3rdRest
                nextText.textContent = ('作業再開まで');
                countUp6();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id7);
                title.textContent = ('第四シフト中'); //4thTarm
                nextText.textContent = ('機械作業終了まで');
                countUp7();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id8);
                elapsedTime = totalTime;
                title.textContent = ('休憩中');
                nextText.textContent = ('作業再開まで');
                countUp8();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id9);
                title.textContent = ('最終シフト中');
                nextText.textContent = ('競技終了まで');
                countUp9();
            return wait(waitingTime); //待って欲しい○秒書く
            })
            .then(() => {
                clearTimeout(id10)
            })
        });        
 

}