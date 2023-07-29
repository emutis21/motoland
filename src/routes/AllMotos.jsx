import { useSelector } from "react-redux";

import MotosList from "../components/MotosList";

const AllMotos = () => {
  const state = useSelector((state) => state);
  const db = state.crud.db;

  console.log(state.crud);
  return (
    <div className="container">
      <h1>All motos</h1>
      <MotosList db={db} />
    </div>
  );
};

export default AllMotos;
