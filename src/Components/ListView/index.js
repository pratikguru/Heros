import React, { Component } from "react";
import Animations from "../../Utils/animations.js";

import {
  TableContainer,
  TableHeader,
  Header,
  TableBody,
  TableRowsDesktop,
  TableRowsMobile,
  TableCells,
  ImageHolder,
  ImageDescriptor
} from "./listViewStyle.js";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default class ListView extends Component {
  rowClickHandler = index => {
    this.props.handleOnClick(index);
  };

  render() {
    return (
      <TableContainer>
        <TableHeader>
          <Header>Heroes</Header>
          <Header>Type</Header>
          <Header>Description</Header>
        </TableHeader>

        <TableBody variants={container} initial="hidden" animate="visible">
          {this.props.heroes.map((value, index) => (
            <div key={index}>
              <TableRowsDesktop
                key={index}
                onClick={() => this.rowClickHandler(value.id)}
                variants={item}
                whileHover={Animations.rowClick.whileHover}
                whileTap={Animations.rowClick.whileTap}
              >
                <TableCells>
                  <ImageHolder src={value.avatar_url}></ImageHolder>
                  <ImageDescriptor>{value.full_name}</ImageDescriptor>
                </TableCells>
                <TableCells>{value.type.name}</TableCells>
                <TableCells>{value.description}</TableCells>
              </TableRowsDesktop>
              <TableRowsMobile
                onClick={() => this.rowClickHandler(value.id)}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    padding: "10px",
                    paddingBottom: "10px"
                  }}
                >
                  <ImageHolder src={value.avatar_url}></ImageHolder>
                  <div>
                    <ImageDescriptor>{value.full_name}</ImageDescriptor>
                    <div>{value.type.name}</div>
                  </div>
                </div>
                <TableCells>{value.description}</TableCells>
              </TableRowsMobile>
            </div>
          ))}
        </TableBody>
      </TableContainer>
    );
  }
}
