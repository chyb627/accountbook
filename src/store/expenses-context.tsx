/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, Dispatch, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-01'),
  },
  {
    id: 'e2',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-02'),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-10'),
  },
  {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-11'),
  },

  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-14'),
  },
  {
    id: 'e7',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-15'),
  },
  {
    id: 'e8',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-16'),
  },
  {
    id: 'e9',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-17'),
  },
  {
    id: 'e10',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-20'),
  },
];

export type Expenses = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpensessState = Expenses[];

type Action =
  | { type: 'ADD'; payload: Expenses }
  | { type: 'UPDATE'; payload: { id: string; data: Expenses } }
  | { type: 'DELETE'; payload: { id: string } };

type ExpensesDispatch = Dispatch<Action>;

interface Context {
  expenses: ExpensessState;
  addExpense: (expenseData: Expenses) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: Expenses) => void;
}

const ExpensesDispatchContext = createContext<ExpensesDispatch | undefined>(undefined);

export const ExpensesContext = createContext<Context>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

const expensesReducer = (state: ExpensessState, action: Action): ExpensessState => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};

export const ExpensesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: Expenses): void => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id: string): void => {
    dispatch({ type: 'DELETE', payload: { id: id } });
  };

  const updateExpense = (id: string, expenseData: Expenses): void => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesDispatchContext.Provider value={dispatch}>
      <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    </ExpensesDispatchContext.Provider>
  );
};
