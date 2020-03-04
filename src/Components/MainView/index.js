import React, { Component } from "react";

import Animations from "../../Utils/animations.js";
import ListView from "../ListView";
import ViewHeroModal from "../Modal/viewHero.js";
import AddHeroModal from "../Modal/addHero.js";
import {
  OuterContainer,
  Header,
  AddButton,
  LoadingSpinner,
  SearchField
} from "./mainViewStyles.js";
const BackendURL = "http://127.0.0.1:4000";

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {
      mainResponse: [],
      showViewModal: false,
      showAddModal: false,
      selectedHero: {},
      heroTypes: {},
      searchField: "",
      filteredMainResponse: []
    };

    this.fetchAllHeroes = this.fetchAllHeroes.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
    this.addNewHero = this.addNewHero.bind(this);
  }

  componentDidMount() {
    let fetchPromise = fetch(BackendURL + "/heroes/");
    fetchPromise
      .then(response => response.json())
      .then(response => {
        /* Loading all hero types on load. */
        var heroTypes = response.map(value => ({
          id: value.type.id,
          name: value.type.name
        }));

        /* Filtering all unique types.*/
        let uniqueArray = Array.from(
          new Set(heroTypes.map(JSON.stringify))
        ).map(JSON.parse);

        this.setState({
          mainResponse: response,
          heroTypes: uniqueArray
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteHero(hero) {
    let deletePromise = fetch(BackendURL + "/heroes/" + hero.id, {
      method: "DELETE"
    });

    deletePromise.then(response => {
      if (!response.ok) throw new Error(response.status);
      else return deletePromise;
    });
    return deletePromise;
  }

  addNewHero(avatar) {
    let addPromise = fetch(BackendURL + "/heroes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(avatar)
    });

    addPromise.then(response => {
      if (!response.ok) throw new Error(response.status);
      else return addPromise;
    });
    return addPromise;
  }

  fetchAllHeroes() {
    let fetchPromise = fetch(BackendURL + "/heroes/");
    fetchPromise
      .then(response => response.json())
      .then(response => {
        this.setState({
          mainResponse: response
        });
      })
      .catch(err => {
        console.log(err);
      });
    return fetchPromise;
  }

  handleHeroDelete = hero => {
    this.deleteHero(hero)
      .then(() => {
        this.fetchAllHeroes().then(() => {
          this.setState({
            showViewModal: false
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleAddNewAvatar = avatar => {
    this.addNewHero(avatar)
      .then(() => {
        this.fetchAllHeroes().then(() => {
          this.setState({
            showAddModal: false
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleHeroAdd = () => {
    this.setState({
      showAddModal: true
    });
  };

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  viewAvatar = index => {
    let hero = this.state.mainResponse.filter(function(hero) {
      if (hero.id === index) {
        return hero;
      } else {
        return null;
      }
    });

    this.setState({
      showViewModal: true,
      selectedHero: hero[0]
    });
  };

  render() {
    const { mainResponse, searchField } = this.state;
    const filterdList = mainResponse.filter(response =>
      response.full_name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <OuterContainer>
        <Header>
          <AddButton
            onClick={this.handleHeroAdd}
            whileTap={Animations.buttonClick.whileTap}
            transition={Animations.buttonClick.transition}
          >
            + Add Hero
          </AddButton>
          <SearchField
            type="search"
            placeholder="Search Avatar"
            onChange={this.handleSearch}
          ></SearchField>
        </Header>
        {filterdList.length > 0 ? (
          <>
            <ListView heroes={filterdList} handleOnClick={this.viewAvatar} />
          </>
        ) : (
          <LoadingSpinner
            animate={Animations.loading.animate}
            transition={Animations.loading.transition}
          >
            {" "}
            Loading ...{" "}
          </LoadingSpinner>
        )}
        <ViewHeroModal
          show={this.state.showViewModal}
          selectedHero={this.state.selectedHero}
          handleClose={() => this.setState({ showViewModal: false })}
          handleDelete={this.handleHeroDelete}
        />
        <AddHeroModal
          show={this.state.showAddModal}
          handleClose={() => this.setState({ showAddModal: false })}
          heroTypes={this.state.heroTypes}
          handleAddNewAvatar={this.handleAddNewAvatar}
        />
      </OuterContainer>
    );
  }
}
