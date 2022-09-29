
import React, {useState} from 'react'


const LinkForm = (props) => {

    const initialStateValues={
        url:"",
        name:"",
        description:""
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value});
        
        //console.log(e.target);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues});
        //console.log(values);
    }







    

    return(

        <form className='card card-body' onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className='material-icons'>insert_link</i>                 
                </div>             
                <input
                    onChange={handleInputChange}
                    type="text" 
                    className='form-control' 
                    placeholder='http//sample.com' 
                    name="url"
                    value={values.url}/>             
            </div><br></br>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className='material-icons'>create</i>
                </div>

                <input
                    onChange={handleInputChange}
                    type="text" 
                    className='form-control' 
                    placeholder='Website Name' 
                    name="name"
                    value={values.name}/>     
            </div><br></br>

            <div className="form-group">
                <textarea className="form-control" 
                onChange={handleInputChange} name="description" rows="3" 
                placeholder='Write a description' value={values.description}></textarea>
            </div><br></br>

            <button type='submit' className='btn btn-primary btn-block'>Save</button>
        </form>


    );
};

export default LinkForm;
