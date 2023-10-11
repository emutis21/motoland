import { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { MdArrowBackIos } from 'react-icons/md'

import '../styles/CrudForm.scss'
import InputField from './InputField'

const initialForm = {
  id: null,
  content: '',
  name: '',
  description: '',
  city: '',
  brand: '',
  price: '',
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const requiredFields = ['content', 'name', 'description', 'city', 'price']
const brands = ['', 'BMW', 'TVS', 'KTM', 'Kawasaki', 'Suzuki', 'Yamaha']

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, isModalOpen, setIsModalOpen }) => {
  const [form, setForm] = useState(initialForm)
  const [isUrlValid, setIsUrlValid] = useState(true)

  useEffect(() => {
    setForm(dataToEdit || initialForm)
  }, [dataToEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    const formattedValue = name === 'price' && value.startsWith('0') ? value.slice(1) : value

    setForm({
      ...form,
      [name]: ['name', 'description', 'city'].includes(name) ? capitalizeFirstLetter(formattedValue) : formattedValue,
    })
  }

  const isURL = (input) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/

    return urlPattern.test(input)
  }

  const validateUrl = () => {
    setIsUrlValid(isURL(form.content))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isUrlValid) {
      toast.error('Invalid URL')
      return
    }
    if (Object.values(form).every((value, index) => value === Object.values(initialForm)[index])) {
      toast.error('The form is empty', {
        className: 'n-error',
        duration: 2500,
      })
      return
    }

    if (requiredFields.some((field) => !form[field])) {
      toast.error('Incomplete data', {
        className: 'n-error',
        duration: 2500,
      })
      return
    }

    if (!form.brand) {
      toast.error('Invalid brand', {
        id: 'n-error',
        duration: 3500,
      })
      return
    }

    if (!/^[A-Za-z\u00C0-\u017F\s]+$/.test(form.city)) {
      toast.error('Invalid city data', {
        style: {},
        id: 'n-error',
        duration: 3500,
      })
      return
    }

    const toastMessage = form.id === null ? 'Motorcycle added successfully' : 'Motorcycle updated successfully'
    const toastClassName = 'n-success'
    const toastDuration = 2000

    form.id === null ? createData(form) : updateData(form)
    toast.success(toastMessage, {
      className: toastClassName,
      duration: toastDuration,
    })

    setIsModalOpen(false)
    handleReset()
  }

  const handleReset = () => {
    setForm(initialForm)
    setDataToEdit(null)
  }

  return (
    <div className={isModalOpen ? 'modal-container' : 'form'}>
      {!isModalOpen && <h3>Add a new bike</h3>}
      {!isModalOpen && <button onClick={() => setIsModalOpen(true)}>Open</button>}
      {isModalOpen && (
        <div className={dataToEdit ? 'img-modal' : 'modal'}>
          {dataToEdit && (
            <div className="img">
              <img src={form.content} alt="Bike" />
            </div>
          )}
          <form className="modal-content" onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <MdArrowBackIos
                  onClick={() => {
                    setIsModalOpen(false)
                  }}
                />
                {dataToEdit ? 'Edit your bike' : 'Add a new bike'}
              </legend>
              <InputField
                type="text"
                name="content"
                label="Photo (url)"
                value={form.content}
                onChange={handleChange}
                required
                isValid={isUrlValid}
                autoFocus
                onBlur={form.content && validateUrl}
              />
              <InputField type="text" name="name" label="Name" value={form.name} onChange={handleChange} required />
              <InputField
                type="text"
                name="description"
                label="Description"
                value={form.description}
                onChange={handleChange}
                required
              />
              <InputField type="text" name="city" label="City" value={form.city} onChange={handleChange} required />
              <div className="input-box">
                <select name="brand" onChange={handleChange} value={form.brand} required>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand || 'Brand'}
                    </option>
                  ))}
                </select>
              </div>
              <InputField
                type="number"
                name="price"
                label="Price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </fieldset>
            <button type="submit">Send</button>
            <button type="reset" onClick={handleReset}>
              Clear
            </button>
            <Toaster position="bottom-right" reverseOrder={true} />
          </form>
        </div>
      )}
    </div>
  )
}

export default CrudForm
