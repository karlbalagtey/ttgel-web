export function setPosition(position, snackbarPosition) {
  switch (position) {
    case 'bottom-center': {
      snackbarPosition = { top: false, left: false, center: true };
      break;
    }

    case 'top-center': {
      snackbarPosition = { top: true, left: false, center: true };
      break;
    }

    case 'top-left': {
      snackbarPosition = { top: true, left: true, center: false };
      break;
    }

    case 'top-right': {
      snackbarPosition = { top: true, left: false, center: false };
      break;
    }

    case 'bottom-right': {
      snackbarPosition = { top: false, left: false, center: false };
      break;
    }

    case 'bottom-left': {
      snackbarPosition = { top: false, left: true, center: false };
      break;
    }

    default: {
      snackbarPosition = {
        top: true,
        left: false,
        right: false,
        center: true,
      };
      break;
    }
  }
  return snackbarPosition;
}
