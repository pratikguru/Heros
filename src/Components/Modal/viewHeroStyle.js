import styled from "styled-components";
import media from "../../Utils/media.js";
import Modal from "react-bootstrap/Modal";

export const CustomModalBody = styled(Modal.Body)`
  border: none;
  display: flex;
  flex-direction: column;
  ${media.phone`
    max-height : 100%;
    height     : 100%;
  `}
`;

export const ContentRows = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 5px;
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  font-size: ${props => (props.size ? props.size : "16px")};
`;

export const CustomModalHeader = styled(Modal.Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  border: none;
`;

export const ImageHolder = styled.img`
  height: 100px;
  width: 100px;
`;

export const DeleteIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  padding: 5px;
`;

DeleteIconContainer.displayName = "DeleteIconContainer";
ContentRows.displayName = "ContentRows";
