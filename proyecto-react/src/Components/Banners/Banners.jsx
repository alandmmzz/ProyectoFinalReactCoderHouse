import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import banner1 from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner2.png";

export default function Banners() {
    
    return (
        <>
        <div className='container p-0'>
        <div className='row m-0'>
            <div className='col-8 p-0 m-0'>
                <img className='rounded-4 w-100 h-100' src={banner1} alt="" />
            </div>
            <div className='col-4 p-0 ps-3 m-0'>
                <img className='rounded-4 w-100 h-100' src={banner2} alt="" />
            </div>
        </div>
        </div>
        </>
    )
}
