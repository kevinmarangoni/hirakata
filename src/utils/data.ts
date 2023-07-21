
export interface IKanji {
    id: number;
    hiragana: string;
    katakana: string;
    romaji: string;
    type: "Seion" | "Youon" | "Sokuon";
}

export const kanji: Array<IKanji> = [
        {
            id: 1,
            hiragana: "あ",
            katakana: "ア",
            romaji: "a",
            type: "Seion"
          },
          {
            id: 2,
            hiragana: "い",
            katakana: "イ",
            romaji: "i",
            type: "Seion"
          },
          {
            id: 3,
            hiragana: "う",
            katakana: "ウ",
            romaji: "u",
            type: "Seion"
          },
          {
            id: 4,
            hiragana: "え",
            katakana: "エ",
            romaji: "e",
            type: "Seion"
          },
          {
            id: 5,
            hiragana: "お",
            katakana: "オ",
            romaji: "o",
            type: "Seion"
          },
          
          // Silabas de K
          {
            id: 6,
            hiragana: "か",
            katakana: "カ",
            romaji: "ka",
            type: "Seion"
          },
          {
            id: 7,
            hiragana: "き",
            katakana: "キ",
            romaji: "ki",
            type: "Seion"
          },
          {
            id: 8,
            hiragana: "く",
            katakana: "ク",
            romaji: "ku",
            type: "Seion"
          },
          {
            id: 9,
            hiragana: "け",
            katakana: "ケ",
            romaji: "ke",
            type: "Seion"
          },
          {
            id: 10,
            hiragana: "こ",
            katakana: "コ",
            romaji: "ko",
            type: "Seion"
          },
          
          // Silabas de S
          {
            id: 11,
            hiragana: "さ",
            katakana: "サ",
            romaji: "sa",
            type: "Seion"
          },
          {
            id: 12,
            hiragana: "し",
            katakana: "シ",
            romaji: "shi",
            type: "Seion"
          },
          {
            id: 13,
            hiragana: "す",
            katakana: "ス",
            romaji: "su",
            type: "Seion"
          },
          {
            id: 14,
            hiragana: "せ",
            katakana: "セ",
            romaji: "se",
            type: "Seion"
          },
          {
            id: 15,
            hiragana: "そ",
            katakana: "ソ",
            romaji: "so",
            type: "Seion"
          },
          
          // Silabas de T
          {
            id: 16,
            hiragana: "た",
            katakana: "タ",
            romaji: "ta",
            type: "Seion"
          },
          {
            id: 17,
            hiragana: "ち",
            katakana: "チ",
            romaji: "chi",
            type: "Seion"
          },
          {
            id: 18,
            hiragana: "つ",
            katakana: "ツ",
            romaji: "tsu",
            type: "Seion"
          },
          {
            id: 19,
            hiragana: "て",
            katakana: "テ",
            romaji: "te",
            type: "Seion"
          },
          {
            id: 20,
            hiragana: "と",
            katakana: "ト",
            romaji: "to",
            type: "Seion"
          },
          
          // Silabas de N
          {
            id: 21,
            hiragana: "な",
            katakana: "ナ",
            romaji: "na",
            type: "Seion"
          },
          {
            id: 22,
            hiragana: "に",
            katakana: "ニ",
            romaji: "ni",
            type: "Seion"
          },
          {
            id: 23,
            hiragana: "ぬ",
            katakana: "ヌ",
            romaji: "nu",
            type: "Seion"
          },
          {
            id: 24,
            hiragana: "ね",
            katakana: "ネ",
            romaji: "ne",
            type: "Seion"
          },
          {
            id: 25,
            hiragana: "の",
            katakana: "ノ",
            romaji: "no",
            type: "Seion"
          },
          
          // Silabas de H
          {
            id: 26,
            hiragana: "は",
            katakana: "ハ",
            romaji: "ha",
            type: "Seion"
          },
          {
            id: 27,
            hiragana: "ひ",
            katakana: "ヒ",
            romaji: "hi",
            type: "Seion"
          },
          {
            id: 28,
            hiragana: "ふ",
            katakana: "フ",
            romaji: "fu",
            type: "Seion"
          },
          {
            id: 29,
            hiragana: "へ",
            katakana: "ヘ",
            romaji: "he",
            type: "Seion"
          },
          {
            id: 30,
            hiragana: "ほ",
            katakana: "ホ",
            romaji: "ho",
            type: "Seion"
          },
          
          // Silabas de M
          {
            id: 31,
            hiragana: "ま",
            katakana: "マ",
            romaji: "ma",
            type: "Seion"
          },
          {
            id: 32,
            hiragana: "み",
            katakana: "ミ",
            romaji: "mi",
            type: "Seion"
          },
          {
            id: 33,
            hiragana: "む",
            katakana: "ム",
            romaji: "mu",
            type: "Seion"
          },
          {
            id: 34,
            hiragana: "め",
            katakana: "メ",
            romaji: "me",
            type: "Seion"
          },
          {
            id: 35,
            hiragana: "も",
            katakana: "モ",
            romaji: "mo",
            type: "Seion"
          },
          
          // Silabas de Y
          {
            id: 36,
            hiragana: "や",
            katakana: "ヤ",
            romaji: "ya",
            type: "Seion"
          },
          {
            id: 37,
            hiragana: "ゆ",
            katakana: "ユ",
            romaji: "yu",
            type: "Seion"
          },
          {
            id: 38,
            hiragana: "よ",
            katakana: "ヨ",
            romaji: "yo",
            type: "Seion"
          },
          
          // Silabas de R
          {
            id: 39,
            hiragana: "ら",
            katakana: "ラ",
            romaji: "ra",
            type: "Seion"
          },
          {
            id: 40,
            hiragana: "り",
            katakana: "リ",
            romaji: "ri",
            type: "Seion"
          },
          {
            id: 41,
            hiragana: "る",
            katakana: "ル",
            romaji: "ru",
            type: "Seion"
          },
          {
            id: 42,
            hiragana: "れ",
            katakana: "レ",
            romaji: "re",
            type: "Seion"
          },
          {
            id: 43,
            hiragana: "ろ",
            katakana: "ロ",
            romaji: "ro",
            type: "Seion"
          },
          
          // Silabas de W
          {
            id: 44,
            hiragana: "わ",
            katakana: "ワ",
            romaji: "wa",
            type: "Seion"
          },
          {
            id: 45,
            hiragana: "を",
            katakana: "ヲ",
            romaji: "wo",
            type: "Seion"
          },
          
          // Silabas de G
          {
            id: 46,
            hiragana: "が",
            katakana: "ガ",
            romaji: "ga",
            type: "Youon"
          },
          {
            id: 47,
            hiragana: "ぎ",
            katakana: "ギ",
            romaji: "gi",
            type: "Youon"
          },
          {
            id: 48,
            hiragana: "ぐ",
            katakana: "グ",
            romaji: "gu",
            type: "Youon"
          },
          {
            id: 49,
            hiragana: "げ",
            katakana: "ゲ",
            romaji: "ge",
            type: "Youon"
          },
          {
            id: 50,
            hiragana: "ご",
            katakana: "ゴ",
            romaji: "go",
            type: "Youon"
          },
          
          // Silabas de Z
          {
            id: 51,
            hiragana: "ざ",
            katakana: "ザ",
            romaji: "za",
            type: "Youon"
          },
          {
            id: 52,
            hiragana: "じ",
            katakana: "ジ",
            romaji: "ji",
            type: "Youon"
          },
          {
            id: 53,
            hiragana: "ず",
            katakana: "ズ",
            romaji: "zu",
            type: "Youon"
          },
          {
            id: 54,
            hiragana: "ぜ",
            katakana: "ゼ",
            romaji: "ze",
            type: "Youon"
          },
          {
            id: 55,
            hiragana: "ぞ",
            katakana: "ゾ",
            romaji: "zo",
            type: "Youon"
          },
          
          // Silabas de D
          {
            id: 56,
            hiragana: "だ",
            katakana: "ダ",
            romaji: "da",
            type: "Youon"
          },
          {
            id: 57,
            hiragana: "ぢ",
            katakana: "ヂ",
            romaji: "ji",
            type: "Youon"
          },
          {
            id: 58,
            hiragana: "づ",
            katakana: "ヅ",
            romaji: "zu",
            type: "Youon"
          },
          {
            id: 59,
            hiragana: "で",
            katakana: "デ",
            romaji: "de",
            type: "Youon"
          },
          {
            id: 60,
            hiragana: "ど",
            katakana: "ド",
            romaji: "do",
            type: "Youon"
          },
          
          // Silabas de B
          {
            id: 61,
            hiragana: "ば",
            katakana: "バ",
            romaji: "ba",
            type: "Youon"
          },
          {
            id: 62,
            hiragana: "び",
            katakana: "ビ",
            romaji: "bi",
            type: "Youon"
          },
          {
            id: 63,
            hiragana: "ぶ",
            katakana: "ブ",
            romaji: "bu",
            type: "Youon"
          },
          {
            id: 64,
            hiragana: "べ",
            katakana: "ベ",
            romaji: "be",
            type: "Youon"
          },
          {
            id: 65,
            hiragana: "ぼ",
            katakana: "ボ",
            romaji: "bo",
            type: "Youon"
          },
          
          // Silabas de P
          {
            id: 66,
            hiragana: "ぱ",
            katakana: "パ",
            romaji: "pa",
            type: "Youon"
          },
          {
            id: 67,
            hiragana: "ぴ",
            katakana: "ピ",
            romaji: "pi",
            type: "Youon"
          },
          {
            id: 68,
            hiragana: "ぷ",
            katakana: "プ",
            romaji: "pu",
            type: "Youon"
          },
          {
            id: 69,
            hiragana: "ぺ",
            katakana: "ペ",
            romaji: "pe",
            type: "Youon"
          },
          {
            id: 70,
            hiragana: "ぽ",
            katakana: "ポ",
            romaji: "po",
            type: "Youon"
          },
          
          // Silabas de Y
          {
            id: 71,
            hiragana: "や",
            katakana: "ヤ",
            romaji: "ya",
            type: "Youon"
          },
          {
            id: 72,
            hiragana: "ゆ",
            katakana: "ユ",
            romaji: "yu",
            type: "Youon"
          },
          {
            id: 73,
            hiragana: "よ",
            katakana: "ヨ",
            romaji: "yo",
            type: "Youon"
          },
          
          // Silabas de V
          {
            id: 74,
            hiragana: "ゔぁ",
            katakana: "ヴァ",
            romaji: "va",
            type: "Youon"
          },
          {
            id: 75,
            hiragana: "ゔぃ",
            katakana: "ヴィ",
            romaji: "vi",
            type: "Youon"
          },
          {
            id: 76,
            hiragana: "ゔ",
            katakana: "ヴ",
            romaji: "vu",
            type: "Youon"
          },
          {
            id: 77,
            hiragana: "ゔぇ",
            katakana: "ヴェ",
            romaji: "ve",
            type: "Youon"
          },
          {
            id: 78,
            hiragana: "ゔぉ",
            katakana: "ヴォ",
            romaji: "vo",
            type: "Youon"
          },
          {
            id: 79,
            hiragana: "きゃ",
            katakana: "キャ",
            romaji: "kya",
            type: "Youon"
          },
          {
            id: 80,
            hiragana: "きゅ",
            katakana: "キュ",
            romaji: "kyu",
            type: "Youon"
          },
          {
            id: 81,
            hiragana: "きょ",
            katakana: "キョ",
            romaji: "kyo",
            type: "Youon"
          },
          
          // Silabas de S (Youon)
          {
            id: 82,
            hiragana: "しゃ",
            katakana: "シャ",
            romaji: "sha",
            type: "Youon"
          },
          {
            id: 83,
            hiragana: "しゅ",
            katakana: "シュ",
            romaji: "shu",
            type: "Youon"
          },
          {
            id: 84,
            hiragana: "しょ",
            katakana: "ショ",
            romaji: "sho",
            type: "Youon"
          },
          
          // Silabas de T (Youon)
          {
            id: 85,
            hiragana: "ちゃ",
            katakana: "チャ",
            romaji: "cha",
            type: "Youon"
          },
          {
            id: 86,
            hiragana: "ちゅ",
            katakana: "チュ",
            romaji: "chu",
            type: "Youon"
          },
          {
            id: 87,
            hiragana: "ちょ",
            katakana: "チョ",
            romaji: "cho",
            type: "Youon"
          },
          
          // Silabas de N (Youon)
          {
            id: 88,
            hiragana: "にゃ",
            katakana: "ニャ",
            romaji: "nya",
            type: "Youon"
          },
          {
            id: 89,
            hiragana: "にゅ",
            katakana: "ニュ",
            romaji: "nyu",
            type: "Youon"
          },
          {
            id: 90,
            hiragana: "にょ",
            katakana: "ニョ",
            romaji: "nyo",
            type: "Youon"
          },
          
          // Silabas de H (Youon)
          {
            id: 91,
            hiragana: "ひゃ",
            katakana: "ヒャ",
            romaji: "hya",
            type: "Youon"
          },
          {
            id: 92,
            hiragana: "ひゅ",
            katakana: "ヒュ",
            romaji: "hyu",
            type: "Youon"
          },
          {
            id: 93,
            hiragana: "ひょ",
            katakana: "ヒョ",
            romaji: "hyo",
            type: "Youon"
          },
          
          // Silabas de M (Youon)
          {
            id: 94,
            hiragana: "みゃ",
            katakana: "ミャ",
            romaji: "mya",
            type: "Youon"
          },
          {
            id: 95,
            hiragana: "みゅ",
            katakana: "ミュ",
            romaji: "myu",
            type: "Youon"
          },
          {
            id: 96,
            hiragana: "みょ",
            katakana: "ミョ",
            romaji: "myo",
            type: "Youon"
          },
          {
            id: 97,
            hiragana: "りゃ",
            katakana: "リャ",
            romaji: "rya",
            type: "Youon"
          },
          {
            id: 98,
            hiragana: "りゅ",
            katakana: "リュ",
            romaji: "ryu",
            type: "Youon"
          },
          {
            id: 99,
            hiragana: "りょ",
            katakana: "リョ",
            romaji: "ryo",
            type: "Youon"
          },
          
          // Silabas de W (Youon)
          {
            id: 100,
            hiragana: "ゐ",
            katakana: "ヰ",
            romaji: "wi",
            type: "Youon"
          },
          {
            id: 101,
            hiragana: "ゑ",
            katakana: "ヱ",
            romaji: "we",
            type: "Youon"
          },
          
          // Silabas de G (Youon)
          {
            id: 102,
            hiragana: "ぎゃ",
            katakana: "ギャ",
            romaji: "gya",
            type: "Youon"
          },
          {
            id: 103,
            hiragana: "ぎゅ",
            katakana: "ギュ",
            romaji: "gyu",
            type: "Youon"
          },
          {
            id: 104,
            hiragana: "ぎょ",
            katakana: "ギョ",
            romaji: "gyo",
            type: "Youon"
          },
          
          // Silabas de Z (Youon)
          {
            id: 105,
            hiragana: "じゃ",
            katakana: "ジャ",
            romaji: "ja",
            type: "Youon"
          },
          {
            id: 106,
            hiragana: "じゅ",
            katakana: "ジュ",
            romaji: "ju",
            type: "Youon"
          },
          {
            id: 107,
            hiragana: "じょ",
            katakana: "ジョ",
            romaji: "jo",
            type: "Youon"
          },
          
          // Silabas de D (Youon)
          {
            id: 108,
            hiragana: "ぢゃ",
            katakana: "ヂャ",
            romaji: "ja",
            type: "Youon"
          },
          {
            id: 109,
            hiragana: "ぢゅ",
            katakana: "ヂュ",
            romaji: "ju",
            type: "Youon"
          },
          {
            id: 110,
            hiragana: "ぢょ",
            katakana: "ヂョ",
            romaji: "jo",
            type: "Youon"
          },
          
          // Silabas de B (Youon)
          {
            id: 111,
            hiragana: "びゃ",
            katakana: "ビャ",
            romaji: "bya",
            type: "Youon"
          },
          {
            id: 112,
            hiragana: "びゅ",
            katakana: "ビュ",
            romaji: "byu",
            type: "Youon"
          },
          {
            id: 113,
            hiragana: "びょ",
            katakana: "ビョ",
            romaji: "byo",
            type: "Youon"
          },
          
          // Silabas de P (Youon)
          {
            id: 114,
            hiragana: "ぴゃ",
            katakana: "ピャ",
            romaji: "pya",
            type: "Youon"
          },
          {
            id: 115,
            hiragana: "ぴゅ",
            katakana: "ピュ",
            romaji: "pyu",
            type: "Youon"
          },
          {
            id: 116,
            hiragana: "ぴょ",
            katakana: "ピョ",
            romaji: "pyo",
            type: "Youon"
          },
          {
            id: 117,
            hiragana: "びゃ",
            katakana: "ビャ",
            romaji: "bya",
            type: "Youon"
          },
          {
            id: 118,
            hiragana: "びゅ",
            katakana: "ビュ",
            romaji: "byu",
            type: "Youon"
          },
          {
            id: 119,
            hiragana: "びょ",
            katakana: "ビョ",
            romaji: "byo",
            type: "Youon"
          },
          
          // Silabas de V (Youon)
          {
            id: 120,
            hiragana: "ゔゃ",
            katakana: "ヴャ",
            romaji: "vya",
            type: "Youon"
          },
          {
            id: 121,
            hiragana: "ゔゅ",
            katakana: "ヴュ",
            romaji: "vyu",
            type: "Youon"
          },
          {
            id: 122,
            hiragana: "ゔょ",
            katakana: "ヴョ",
            romaji: "vyo",
            type: "Youon"
          },
          
          // Silabas de N (Sokuon)
          {
            id: 123,
            hiragana: "ん",
            katakana: "ン",
            romaji: "n",
            type: "Sokuon"
          },
          
          // Silabas de K (Sokuon)
          {
            id: 124,
            hiragana: "っか",
            katakana: "ッカ",
            romaji: "kka",
            type: "Sokuon"
          },
          {
            id: 125,
            hiragana: "っき",
            katakana: "ッキ",
            romaji: "kki",
            type: "Sokuon"
          },
          {
            id: 126,
            hiragana: "っく",
            katakana: "ック",
            romaji: "kku",
            type: "Sokuon"
          },
          {
            id: 127,
            hiragana: "っけ",
            katakana: "ッケ",
            romaji: "kke",
            type: "Sokuon"
          },
          {
            id: 128,
            hiragana: "っこ",
            katakana: "ッコ",
            romaji: "kko",
            type: "Sokuon"
          },
          
          // Silabas de S (Sokuon)
          {
            id: 129,
            hiragana: "っさ",
            katakana: "ッサ",
            romaji: "ssa",
            type: "Sokuon"
          },
          {
            id: 130,
            hiragana: "っし",
            katakana: "ッシ",
            romaji: "sshi",
            type: "Sokuon"
          },
          {
            id: 131,
            hiragana: "っす",
            katakana: "ッス",
            romaji: "ssu",
            type: "Sokuon"
          },
          {
            id: 132,
            hiragana: "っせ",
            katakana: "ッセ",
            romaji: "sse",
            type: "Sokuon"
          },
          {
            id: 133,
            hiragana: "っそ",
            katakana: "ッソ",
            romaji: "sso",
            type: "Sokuon"
          },
          
          // Silabas de T (Sokuon)
          {
            id: 134,
            hiragana: "った",
            katakana: "ッタ",
            romaji: "tta",
            type: "Sokuon"
          },
          {
            id: 135,
            hiragana: "っち",
            katakana: "ッチ",
            romaji: "tchi",
            type: "Sokuon"
          },
          {
            id: 136,
            hiragana: "っつ",
            katakana: "ッツ",
            romaji: "ttsu",
            type: "Sokuon"
          },
          {
            id: 137,
            hiragana: "って",
            katakana: "ッテ",
            romaji: "tte",
            type: "Sokuon"
          },
          {
            id: 138,
            hiragana: "っと",
            katakana: "ット",
            romaji: "tto",
            type: "Sokuon"
          },
          {
            id: 139,
            hiragana: "っな",
            katakana: "ッナ",
            romaji: "nna",
            type: "Sokuon"
          },
          {
            id: 140,
            hiragana: "っに",
            katakana: "ッニ",
            romaji: "nni",
            type: "Sokuon"
          },
          {
            id: 141,
            hiragana: "っぬ",
            katakana: "ッヌ",
            romaji: "nnu",
            type: "Sokuon"
          },
          {
            id: 142,
            hiragana: "っね",
            katakana: "ッネ",
            romaji: "nne",
            type: "Sokuon"
          },
          {
            id: 143,
            hiragana: "っの",
            katakana: "ッノ",
            romaji: "nno",
            type: "Sokuon"
          },
          
          // Silabas de H (Sokuon)
          {
            id: 144,
            hiragana: "っは",
            katakana: "ッハ",
            romaji: "hha",
            type: "Sokuon"
          },
          {
            id: 145,
            hiragana: "っひ",
            katakana: "ッヒ",
            romaji: "hhi",
            type: "Sokuon"
          },
          {
            id: 146,
            hiragana: "っふ",
            katakana: "ッフ",
            romaji: "hhu",
            type: "Sokuon"
          },
          {
            id: 147,
            hiragana: "っへ",
            katakana: "ッヘ",
            romaji: "hhe",
            type: "Sokuon"
          },
          {
            id: 148,
            hiragana: "っほ",
            katakana: "ッホ",
            romaji: "hho",
            type: "Sokuon"
          },
          
          // Silabas de M (Sokuon)
          {
            id: 149,
            hiragana: "っま",
            katakana: "ッマ",
            romaji: "mma",
            type: "Sokuon"
          },
          {
            id: 150,
            hiragana: "っみ",
            katakana: "ッミ",
            romaji: "mmi",
            type: "Sokuon"
          },
          {
            id: 151,
            hiragana: "っむ",
            katakana: "ッム",
            romaji: "mmu",
            type: "Sokuon"
          },
          {
            id: 152,
            hiragana: "っめ",
            katakana: "ッメ",
            romaji: "mme",
            type: "Sokuon"
          },
          {
            id: 153,
            hiragana: "っも",
            katakana: "ッモ",
            romaji: "mmo",
            type: "Sokuon"
          },
          
          // Silabas de Y (Sokuon)
          {
            id: 154,
            hiragana: "っや",
            katakana: "ッヤ",
            romaji: "yya",
            type: "Sokuon"
          },
          {
            id: 155,
            hiragana: "っゆ",
            katakana: "ッユ",
            romaji: "yyu",
            type: "Sokuon"
          },
          {
            id: 156,
            hiragana: "っよ",
            katakana: "ッヨ",
            romaji: "yyo",
            type: "Sokuon"
          },
          
          // Silabas de R (Sokuon)
          {
            id: 157,
            hiragana: "っら",
            katakana: "ッラ",
            romaji: "rra",
            type: "Sokuon"
          },
          {
            id: 158,
            hiragana: "っり",
            katakana: "ッリ",
            romaji: "rri",
            type: "Sokuon"
          },
          {
            id: 159,
            hiragana: "っる",
            katakana: "ッル",
            romaji: "rru",
            type: "Sokuon"
          },
          {
            id: 160,
            hiragana: "っれ",
            katakana: "ッレ",
            romaji: "rre",
            type: "Sokuon"
          },
          {
            id: 161,
            hiragana: "っろ",
            katakana: "ッロ",
            romaji: "rro",
            type: "Sokuon"
          },
          
          // Silabas de W (Sokuon)
          {
            id: 162,
            hiragana: "っわ",
            katakana: "ッワ",
            romaji: "wwa",
            type: "Sokuon"
          },
          {
            id: 163,
            hiragana: "っゐ",
            katakana: "ッヰ",
            romaji: "wwi",
            type: "Sokuon"
          },
          {
            id: 164,
            hiragana: "っゑ",
            katakana: "ッヱ",
            romaji: "wwe",
            type: "Sokuon"
          },
          {
            id: 165,
            hiragana: "っを",
            katakana: "ッヲ",
            romaji: "wwo",
            type: "Sokuon"
          },
          {
            id: 166,
            hiragana: "っが",
            katakana: "ッガ",
            romaji: "gga",
            type: "Sokuon"
          },
          {
            id: 167,
            hiragana: "っぎ",
            katakana: "ッギ",
            romaji: "ggi",
            type: "Sokuon"
          },
          {
            id: 168,
            hiragana: "っぐ",
            katakana: "ッグ",
            romaji: "ggu",
            type: "Sokuon"
          },
          {
            id: 169,
            hiragana: "っげ",
            katakana: "ッゲ",
            romaji: "gge",
            type: "Sokuon"
          },
          {
            id: 170,
            hiragana: "っご",
            katakana: "ッゴ",
            romaji: "ggo",
            type: "Sokuon"
          },
          
          // Silabas de Z (Sokuon)
          {
            id: 171,
            hiragana: "っざ",
            katakana: "ッザ",
            romaji: "zza",
            type: "Sokuon"
          },
          {
            id: 172,
            hiragana: "っじ",
            katakana: "ッジ",
            romaji: "jji",
            type: "Sokuon"
          },
          {
            id: 173,
            hiragana: "っず",
            katakana: "ッズ",
            romaji: "zzu",
            type: "Sokuon"
          },
          {
            id: 174,
            hiragana: "っぜ",
            katakana: "ッゼ",
            romaji: "zze",
            type: "Sokuon"
          },
          {
            id: 175,
            hiragana: "っぞ",
            katakana: "ッゾ",
            romaji: "zzo",
            type: "Sokuon"
          },
          
          // Silabas de D (Sokuon)
          {
            id: 176,
            hiragana: "っだ",
            katakana: "ッダ",
            romaji: "dda",
            type: "Sokuon"
          },
          {
            id: 177,
            hiragana: "っぢ",
            katakana: "ッヂ",
            romaji: "jji",
            type: "Sokuon"
          },
          {
            id: 178,
            hiragana: "っづ",
            katakana: "ッヅ",
            romaji: "zzu",
            type: "Sokuon"
          },
          {
            id: 179,
            hiragana: "っで",
            katakana: "ッデ",
            romaji: "dde",
            type: "Sokuon"
          },
          {
            id: 180,
            hiragana: "っど",
            katakana: "ッド",
            romaji: "ddo",
            type: "Sokuon"
          },
          
          // Silabas de B (Sokuon)
          {
            id: 181,
            hiragana: "っば",
            katakana: "ッバ",
            romaji: "bba",
            type: "Sokuon"
          },
          {
            id: 182,
            hiragana: "っび",
            katakana: "ッビ",
            romaji: "bbi",
            type: "Sokuon"
          },
          {
            id: 183,
            hiragana: "っぶ",
            katakana: "ッブ",
            romaji: "bbu",
            type: "Sokuon"
          },
          {
            id: 184,
            hiragana: "っべ",
            katakana: "ッベ",
            romaji: "bbe",
            type: "Sokuon"
          },
          {
            id: 185,
            hiragana: "っぼ",
            katakana: "ッボ",
            romaji: "bbo",
            type: "Sokuon"
          },
          
          // Silabas de P (Sokuon)
          {
            id: 186,
            hiragana: "っぱ",
            katakana: "ッパ",
            romaji: "ppa",
            type: "Sokuon"
          },
          {
            id: 187,
            hiragana: "っぴ",
            katakana: "ッピ",
            romaji: "ppi",
            type: "Sokuon"
          },
          {
            id: 188,
            hiragana: "っぷ",
            katakana: "ップ",
            romaji: "ppu",
            type: "Sokuon"
          },
          {
            id: 189,
            hiragana: "っぺ",
            katakana: "ッペ",
            romaji: "ppe",
            type: "Sokuon"
          },
          {
            id: 190,
            hiragana: "っぽ",
            katakana: "ッポ",
            romaji: "ppo",
            type: "Sokuon"
          },
          {
            id: 191,
            hiragana: "っや",
            katakana: "ッヤ",
            romaji: "yya",
            type: "Sokuon"
          },
          {
            id: 192,
            hiragana: "っゆ",
            katakana: "ッユ",
            romaji: "yyu",
            type: "Sokuon"
          },
          {
            id: 193,
            hiragana: "っよ",
            katakana: "ッヨ",
            romaji: "yyo",
            type: "Sokuon"
          },
          
          // Silabas de R (Sokuon)
          {
            id: 194,
            hiragana: "っら",
            katakana: "ッラ",
            romaji: "rra",
            type: "Sokuon"
          },
          {
            id: 195,
            hiragana: "っり",
            katakana: "ッリ",
            romaji: "rri",
            type: "Sokuon"
          },
          {
            id: 196,
            hiragana: "っる",
            katakana: "ッル",
            romaji: "rru",
            type: "Sokuon"
          },
          {
            id: 197,
            hiragana: "っれ",
            katakana: "ッレ",
            romaji: "rre",
            type: "Sokuon"
          },
          {
            id: 198,
            hiragana: "っろ",
            katakana: "ッロ",
            romaji: "rro",
            type: "Sokuon"
          },
          
          // Silabas de W (Sokuon)
          {
            id: 199,
            hiragana: "っわ",
            katakana: "ッワ",
            romaji: "wwa",
            type: "Sokuon"
          },
          {
            id: 200,
            hiragana: "っゐ",
            katakana: "ッヰ",
            romaji: "wwi",
            type: "Sokuon"
          },
          {
            id: 201,
            hiragana: "っゑ",
            katakana: "ッヱ",
            romaji: "wwe",
            type: "Sokuon"
          },
          {
            id: 202,
            hiragana: "っを",
            katakana: "ッヲ",
            romaji: "wwo",
            type: "Sokuon"
          },
          
          // Silabas de G (Sokuon) com N
          {
            id: 203,
            hiragana: "んが",
            katakana: "ンガ",
            romaji: "nga",
            type: "Sokuon"
          },
          {
            id: 204,
            hiragana: "んぎ",
            katakana: "ンギ",
            romaji: "ngi",
            type: "Sokuon"
          },
          {
            id: 205,
            hiragana: "んぐ",
            katakana: "ング",
            romaji: "ngu",
            type: "Sokuon"
          },
          {
            id: 206,
            hiragana: "んげ",
            katakana: "ンゲ",
            romaji: "nge",
            type: "Sokuon"
          },
          {
            id: 207,
            hiragana: "んご",
            katakana: "ンゴ",
            romaji: "ngo",
            type: "Sokuon"
          },
          
          // Silabas de Z (Sokuon) com N
          {
            id: 208,
            hiragana: "んざ",
            katakana: "ンザ",
            romaji: "nza",
            type: "Sokuon"
          },
          {
            id: 209,
            hiragana: "んじ",
            katakana: "ンジ",
            romaji: "nji",
            type: "Sokuon"
          },
          {
            id: 210,
            hiragana: "んず",
            katakana: "ンズ",
            romaji: "nzu",
            type: "Sokuon"
          },
          {
            id: 211,
            hiragana: "んぜ",
            katakana: "ンゼ",
            romaji: "nze",
            type: "Sokuon"
          },
          {
            id: 212,
            hiragana: "んぞ",
            katakana: "ンゾ",
            romaji: "nzo",
            type: "Sokuon"
          },
          
          // Silabas de D (Sokuon) com N
          {
            id: 213,
            hiragana: "んだ",
            katakana: "ンダ",
            romaji: "nda",
            type: "Sokuon"
          },
          {
            id: 214,
            hiragana: "んぢ",
            katakana: "ンヂ",
            romaji: "ndi",
            type: "Sokuon"
          },
          {
            id: 215,
            hiragana: "んづ",
            katakana: "ンヅ",
            romaji: "ndu",
            type: "Sokuon"
          },
          {
            id: 216,
            hiragana: "んで",
            katakana: "ンデ",
            romaji: "nde",
            type: "Sokuon"
          },
          {
            id: 217,
            hiragana: "んど",
            katakana: "ンド",
            romaji: "ndo",
            type: "Sokuon"
          },
          
          // Silabas de B (Sokuon) com N
          {
            id: 218,
            hiragana: "んば",
            katakana: "ンバ",
            romaji: "nba",
            type: "Sokuon"
          },
          {
            id: 219,
            hiragana: "んび",
            katakana: "ンビ",
            romaji: "nbi",
            type: "Sokuon"
          },
          {
            id: 220,
            hiragana: "んぶ",
            katakana: "ンブ",
            romaji: "nbu",
            type: "Sokuon"
          },
          {
            id: 221,
            hiragana: "んべ",
            katakana: "ンベ",
            romaji: "nbe",
            type: "Sokuon"
          },
          {
            id: 222,
            hiragana: "んぼ",
            katakana: "ンボ",
            romaji: "nbo",
            type: "Sokuon"
          },
          
          // Silabas de P (Sokuon) com N
          {
            id: 223,
            hiragana: "んぱ",
            katakana: "ンパ",
            romaji: "npa",
            type: "Sokuon"
          },
          {
            id: 224,
            hiragana: "んぴ",
            katakana: "ンピ",
            romaji: "npi",
            type: "Sokuon"
          },
          {
            id: 225,
            hiragana: "んぷ",
            katakana: "ンプ",
            romaji: "npu",
            type: "Sokuon"
          },
          {
            id: 226,
            hiragana: "んぺ",
            katakana: "ンペ",
            romaji: "npe",
            type: "Sokuon"
          },
          {
            id: 227,
            hiragana: "んぽ",
            katakana: "ンポ",
            romaji: "npo",
            type: "Sokuon"
          },
          {
            id: 228,
            hiragana: "んま",
            katakana: "ンマ",
            romaji: "nma",
            type: "Sokuon"
          },
          {
            id: 229,
            hiragana: "んみ",
            katakana: "ンミ",
            romaji: "nmi",
            type: "Sokuon"
          },
          {
            id: 230,
            hiragana: "んむ",
            katakana: "ンム",
            romaji: "nmu",
            type: "Sokuon"
          },
          {
            id: 231,
            hiragana: "んめ",
            katakana: "ンメ",
            romaji: "nme",
            type: "Sokuon"
          },
          {
            id: 232,
            hiragana: "んも",
            katakana: "ンモ",
            romaji: "nmo",
            type: "Sokuon"
          },
          
          // Silabas de Y (Sokuon) com N
          {
            id: 233,
            hiragana: "んや",
            katakana: "ンヤ",
            romaji: "nya",
            type: "Sokuon"
          },
          {
            id: 234,
            hiragana: "んゆ",
            katakana: "ンユ",
            romaji: "nyu",
            type: "Sokuon"
          },
          {
            id: 235,
            hiragana: "んよ",
            katakana: "ンヨ",
            romaji: "nyo",
            type: "Sokuon"
          },
          
          // Silabas de R (Sokuon) com N
          {
            id: 236,
            hiragana: "んら",
            katakana: "ンラ",
            romaji: "nra",
            type: "Sokuon"
          },
          {
            id: 237,
            hiragana: "んり",
            katakana: "ンリ",
            romaji: "nri",
            type: "Sokuon"
          },
          {
            id: 238,
            hiragana: "んる",
            katakana: "ンル",
            romaji: "nru",
            type: "Sokuon"
          },
          {
            id: 239,
            hiragana: "んれ",
            katakana: "ンレ",
            romaji: "nre",
            type: "Sokuon"
          },
          {
            id: 240,
            hiragana: "んろ",
            katakana: "ンロ",
            romaji: "nro",
            type: "Sokuon"
          },
          
          // Silabas de W (Sokuon) com N
          {
            id: 241,
            hiragana: "んわ",
            katakana: "ンワ",
            romaji: "nwa",
            type: "Sokuon"
          },
          {
            id: 242,
            hiragana: "んゐ",
            katakana: "ンヰ",
            romaji: "nwi",
            type: "Sokuon"
          },
          {
            id: 243,
            hiragana: "んゑ",
            katakana: "ンヱ",
            romaji: "nwe",
            type: "Sokuon"
          },
          {
            id: 244,
            hiragana: "んを",
            katakana: "ンヲ",
            romaji: "nwo",
            type: "Sokuon"
          },
          
          // Silabas de G (Youon) com N
          {
            id: 245,
            hiragana: "んぎゃ",
            katakana: "ンギャ",
            romaji: "ngya",
            type: "Youon"
          },
          {
            id: 246,
            hiragana: "んぎゅ",
            katakana: "ンギュ",
            romaji: "ngyu",
            type: "Youon"
          },
          {
            id: 247,
            hiragana: "んぎょ",
            katakana: "ンギョ",
            romaji: "ngyo",
            type: "Youon"
          },
          
          // Silabas de Z (Youon) com N
          {
            id: 248,
            hiragana: "んじゃ",
            katakana: "ンジャ",
            romaji: "nja",
            type: "Youon"
          },
          {
            id: 249,
            hiragana: "んじゅ",
            katakana: "ンジュ",
            romaji: "nju",
            type: "Youon"
          },
          {
            id: 250,
            hiragana: "んじょ",
            katakana: "ンジョ",
            romaji: "njo",
            type: "Youon"
          },
          
          // Silabas de D (Youon) com N
          {
            id: 251,
            hiragana: "んぢゃ",
            katakana: "ンヂャ",
            romaji: "nja",
            type: "Youon"
          },
          {
            id: 252,
            hiragana: "んぢゅ",
            katakana: "ンヂュ",
            romaji: "nju",
            type: "Youon"
          },
          {
            id: 253,
            hiragana: "んぢょ",
            katakana: "ンヂョ",
            romaji: "njo",
            type: "Youon"
          },
          
          // Silabas de B (Youon) com N
          {
            id: 254,
            hiragana: "んびゃ",
            katakana: "ンビャ",
            romaji: "nbya",
            type: "Youon"
          },
          {
            id: 255,
            hiragana: "んびゅ",
            katakana: "ンビュ",
            romaji: "nbyu",
            type: "Youon"
          },
          {
            id: 256,
            hiragana: "んびょ",
            katakana: "ンビョ",
            romaji: "nbyo",
            type: "Youon"
          },
          
          // Silabas de P (Youon) com N
          {
            id: 257,
            hiragana: "んぴゃ",
            katakana: "ンピャ",
            romaji: "npya",
            type: "Youon"
          },
          {
            id: 258,
            hiragana: "んぴゅ",
            katakana: "ンピュ",
            romaji: "npyu",
            type: "Youon"
          },
          {
            id: 259,
            hiragana: "んぴょ",
            katakana: "ンピョ",
            romaji: "npyo",
            type: "Youon"
          },
          {
            id: 260,
            hiragana: "きゃ",
            katakana: "キャ",
            romaji: "kya",
            type: "Youon"
          },
          {
            id: 261,
            hiragana: "きゅ",
            katakana: "キュ",
            romaji: "kyu",
            type: "Youon"
          },
          {
            id: 262,
            hiragana: "きょ",
            katakana: "キョ",
            romaji: "kyo",
            type: "Youon"
          },
          
          // Silabas de S (Youon) com Y
          {
            id: 263,
            hiragana: "しゃ",
            katakana: "シャ",
            romaji: "sha",
            type: "Youon"
          },
          {
            id: 264,
            hiragana: "しゅ",
            katakana: "シュ",
            romaji: "shu",
            type: "Youon"
          },
          {
            id: 265,
            hiragana: "しょ",
            katakana: "ショ",
            romaji: "sho",
            type: "Youon"
          },
          
          // Silabas de T (Youon) com Y
          {
            id: 266,
            hiragana: "ちゃ",
            katakana: "チャ",
            romaji: "cha",
            type: "Youon"
          },
          {
            id: 267,
            hiragana: "ちゅ",
            katakana: "チュ",
            romaji: "chu",
            type: "Youon"
          },
          {
            id: 268,
            hiragana: "ちょ",
            katakana: "チョ",
            romaji: "cho",
            type: "Youon"
          },
          
          // Silabas de H (Youon) com Y
          {
            id: 269,
            hiragana: "ひゃ",
            katakana: "ヒャ",
            romaji: "hya",
            type: "Youon"
          },
          {
            id: 270,
            hiragana: "ひゅ",
            katakana: "ヒュ",
            romaji: "hyu",
            type: "Youon"
          },
          {
            id: 271,
            hiragana: "ひょ",
            katakana: "ヒョ",
            romaji: "hyo",
            type: "Youon"
          },
          
          // Silabas de M (Youon) com Y
          {
            id: 272,
            hiragana: "みゃ",
            katakana: "ミャ",
            romaji: "mya",
            type: "Youon"
          },
          {
            id: 273,
            hiragana: "みゅ",
            katakana: "ミュ",
            romaji: "myu",
            type: "Youon"
          },
          {
            id: 274,
            hiragana: "みょ",
            katakana: "ミョ",
            romaji: "myo",
            type: "Youon"
          },
          
          // Silabas de R (Youon) com Y
          {
            id: 275,
            hiragana: "りゃ",
            katakana: "リャ",
            romaji: "rya",
            type: "Youon"
          },
          {
            id: 276,
            hiragana: "りゅ",
            katakana: "リュ",
            romaji: "ryu",
            type: "Youon"
          },
          {
            id: 277,
            hiragana: "りょ",
            katakana: "リョ",
            romaji: "ryo",
            type: "Youon"
          },
          
          // Silabas de G (Youon) com Y
          {
            id: 278,
            hiragana: "ぎゃ",
            katakana: "ギャ",
            romaji: "gya",
            type: "Youon"
          },
          {
            id: 279,
            hiragana: "ぎゅ",
            katakana: "ギュ",
            romaji: "gyu",
            type: "Youon"
          },
          {
            id: 280,
            hiragana: "ぎょ",
            katakana: "ギョ",
            romaji: "gyo",
            type: "Youon"
          },
          
          // Silabas de Z (Youon) com Y
          {
            id: 281,
            hiragana: "じゃ",
            katakana: "ジャ",
            romaji: "ja",
            type: "Youon"
          },
          {
            id: 282,
            hiragana: "じゅ",
            katakana: "ジュ",
            romaji: "ju",
            type: "Youon"
          },
          {
            id: 283,
            hiragana: "じょ",
            katakana: "ジョ",
            romaji: "jo",
            type: "Youon"
          },
          
          // Silabas de D (Youon) com Y
          {
            id: 284,
            hiragana: "ぢゃ",
            katakana: "ヂャ",
            romaji: "ja",
            type: "Youon"
          },
          {
            id: 285,
            hiragana: "ぢゅ",
            katakana: "ヂュ",
            romaji: "ju",
            type: "Youon"
          },
          {
            id: 286,
            hiragana: "ぢょ",
            katakana: "ヂョ",
            romaji: "jo",
            type: "Youon"
          },
          
          // Silabas de B (Youon) com Y
          {
            id: 287,
            hiragana: "びゃ",
            katakana: "ビャ",
            romaji: "bya",
            type: "Youon"
          },
          {
            id: 288,
            hiragana: "びゅ",
            katakana: "ビュ",
            romaji: "byu",
            type: "Youon"
          },
          {
            id: 289,
            hiragana: "びょ",
            katakana: "ビョ",
            romaji: "byo",
            type: "Youon"
          },
          
          // Silabas de P (Youon) com Y
          {
            id: 290,
            hiragana: "ぴゃ",
            katakana: "ピャ",
            romaji: "pya",
            type: "Youon"
          },
          {
            id: 291,
            hiragana: "ぴゅ",
            katakana: "ピュ",
            romaji: "pyu",
            type: "Youon"
          },
          {
            id: 292,
            hiragana: "ぴょ",
            katakana: "ピョ",
            romaji: "pyo",
            type: "Youon"
          },
    ]