"use client";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  themeQuartz,
  ClientSideRowModelModule,
  PaginationModule,
} from "ag-grid-community";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { colDefs } from "@/lib/constants";
import { EditButton } from "@/components/ui/editbutton";

// Register all Community features
ModuleRegistry.registerModules([ClientSideRowModelModule, PaginationModule]);

const AllUsers = () => {
  const [rowData, setRowData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/register");
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      if (Array.isArray(result)) {
        setRowData(result);
      } else {
        console.error("API did not return an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to retrieve data. Please try again.");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = useCallback(async (row) => {
    try {
      const response = await fetch(`/register/${row._id}`, {
        method: "DELETE",
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      toast.success("Row deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting row:", error.message);
      toast.error("Failed to delete row. Please try again.");
    }
  }, []);

  const DeleteBtn = useCallback(
    (props) => (
      <button
        className="bg-red-400 px-2 py-1"
        onClick={() => handleDelete(props.data)}
      >
        Delete
      </button>
    ),
    []
  );

  const columnDefs = useMemo(() => {
    return [
      ...colDefs,
      {
        headerName: "Actions",
        cellRenderer: DeleteBtn,
      },
      {
        headerName: "Actions",
        cellRenderer: EditButton,
      },
    ];
  }, []);

  const rowClassRules = useMemo(
    () => ({
      gray: (row) => row.data.phone === "923059478520",
    }),
    []
  );
  return (
    <div className="w-full h-[500px]">
      <AgGridReact
        rowData={rowData}
        key={rowData.length}
        columnDefs={columnDefs}
        modules={[ClientSideRowModelModule, PaginationModule]}
        theme={themeQuartz}
        rowSelection={"multiple"}
        pagination={true}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20, 30, 40, 50]}
        rowClassRules={rowClassRules}
      />
    </div>
  );
};

export default AllUsers;
