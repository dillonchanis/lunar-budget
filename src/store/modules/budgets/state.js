const today = new Date()

export default {
  budgets: [
    {
      id: 1,
      name: 'Weekly Budget',
      amount: 300.00,
      spent: 198.21,
      time: {
        start: today,
        end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
      },
      transactions: []
    },
    {
      id: 2,
      name: 'Quarterly Budget',
      amount: 4000.00,
      spent: 988.81,
      time: {
        start: today,
        end: new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())
      },
      transactions: []
    },
    {
      id: 3,
      name: 'Yearly Budget',
      amount: 20000.00,
      spent: 2157.42,
      time: {
        start: today,
        end: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
      },
      transactions: []
    }
  ]
}
