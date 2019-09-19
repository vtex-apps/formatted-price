import React, { FC, Fragment } from 'react'
import {
  defineMessages,
  injectIntl,
  InjectedIntlProps,
  FormattedMessage,
} from 'react-intl'
import { FormattedCurrency } from 'vtex.format-currency'

defineMessages({
  Free: {
    id: 'store/price.Free',
    defaultMessage: 'FREE',
  },

  TBA: {
    id: 'store/price.TBA',
    defaultMessage: 'TBA',
  },
})

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
