import { useState } from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import DialogTransition from './DialogTransition'

let globalId = 0

const modalSizes = ['small', 'medium', 'large']
/**
 * Returns the className and isFullscreen bool to be used in the Dialog
 * according to the size of the modal.
 *
 * @param {string} size - Size of the modal (small, medium, large)
 * @returns {object} className, isFullscreen and id
 */
const useCozyDialog = props => {
  const {
    size,
    actions, // eslint-disable-line no-unused-vars
    actionsLayout, // eslint-disable-line no-unused-vars
    title, // eslint-disable-line no-unused-vars
    content, // eslint-disable-line no-unused-vars
    open,
    opened,
    onClose,
    ...otherProps
  } = props
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const paperClassName = modalSizes.includes(size) ? `${size}` : 'medium'
  const fullScreen = size !== 'small' && isMobile
  const TransitionComponent = DialogTransition

  const dialogProps = {
    'aria-labelledby': `modal-title-${id}`,
    fullScreen,
    open: open !== undefined ? open : opened,
    onClose,
    TransitionComponent,
    ...otherProps,
    classes: {
      ...otherProps.classes,
      paper: `${paperClassName} ${
        otherProps.classes ? otherProps.classes.paper : ''
      }`
    },
    TransitionProps: {
      fullScreen,
      ...otherProps.TransitionProps
    }
  }

  const dialogTitleProps = {
    id: `modal-title-${id}`,
    disableTypography: true,
    className: 'u-ellipsis'
  }

  const listItemClassName = 'listItem--dialog'
  const listItemProps = {
    classes: {
      root: listItemClassName
    }
  }

  const dividerClassName = 'divider--dialog'
  const dividerProps = {
    classes: {
      root: dividerClassName
    }
  }

  const dialogActionsClassName = 'cozyDialogActions'
  const dialogActionsProps = {
    classes: {
      root: dialogActionsClassName
    }
  }

  return {
    dialogProps,
    dialogTitleProps,
    listItemProps,
    id,
    fullScreen,
    dividerProps,
    dialogActionsProps
  }
}

export default useCozyDialog
