// src > store > modules > letterSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null
};

const getTime = (createdAtString) => {
  // 문자열을 Date 객체로 변환
  const createdAtDate = new Date(createdAtString);

  // Date 객체를 밀리초로 반환
  return createdAtDate.getTime();
};

const getLettersFromDB = async () => {
  const { data } = await axios.get('http://localhost:5000/letters?_sort=getTime');
  data.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
  return data;
};
export const __getLetters = createAsyncThunk('getLetters', async (payload, thunkAPI) => {
  try {
    const letters = await getLettersFromDB();
    return letters;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const __addLetter = createAsyncThunk('addLetter', async (newLetter, thunkAPI) => {
  try {
    await axios.post('http://localhost:5000/letters', newLetter);
    const letters = await getLettersFromDB();
    return letters;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    // state가 객체인데 배열 메소드인 map을 사용하려고 해서 문제 발생
    // letterSlice의 초기 상태는 letters 속성을 가진 객체이다.
    // 따라서 letters이 배열이 되도록 해줘야함.
    // 근데 왜 업데이트가 안되지?
    // deleteLetter: (state, action) => {
    //   const letterId = action.payload;
    //   return state.filter((letter) => letter.id !== letterId);
    // },

    // editLetter: (state, action) => {
    //   const { id, editingText } = action.payload;
    //   return state.map((letter) => {
    //     if (letter.id === id) {
    //       return { ...letter, content: editingText };
    //     }
    //     return letter;
    //   });
    // },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return { ...state, letters: state.letters.filter((letter) => letter.id !== letterId) };
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return {
        ...state,
        letters: state.letters.map((letter) => {
          if (letter.id === id) {
            return { ...letter, content: editingText };
          }
          return letter;
        })
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(__addLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__addLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__addLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__getLetters.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getLetters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__getLetters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  }
});

export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;
export default letterSlice.reducer;
