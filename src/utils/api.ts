//"Seion" | "Youon" | "Sokuon";
import axios from 'axios'
class ApiMethods {
    api:string = "http://localhost:3001/kanji"
    
    async getAll(){
        try{
            const response = await axios.get(this.api)
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async getTyped(typeList: Array<string>):Promise<any>{
        let params = ""
        typeList.forEach((item, index)=>{
            params = `${params}type=${item}${ (index > 0 && index < typeList.length) ? `` : `&`}`
        })
        try{
            const response = await axios.get(encodeURI(`${this.api}?${params}`))
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    randomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async getRandom(){
        try{
            let random = this.randomNumber(1, 292)
            const response = await axios.get(`${this.api}?id=${random}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async getByRomaji(romaji: string):Promise<any>{
        try{
            const response = await axios.get(`${this.api}?romaji=${romaji}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }
    async getByHiragana(hiragana: string):Promise<any>{
        try{
            const response = await axios.get(`${this.api}?hiragana=${hiragana}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }
    async getByKatakana(katakana: string):Promise<any>{
        try{
            const response = await axios.get(`${this.api}?katakana=${katakana}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }
    async getById(id: number):Promise<any>{
        try{
            const response = await axios.get(`${this.api}?id=${id}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }
}

export default new ApiMethods()