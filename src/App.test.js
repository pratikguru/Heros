import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ListView from "./Components/ListView";
import MainView from "./Components/MainView";
import ViewHeroModal from "./Components/Modal/viewHero";
import ViewAddModal from "./Components/Modal/addHero";

it("Renders List View successfully.", () => {
  const wrapper = render(
    <ListView
      heroes={[
        {
          full_name: "sd",
          avatar_url: "dfdf",
          type: { id: "ddfdf", name: "dfdf" },
          description: "sdsdsD"
        },
        {
          full_name: "sd",
          avatar_url: "dfdf",
          type: { id: "ddfdf", name: "dfdf" },
          description: "sdsdsD"
        }
      ]}
      handleOnClick={() => {}}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("Renders row contents of list view correctly", () => {
  const wrapper = mount(
    <ListView
      heroes={[
        {
          full_name: "sd",
          avatar_url: "dfdf",
          type: { id: "ddfdf", name: "dfdf" },
          description: "sdsdsD"
        }
      ]}
      handleOnClick={() => {}}
    />
  );

  wrapper
    .find("TableRowDesktop")
    .first()
    .find("TableCells")
    .first()
    .text();
});

it("Listens for view modal click correctly from list view.", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ListView
      heroes={[
        {
          full_name: "sd",
          avatar_url: "dfdf",
          type: { id: "ddfdf", name: "dfdf" },
          description: "sdsdsD"
        }
      ]}
      handleOnClick={spy}
    />
  );

  wrapper
    .find("TableRowDesktop")
    .first()
    .simulate("click");
  expect(spy.calledOnce).toBe(true);
});

it("Listens for view hero modal to popup.", () => {
  const wrapper = mount(<ViewHeroModal show={true} selectedHero={{}} />);
  const overlay = wrapper.find(".modal-content");
  expect(overlay).toHaveLength(1);
});

it("Listens for view hero modal close click correctly.", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ViewHeroModal show={true} selectedHero={{}} handleClose={spy} />
  );

  wrapper
    .find(".close-modal")
    .first()
    .simulate("click");

  expect(spy.calledOnce).toBe(true);
});

it("Listens for Add Hero to popup correctly.", () => {
  const wrapper = mount(
    <ViewAddModal show={true} handleClose={() => {}} heroTypes={[]} />
  );
  const overlay = wrapper.find(".modal-content");
  expect(overlay).toHaveLength(1);
});

it("Listens for Add Hero to close correctly.", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ViewAddModal show={true} handleClose={spy} heroTypes={[]} />
  );

  wrapper
    .find(".close-modal")
    .first()
    .simulate("click");
  expect(spy.calledOnce).toBe(true);
});

it("Listens for Add hero modal to have forms.", () => {
  const wrapper = mount(
    <ViewAddModal
      show={true}
      handleClose={() => {}}
      heroTypes={[{ name: "human" }, { name: "animal" }]}
    />
  );

  expect(wrapper.find("AvatarURLInput").exists()).toBe(true);
  expect(wrapper.find("AvatarNameInput").exists()).toBe(true);
  expect(wrapper.find("AvatarTypeSelect").exists()).toBe(true);
});

it("Checking save button is disabled before filling the form", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ViewAddModal
      show={true}
      handleClose={spy}
      heroTypes={[{ name: "human" }]}
    />
  );

  wrapper
    .find("AddButton")
    .first()
    .simulate("click");

  console.log(spy.calledOnce);
  expect(spy.calledOnce).toBe(false);
});

it("Check for activation of save button on valid form.", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ViewAddModal
      show={true}
      heroTypes={[
        { id: "1", name: "human" },
        { id: "2", name: "animal" }
      ]}
      handleAddNewAvatar={spy}
    />
  );

  wrapper.find("AvatarURLInput").simulate("change", {
    target: {
      value: "lol"
    }
  });

  wrapper.find("AvatarNameInput").simulate("change", {
    target: {
      value: "name"
    }
  });

  wrapper.find("AvatarTypeSelect").simulate("change", {
    target: {
      value: "2"
    }
  });

  wrapper.find("TextArea").simulate("change", {
    target: {
      value: "lots of information"
    }
  });

  wrapper
    .find("AddButton")
    .first()
    .simulate("click");

  expect(spy.calledOnce).toBe(true);
});

it("Check for close modal on delete", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <ViewHeroModal
      show={true}
      selectedHero={{
        full_name: "sd",
        avatar_url: "dfdf",
        type: { id: "ddfdf", name: "dfdf" },
        description: "sdsdsD"
      }}
      handleClose={() => {}}
      handleDelete={spy}
    />
  )
    .find("DeleteIconContainer")
    .simulate("click");

  expect(spy.calledOnce).toBe(true);
});
