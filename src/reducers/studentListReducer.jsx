import { ADD_STUDENT, DELETE_STUDENT } from '../constants/actionsTypes';

const initialState = [
  {
    name: 'Med Salah',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BqTNaupy8yjdKdQ7_S474SaAfSRnZ3emD03p9GPUw_02yhgC',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38745'
  },
  {
    name: 'Fathi Ali',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQg-vuml56tkQyfKdudnEEVmQmtLjft8uP3Q7hdA0DPWtiSfD',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38743'
  },
  {
    name: 'Sami Dali',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAA_BjuDnrOmdpGUhaJVuY2vp6gn59iQYxdmNBiIeAV5r_uLkt',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38742'
  },
  {
    name: 'Mounira Said',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpwV1TYm9zK5BtABtSUKMOtuVC5DRl9yLzUE2M4Oq4Pamii-k',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38741'
  },
  {
    name: 'Alya Jamel',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tkyOrtoPs7Xpwc05MicxPBb1juMyl5s7sds8t-3gVakM0uj9',
    email: 'Sincere@april.biz',
    enrollmentNumber: '38740'
  }
];

function movieListReducer(state = initialState, action) {
  if (action.type === ADD_STUDENT) {
    console.log(action.payload);
    return state.concat(action.payload);
  }
  if (action.type === DELETE_STUDENT) {
    return state.filter(el => el.enrollmentNumber !== action.payload);
  }

  return state;
}

export default movieListReducer;
