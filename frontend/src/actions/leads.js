import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// get leads
export const getLeads = () => dispatch => { //dispatch is used for making a request to the reducer
    axios.get('/api/leads/').then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// add leads
export const addLead = (lead) => dispatch => { //dispatch is used for making a request to the reducer
    axios.post('/api/leads/', lead).then(res => {
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// Delete Lead
export const deleteLead = (id) => dispatch => { //dispatch is used for making a request to the reducer
    axios.delete(`/api/leads/${id}/`).then(res => {
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err => console.log(err));
};