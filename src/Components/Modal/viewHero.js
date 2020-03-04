import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";

import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import "./modal-styles.css";
import {
  CustomModalBody,
  ContentRows,
  CustomModalHeader,
  ImageHolder,
  DeleteIconContainer
} from "./viewHeroStyle.js";

export default class ViewHeroModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        centered
        dialogClassName="modal-90w"
        onHide={this.props.handleClose}
      >
        <CustomModalHeader>
          <ClearIcon
            className="close-modal"
            onClick={this.props.handleClose}
            style={{ fontSize: "18px", color: "#CCCCCC" }}
          />
        </CustomModalHeader>
        <CustomModalBody>
          <ContentRows>
            <ImageHolder src={this.props.selectedHero.avatar_url} />
          </ContentRows>
          <ContentRows weight={"bold"}>
            {this.props.selectedHero.full_name}
          </ContentRows>
          {this.props.selectedHero.type ? (
            <ContentRows>{this.props.selectedHero.type.name}</ContentRows>
          ) : (
            <div></div>
          )}

          <ContentRows>{this.props.selectedHero.description}</ContentRows>
          <ContentRows style={{ marginTop: "auto" }}>
            <DeleteIconContainer
              onClick={() => this.props.handleDelete(this.props.selectedHero)}
            >
              <DeleteIcon
                className="deleteIcon"
                style={{ color: "red", fontSize: "18px" }}
              />
            </DeleteIconContainer>
            <div
              style={{
                weight: "bold",
                fontSize: "14px",
                color: "red",
                userSelect: "none",
                pointer: "cursor"
              }}
            >
              Delete Hero
            </div>
          </ContentRows>
        </CustomModalBody>
      </Modal>
    );
  }
}
