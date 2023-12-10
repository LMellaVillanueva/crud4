import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPhones } from '../redux/actions';
import { Link } from 'react-router-dom';
import DeletePhone from './DeletePhone';

const Home = () => {
    const allPhones = useSelector(state => state.phones.phones);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPhones());
    }, []);

    return(
        <>
            <div >
                <Link to='/create'>
                    <button>Create New Phone</button>
                </Link>
                
                {allPhones?.map((phone) => (
                    <div key={phone.id}>
                        <h2>Name: {phone.name}</h2>
                        <h3>Number: {phone.number}</h3>
                        <Link to={`/update/${phone.id}`}>
                            <button>Edit</button>
                        </Link>

                        <Link to={`/detail/${phone.id}`}>
                            <button>Detail</button>
                        </Link>

                        <DeletePhone id={phone.id}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;