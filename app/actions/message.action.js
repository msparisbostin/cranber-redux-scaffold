import {
  OPEN_MESSAGE,
  CLOSE_MESSAGE
} from '../constants/actions';

export function openMessage(type = 'info', content = '') {
  return {
    type: OPEN_MESSAGE,
    payload: {
      show: true,
      type: type,
      content: content
    }
  }
}

export function closeMessage () {
  return {
    type: CLOSE_MESSAGE
  }
}
