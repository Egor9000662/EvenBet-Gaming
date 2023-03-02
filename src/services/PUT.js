class PUT {
    static async putTournaments(data,id){
        try{
             await fetch(`http://localhost:3001/tournaments/${id}`,{
                method:"PUT",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
        }
        catch(e){
            console.error(e)
        }
    }
}
export default PUT