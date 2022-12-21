import { ActionTree } from "vuex";
import axios, { } from 'axios';

import { state } from "./state"

const actions: ActionTree<state, state> = {

    /**Calles a mutation to empty data in the store before filtering it using parameters and adding it again 
     * to the Vue store
     */
    emptyData(context) {
        context.commit('emptyData');
    },

    /**Simple async function that uses axios to make requests to the API server
     *  it saves the results in the vue store
     * @param param can be used to provide a list of parameters that can be used to filter the request
     * */
    async getShows(context, param: string) {

        try {
            const result = await axios({
                method: 'GET',
                url: context.state.APIAdress,
                params: {
                    q: param,
                },
            });
            context.commit("setShows", result.data);
        } catch (err) {
            console.error(err);
        }
    },

    async getCast(context, param: string) {
        try {
            const result = await axios({
                method: 'GET',
                url: context.state.CastAPIAdress + param,
            });
            context.commit("setCast", result.data);
        } catch (err) {
            console.error(err);
        }
    }
}

export default actions;
