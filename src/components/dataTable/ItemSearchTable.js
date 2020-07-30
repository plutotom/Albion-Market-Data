import React from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import useGlobal from "../GlobleState/store";

function MainTable(props) {
  const [globalState, globalActions] = useGlobal();

  return (
    <Paper style={{ padding: "40px" }}>
      <MaterialTable
        title="Price search"
        options={{
          sorting: true,
          selection: true,
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

export default MainTable;
