"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imginput = useRef();
  const [imgpicked, setImgPicked] = useState();

  function handlePickClick() {
    imginput.current.click();
  }
  function handleImgChanged(e) {
    const file = e.target.files[0];

    if (!file) {
      setImgPicked(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImgPicked(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imgpicked && <p>No Image Picked Yet !!</p>}
          {imgpicked && (
            <Image src={imgpicked} alt='the image selected by the user' fill />
          )}
        </div>
        <input
          ref={imginput}
          className={classes.input}
          type='file'
          id='image'
          accept='image/png , image-jpeg'
          name={name}
          onChange={handleImgChanged}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
