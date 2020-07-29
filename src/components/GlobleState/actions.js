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
