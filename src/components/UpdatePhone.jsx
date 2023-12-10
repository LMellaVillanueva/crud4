import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePhone = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const allPhones = useSelector(state => state.phones.phones);
    const onePhone = allPhones.filter((phone) => phone.id == id);
    const {name, number} = onePhone[0];
    const [phone, setPhone] = useState({name, number});

    const handleChange = (event) => {
        setPhone({
            ...phone,
            [event.target.name]: event.target.value
        })
    }

    const phoneUpdated = async() => {
        try {
            const {data} = await axios.put(`http://localhost:3010/phones/${id}`, phone);
            if(data.status) setPhone(phoneUpdated);

        } catch (error) {
            throw Error(error.message);
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await phoneUpdated();
        navigate('/');
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

            <button>Update</button>
            </form>
        </div>
    </>
    )
}

export default UpdatePhone;