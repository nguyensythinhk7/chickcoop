export const isMobile = (): boolean => {
  if(window.innerWidth <= 768) {
    return true;
  }

  return false;
}