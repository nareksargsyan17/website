const main = document.querySelectorAll(".main");
const all = document.querySelector("#all");
const about = document.querySelectorAll("[name='about']");
const head = document.querySelector("head");
const header = document.querySelector("header");
head.innerHTML += `<link rel="stylesheet" type="text/css" href="CSS/other.css"></link>`
const data = [
    {
        h1: "WEB (HTML, CSS, JavaScript)",
        h3: `"Մտքի Բանալի" ուսումնական կենտրոնը կազմակերպում է WEB ծրագրավորման դասընթացներ։
        <br><br>
        •	Դասընթացը ներառում է՝ HTML, CSS, JavaScript<br>
        •	նախնական գիտելիք չի պահանջվում 0-ից՝ մինչև հմուտ մասնագետ<br>
        •	Յուրաքանչյուր մասնակից ստանում է առանձնահատուկ վերաբերմունք<br>
        •	Խմբում 3-6 մասնակից<br>
        <br>
        Դասընթացը նախատեսված է նրանց համար, ովքեր ցանկանում են խորացված գիտելիք ձեռք բերե WEB ծրագրավորման մեջ,որը այսօրվա աշխատաշուկայում ամենապահանջված հմտություններից մեկն է։
        <br>
        Դասընթացը շաբաթը 2 անգամ է:<br>
        Արժեքը ամիսը 25000դր.<br>
        Ամբողջ կուրսինը միանգամից 80000դր.`,
        img: "WEB.png",
        time: "16 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "25.000 դրամ"
    },
    {
        h1: "Manual QA",
        h3: `Manual QA մասնագետ դառնալով՝
        <br><br>
        •	կծանոթանաս թեստավորման հիմնական հասկացություններին, <br>
        •	կուսումնասիրես ծրագրի որակի ապահովման սկզբունքները, <br>
        •	Waterfall մեթոդաբանությունը<br>
        •	ընթացքում ընդհանուր պատկերացում կկազմես թեստավորման փուլերի ու տեսակների մասին, <br>
        •	կկիրառես ստացածդ գիտելիքները software (ծրագրային ապահովման) թեստավորման համար։<br>
        <br>
        Manual QA-ը Հայաստանում արդեն մեծ պահանջարկ ունի:
        <br>
        Խմբում մինչև 6 մասնակից։<br>
        Արժեքը՝ 40000 դր. Ամիսը:
        `,
        img: "QA.png",
        time: "12 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "40.000 դրամ"
    },
    {
        h1: "Անգլերեն լեզու",
        h3: `Մտքի Բանալի կենտրոնը հրավիրում է անգլերեն լեզվի դասընթացի, որը նախատեսված է բոլոր<br>
        մակարդակների համար: Դասընթացի արդյունքում՝
        <br><br>
        • Կբարելավեք Ձեր անգլերենի մակարդակը:<br>
        • Ձեռք կբերեք անգլերենի հարուստ բառապաշար, լսողական և խոսակցական հմտություններ:<br>
        • Հեշտորեն կսովորեք քերականությունը<br>
        • Խմբում 3-6 մասնակից։<br>
        Դասընթացը շաբաթը 3 անգամ է:<br>
        Արժեքը խմբային դասի դեպքում 15000դր. Անհատական 30000 դր.<br>
        `,
        img: "English.png",
        time: "16 շաբաթ",
        count: "6 ժամ/շաբաթ",
        price: "15.000 դրամ"
    },
    {
        h1: "Շախմատ",
        h3: `Քանի որ շախմատը շատ հին ու լայնորեն տարածված խաղ է, <br>գոյություն ունեն ապացուցված հիմունքների և ռազմավարությունների մի ամբողջ շարք լավ շախմատիստ լինելու համար։ <br>
        Անկախ նրանից, թե խաղի որ ասպեկտ է ձեզ հետաքրքրում "Մտքի Բանալի"-ն ունի դասընթաց, որը կօգնի ձեզ հաղթել։<br>
        <br><br>
        •	7-10 տարեկան երեխաներին հնարավորություն կտա ամրացնել և լրացնել իրենց շախմատային գիտելիքները, որը կօգնի հետագա դպրոցի շախմատի դասերին<br>
        •	Կստեղծի կայուն գիտելիքների բազա, հետագա պրոֆեսիոնալ շախմատի համար<br>
        •	Ամեն խմբում 6 երեխա<br>
        <br>
        <br>
        Դասընթացը շաբաթը 2 անգամ է:<br>
        Արժեքը ամիսը 16000դր<br>
        `,
        img: "Chess.png",
        time: "16 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "16.000 դրամ"
    },
    {
        h1: `SCRATCH – ծրագրավորում երեխաների համար`,
        h3: `•	Մարդիկ օգտագործում են գիրը կյանքի տարբեր ոլորտներում. նամակ գրելիս, աշխատելիս և այլն։<br> Գրելը նաեւ մարդկանց ներգրավում է նոր մտածողության մեջ։<br> Գրելիս սովորում ենք կազմակերպել,կատարելագործել և արտացոլել մեր գաղափարները։
        <br><br>
        Կոդավորումը (համակարգչային ծրագրավորումը) գրության ընդլայնում է։ <br>Այն թույլ է տալիս "գրել" նոր տեսակի բաներ. խաղեր, անիմացիաներ, ինտերակտիվ պատմություններ։<br>
        •	Անկախ նրանից, թե ինչպիսին են Ջեր ծրագրավորման նպատակները, սկսելու լավագույն տեղը ամուր հիմք կառուցելն է։<br>
        <br><br>
        Այս դասընթացներից կսովորեք.<br>
        •	մտածել և կոդավորել մասնագետի պես։<br>
        •	համակարգչային գիտության հիմունքներ։<br>
        •	կրեատիվ և ալգորիթմական մտածողություն<br>
        •	թիմում աշխատելու ունակություն։<br>
        <br><br>
        Դասընթացը շաբաթը 2 անգամ է:<br>
        Արժեքը ամիսը 16000դր.
        `,
        img: "Scratch.png",
        time: "16 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "16.000 դրամ"
    },
    {
        h1: `MS OFFICE (Word, Excel, Power Point, Access, Outlook, Publisher)`,
        h3: `Դասընթացը բաղկացած է 12 գործնական և տեսական դասերից, որոնք հիմնված են իրական փաստաթղթերի և<br>
        հաշվարկների վրա։
        Դասընթացը իրականացվում է անհատական և խմբային։<br>
         Խմբում 3-6 մասնակից։<br>
        Արժեքը՝ խմբային դասի դեպքում 15000դր. Անհատական 25000 դր.
        `,
        img: "MS.png",
        time: "6 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "15.000 դրամ"
    },
    {
        h1: `Ռոբոտաշինություն – Ardruino and Python`,
        h3: `
        Python - ծրագրավորում պատանիների համար<br>
        • Ընդունում ենք 12 տարեկանից սկսած<br>
        • Ընդունելությունը իրականացնում ենք հարցազրույցով<br>
        • Նախնական գիտելիք ցանկալի է<br>
        • Խմբում առավելագույնը 6 մասնակից։<br>
        Python իրական աշխարհում լայնորեն կիրառվող ծրագրավորման լեզու է։<br>
        • Թույլ է տալիս մշակողներին գրել ավելի քիչ տող կոդ առաջադրանքների համար, ուստի ավելի քիչ<br>
        ժամանակ է պահանջվում ծրագիր ստեղծելու համար։<br>
        • Պարզ ծրագրավորման շարահյուսություն՝ անգլերենի նման հրամաններով։<br>
        • Python -ով հնարավոր է մշակել կայքեր, ստեղծել հեռախոսային հավելվածներ, ծրագրավորել<br>
        ռոբոտներ և այլն։<br>
        • Հասանելի են պատրաստի կոդի գրադարաններ։<br>
        <br>
        Ardruino - հարմար հարթակ է սկսնակների և մասնագետների համար էլեկտրոնային սարքեր մշակելու համար:<br>
        Այս պլատֆորմը մեծ տարածում ունի ամբողջ աշխարհում՝ շնորհիվ ծրագրավորման լեզվի հարմարության և<br>
        պարզության, ինչպես նաև բաց ճարտարապետության և ծրագրի կոդի։<br>
        Arduino-ն թույլ է տալիս համակարգչին դուրս գալ վիրտուալ աշխարհից և անցնել ֆիզիկական և<br>
        փոխազդել դրա հետ: Arduino-ի վրա հիմնված սարքերը կարող են տեղեկատվություն ստանալ շրջակա միջավայրի<br>
        մասին տարբեր սենսորների միջոցով, ինչպես նաև կարող են կառավարել տարբեր ակտուատորներ:<br>
        Այս դասընթացի նպատակն է քայլ առ քայլ տալ ձեզ անհրաժեշտ Arduino ծրագրավորման հիմունքներ, ինչպես նաև<br>
        պրակտիկա, այնպես որ դուք ավելի վստահ կլինեք ապագայում ստեղծելու շատ ավելի բարդ և գեղեցիկ ծրագրեր:<br>
        Դասընթացը շաբաթը 2 անգամ է:<br>
        Արժեքը ամիսը 25000դր.<br>
        `,
        img: "Python.png",
        time: "16 շաբաթ",
        count: "4 ժամ/շաբաթ",
        price: "25.000 դրամ"
    },
    {
        h1: `ՌԵԺԻՍՈՒՐԱ, ՕՊԵՐԱՏՈՐՈՒԹՅՈՒՆ`,
        h3: `
        Այս ունիկալ դասընթացի ընթացքում կսովորեք<br>
        • Օպերատորական արվեստ<br>
        • Ռեժիսուրա<br>
        • Սցենարադրամատուրգիական արվեստ<br><br>
        Ընդունելությունը 14 տարեկանից սկսած<br>
        Դասընթացը տեղի է ունենում շաբաթը 3 անգամ, բաժանված է երեք փուլերի։ Այն համատեղում է<br>
        դասախոսություններ, սեմինարներ և գործնական աշխատանք։<br>
        Ձեզ կներկայացվեն տեսական գիտելիքներ և հիմնական գործնական հմտություններ, որոնք անհրաժեշտ են<br>
        ռեժիսոր սցենարիստի կարիերայի համար։<br>
        Արժեքը ամիսը 30000դր.<br>
        `,
        img: "Rejisura.png",
        time: "12 շաբաթ",
        count: "6 ժամ/շաբաթ",
        price: "25.000 դրամ"
    },

];
main.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const info = document.createElement("div");
        info.id = "thiscourse"
        info.innerHTML = `
            <div id="info0">
                <div><h1 class="h1">${data[index].h1}</h1>
                    <h3 class="h3">${data[index].h3}</h3>
                </div>
                <div>
                    <img class="img" src="IMG/${data[index].img}" type="image/jpg">
                    <div class="imgclass">
                        <a style="color:black;"><button id="joinbut" >ԳՐԱՆՑՎԵԼ</button></a>
                    </div>
                </div>
            </div>
            <div id="info1">
                <div>Տևողություն<p>${data[index].time}</p></div>
                <div>Մակարդակ<p>Հիմունքներ</p></div>
                <div>Տեսակ<p>Լսարանային</p></div>
                <div>Դասաժամեր<p>${data[index].count}</p></div>
                <div>Գինը<p>${data[index].price}</p></div>
            </div>
        `
        window.scroll(0, 0);
        let join = 0;
        if (window.innerWidth <= 715) {
            info.insertAdjacentHTML("beforeend", `<div class="imgclass">
                <a style="color:black;"><button id="joinbut" >ԳՐԱՆՑՎԵԼ</button></a>
            </div>`);
            join = info.children[2];
            info.firstElementChild.lastElementChild.remove();
        }else{
            join = info.children[0].children[1].children[1];
        }
        let show = false;
        join.addEventListener("click", ()=>{
            if(!show){
            window.scroll(0, 0);
            show = true;
            document.body.insertAdjacentHTML("afterbegin", `<div class="form-container">
            <img id="close" src="IMG/close.png" type="image/png">
            <form class="contact-form">
            <h2>ԳՐԱՆՑՎԵԼ</h2><br>
            <p id="state"></p>
            <input type="text" id="name" placeholder="Անուն"><br>
            <input type="text" id="lastName" placeholder="Ազգանուն"><br>
            <input type="email" id="email" placeholder="Էլ. Հասցե"><br>
            <input type="tel" id="phone" name="phone" placeholder="Հեռախոսահամար"><br>
            <textarea id="message" placeholder="Հաղորդագրություն" cols="10" rows="1"></textarea><br>
            <input type="submit" class="submit" value="ՈՒՂԱՐԿԵԼ">
            </form>
        </div>
        `)
        const contactForm = document.querySelector(".contact-form");
        let uName = document.getElementById('name');
        let lastName = document.getElementById('lastName');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let message = document.getElementById('message');
        let state = document.getElementById('state');
        const close = document.querySelector("#close");
        close.addEventListener("click", ()=>{
            contactForm.offsetParent.remove();
            close.remove();
            show = false;
        })
        contactForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            
            let formData = {
                name: uName.value,
                lastName: lastName.value,
                email: email.value,
                phone: phone.value,
                message: `${uName.value}, ${lastName.value}, ${email.value}, ${phone.value}, ${message.value},${data[index].h1}`
            }
            if(uName.value == ""  || lastName.value == ""  || email.value == ""  || phone.value == ""  || message.value == ""){
                state.style.color = "#db3434";
                state.innerHTML = "Խնդրում ենք լրացնել բոլոր դաշտերը";
                if(state.innerHTML != ""){
                    setTimeout(()=>{
                        state.innerHTML = "";
                    }, 6000)
                }
            }else{
                state.innerHTML = "Շնորհավորում եմ Դուք հաջողությամբ գրանցվել եք";
                state.style.color = '#04dc89';
                if(state.innerHTML != ""){
                    setTimeout(()=>{
                        state.innerHTML = "";
                    }, 40000)
                }
                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/')
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.onload = function(){
                    if(xhr.responseText == 'success'){
                        uName.value = "";
                        lastName.value = "";
                        email.value = "";
                        phone.value = "";
                        message.value = "";
                    }else{
                        alert("error");
                    }
                }
                    xhr.send(JSON.stringify(formData));
            }
              
        })
            }
        })
    
        header.nextElementSibling.replaceWith(info);
    })
})
about.forEach((item) => {
    item.addEventListener("click", () => {
        const ourinfo = document.createElement('div');
        ourinfo.id = "ourinfo";
        ourinfo.innerHTML = `
                <h1 id = "h1">Մեր պատմությունը</h1>
                <h5 id = "h5">«Մտքի Բանալի» ուսումնական կենտրոնը, հիմնադրվել է 2022թ. Հունվարին, նպատակ ունենալով զարգացնել երեխաների կենտրոնացումը և ուշադրությունը, կրեատիվ և ալգորիթմական մտածողությունը, թիմում աշխատելու ունակությունը, կիրթ հաղորդակցվելու շնորհը:
                    Երեխաներին ծանոթացնում ենք ապագայի մասնագիտություններին, նրանց հետագա կողմնորոշումը հեշտացնելու համար:
                    Մեծերին օգնում ենք սովորել հիմունքներ  այսօրվա արդիական մասնագիտություններում:
                    Դասերը կազմակերպում ենք հնարավորինս մատչելի և որակով:<br><br>
                    Մեր ուղղվածությունը՝<br>
                    •	Ինժեներատեխնիկական<br>
                    •	Թվային տեխնոլոգիաներ<br>
                    •	Օտար լեզուներ<br>
                    •	Սցենարական արվեստ և խոսքի կուլտուրա<br>
                    <br>
                    Դասընթացները՝<br>
                    •	AutoCAD<br>
                    •	Ծրագրավորում<br>
                    •	Ռոբոտաշինություն<br>
                    •	Օտար լեզուներ<br>
                    •	Շախմատ<br>
                    •	Մենթալ թվաբանություն<br>
                    •	Օպերատորություն, սցենար, ռեժիսուրա<br>
                    •	Խոսքի կուլտուրա<br>
                    •	Manual QA<br><br><br><br>
                    </h5>
        `;
        window.scrollTo(0,0);
        header.nextElementSibling.replaceWith(ourinfo);
    })
})