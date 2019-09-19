import React, { FC, Fragment } from 'react'
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'

const FormattedPrice: FC<FormattedPriceProps & InjectedIntlProps> = ({
  value,
}) => {
  return (
    <Fragment>
      {value === 0 ? (
        <FormattedMessage id="store/price.Free" />
      ) : value === null || value === undefined ? (
        <FormattedMessage id="store/price.TBA" />
      ) : (
        <FormattedCurrency value={value} />
      )}
    </Fragment>
  )
}

interface FormattedPriceProps {
  value: number
}

export default injectIntl(FormattedPrice)
