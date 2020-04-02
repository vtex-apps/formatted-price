import { useMemo } from 'react'
import { useIntl, defineMessages } from 'react-intl'
import { formatCurrency } from 'vtex.format-currency'
import { useRuntime } from 'vtex.render-runtime'

const messages = defineMessages({
  free: {
    id: 'store/price.Free',
  },
  tbd: {
    id: 'store/price.TBD',
  },
})

const useFormattedPrice = (value?: number | null) => {
  const { culture } = useRuntime()
  const intl = useIntl()

  const formattedPrice = useMemo(() => {
    if (value == null) {
      return intl.formatMessage(messages.tbd)
    }
    if (value === 0) {
      return intl.formatMessage(messages.free)
    }
    return formatCurrency({ intl, value, culture })
  }, [culture, intl, value])

  return formattedPrice
}

export default useFormattedPrice
