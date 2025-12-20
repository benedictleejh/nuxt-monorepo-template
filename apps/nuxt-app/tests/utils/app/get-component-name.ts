import type { ComponentOptionsMixin } from 'vue'

export const getComponentName = (component: ComponentOptionsMixin) => component.name ?? component.__name ?? 'undefined'
