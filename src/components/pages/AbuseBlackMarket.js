import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
  InputLabel,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  AppBar,
} from "@material-ui/core";
var obj = require("../../ablion_data/items.json");
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

function AbuseBlackMarket(props) {
  const [searchValue, setSearchValue] = useState("T1_FARM_CARROT_SEED");
  const [searchLocation, setSearchLocation] = useState([]);
  const [checkedState, setCheckedState] = useState({
    martlock: false,
    arthursRest: false,
    blackMarket: false,
    bridgewatch: false,
    caerleon: false,
    forestCross: false,
    fortSterling: false,
    lymhurst: false,
    thetford: false,
  });
  const [state, setState] = React.useState({
    data: [],
  });

  const tableRef = React.createRef();

  const handleSearch = () => {
    if (Object.values(checkedState).indexOf(true) > -1) {
      // if there is at least one true city slected
      let tempArrayOfPlacesToSearch = "";
      arrayOfNamesOfPlaces.forEach((location, index) => {
        if (Object.values(checkedState)[index] === true) {
          // if that city is slected ( === true) then append it to the list of citys to search

          tempArrayOfPlacesToSearch =
            tempArrayOfPlacesToSearch + location + "%2C";
          // %2C === ","a comma, it is needed to add more then one city
        }
        if (index === arrayOfNamesOfPlaces.length - 1) {
          // if we have looped though the whole list then, run the search.
          console.log("fettching data");
          let url = `https://www.albion-online-data.com/api/v2/stats/prices/${searchValue}?locations=${tempArrayOfPlacesToSearch}`;
          fetch(url)
            .then((response) => response.json())
            .then((res) => {
              console.log("settings state");
              setState(() => {
                const data = [];
                data.push(...res);
                return { data };
              });
            });
        }
      });
    } else {
      // get with all citys
      console.log("getting all citys");
      let url = `https://www.albion-online-data.com/api/v2/stats/prices/${searchValue}`;

      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          setState(() => {
            const data = [];
            data.push(...res);
            return { data };
          });
        });
    }
  };

  useEffect(() => {
    var names = [];
    obj.map((e, i, y) => {
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

      //   console.log(e.LocalizedNames["EN-US"]);
    });

    setState({ data: names });
  }, []);

  const handleCheckBox = (e) => {
    setCheckedState({
      ...checkedState,
      [e.target.name]: e.target.checked,
    });
  };
  const loadNames = () => {
    var names = [];
    let limit = 0;
    state.data &&
      state.data.map((e, i) => {
        if (limit < 100) {
          limit = limit + 1;
          names.push(e.UniqueName);
        }
      });

    for (var index in state.data) {
      // console.log(data[index]);
      if (Object.values(state.data[index]).indexOf("FARM") > -1) {
        console.log("has test1");
      }
    }

    // TODO NEED TO GET ID'S TO MAKE CATOGORIZED FETCHED REQU TO ABUSES THE BLACK MARKET

    // for (var index in names) {
    //   //   console.log(names[index]);
    //   if (names[index].includes("LEATHER")) {
    //     console.log(names[index], index);
    //   }
    // }

    // console.log(names);
    // let url = `https://www.albion-online-data.com/api/v2/stats/prices/${names}?locations=black%20Market%2Ccaerleon`;

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setState(() => {
    //       const data = [];
    //       data.push(...res);
    //       return { data };
    //     });
    //   });
  };

  return (
    <Paper style={{ padding: "40px" }}>
      <AppBar style={{ paddingLeft: "80px" }}>
        <p>Black Market</p>
      </AppBar>
      <Button variant="contained" onClick={() => loadNames(props)}>
        abuse black market
      </Button>
      <div>
        <div>
          {
            //search box and search btn
          }
          <TextField
            id="standard-basic"
            label="Add Item ID"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            Search
          </Button>
        </div>
        <div>
          {
            //&*7&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            // list of checkboxes
          }

          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.martlock}
                    onChange={handleCheckBox}
                    name="martlock"
                  />
                }
                label="martlock"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.arthursRest}
                    onChange={handleCheckBox}
                    name="arthursRest"
                  />
                }
                label="Arthurs Rest"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.blackMarket}
                    onChange={handleCheckBox}
                    name="blackMarket"
                  />
                }
                label="Black Market"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.bridgewatch}
                    onChange={handleCheckBox}
                    name="bridgewatch"
                  />
                }
                label="Bridgewatch"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.caerleon}
                    onChange={handleCheckBox}
                    name="caerleon"
                  />
                }
                label="Caerleon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.forestCross}
                    onChange={handleCheckBox}
                    name="forestCross"
                  />
                }
                label="Forest Cross"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.fortSterling}
                    onChange={handleCheckBox}
                    name="fortSterling"
                  />
                }
                label="Fort Sterling"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.lymhurst}
                    onChange={handleCheckBox}
                    name="lymhurst"
                  />
                }
                label="Lymhurst"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.thetford}
                    onChange={handleCheckBox}
                    name="thetford"
                  />
                }
                label="Thetford"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
        </div>
      </div>

      <MaterialTable
        title="Price search"
        options={{
          sorting: true,
          // exportButton: true,
          search: true,
          filtering: true,
        }}
        actions={[
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => handleSearch(),
          },
        ]}
        data={state.data}
        columns={[
          { title: "item_id", field: "item_id" },
          { title: "city Name", field: "city" },
          { title: "quality", field: "quality", type: "numeric" },
          { title: "sell_price_min", field: "sell_price_min", type: "numeric" },
          { title: "sell_price_min_date", field: "sell_price_min_date" },
          { title: "sell_price_max", field: "sell_price_max" },
          { title: "sell_price_max_date", field: "sell_price_max_date" },
          { title: "buy_price_min", field: "buy_price_min" },
          { title: "buy_price_min_date", field: "buy_price_min_date" },
          { title: "buy_price_max", field: "buy_price_max" },
          { title: "buy_price_max_date", field: "buy_price_max_date" },
        ]}
      />
    </Paper>
  );
}

export default AbuseBlackMarket;
