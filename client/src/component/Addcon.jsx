import {useState} from "react"

function Addcon(){

    const [nam,setnam] = useState("")
    const [price,setprice] = useState("")
    const [category,setcategory] = useState("")
    const [file,setfile] = useState([])
  
    
        const handlesubmit = (e) =>{
            e.preventDefault()
    
            const formdata = new FormData();
            formdata.append("name",nam)
            formdata.append("price",price)
            formdata.append("category",category)
           for (let i =0;i<file.length;i++){
            formdata.append("file",file[i])
           }
         
           
    
    fetch("http://localhost:4500/",{
        method:"POST",
        
        body:formdata
    }).then(resp =>{
        console.log(resp)
        alert(resp.data)
    }).catch(error => {
        alert(error)
        console.log(error)
    })
    
        }
   
        const namchange = (e) =>{
           setnam(e.target.value)
           console.log(e.target.value)
           
       
        }
        const pricechange = (e) =>{
            setprice(e.target.value)
            console.log(e.target.value)
            
        
         }
         const categorychange = (e) =>{
            setcategory(e.target.value)
            console.log(e.target.value)
            
        
         }
         const filechange = (e) =>{
            setfile(e.target.files)
            console.log(e.target.files)
            
        
         }




return(

    
    <>
     <div className="addcon">


<form className="form" enctype="multipart/form-data" onSubmit={handlesubmit} method="post">
<input type="file" multiple className="file" onChange={filechange} name="file" ></input>
   <input type="text" name="nam" placeholder="Name" onChange={namchange} className="input"></input>
    <input type="text"  placeholder="Price" name="price"  onChange={pricechange} className="input"></input>
    <input type="text" name="category" placeholder="Category" onChange={categorychange} className="input"></input>

    <input type="text" className="input" placeholder="product details"></input>
 
    <input type="text"  className="input" placeholder="company details"></input>
    <input type="text" className="input" placeholder="avaible product"></input>
    <input type="submit"  className="submit"></input>

</form>
</div>
    </>
)
}
export default Addcon;