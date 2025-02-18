export const LINKS = {
  auth: '/auth',
  home: <T extends object>(params?: T) => buildUrl('/', { params }),
  logout: '/logout',
  notAccess: '/403',
  notFound: '/404',
  registration: '/registration',
  sendCode: '/registration/send-code',
  serverError: '/500',
  term: (slug: string) => `/term/${slug}`,
  termCreate: '/term/create',
  termUpdate: (slug?: string) => `/term/update/${slug}`,
};

function buildUrl<T extends object>(
  path: string,
  { id, params }: { id?: string; params?: T },
) {
  if (!path) return '';

  if (!id && !Object.keys(params || {}).length) {
    return path;
  }

  if (!Object.keys(params || {}).length) {
    return `${path}/${id}`;
  }

  const searchParams = new URLSearchParams();

  for (const key of Object.keys(params || {})) {
    const value = params?.[key as keyof BodyInit];

    if (value) {
      searchParams.append(key, value as string);
    }
  }

  if (!id) {
    return `${path}?${searchParams.toString()}`;
  }

  return `${path}/${id}?${searchParams.toString()}`;
}
