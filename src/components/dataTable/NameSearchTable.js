import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import ItemSearchTable from "./ItemSearchTable";
import useGlobal from "../GlobleState/store";
import SelectLocation from "./SelectLocation";

import { Button } from "@material-ui/core";

const name = {};
function NameTable() {
  const [globalState, globalActions] = useGlobal();
  const [state, setState] = React.useState({
    data: [],
  });

  useEffect(() => {
    // calls actions to set default state.
    globalActions.setDefaultNameTable();
    setState({ data: globalState.defaultNamesData });
  }, []);

  return (
    <div>
      <Paper style={{ padding: "40px" }}>
        <Button
          variant="contained"
          onClick={() => {
            globalActions.searchItems();
          }}
        >
          Search Market
        </Button>
        <SelectLocation />
        <MaterialTable
          title="search for item ID"
          options={{
            sorting: true,
            selection: true,
            search: true,
            filtering: true,
          }}
          onSelectionChange={(rows, row, ent) => {
            // pushes item to global state when clicking check boxes for items
            let tempArr = [];
            rows.forEach((elm) => tempArr.push(elm.UniqueName));
            globalActions.setSlectedItems(tempArr);
            console.log(globalState.slectedItems);
          }}
          data={state.data}
          columns={[
            { title: "unique name", field: "UniqueName" },
            { title: "Names", field: "LocalizedNames" },
          ]}
        />
      </Paper>
      <ItemSearchTable>{state.data}</ItemSearchTable>
    </div>
  );
}
export default NameTable;
