// import { GETSettings } from "../utiles/PointAPI";
// export const settingDefaultState = async (store, value) => {
//   var t = (store.state.defaultDuration = await GETSettings().then((data) => {
//     return data.defaultDuration;
//   }));

//   await store.setState({ t });
// };

// export const addNamesToTable = (store, value) => {
//   const thing = (store.state.defaultDuration = value);
//   store.setState({ thing });
// };

var NamesObj = require("../../ablion_data/items.json");
export const setDefaultNameTable = (store, value) => {
  var names = [];
  NamesObj.map((e, i, y) => {
    if (e.LocalizedNames != null) {
      names.push({
        UniqueName: e.UniqueName,
        LocalizedNames: e.LocalizedNames["EN-US"],
      });
    } else {
      names.push({
        UniqueName: e.UniqueName,
      });
    }
  });
  const AllNames = (store.state.defaultNamesData = names);
  // console.log(ALlNames);

  store.setState(AllNames);
};

export const setSlectedLocation = (store, value) => {
  let slectedLocation = (store.state.slectedLocation = value);

  store.setState(slectedLocation);
  console.log(store.state.slectedItems);
};

export const setSlectedItems = (store, value) => {
  // let slectedItems = (store.state.slectedItems = value);

  store.setState((store.state.slectedItems = value));
};

export const searchItems = (store, value) => {
  const { state } = store;
  const arrayOfNamesOfPlaces = [
    "martlock",
    "arthurs%20Rest",
    "black%20Market",
    "bridgewatch",
    "caerleon",
    "forest%20Cross",
    "fort%20Sterling",
    "lymhurst",
    "thetford",
  ];

  if (Object.values(state.slectedLocation).indexOf(true) > -1) {
    // if there is at least one true city slected
    let tempArrayOfPlacesToSearch = "";
    arrayOfNamesOfPlaces.forEach((location, index) => {
      if (Object.values(state.slectedLocation)[index] === true) {
        // if that city is slected ( === true) then append it to the list of citys to search

        tempArrayOfPlacesToSearch =
          tempArrayOfPlacesToSearch + location + "%2C";
        // %2C === ","a comma, it is needed to add more then one city
      }
      if (index === arrayOfNamesOfPlaces.length - 1) {
        // if we have looped though the whole list then, run the search.
        console.log("fettching data");
        let url = `https://www.albion-online-data.com/api/v2/stats/prices/${state.slectedItems}?locations=${tempArrayOfPlacesToSearch}`;
        fetch(url)
          .then((response) => response.json())
          .then((res) => {
            console.log("settings state");
            store.setState((state.itemData = res));
          });
      }
    });
  } else {
    // get with all citys
    console.log("getting all citys");
    let url = `https://www.albion-online-data.com/api/v2/stats/prices/${state.slectedItems}`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        store.setState((state.itemData = res));
      });
  }

  // console.log(state.itemData);
};
