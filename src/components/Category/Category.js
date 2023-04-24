import React from 'react'
import { showCategoryModal } from '../../redux/StateAction/GlobalAction';
import CategoryModal from '../Modal/CategoryModal';

const Category = () => {

    console.log(showCategoryModal)
    const openCatModal = () => {
        showCategoryModal(true);
    }
    return (
        <>
            <button className='rounded-full bg-red-500 responsive_Cat text-white py-[10px] px-[15px] fixed bottom-[12%]' onClick={openCatModal}>Category  <span className='animate-pulse ml-2'>&#x2756;</span></button>
            <CategoryModal />
        </>
    )
}

export default Category