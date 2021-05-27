import { Dimensions, Platform } from 'react-native'

export const usePlatform = () => {
  const isWeb = Platform.OS === 'web'
  const isWebMobile = isWeb && Dimensions.get('window').width < 641
  const isWebDesktop = isWeb && Dimensions.get('window').width > 1200
  const isWindows = Platform.OS === 'windows'
  const isAndroid = Platform.OS === 'android'
  const isIos = Platform.OS === 'ios'
  const isMacOs = Platform.OS === 'macos'
  const isMobile = isAndroid || isIos
  const isDesktop = isWindows || isMacOs

  return {
    isWeb,
    isWebMobile,
    isWebDesktop,
    isWindows,
    isAndroid,
    isIos,
    isMacOs,
    isMobile,
    isDesktop,
  }
}
