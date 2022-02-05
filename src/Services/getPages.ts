type MountArrayType = {
  [key: number]: () => number
}

export const getPages = (currentPage: number) => {

  const pages: number[] = [];

  const mountArrayPages: MountArrayType = {
    0: () => pages.push(currentPage-4, currentPage-3, currentPage-2, currentPage-1, currentPage),
    1: () => pages.push(currentPage, currentPage+1, currentPage+2, currentPage+3, currentPage+4),
    2: () => pages.push(currentPage-1, currentPage, currentPage+1, currentPage+2, currentPage+3),
    3: () => pages.push(currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2),
    4: () => pages.push(currentPage-3, currentPage-2, currentPage-1, currentPage, currentPage+1),
  }

  mountArrayPages[currentPage%5]()
  return pages;
}