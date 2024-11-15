let step = 0;
let endings = {
    "success": "Вы покидаете планету, артефакт оказался огромным хранилищем данных об инопланетной цивилизации. \
    Миссия успешно выполнена!",
    "fail": "Вы покидаете планету, так и не узнав ничего об обитавшей на ней цивилизации. Миссия оказалась неудачной.",
    "death": "Вы погибли. Миссия провалена.",
};
let ending = "";

let actions = [                                                                                                                     // массив с действиями сюжета
    {
    text: "Ваш корабль приближается к планете, с которой поступил сигнал бедствия.",                                                // описание действия
    options: ["Войти в атмосферу планеты", "Провести сканирование атмосферы", "Обратиться за помощью к бортовому ИИ",               // варианты ответа
        "Рассмотреть сигнал бедствия на мониторе"],
    img: "assets/img/1.png",                                                                                                        // путь к картинке действия
    nextStep: function (choice) {                                                                                                   // обработка выбора ответа
        displayConsequence(choice);
        switch (choice) {
            case 0:
                return 1;
            case 1:
                return 1;
            case 2:
                return 1;
            case 3:
                return 1;
        }
    },
    consequences: ["Вы осторожно начинаете посадку на неизведанной планете.",                                                       // последствия выбора
        "Вы проводите сканирование атмосферы, и, не обнаружив ничего интересного, начинаете посадку.", 
        "Бортовой ИИ обнаруживает радиосигнал, передающий следующее сообщение: «Ящерица - верный друг в прохождении миссии». Думаю, стоит это запомнить.", 
        "В сигнале бедствия оказалось зашифрованное сообщение: «Ящерица - верный друг в прохождении миссии». Думаю, стоит это запомнить."],
    },

    {
    text: "Вы приземлились на планете и выходите из корабля. Перед вами — древние, покрытые растительностью руины.",
    options: ["Отправиться на исследование руин", "Проверить окружение", "Собрать образцы флоры и грунта"],
    img: "assets/img/2.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                return 4;
            case 1:
                return 2;
            case 2:
                return 2;
        }
    },
    consequences: ["Вы неспешно подходите к предполагаемому входу в руины.", 
        "Вы начинаете проверку окружения с осмотра инопланетной растительности рядом с руинами.", 
        "Вы начинаете собирать образцы местных растений для дальнейшего исследования."],
    },

    {
    text: "Среди неприметных, на первый взгляд, растений, Вы находите редкий вид, который светится в темноте и имеет свойство реагировать на движения.",
    options: ["Собрать образец растения", "Не трогать растение", "Съесть растение"],
    img: "assets/img/3.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                actions[3].options.push("Покормить существо светящимся растением");
                return 3;
            case 1:
                return 3;
            case 2:
                ending = "death";
                return -1;
        }
    },
    consequences: ["Вы собрали образец растения, подозревая, что он может пригодиться не только для исследования и продолжаете свой путь.", 
        "Вы решили не трогать растение, потому что оно выглядит странно, и продолжаете свой путь.", 
        "Вы съели это непонятное растение и излучаемый им свет начал прожигать вас изнутри."],
    },

    {
    text: "В лесах рядом с комплексом вы сталкиваетесь с существом, похожим на светящуюся роботизированную ящерицу.",
    options: ["Не трогать существо", "Попробовать убить существо"],
    img: "assets/img/4.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                return 4;
            case 1:
                ending = "death";
                return -1;
            case 2:
                actions[7].options.push("Обратиться к прирученному существу за помощью");
                return 4;
        }
    },
    consequences: ["Вы решили не тревожить инопланетную ящерицу и пойти ко входу в руины.", 
        "Инопланетная ящерица оказалась замаскированным роботом-убийцей, который расстрелял вас лазерной пушкой.", 
        "Оказывается, инопланетная ящерица очень любит это растение! Похоже, вам удалось приручить это существо! \
        Вы продолжаете путь вместе с ним и подходите ко входу в руины."],
    },

    {
    text: "Вы входите в руины, которые оказались заброшенным инопланетным комплексом. \
    Войдя, вы слышите непрерывный звук, напоминающий зов о помощи на неизвестном языке. Он доносится из соседнего помещения. \
    Также вы видите терминал управления защитной системой комплекса и потайную дверь.",
    options: ["Отправиться на звук", "Попробовать открыть потайную дверь", "Попробовать разблокировать терминал"],
    img: "assets/img/5.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                return 6;
            case 1:
                return 5;
            case 2:
                return 7;
        }
    },
    consequences: ["Вы решили не трогать ничего лишнего и пройти в соседнее помещение.", 
        "Вы подходите к потайной двери и ищете, как её открыть.", 
        "Вы подходите к терминалу, нажимаете на кнопку включения, и неожиданно раздается звук сирены."],
    },

    {
    text: "Вы дергаете за ручку двери, но она не открывается. Вы замечаете на двери странный замок с кучей проводов.",
    options: ["Попробовать взломать замок", "Не трогать замок и отойти от двери"],
    img: "assets/img/6.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                return 7;
            case 1:
                return 6;
        }
    },
    consequences: ["Вы пробуете прострелить замок, но неожиданно раздается звук сирены", 
        "Вы решили не трогать  и пройти в соседнее помещение."],
    },

    {
    text: "Вы проходите в соседнее помещение. Оно оказалось довольно большим. Вы начинаете внимательно его осматривать. \
    Спустя некоторое время вы находите механический артефакт в центре комнаты.",
    options: ["Взять артефакт", "Не трогать артефакт и покинуть комплекс", "Разбить артефакт"],
    img: "assets/img/7.png",
    nextStep: function (choice) {
        displayConsequence(choice);
        switch (choice) {
            case 0:
                actions[7].options.push("Поискать боевые функции артефакта");
                return 7;
            case 1:
                ending = "fail";
                return -1;
            case 2:
                return 7;
        }
    },
    consequences: ["Вы берете артефакт и слышите вой сирены.", 
        "Вы решили не трогать артефакт и покинуть комплекс, отправившись обратно к ракете.", 
        "Вы разбиваете артефакт и слышите вой сирены."],
    },

    {
    text: "Через несколько секунд вы видите множество летающих дронов, оборудованных чем-то, вроде пушек. Они летят в вашу сторону",
    options: ["Обратиться в бегство", "Попробовать расстрелять дроны"],
    img: "assets/img/8.png",
    nextStep: function (choice) {
        switch (choice) {
            case 0:
                ending = "fail";
                displayConsequence(choice);
                return -1;
            case 1:
                ending = "fail";
                displayConsequence(choice);
                return -1;
            default:
                if (actions[7].options[choice] == "Обратиться к прирученному существу за помощью") {
                    actions[7].consequences.push("Ваш верный спутник оказался замаскированным роботом-убийцей, которому не составило труда расправиться с дронами. \
                        Вы покидаете комплекс с артефактом и направляетесь к своему кораблю");
                    ending = "success";
                    displayConsequence(choice);
                } else {
                    actions[7].consequences.push("Вы смогли актививировать секретную функцию артефакта, которая позволился расправиться с дронами. Но в комплексе не \
                        оказалось больше ничего интересного и вы направляетесь к своему кораблю с пустыми руками.");
                    ending = "fail";
                    displayConsequence(choice);
                };
                return -1;
            }
        },
        consequences: ["Вы берете артефакт и слышите вой сирены.", 
            "Вы решили не трогать артефакт и покинуть комплекс, отправившись обратно к ракете."],
        }
];

