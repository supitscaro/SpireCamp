import { csrfFetch } from './csrf';

const GET_HOSTING = "hosting/GET_HOSTING";

const findHosting = (hostingPost) => {
    return {
        type: GET_HOSTING,
        hostingPost
    }
};

// for the individual hosting
export const getHosting = () => async (dispatch) => {
    const res = await csrfFetch('/api/hosting');
    if (res.ok) {
        let hosting = await res.json();
        dispatch(findHosting(hosting));
    }
}

let initialState = {
    hosting: []
};

const hostingReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_HOSTING:
            newState.hostingPost = action.payload;
            return newState;
        default:
            return state;
    }
};

export default hostingReducer;

// const pokemonReducer = (state = initialState, action) => {
    // switch (action.type) {
    //   case LOAD: {
    //     const allPokemon = {};
    //     action.list.forEach(pokemon => {
    //       allPokemon[pokemon.id] = pokemon;
    //     });
    //     return {
    //       ...allPokemon,
    //       ...state,
    //       list: sortList(action.list),
    //     };
    //   }
    //   case LOAD_TYPES: {
    //     return {
    //       ...state,
    //       types: action.types,
    //     };
    //   }
    //   case ADD_ONE: {
    //     if (!state[action.pokemon.id]) {
    //       const newState = {
    //         ...state,
    //         [action.pokemon.id]: action.pokemon
    //       };
    //       const pokemonList = newState.list.map(id => newState[id]);
    //       pokemonList.push(action.pokemon);
    //       newState.list = sortList(pokemonList);
    //       return newState;
    //     }
    //     return {
    //       ...state,
    //       [action.pokemon.id]: {
    //         ...state[action.pokemon.id],
    //         ...action.pokemon,
    //       }
    //     };
    //   }
    //   case LOAD_ITEMS: {
    //     return {
    //       ...state,
    //       [action.pokemonId]: {
    //         ...state[action.pokemonId],
    //         items: action.items.map(item => item.id),
    //       }
    //     };
    //   }
