import React, { useState } from "react";
import useGlobal from "../GlobleState/store";
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
} from "@material-ui/core";

function SelectLocation() {
  const [globalState, globalActions] = useGlobal();

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
  const [state, setState] = React.useState({});
  const handleCheckBox = (e) => {
    globalActions.setSlectedLocation({
      ...checkedState,
      [e.target.name]: e.target.checked,
    });
  };

  return (
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
  );
}

export default SelectLocation;
