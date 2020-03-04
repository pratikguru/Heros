import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ClearIcon from "@material-ui/icons/Clear";
import Animations from "../../Utils/animations.js";
import "./modal-styles.css";

import {
  CustomModalBody,
  ContentRows,
  CustomModalHeader,
  ImageHolder,
  AvatarURLInput,
  AvatarNameInput,
  AvatarTypeSelect,
  TextArea,
  AddButton
} from "./addHeroStyles.js";

export default class ViewAddModal extends Component {
  constructor() {
    super();
    this.state = {
      avatarURL: "https://img.icons8.com/dotty/80/000000/profile-face.png",
      avatarFullName: "",
      selectedAvatar: "-1",
      avatarDescription: ""
    };

    this.validationCheck = this.validationCheck.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        avatarURL: "https://img.icons8.com/dotty/80/000000/profile-face.png",
        avatarFullName: "",
        selectedAvatar: "-1",
        avatarDescription: ""
      });
    }
  }

  handleFormChange = (state, e) => {
    /* A simpler method to handle events. */

    this.setState(
      {
        [state]: e.target.value
      },
      () => {
        this.setState({
          disabled: this.validationCheck()
        });
      }
    );
  };

  handleHeroAdd = () => {
    this.props.handleAddNewAvatar({
      avatar_url: this.state.avatarURL,
      full_name: this.state.avatarFullName,
      description: this.state.avatarDescription,
      type: this.state.selectedAvatar
    });
  };

  validationCheck() {
    if (
      this.state.selectedAvatar === "-1" ||
      this.state.avatarFullName === "" ||
      this.state.avatarURL ===
        "https://img.icons8.com/dotty/80/000000/profile-face.png" ||
      this.state.avatarDescription === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        centered
        dialogClassName="modal-90w"
        onHide={this.props.handleClose}
      >
        <CustomModalHeader>
          <div style={{ fontWeight: "bold" }}>Add Hero </div>
          <ClearIcon
            className="close-modal"
            onClick={this.props.handleClose}
            style={{ fontSize: "18px", color: "#CCCCCC" }}
          />
        </CustomModalHeader>
        <CustomModalBody>
          <ContentRows position={"flex-start"}>
            <ImageHolder src={this.state.avatarURL} />
          </ContentRows>

          <ContentRows>
            <ContentRows position={"flex-start"} style={{ color: "#a2a8b6" }}>
              Avatar URL
            </ContentRows>
            <AvatarURLInput
              type="text"
              onChange={e => this.handleFormChange("avatarURL", e)}
            />
          </ContentRows>
          <ContentRows>
            <ContentRows position={"flex-start"} style={{ color: "#a2a8b6" }}>
              Full Name
            </ContentRows>
            <AvatarNameInput
              type="text"
              onChange={e => this.handleFormChange("avatarFullName", e)}
            />
          </ContentRows>
          <ContentRows>
            <ContentRows position={"flex-start"} style={{ color: "#a2a8b6" }}>
              Type
            </ContentRows>
            {this.props.heroTypes.length > 0 ? (
              <AvatarTypeSelect
                onChange={e => this.handleFormChange("selectedAvatar", e)}
              >
                <option value={-1}> Select Type </option>
                {this.props.heroTypes.map((value, index) => (
                  <option key={index} value={value.id}>
                    {" "}
                    {value.name}{" "}
                  </option>
                ))}
              </AvatarTypeSelect>
            ) : (
              <div></div>
            )}
          </ContentRows>
          <ContentRows>
            <ContentRows position={"flex-start"} style={{ color: "#a2a8b6" }}>
              Description
            </ContentRows>
            <TextArea
              rows="4"
              col="50"
              onChange={e => this.handleFormChange("avatarDescription", e)}
            ></TextArea>
          </ContentRows>
          <ContentRows>
            <AddButton
              onClick={
                this.state.disabled
                  ? this.handleHeroAdd
                  : e => e.preventDefault()
              }
              whileTap={Animations.buttonClick.whileTap}
              transition={Animations.buttonClick.transition}
              disabled={!this.state.disabled}
            >
              Save
            </AddButton>
          </ContentRows>
        </CustomModalBody>
      </Modal>
    );
  }
}
