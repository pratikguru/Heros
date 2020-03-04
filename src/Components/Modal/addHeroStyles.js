import styled from "styled-components";
import media from "../../Utils/media.js";
import Modal from "react-bootstrap/Modal";

export const CustomModalBody = styled(Modal.Body)`
  border: none;
  display: flex;
  flex-direction: column;
  ${media.phone`
    height: 93vh;
    max-height: 93vh;
  `}
`;

export const ContentRows = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: ${props => (props.position ? props.position : "center")};
  height: auto;
  padding: 5px;
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  font-size: ${props => (props.size ? props.size : "16px")};
  flex-direction: column;
`;

export const CustomModalHeader = styled(Modal.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: none;
`;

export const ImageHolder = styled.img`
  height: 100px;
  width: 100px;
`;

export const AvatarURLInput = styled.input`
  width: 100%;
  max-width: 100%;
  border-radius: 6px;
  border: none;
  background-color: #0a08080f;
  height: 35px;
  outline: none;
  padding: 8px;
`;

export const AvatarNameInput = styled.input`
  width: 100%;
  max-width: 100%;
  border-radius: 6px;
  border: none;
  background-color: #0a08080f;
  height: 35px;
  outline: none;
  padding: 8px;
`;

export const AvatarTypeSelect = styled.select`
  width: 100%;
  max-width: 100%;
  border-radius: 6px;
  border: none;
  background-color: #0a08080f;
  height: 35px;
  outline: none;
  padding: 8px;
  color: grey;
  sfont-size: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  border-radius: 6px;
  border: none;
  background-color: #0a08080f;
  outline: none;
  padding: 8px;
`;

export const AddButton = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 100%;
  color: white;
  background-color: ${props => (props.disabled ? "#1bb11b52" : "#1bb11b")};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  text-selection: none;
  cursor: pointer;

  ${media.phone`
    width : 100%;
  `}
`;

AddButton.displayName = "AddButton";
AvatarURLInput.displayName = "AvatarURLInput";
TextArea.displayName = "TextArea";
AvatarTypeSelect.displayName = "AvatarTypeSelect";
AvatarNameInput.displayName = "AvatarNameInput";
