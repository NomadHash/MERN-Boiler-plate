import React, { useState } from 'react';
import Axios from 'axios';

const FileUpload = (props) => {
  const [Images, setImages] = useState();

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
  return (
    <>
      <div>프로필 사진</div>

      <form onSubmit={uploadHandler} encType="multipart/form-data">
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
        ></input>
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default FileUpload;
