import React, { useState, useRef, useCallback } from "react";
import type { Crop, PixelCrop } from "react-image-crop";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Wrapper } from "./styled";

interface CropFileInputProps {
  onCropComplete: (url: string, blob: Blob) => void;
}

const CropFileInput: React.FC<CropFileInputProps> = ({ onCropComplete }) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });

  const [image, setImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onImageLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getCroppedImage = useCallback(() => {
    if (!imageRef.current || !crop.width || !crop.height) return;

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const pixelCrop = crop as PixelCrop;

    canvas.width = pixelCrop.width * scaleX;
    canvas.height = pixelCrop.height * scaleY;

    ctx.drawImage(
      imageRef.current,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY
    );

    const croppedDataUrl = canvas.toDataURL("image/png");

    canvas.toBlob((blob) => {
      if (blob) {
        onCropComplete(croppedDataUrl, blob);
      }
    }, "image/png");
  }, [crop, onCropComplete]);

  return (
    <Wrapper>
      <input
        type="file"
        accept="image/*"
        onChange={onImageLoad}
        id="cropit"
        style={{ display: "none" }}
      />
      <label htmlFor="cropit" className="button-transparent">
        Загрузить файл
      </label>
      <div
        style={{
          color: "rgb(143, 150, 163)",
          fontWeight: 700,
          fontSize: "0.875rem",
          lineHeight: "1.71429",
          marginLeft: 15,
          marginBottom: 24,
        }}
      >
        После загрузки файла - выберите зону, которая будет отображаться на
        странице.
      </div>
      {image && (
        <>
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img ref={imageRef} src={image} alt="Crop preview" />
          </ReactCrop>
          <button
            className="button-filled"
            onClick={getCroppedImage}
            style={{ marginTop: 8 }}
          >
            Сохранить
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default CropFileInput;
