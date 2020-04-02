import React, { FC } from 'react'
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'

const FormattedPrice: FC<FormattedPriceProps & InjectedIntlProps> = ({
  value,
}) => {
  return (
    <div className={value === 0 ? 'c-success' : ''}>
      {value === 0 ? (
        <FormattedMessage id="store/price.Free" />
      ) : value === null || value === undefined ? (
        <FormattedMessage id="store/price.TBD" />
      ) : (
        <FormattedCurrency value={value} />
      )}
    </div>
  )
}

interface FormattedPriceProps {
  value?: number | null
}

export default injectIntl(FormattedPrice)
