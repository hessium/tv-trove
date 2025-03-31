export const getYoutubeVideoId = (url: string | undefined) => {
  if (typeof url === 'undefined') return null;

  const regExp = /.*(?:v=|be\/|\/v\/|embed\/|\/)([\w-]{11})(?:[^\w-]|$).*/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};
