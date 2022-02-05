import { pageRange } from "~/Constants/pageRange";

export const handleRedirectPages = (value: string, currentPage: number) => {
  let url

  switch (value.toLocaleLowerCase()) {
    case 'next':
      url = currentPage + 1
      break;
    case 'back':
      url = currentPage - 1
      break;
    case 'start':
      url = pageRange.MIN_PAGE_LIMIT
      break;
    case 'last':
      url = pageRange.MAX_PAGE_LIMIT
      break;
    default:
      url = value
      break;
  }

  return `/pages/${url}`
}