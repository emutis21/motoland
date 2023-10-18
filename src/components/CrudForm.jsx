import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { MdArrowBackIos } from 'react-icons/md'

import '../style/CrudForm.scss'
import InputField from './InputField'
import { AnimatePresence, motion } from 'framer-motion'

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

const CrudForm = ({ motos, createData, updateData, dataToEdit, setDataToEdit, isModalOpen, setIsModalOpen }) => {
  const [form, setForm] = useState(initialForm)
  const [isUrlValid, setIsUrlValid] = useState(true)

  const brands = [...new Set(motos.filter((moto) => moto.brand).map((moto) => moto.brand))]
  brands.unshift('Select a brand')

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
    setIsUrlValid(isURL(form.img))
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

  isModalOpen
    ? document.body.style.setProperty('overflow', 'hidden')
    : document.body.style.setProperty('overflow', 'auto')

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, type: 'tween' }}
      className={isModalOpen ? 'modal-container' : 'form'}
      onClick={(e) => {
        if (e.target.classList.contains('modal-container')) {
          setIsModalOpen(false)
          handleReset()
        }
      }}
    >
      {!isModalOpen && <h3>Add a new bike</h3>}
      {!isModalOpen && <button onClick={() => setIsModalOpen(true)}>Open</button>}
      {isModalOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: 'backOut', duration: 0.3, type: 'tween' }}
          className={dataToEdit ? 'img-modal' : 'modal'}
        >
          {dataToEdit && (
            <div className='img'>
              <img src={form.img} alt='Bike' />
            </div>
          )}
          <form className='modal-content' onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <MdArrowBackIos
                  onClick={() => {
                    setIsModalOpen(false)
                  }}
                />
                <h3>{dataToEdit ? 'Edit your bike' : 'Add a new bike'}</h3>
              </legend>
              <InputField
                type='text'
                name='content'
                label='Photo (url)'
                value={form.img}
                onChange={handleChange}
                required
                isValid={isUrlValid}
                autoFocus
                // onBlur={form.img && validateUrl}
              />
              <InputField type='text' name='name' label='Name' value={form.model} onChange={handleChange} required />
              <InputField
                type='text'
                name='description'
                label='Description'
                value={form.description}
                onChange={handleChange}
                required
              />
              <InputField type='text' name='city' label='City' value={form.city} onChange={handleChange} required />
              <div className='input-box'>
                <select name='brand' onChange={handleChange} value={form.brand} required>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <InputField
                type='number'
                name='price'
                label='Price'
                value={form.price}
                onChange={handleChange}
                required
              />
            </fieldset>
            <button type='submit'>Send</button>
            <button type='reset' onClick={handleReset}>
              Clear
            </button>
            <Toaster position='bottom-right' reverseOrder={true} />
          </form>
        </motion.div>
      )}
    </div>
  )
}

export default CrudForm
