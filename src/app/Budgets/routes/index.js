import Budgets from '../Budgets'
import BudgetDetail from '../BudgetDetail'

export default [
  {
    path: '/budgets',
    component: Budgets,
    name: 'budgets',
    meta: {
      guest: false,
      needsAuth: true
    }
  },
  {
    path: '/budgets/:id',
    component: BudgetDetail,
    name: 'budget-detail',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
