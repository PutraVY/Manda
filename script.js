const pinyinDict = {
    "村子": "Cūn zǐ",
    "划": "Huà",
    "木板": "Mù bǎn",
    "庆祝": "Qìng zhù",
    "祝福": "Zhù fú",
    "王子": "Wáng zǐ",
    "谦": "Qiān",
    "安静": "Ān jìng",
    "散步": "Sàn bù",
    "象棋": "Xiàng qí",
    "妻子": "Qī zǐ",
    "棋盘": "Qí pán",
    "紧张": "Jǐn zhāng",
    "无聊": "Wú liáo",
    "过失": "Guò shī",
    "寂寞": "Jì mò",
    "关心": "Guān xīn",
    "当中": "Dāng zhōng",
    "专心": "Zhuān xīn",
    "解决": "Jiě jué",
    "方法": "Fāng fǎ",
    "感谢": "Gǎn xiè",
    "打仗": "Dǎ zhàng",
    "飞鱼": "Fēi yú",
    "季节": "Jì jié",
    "捕": "Bǔ",
    "岛": "Dǎo",
    "方式": "Fāng shì",
    "文化": "Wén huà"
};

let words = Object.keys(pinyinDict);
let currentWord = null;

const wordEl = document.getElementById("word");
const pinyinEl = document.getElementById("pinyin");

function nextWord() {
    if (words.length === 0) {
        wordEl.textContent = "Finished!";
        pinyinEl.textContent = "";
        return;
    }

    currentWord = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = currentWord;
    pinyinEl.textContent = "";
}

function revealPinyin() {
    if (currentWord) {
        pinyinEl.textContent = pinyinDict[currentWord];
    }
}

function deleteWord() {
    words = words.filter(word => word !== currentWord);
    nextWord();
}


nextWord();

