import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import useGlobal from "../GlobleState/store";

function MainTable(props) {
  const [globalState, globalActions] = useGlobal();
  let [, setState] = React.useState();
  useEffect(() => {
    // console.log(globalState.itemData);
    // console.log(globalState.avageVolume);
  });

  return (
    <Paper style={{ padding: "40px" }}>
      <MaterialTable
        title="Price search"
        options={{
          sorting: true,
          // selection: true,
          exportButton: true,
          search: true,
          filtering: true,
          grouping: true,
        }}
        data={globalState.itemData}
        columns={[
          { title: "item_id", field: "item_id" },
          { title: "city Name", field: "city" },
          { title: "quality", field: "quality", type: "numeric" },
          { title: "sell_price_min", field: "sell_price_min", type: "numeric" },
          {
            title: "avageVolume per day",
            field: "avageVolume",
            type: "numeric",
          },
          { title: "sell_price_min_date", field: "sell_price_min_date" },
          { title: "sell_price_max", field: "sell_price_max" },
          { title: "sell_price_max_date", field: "sell_price_max_date" },
          { title: "buy_price_min", field: "buy_price_min" },
          { title: "buy_price_min_date", field: "buy_price_min_date" },
          { title: "buy_price_max", field: "buy_price_max" },
          {
            title: "buy_price_max_date",
            data: globalState.avageVolume,
          },
        ]}
        actions={[
          {
            icon: "library_add",
            tooltip: "Get the volume of this item",
            onClick: async (event, rowData) => {
              await globalActions.setAvageVolume(rowData.item_id);
              rowData.avageVolume = globalState.avageVolume;
              // forces update
              setState({});
            },
          },
        ]}
      />
      {console.log("updated")}
    </Paper>
  );
}

export default MainTable;
