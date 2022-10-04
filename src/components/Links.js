import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'
const Links = () => {
    
    const [links, setLinks] = useState([]);
    const addOrEditLink = async(LinkObject) => {

        
        if(LinkObject.url.slice(0,8)==="https://")
        {
            LinkObject.url = LinkObject.url.slice(8)
            
        }

        await db.collection('links').doc().set(LinkObject);
        console.log(LinkObject);
        console.log("saved to data base");
    }

    const getLinks = async() =>{
        //const querySnapshot = await db.collection("links").get();
        db.collection("links").onSnapshot((querySnapshot)=>{
            const docs =[];
            querySnapshot.forEach(doc => {
                //console.log(doc.data());
                //console.log(doc.id);
                docs.push({...doc.data(), id:doc.id});
            })
            console.log(docs);
            setLinks(docs);
        });

    }

    useEffect(() =>{
        console.log("Fetching data...")
        getLinks();
    },[]);

    const  onDelete = async id =>{

        if(window.confirm("Delete Entry?"))
        {
           await db.collection('links').doc(id).delete();

        }

    }
      
      return(
      <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
      <div className="col-md-12">
     

        {links.sort((a, b) =>a.name > b.name ? 1 : -1,).map(link => {    
            return<div style={{textAlign:'center'}} className="card mb-1" key={link.id}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">   
                        <i onClick={()=>{onDelete(link.id)}} style={{cursor: "pointer", color:"red"}} className='material-icons'>close</i>
                    </div>
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                    <a href={'https://'+link.url} target="_blank" rel="noreferrer">Go to Page</a>
                </div>
            </div>
        })}

      </div>
    </div>)

     

    
}; 

export default Links;