function startGame() {
    document.getElementById("gameDescription").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("restartButton").style.display = "block";
    step = 0;
    ending = "";
    displayStory();
}

function displayStory() {
    if (step === -1) {
        document.getElementById("story").innerHTML = endings[ending];
        document.getElementById("actions").innerHTML = ""; 
        document.getElementById("consequence").innerHTML = ""; 
        document.getElementById("nextButtonContainer").style.display = "none";
        document.getElementById("restartButtonContainer").style.display = "block";
        return;
    }

    let action = actions[step];
    document.getElementById("story").innerHTML = `<img src='${action.img}' class="pb-3"> \n <p>${action.text}</p>`;
    document.getElementById("consequence").innerHTML = "";
    document.getElementById("nextButtonContainer").style.display = "none";

    let actionButtons = action.options.map((option, index) =>
        `<button id="actionButton" class="btn text-start text-primary btn-lg mb-2" onclick="makeChoice(${index})"> 
            -> ${option} </button>`
        ).join("\n");

    document.getElementById("actions").innerHTML = actionButtons;
}

function displayConsequence(choice) {
    document.getElementById("consequence").innerHTML = actions[step].consequences[choice];
    document.getElementById("nextButtonContainer").style.display = "block";
  }

function makeChoice(choice) {
    document.getElementById("actions").innerHTML = "";
    document.getElementById("story").innerHTML = "";
    step = actions[step].nextStep(choice);
}
