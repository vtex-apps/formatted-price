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
})

const FormattedPrice: FC<FormattedPriceProps & InjectedIntlProps> = ({
  value,
}) => {
  return (
    <Fragment>
      {value === 0 ? (
        <FormattedMessage id="store/price.Free" />
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
