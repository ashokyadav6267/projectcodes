import { useContext } from 'react'
import CardComponent from '../components/CardComponent'
import { myContextProduct } from '../context/productContext'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Product = () => {
    const { Product, setProduct } = useContext(myContextProduct);
    const navigate = useNavigate();

    const deletehandler = (id) => {
        const filterProduct = Product.filter((val) => val.id !== id);
        setProduct(filterProduct);
        toast.success("delete successfully");
    }

    return (
        <>
            <div className='h-screen w-screen flex pt-5 mt-5'    >
                {Product.map((val) => (
                    <div key={val.id} >
                        <div key={val.id} className=' h-100 w-70  m-7 flex items-center justify-center flex-col rounded-lg p-5 bg-gray-500 '
                            onClick={() => navigate(`/details/${val.id}`)} >
                            <div key={val.id} >
                                <CardComponent
                                    brand={val.brand}
                                    imageUrl={val.imageUrl}
                                    productName={val.productName}
                                    price={val.price}
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => deletehandler(val.id)}
                            className='bg-red-700 px-6 py-4 rounded-lg mt-2'
                        >
                            Delete Product
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product