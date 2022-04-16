const initialState = {
  // notifications: [],

  configurationPage: 1,

  configuration: 1,
  length: '',
  width: '',
  depth: '',
  height: '',
  sizeError: false,

  modulesCommon: [],
  modulesSelected: [],
  currentModuleSelected: false,
  modulesQuanity: 0,

  filterType: false,
  filterFeaturesWidth: false,
  filterFeaturesAppointment: false,
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
      case 'SET_CONFIGURATION_PAGE':
        return {
          ...state,
          configurationPage: payload,
        }
      case 'SET_CONFIGURATION_DEFAULT':
        return {
          ...state,
          configurationPage: 1,
          configuration: 1,
          length: '',
          width: '',
          depth: '',
          height: '',
          sizeError: false,
          filterType: false,
          filterFeaturesWidth: false,
          filterFeaturesAppointment: false,
        }

      case 'SET_CONFIGURATION':
        return {
          ...state,
          configuration: payload,
        }
      case 'SET_LENGTH':
        return {
          ...state,
          length: payload,
        }
      case 'SET_WIDTH':
        return {
          ...state,
          width: payload,
        }
      case 'SET_DEPTH':
        return {
          ...state,
          depth: payload,
        }
      case 'SET_HEIGHT':
        return {
          ...state,
          height: payload,
        }
      case 'SET_SIZE_ERROR':
        return {
          ...state,
          sizeError: payload,
        }

      case 'SET_MODULES_COMMON':
        return {
          ...state,
          modulesCommon: payload,
        }
      case 'SET_MODULES_SELECTED':
        return {
          ...state,
          modulesSelected: payload,
        }
      case 'SET_CURRENT_MODULE_SELECTED':
        return {
          ...state,
          currentModuleSelected: payload,
        }
      case 'SET_MODULES_QUANITY':
        return {
          ...state,
          modulesQuanity: payload,
        }

      case 'SET_FILTER_TYPE':
        return {
          ...state,
          filterType: payload,
        }
      case 'SET_FILTER_ALL':
        return {
          ...state,
          filterType: false
        }
      case 'SET_FILTER_FEATURES_WIDTH':
        return {
          ...state,
          filterFeaturesWidth: payload,
        }
      case 'SET_FILTER_FEATURES_APPOINTMENT':
        return {
          ...state,
          filterFeaturesAppointment: payload,
        }
      case 'SET_FILTER_FEATURES_ALL':
        return {
          ...state,
          filterFeaturesWidth: false,
          filterFeaturesAppointment: false
        }

      default: return state
  }
}

export default reducer;
