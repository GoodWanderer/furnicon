export const setConfigurationPage = (pageNum) => {
  return {
    type: 'SET_CONFIGURATION_PAGE',
    payload: pageNum
  }
}
export const setConfigurationMainPage = (pageNum) => {
  return {
    type: 'SET_CONFIGURATION_MAIN_PAGE',
    payload: pageNum
  }
}
export const setConfigurationDefault = () => {
  return {
    type: 'SET_CONFIGURATION_DEFAULT'
  }
}

export const setConfiguration = (num) => {
  return {
    type: 'SET_CONFIGURATION',
    payload: num
  }
}
export const setLength = (value) => {
  return {
    type: 'SET_LENGTH',
    payload: value
  }
}
export const setWidth = (value) => {
  return {
    type: 'SET_WIDTH',
    payload: value
  }
}
export const setDepth = (value) => {
  return {
    type: 'SET_DEPTH',
    payload: value
  }
}
export const setHeight = (value) => {
  return {
    type: 'SET_HEIGHT',
    payload: value
  }
}
export const setApron = (value) => {
  return {
    type: 'SET_APRON',
    payload: value
  }
}
export const setLengthB = (value) => {
  return {
    type: 'SET_LENGTH_B',
    payload: value
  }
}
export const setSizeError = (toggle) => {
  return {
    type: 'SET_SIZE_ERROR',
    payload: toggle
  }
}

export const setModulesCommon = (arr) => {
  return {
    type: 'SET_MODULES_COMMON',
    payload: arr
  }
}
export const setModulesSelectedUp = (arr) => {
  return {
    type: 'SET_MODULES_SELECTED_UP',
    payload: arr
  }
}
export const setModulesSelectedMiddle = (item) => {
  return {
    type: 'SET_MODULES_SELECTED_MIDDLE',
    payload: item
  }
}
export const setModulesSelectedDown = (arr) => {
  return {
    type: 'SET_MODULES_SELECTED_DOWN',
    payload: arr
  }
}
export const setModulesSelectedUp2 = (arr) => {
  return {
    type: 'SET_MODULES_SELECTED_UP_2',
    payload: arr
  }
}
export const setModulesSelectedMiddle2 = (item) => {
  return {
    type: 'SET_MODULES_SELECTED_MIDDLE2',
    payload: item
  }
}
export const setModulesSelectedDown2 = (arr) => {
  return {
    type: 'SET_MODULES_SELECTED_DOWN_2',
    payload: arr
  }
}
export const setCurrentModuleSelected = (item) => {
  return {
    type: 'SET_CURRENT_MODULE_SELECTED',
    payload: item
  }
}
export const setCurrentModuleSelectedListNum = (value) => {
  return {
    type: 'SET_CURRENT_MODULE_SELECTED_LIST_NUM',
    payload: value
  }
}
export const setModulesQuanity = (num) => {
  return {
    type: 'SET_MODULES_QUANITY',
    payload: num
  }
}

export const setFilterType = (filter) => {
  return {
    type: 'SET_FILTER_TYPE',
    payload: filter
  }
}
export const setFilterALL = () => {
  return {
    type: 'SET_FILTER_ALL'
  }
}
export const setFilterFeaturesWidth = (filter) => {
  return {
    type: 'SET_FILTER_FEATURES_WIDTH',
    payload: filter
  }
}
export const setFilterFeaturesAppointment = (filter) => {
  return {
    type: 'SET_FILTER_FEATURES_APPOINTMENT',
    payload: filter
  }
}
export const setFilterFeaturesAll = () => {
  return {
    type: 'SET_FILTER_FEATURES_ALL'
  }
}
export const setWall = (num) => {
  return {
    type: 'SET_WALL',
    payload: num
  }
}

export const setResizeActiveModuleWidth = (toggle) => {
  return {
    type: 'SET_RESIZE_ACTIVE_MODULE_WIDTH',
    payload: toggle
  }
}