import { 
	EMPLOYEE_UPDATE 
} from '../actions/types';

const INITIAL_SATATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_SATATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default: 
			return state;
	}
};