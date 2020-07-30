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

  store.setState(AllNames);
};

export const setSlectedLocation = (store, value) => {
  let slectedLocation = (store.state.slectedLocation = value);

  store.setState(slectedLocation);
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

export const setAvageVolume = async (store, value) => {
  let avageURL = `https://www.albion-online-data.com/api/v2/stats/history/${value}?time-scale=1&locations=Caerleon`;
  let x = 0;
  await fetch(avageURL)
    .then((res) => res.json())
    .then((res) => {
      var tempArr = [];
      res[0].data.forEach((elm) => {
        tempArr.push(elm.item_count);
      });
      x = tempArr.reduce((a, b) => a + b, 0) / tempArr.length;
    });
  await store.setState((store.state.avageVolume = x));
};
