export const setConfigurationPage = (pageNum) => {
  return {
    type: 'SET_CONFIGURATION_PAGE',
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
export const setModulesSelected = (arr) => {
  return {
    type: 'SET_MODULES_SELECTED',
    payload: arr
  }
}
export const setCurrentModuleSelected = (item) => {
  return {
    type: 'SET_CURRENT_MODULE_SELECTED',
    payload: item
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