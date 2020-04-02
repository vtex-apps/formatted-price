import classnames from 'classnames'
import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import useFormattedPrice from './useFormattedPrice'

const CSS_HANDLES = ['price'] as const

interface FormattedPriceProps {
  value?: number | null
}

const FormattedPrice: FC<FormattedPriceProps> = ({ value }) => {
  const handles = useCssHandles(CSS_HANDLES)

  const price = useFormattedPrice(value)

  return (
    <div className={classnames(handles.price, { 'c-success': value === 0 })}>
      {price}
    </div>
  )
}

export default FormattedPrice
