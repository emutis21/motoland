import { useParams } from "react-router"

const Moto = () => {
  let {name} = useParams();
  console.log(name);
  return (
    <div className="container">
      <h1>moto</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default Moto