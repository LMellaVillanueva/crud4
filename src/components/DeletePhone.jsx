import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPhones } from "../redux/actions";

const DeletePhone = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async() => {
        try {
            const {data} = await axios.delete(`http://localhost:3010/phones/${id}`);
            if(data.status) {
                dispatch(getAllPhones());
                navigate('/');
            }

        } catch (error) {
            throw Error(error.message);
        }
    }

    return(
        <>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}  

export default DeletePhone;