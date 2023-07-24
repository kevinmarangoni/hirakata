
export interface IKanji {
    id: number;
    hiragana: string;
    katakana: string;
    romaji: string;
    type: "Seion" | "Youon" | "Sokuon";
}