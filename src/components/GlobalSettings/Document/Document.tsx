import { useState, FC } from 'react';
import ImageUploading from 'react-images-uploading';

import AddIcon from '../../../assets/images/globalSettings/add.svg';
import PdfIcon from '../../../assets/images/globalSettings/pdf.png';

import styles from './document.module.scss';

interface IProps {
  title: string;
}

const Document: FC<IProps> = ({ title }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>{title}</p>
      <ImageUploading
        multiple
        value={images}
        allowNonImageType={true}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={['jpg', 'png', 'pdf']}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={styles.item}>
            <button
              className={styles.button}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={() => {
                onImageRemoveAll();
                onImageUpload();
              }}
              {...dragProps}
            >
              <span className={styles.icon}>
                <AddIcon />
              </span>
              Browse file
            </button>
            &nbsp;
            {images.length > 0 ? (
              imageList.map((image, index) => (
                <div key={index} className={styles.result}>
                  {image?.file?.type === 'application/pdf' && (
                    <span className={styles.icon}>
                      <img src={PdfIcon.src} alt="" />
                    </span>
                  )}
                  {image?.file?.name}
                </div>
              ))
            ) : (
              <p className={styles.nofile}>No file selected</p>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Document;
