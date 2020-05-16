import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`
}
const DEFAULT_SIZE = 'medium'
export const Button = ({
  id,
  url,
  disabled,
  loading,
  children,
  accessibilityLabel,
  ariaControls,
  ariaExpanded,
  ariaPressed,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  external,
  download,
  icon,
  primary,
  outline,
  destructive,
  plain,
  monochrome,
  submit,
  size = DEFAULT_SIZE,
  textAlign,
  fullWidth,
  pressed,
  reset,
  ...rest
}) => {
  return (
    <button
      type={submit ? 'submit' : reset ? 'reset' : 'button'}
      className={classNames(
        styles.button,
        primary && styles.primary,
        outline && styles.outline,
        destructive && styles.destructive,
        disabled && styles.disabled,
        loading && styles.loading,
        plain && styles.plain,
        pressed && !disabled && !url && styles.pressed,
        monochrome && styles.monochrome,
        size && size !== DEFAULT_SIZE && styles[variationName('size', size)],
        textAlign && styles[variationName('textAlign', textAlign)],
        fullWidth && styles.fullWidth,
        icon && children == null && styles.iconOnly
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}
