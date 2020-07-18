export const CHANGE_THEME = 'CHANGE_THEME'

export function changeTheme (isDark) {
  return {
    type: CHANGE_THEME,
    payload: isDark
  }
}
