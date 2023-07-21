//"Seion" | "Youon" | "Sokuon";
import axios from 'axios'
class ApiMethods {
    api:string = "http://localhost:3001/kanji"
    
    async getAll(){
        let url = this.api
        try{
            const response = await axios.get(url)
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async getTyped(typeList: Array<string>):Promise<any>{
        let url = this.api
        let params = ""
        typeList.forEach((item, index)=>{
            params = `${params}type=${item} ${ (index >= 1 && index < typeList.length) && `&`}`
        })
        try{
            const response = await axios.get(`${url}?${params}`)
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async getRandom(){
        
    }
}

export default new ApiMethods()