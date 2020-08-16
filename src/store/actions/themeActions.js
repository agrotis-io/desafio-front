// Constants
export const CHANGE_THEME = 'CHANGE_THEME'

// Actions creators
export function changeTheme (isDark) {
  return {
    type: CHANGE_THEME,
    payload: isDark
  }
}
