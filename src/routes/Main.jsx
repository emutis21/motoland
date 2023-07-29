import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";

import {
  createAction,
  deleteAction,
  noAction,
  readAllAction,
  updateAction,
} from "../actions/crudActions";

import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";

import "../styles/Main.scss";
import { ToastBar, Toaster, toast } from "react-hot-toast";

const Main = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { cart } = state.shopping;

  const { db } = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/motos";

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
      setError({ status: "Timeout", statusText: "Request took too long" });
    }, 5000);

    helpHttp()
      .get(url)
      .then((res) => {
        clearTimeout(timeout);
        if (!res.err) {
          dispatch(readAllAction(res));
          setError(null);
        } else {
          dispatch(noAction());
          setError(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        clearTimeout(timeout);
        setLoading(false);
        setError({ status: "Error", statusText: error.message });
      });
  }, [dispatch]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Are you sure to delete the motorcycle with the id '${id}'?`
    );

    if (isDelete) {
      dispatch(deleteAction(id));
    } else {
      return;
    }
  };

  const [filters, setFilters] = useState({ brand: "all", minPrice: 0 });

  const filterMotos = (db) => {
    return db.filter((moto) => {
      return (
        moto.price >= filters.minPrice &&
        (filters.brand === "all" || moto.brand === filters.brand)
      );
    });
  };

  const filteredMotos = filterMotos(db);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <main className="container">
      <Header changeFilters={setFilters} />

      <div className="main">
        {loading && <Loader />}
        {error && (
          <>
            <Message msg={`${error.status}:${error.statusText}`} />
            <button onClick={handleReload}>Reload</button>
          </>
        )}
      </div>

      {db && (
        <CrudTable
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          dispatch={dispatch}
          setIsModalOpen={setIsModalOpen}
          createData={createData}
          updateData={updateData}
          cart={cart}
          state={state}
          data={filteredMotos}
          dataToEdit={dataToEdit}
          isModalOpen={isModalOpen}
        />
      )}
    </main>
  );
};

export default Main;
