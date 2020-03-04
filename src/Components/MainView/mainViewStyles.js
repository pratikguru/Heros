import styled from "styled-components";
import { motion } from "framer-motion";
import media from "../../Utils/media.js";
export const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 10px;
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  height: auto;
  padding: 10px;
  justify-content: flex-start;

  ${media.phone`
     justify-content: center;
  `}
`;

export const AddButton = styled(motion.div)`
  border-radius: 5px;
  height: 40px;
  width: 120px;
  color: white;
  background-color: #1bb11b;
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

export const LoadingSpinner = styled(motion.div)`
  width: 300px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`;

export const SearchField = styled.input`
  width: 250px;
  max-width: 250px;
  border-radius: 6px;
  border: none;
  background-color: #0a08080f;
  height: 40px;
  outline: none;
  padding: 8px;
  margin-left: 10px;
`;
AddButton.displayName = "AddButton";
