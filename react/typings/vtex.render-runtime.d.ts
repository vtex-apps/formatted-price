import { RenderContext } from 'vtex.render-runtime'

declare module 'vtex.render-runtime' {
  export const useRuntime: () => RenderContext
}
