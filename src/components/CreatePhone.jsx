import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePhone = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState({
        name: '',
        number:''
    });

    
    const handleChange = (event) => {
        setPhone({
            ...phone,
            [event.target.name]: event.target.value
        });
    }

    const {name, number} = phone;

    const postPhone = async() => {
        try {
            const {data} = await axios.post('http://localhost:3010/phones', {name, number});
            if(data.status) navigate('/');
            else return console.log(data.message);

        } catch (error) {
            throw Error(error.message);
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await postPhone();
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input type="text"
                name="name"
                value={phone.name}
                onChange={handleChange} />

                <label htmlFor="number">Number: </label>
                <input type="text"
                name="number"
                value={phone.number}
                onChange={handleChange} />

                <button>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreatePhone;