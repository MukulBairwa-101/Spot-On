import React,{useState} from 'react'
import Modal from 'react-modal';
import {VscClose} from "react-icons/vsc"
import Loader from "../Loader";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#303030',

      width: '90%',
    },
  };

const Images = ({images}) => {

    const [modalImage,setModalImage]= useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal =()=> {
        setIsOpen(true);
      }

    const closeModal =()=> {
        setIsOpen(false);
      }

    const getImage= (idx)=>{
        const tempData = images.filter(img=>img.id === idx);
        setModalImage(tempData);
        openModal();
    }
    console.log('modalImage',modalImage);
    console.log('images',images);

    return (
        <>
        <div className="modal_wrapper">

         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
          <VscClose onClick={closeModal} className="close" />
          <div className="modal_image_wrapper">
              {modalImage.length !== 0 ? <img src={modalImage[0].urls.regular} alt="" className="one_image" /> :<Loader />}

          </div>
      </Modal>
        </div>
        <div className="images_wrapper">
            {
                images.map((image)=>{
                    return(<img src= {image.urls.thumb} onClick={()=>getImage(image.id)}  className="image" alt="" key ={image.id} />)
                    
                })
            }
        </div>
        </>
    )
}

export default Images;
