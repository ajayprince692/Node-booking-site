let homePage = (req,res)=>{
    res.status(200).send(   `<div>
    <h1><b> 2.</b>5 ⭐⭐⭐⭐⭐ hotel</h1>
    <ul>
        <li>To get all Rooms = endpoint: /rooms </li>
        <li>Booked rooms = endpoint: /rooms/customer</li>  
        <li>Create room = endpoint: /rooms/createRoom</li>        
    </ul>
    </div>`)
     
    
}
export default { homePage }