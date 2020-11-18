const initialState = {
  config: undefined,
  dashboardList: []
}

const mutations = {
  'SET_DASHBOARD_LIST': (state, dashboardList) => {
    return {
      ...state,
      dashboardList
    }
  },

  'SET_DATA': (state, [index, data]) => {
    return {
      ...state,
      config: state.config.map((conf, ind) => {
        if (index === ind) {
          conf['data'] = data
        }
        return conf
      })
    }
  },
  'SET_CONFIG': (state, config) => {
    return {
      ...state,
      config
    }
  }
}

const DashboardReducer = (state = initialState, { type, payload }) => {
  if (mutations[type]) {
    return mutations[type](state, payload)
  }
  return { ...state }
}

export default DashboardReducer