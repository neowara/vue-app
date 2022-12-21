import CardComponent from './CardComponent.vue'

describe('<CardComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CardComponent)
  })
})