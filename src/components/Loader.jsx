import '../styles/Loader.scss'

const Loader = () => {
  const loaderElements = Array.from({ length: 12 }, (_, index) => <div key={index}></div>)

  return <div className='lds-spinner'>{loaderElements}</div>
}

export default Loader
