import { Button } from "@mui/material";
import React, { useState } from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import storage from "./firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
// import Loading from "./Loading";
// import Uploaded from "./Uploaded";

const ImageUploader = () => {
  //   const [imagesFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const OnFileUploadToFirebase = (e) => {
    const file = e.target.files[0];

    console.log("アップロード処理");
    const storageRef = ref(storage, "image/" + file.name);
    //"file comes from FileAPI(file)
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setIsUploaded(true);
      }
    );
  };

  return (
    <>
      {loading ? (
        //Loadingコンポーネント作成
        <h2> loading中・・・</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>アップロードに成功しました！</h2>
          ) : (
            // <Uploaded downLoadURL={downloadURL} setIsUploaded={setIsUploaded} />
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img src={ImageLogo} alt="imagelogo" />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input
                  type="file"
                  className="imageUploadInput"
                  multiple
                  name="imageURL"
                  accept=".png, .jpeg, .jpg"
                  onChange={OnFileUploadToFirebase}
                />
              </div>
              <p>または</p>
              <Button variant="contained">
                ファイルを選択
                <input
                  type="file"
                  className="imageUploadInput"
                  onChange={OnFileUploadToFirebase}
                />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUploader;