import Modal from 'react-bootstrap/Modal'; import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faFilm, faHouse, faImage, faMoneyBill, faNewspaper, faPlay, faPooBolt, faSeedling, faShip, faWaterLadder } from '@fortawesome/free-solid-svg-icons';
import { showCategoryModal } from '../../redux/StateAction/GlobalAction';
import { useSelector } from 'react-redux';

const CategoryModal = () => {
    const { showCategoryModal: showCatModal } = useSelector((state) => state?.globalData);

    const handleClose = () => {
        showCategoryModal(false);
    }
    return (
        <Modal
            show={showCatModal} onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title className='w-[100%] text-center'>
                    <p className='text-[18px] text-red-600'>Category List</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className=''>
                <div className="flex justify-around flex-wrap">
                    <div className='text-center border_hover mb-4 selected_border cursor-pointer'>
                        <img src="../images/icon (10).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>All Category</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer'>
                        <img src="../images/icon (10).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Amezing Views</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer '>
                        <img src="../images/icon (9).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Farms</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer'>
                        <img src="../images/icon (7).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Play</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer'>
                        <img src="../images/icon (8).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Treehouse</p>
                    </div>
                </div>

                <div className="flex justify-around flex-wrap">
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (6).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Amezing Pools</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer mt-4'>
                        <img src="../images/icon (6).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Beach Font</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer mt-4'>
                        <img src="../images/icon (5).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Lack Front</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (4).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Cabins</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (6).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Countryside</p>
                    </div>
                </div>


                <div className="flex justify-around flex-wrap">
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (3).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Luxury</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer mt-4'>
                        <img src="../images/icon (2).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Tranding</p>
                    </div>
                    <div className='text-center border_hover mb-4  cursor-pointer mt-4'>
                        <img src="../images/icon (1).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Islands</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (6).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Disigner Homes</p>
                    </div>
                    <div className='text-center border_hover mb-4 cursor-pointer mt-4'>
                        <img src="../images/icon (6).png" alt="" className="m-auto" />
                        <p className='text-[12px] mb-0'>Historical Homes</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CategoryModal;