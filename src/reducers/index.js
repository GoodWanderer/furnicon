const initialState = {
  configurationPage: 1,
  configurationMainPage: 1,

  configuration: 1,
  length: '',
  width: '',
  depth: '',
  height: '',

  apron: '',
  lengthB: '',

  sizeError: false,

  modulesCommon: [],
  
  modulesSelectedUp: [],
  modulesSelectedMiddle: [{id: 1, content: 'body', type: 'middle'}],
  modulesSelectedDown: [],
  
  modulesSelectedUp2: [],
  modulesSelectedMiddle2: [{id: 2, content: 'body', type: 'middle'}],
  modulesSelectedDown2: [],
  
  currentModuleSelected: false,
  currentModuleSelectedListNum: 0,
  
  modulesQuanity: 0,

  filterType: false,
  filterFeaturesWidth: false,
  filterFeaturesAppointment: false,
  wall: 1, 

  resizeActiveModuleWidth: false
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
      case 'SET_CONFIGURATION_PAGE':
        return {
          ...state,
          configurationPage: payload,
        }
      case 'SET_CONFIGURATION_MAIN_PAGE':
        return {
          ...state,
          configurationMainPage: payload,
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
      case 'SET_APRON':
        return {
          ...state,
          apron: payload,
        }
      case 'SET_LENGTH_B':
        return {
          ...state,
          lengthB: payload,
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
      case 'SET_MODULES_SELECTED_UP':
        return {
          ...state,
          modulesSelectedUp: payload,
        }
      case 'SET_MODULES_SELECTED_MIDDLE':
        return {
          ...state,
          modulesSelectedMiddle: payload,
        }
      case 'SET_MODULES_SELECTED_DOWN':
        return {
          ...state,
          modulesSelectedDown: payload,
        }
      case 'SET_MODULES_SELECTED_UP_2':
        return {
          ...state,
          modulesSelectedUp2: payload,
        }
      case 'SET_MODULES_SELECTED_MIDDLE2':
        return {
          ...state,
          modulesSelectedMiddle2: payload,
        }
      case 'SET_MODULES_SELECTED_DOWN_2':
        return {
          ...state,
          modulesSelectedDown2: payload,
        }
      case 'SET_CURRENT_MODULE_SELECTED':
        return {
          ...state,
          currentModuleSelected: payload,
        }
      case 'SET_CURRENT_MODULE_SELECTED_LIST_NUM':
        return {
          ...state,
          currentModuleSelectedListNum: payload,
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
      case 'SET_WALL':
        return {
          ...state,
          wall: payload,
        }

      case 'SET_RESIZE_ACTIVE_MODULE_WIDTH':
        return {
          ...state,
          resizeActiveModuleWidth: payload,
        }

      default: return state
  }
}

export default reducer;
