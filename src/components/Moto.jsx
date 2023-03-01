// import { useEffect } from "react";
// import { useParams } from "react-router"

// const Moto = () => {
//   let { name, id } = useParams();
//   console.log(name, id);
//   useEffect(() => {
//     document.title = `Eu ${id}`
//   })
//   return (
//     <div className="container">
//       <h1>moto</h1>
//       <h2>{id}</h2>
//     </div>
//   )
// }

// export default Moto
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Moto = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    document.title = `Eu ${id}`;
  }, [id]);

  return (
    <div className="container">
      <h1>moto</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Moto;
