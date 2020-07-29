import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import ItemSearchTable from "./ItemSearchTable";
import useGlobal from "../GlobleState/store";

const name = {};
function NameTable() {
  const [globalState, globalActions] = useGlobal();
  const [searchValue, setSearchValue] = React.useState("T4_BAG,T5_BAG");
  const { slectedItems, setSlectedItems } = React.useState([
    "T4_BAG",
    "T5_BAG",
  ]);
  const [state, setState] = React.useState({
    data: [],
  });
  const tableRef = React.createRef();

  useEffect(() => {
    globalActions.setDefaultNameTable();
    setState({ data: globalState.defaultNamesData });
  }, []);

  return (
    <div>
      <Paper style={{ padding: "40px" }}>
        <MaterialTable
          title="search for item ID"
          options={{
            sorting: true,
            // exportButton: true,
            search: true,
            filtering: true,
          }}
          data={state.data}
          columns={[
            { title: "unique name", field: "UniqueName" },
            { title: "Names", field: "LocalizedNames" },
          ]}
        />
      </Paper>
      <ItemSearchTable slectedItems={slectedItems}>
        {state.data}
      </ItemSearchTable>
    </div>
  );
}

export default NameTable;
