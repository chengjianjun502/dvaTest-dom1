
export default {

  namespace: 'example',

  state: {
    name: 'tome333333333333',
    num: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *add({payload}, {call, put}){
      yield call();
      let num = payload;
        num = num + 1;
      yield put({type: 'save', num})
    }
  },

  reducers: {
    save(state, {num}) {
      return { ...state, num };
    },
    add(state, action) {
      return { ...state, num: state.num + 1}
    },
  },

};
