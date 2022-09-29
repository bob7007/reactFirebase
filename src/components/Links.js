import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'
const Links = () => {
    
    const [links, setLinks] = useState([]);
    const addOrEditLink = async(LinkObject) => {

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


      
      return(
      <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
      <div className="col-md-12">
        {links.map(link => {
            return<div style={{textAlign:'center'}} className="card mb-1">
                <div className="card-body">
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                    <a href={'//'+link.url} target="_blank" rel="noreferrer">Go to Page</a>
                    
                </div>
            </div>
        })}

      </div>
    </div>)

     

    
}; 

export default Links;
