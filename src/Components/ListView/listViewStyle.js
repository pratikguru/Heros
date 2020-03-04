import styled from "styled-components";
import media from "../../Utils/media.js";
import { motion } from "framer-motion";
export const TableContainer = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 1px;
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 2px;
  font-weight: bold;
  color: grey;
  font-size: 15px;

  ${media.phone`
    display : none;
  `}
`;

export const TableBody = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: block;
  flex-direction: column;
  overflow-y: auto;
  padding: 1px;
  flex-wrap: nowrap;
  background-color: #eaeaea;
  border-radius: 5px;
`;

export const TableRowsDesktop = styled(motion.div)`
  width: auto;
  height: 70px;
  display: flex;
  padding: 2px;
  margin: 4px;
  border-radius: 4px;
  background-color: #f3f3f3;

  ${media.phone`
    display : none;
  `}
`;

export const TableRowsMobile = styled(motion.div)`
  ${media.phone`
    width : auto;
    height : 110px;
    display:  flex;
    margin: 8px;
    padding : 2px;
    border-radius : 4px;
    background-color: #f3f3f3;
    align-items : center;
    flex-direction : column;
    padding-bottom : 10px;
    `}

  display : none;
`;

export const TableCells = styled.div`
  width: fill-available;
  height: auto;
  display: flex;
  align-items: center;
  margin: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
`;

export const ImageHolder = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 10px;
  margin-right: 25px;
`;

export const ImageDescriptor = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

TableBody.displayName = "TableBody";
TableCells.displayName = "TableCells";
TableRowsDesktop.displayName = "TableRowDesktop";
