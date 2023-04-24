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
                    <div className='text-center border_hover selected_border cursor-pointer'>
                        <FontAwesomeIcon icon={faFilm} className='text-slate-400' />
                        <p className='text-[12px]'>All Category</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer'>
                        <FontAwesomeIcon icon={faImage} className='text-slate-400' />
                        <p className='text-[12px]'>Amezing Views</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer '>
                        <FontAwesomeIcon icon={faHouse} className='text-slate-400' />
                        <p className='text-[12px]'>Farms</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer'>
                        <FontAwesomeIcon icon={faPlay} className='text-slate-400' />
                        <p className='text-[12px]'>Play</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer'>
                        <FontAwesomeIcon icon={faSeedling} className='text-slate-400' />
                        <p className='text-[12px]'>Treehouse</p>
                    </div>
                </div>

                <div className="flex justify-around flex-wrap">
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faPooBolt} className='text-slate-400' />
                        <p className='text-[12px]'>Amezing Pools</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faPooBolt} className='text-slate-400' />
                        <p className='text-[12px]'>Beach Font</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faWaterLadder} className='text-slate-400' />
                        <p className='text-[12px]'>Lack Front</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faPooBolt} className='text-slate-400' />
                        <p className='text-[12px]'>Cabins</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faCannabis} className='text-slate-400' />
                        <p className='text-[12px]'>Countryside</p>
                    </div>
                </div>


                <div className="flex justify-around flex-wrap">
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faMoneyBill} className='text-slate-400' />
                        <p className='text-[12px]'>Luxury</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faNewspaper} className='text-slate-400' />
                        <p className='text-[12px]'>Tranding</p>
                    </div>
                    <div className='text-center border_hover  cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faShip} className='text-slate-400' />
                        <p className='text-[12px]'>Islands</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faPooBolt} className='text-slate-400' />
                        <p className='text-[12px]'>Disigner Homes</p>
                    </div>
                    <div className='text-center border_hover cursor-pointer mt-4'>
                        <FontAwesomeIcon icon={faPlay} className='text-slate-400' />
                        <p className='text-[12px]'>Historical Homes</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CategoryModal;