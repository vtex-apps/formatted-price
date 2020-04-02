# Price

> Formatting utilities for displaying prices.

## Usage

To use this app, you first need to add it in your `manifest.json` file, like so

```json
{
  "dependencies": {
    "vtex.formatted-price": "0.x"
  }
}
```

> If you are using TypeScript, you may also want to run `vtex setup` after the step above

Now you can import the component and use it

```jsx
import React from 'react'
import { FormattedPrice } from 'vtex.formatted-price'

const ProductSummary = ({ productPrice }) => {
  return (
    <article>
      <h3>My Awesome Product</h3>

      <FormattedPrice value={productPrice} />
    </article>
  )
}
```

## Components

### FormattedPrice

Responsible for rendering and styling the value prop as a price
with the current store currency settings.

#### Props

| Prop name | Type | Required |
| --- | --- | --- |
| [`value`](#formattedprice-value) | `number` | `false` |

##### FormattedPrice value

`number | null | undefined`

Value used in the formatting.

### useFormattedPrice

`(value: number | null | undefined) => string`

Utility hook that formats the value parameter into a price string, using the
current store currency settings.

## CSS Customization

In order to apply CSS customizations in this and other blocks, follow the instructions
given in [this recipe](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization)
regarding using CSS classes for store customization.

| CSS Handle | Component |
| --- | --- |
| `price` | `FormattedPrice` |
