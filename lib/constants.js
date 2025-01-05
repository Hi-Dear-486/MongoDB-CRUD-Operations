export const RADIO_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

// Column definitions
export const colDefs = [
  {
    field: "name",
    flex: 1,
    headerName: "Name",
    filter: true,
    floatingFilter: true,
    checkboxSelection: true,
  },
  {
    field: "email",
    flex: 1,
    headerName: "Email",
    filter: true,
    floatingFilter: true,
  },
  {
    field: "phone",
    flex: 1,
    headerName: "Phone Number",
    filter: true,
    floatingFilter: true,
    cellClassRules: {
      // apply green to electric cars
      "rag-green": (params) => params.value === "923497849159",
    },
  },
  {
    field: "dob",
    flex: 1,
    headerName: "Date of Birth",
    floatingFilter: true,
    valueFormatter: (item) => new Date(item.value).toLocaleDateString(),
  },
  {
    field: "gender",
    flex: 1,
    headerName: "Gender",
    filter: true,
    floatingFilter: true,
  },
];
