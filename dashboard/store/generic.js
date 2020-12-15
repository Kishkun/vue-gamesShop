import GenericService from '~/services/generic.service';

const crudStore = ({name, url, keyName}) => {
  const genericService = new GenericService({url, name});

  return {
    state: () => ({
      // динамические ключи
      [keyName]: {},
      [`${keyName}s`]: [],
      [`${keyName}Error`]: null
    }),
    action: {
      async FETCH_ALL({commit}) {
        try {
          const items = await genericService.fetchAll();
          commit('FETCH_ITEMS_SUCCESS', items)
        } catch (err) {
          commit('FETCH_ITEMS_FAIL', {
            errType: `${name} fetch all request failed!`,
            err
          })
        }
      },
      async FETCH_ONE({commit}, id) {
        try {
          const item = await genericService.fetchOne(id);
          commit('FETCH_ITEM_SUCCESS', item)
        } catch (err) {
          commit('FETCH_ITEM_FAIL', {
            errType: `${name} fetch one request failed!`,
            err
          })
        }
      },
      async CREATE({commit}, payload) {
        try {
          const item = await genericService.create(payload);
          commit('CREATE_SUCCESS', item)
        } catch (err) {
          commit('CREATE_FAIL', {
            errType: `${name} create request failed!`,
            err
          })
        }
      },
      async UPDATE({commit}, {id, payload}) {
        try {
          const item = await genericService.update(id, payload);
          commit('UPDATE_SUCCESS', item)
        } catch (err) {
          commit('UPDATE_FAIL', {
            errType: `${name} update request failed!`,
            err
          })
        }
      },
      async DELETE({commit}, id) {
        try {
          const item = await genericService.delete(id);
          commit('DELETE_SUCCESS', item)
        } catch (err) {
          commit('DELETE_FAIL', {
            errType: `${name} delete request failed!`,
            err
          })
        }
      }
    },
    mutations: {
      FETCH_ITEMS_SUCCESS(state, items) {
        state[`${keyName}s`] = items
      },
      FETCH_ITEMS_FAIL(state, error) {
        state[`${keyName}Error`] = error
      },

      FETCH_ITEM_SUCCESS(state, item) {
        state[item] = item
      },
      FETCH_ITEM_FAIL(state, error) {
        state[`${keyName}Error`] = error
      },

      CREATE_SUCCESS(state, item) {
        state[keyName] = item
      },
      CREATE_FAIL(state, error) {
        state[`${keyName}Error`] = error
      },

      UPDATE_SUCCESS(state, item) {
        state[keyName] = item
      },
      UPDATE_FAIL(state, error) {
        state[`${keyName}Error`] = error
      },

      DELETE_SUCCESS(state, item) {

      },
      DELETE_FAIL(state, error) {
        state[`${keyName}Error`] = error
      }
    },
    getters: {
      [keyName]: (state) => state[keyName],
      [`${keyName}s`]: (state) => state[`${keyName}s`],
      [`${keyName}Error`]: (state) => state[`${keyName}Error`]
    }
  }
};

export default crudStore;
