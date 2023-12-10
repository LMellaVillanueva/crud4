import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPhone = () => {
    const {id} = useParams();
    const [phone, setPhone] = useState({});

    useEffect(() => {
        const detail = async() => {
            try {
                const {data} = await axios.get(`http://localhost:3010/phones/${id}`);
                if(data.status) setPhone(data.phoneShowed);

            } catch (error) {
                throw Error(error.message);
            }
        }
        detail();
    }, [])

    return(
        <>
            <div>
                <h1>{phone.name}</h1>
                <h2>{phone.id}</h2>
                <h2>{phone.number}</h2>
            </div>
        </>
    )
}

export default DetailPhone;