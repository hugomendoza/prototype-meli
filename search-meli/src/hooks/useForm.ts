import { useState } from "react";

interface initialObject {
  [key: string]: any
}

export const useForm = (initialForm:initialObject = {}) => {

  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }:any) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
