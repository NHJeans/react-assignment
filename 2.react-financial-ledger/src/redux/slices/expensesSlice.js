import { createSlice } from '@reduxjs/toolkit';
import fakeData from '../../data/fakeData.json'

const initialState = {
  expenses: fakeData,
  selectedMonth: parseInt(localStorage.getItem("month"), 10) || 1,
  date: '',
  item: '',
  amount: '',
  description: '',
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [action.payload, ...state.expenses];
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
    updateExpense: (state, action) => {
      state.expenses = state.expenses.map(expense =>
        expense.id === action.payload.id ? action.payload : expense
      );
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem('month', action.payload.toString());
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setItem: (state, action) => {
      state.item = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setSelectedMonth, setDate, setItem, setAmount, setDescription } = expensesSlice.actions;


export default expensesSlice.reducer;