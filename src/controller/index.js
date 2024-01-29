let homePage = (req,res)=>{
    res.status(200).send(   `<div>
    <h1><b> 2.</b>5 ⭐⭐⭐⭐⭐ hotel</h1>
    <ul>
        <li>To get all Rooms = endpoint: /room </li> 
        <li>Get customer Data = endpoint: /room/allcustomer</li>        
    </ul>
    </div>`)
     
    
}
export default { homePage }