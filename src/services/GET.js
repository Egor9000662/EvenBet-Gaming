class GET {
    static async getTournaments(){
        try{
            const result = await fetch('http://localhost:3001/tournaments')
            const data = await result.json()
            return data
        }
        catch(e){
            console.error(e)
        }
    }
}
export default GET