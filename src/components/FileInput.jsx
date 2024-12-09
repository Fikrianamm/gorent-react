import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { TbPhotoPlus } from "react-icons/tb";

const FileInputContainer = styled.div`
  display: flex;
  gap: 16px; 
  flex-wrap: wrap;
`;

const FileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  width: 100px;
  height: 120px;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #007bff;
  }
`;

const HiddenInput = styled(Form.Control)`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const PlaceholderIcon = styled(TbPhotoPlus)`
  font-size: 32px;
  color: #ccc;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const PlaceholderText = styled.span`
  font-size: 12px;
  color: #666;
`;

const FileInput = ({imageProduct}) => {
  const [images, setImages] = useState(imageProduct || [null, null, null, null, null]);

  const handleFileChange = (index, event) => {
    const files = [...images];
    files[index] = event.target.files[0] || null;
    setImages(files);
  };

  useEffect(() => {
    // Clean up object URLs when component unmounts
    return () => {
      images.forEach((image) => {
        if (image && typeof image !== "string") {
          URL.revokeObjectURL(image);
        }
      });
    };
  }, [images]);

  return (
    <FileInputContainer>
      {images.map((image, index) => (
        <FileBox key={index}>
          <HiddenInput
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(index, e)}
          />
          {image ? (
            <PreviewImage 
            src={typeof image === "string" ? image : URL.createObjectURL(image)}
            alt={`Foto ${index + 1}`} />
          ) : (
            <>
              <PlaceholderIcon />
              <PlaceholderText>
                {index === 0 ? "Foto Utama" : `Foto ${index + 1}`}
              </PlaceholderText>
            </>
          )}
        </FileBox>
      ))}
    </FileInputContainer>
  );
};

export default FileInput;
