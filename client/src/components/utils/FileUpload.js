import React, { useState } from 'react';
import Axios from 'axios';

// CSS-library
import styled from 'styled-components';

const FileUpload = (props) => {
  //State-Hook
  const [Images, setImages] = useState();
  const [previewImg, setPreviewImg] = useState('');

  const uploadHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('profile_img', event.target.profile_img.files[0]);
    console.log(event.target.profile_img.files[0]);
    Axios.post('/api/users/upload', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log(response);
    });
  };

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file, reader);
    reader.onloadend = () => {
      setPreviewImg({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  let profile_preview = null;
  if (previewImg !== '') {
    profile_preview = (
      <div>
        <img
          className="profile_preview"
          src={previewImg.previewURL}
          style={{ height: '11vw' }}
        ></img>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={uploadHandler} encType="multipart/form-data">
        <div>
          <FakeUploadBtn>{profile_preview}</FakeUploadBtn>
          <UploadButton
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            placeholder="업로드"
            onChange={handleFileOnChange}
          ></UploadButton>
        </div>
        <button type="submit">업로드</button>
      </form>
    </>
  );
};

// Styled-Component

const FakeUploadBtn = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 10vw;
  height: 10vw;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const UploadButton = styled.input`
  position: relative;
  margin-right: 1px;
`;

export default FileUpload;
