import { createSlice } from '@reduxjs/toolkit';
import fakeData from '../../data/fakeData.json'

const initialState = {
  expenses: fakeData,
  selectedMonth: parseInt(localStorage.getItem("month"), 10) || 1,
};

const accountSlice = createSlice({
  initialState,
  name: 'expenses',

});

export const { setSelectedMonth, addExpense, removeExpense, updateExpense } = accountSlice.actions;

export default accountSlice.reducer;