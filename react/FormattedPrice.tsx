import classnames from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['price'] as const

interface FormattedPriceProps {
  value?: number | null
}

const FormattedPrice: FC<FormattedPriceProps> = ({ value }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={classnames(handles.price, { 'c-success': value === 0 })}>
      {value === 0 ? (
        <FormattedMessage id="store/price.Free" />
      ) : value == null ? (
        <FormattedMessage id="store/price.TBD" />
      ) : (
        <FormattedCurrency value={value} />
      )}
    </div>
  )
}

export default FormattedPrice
