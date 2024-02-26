export const fetcher = async (path: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
    options
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();

  return data;
};

export const get = <T extends object>(
  path: string,
  headers: HeadersInit = {},
  options: RequestInit = {}
): Promise<T> => {
  return fetcher(path, { method: 'GET', ...options, headers });
};

export const post = <T extends object>(
  path: string,
  body: Omit<T, 'id'>,
  headers: HeadersInit = {},
  options: RequestInit = {}
): Promise<T> => {
  return fetcher(path, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

export const patch = <T extends object>(
  path: string,
  body: Partial<T>,
  headers: HeadersInit = {},
  options: RequestInit = {}
): Promise<T> => {
  return fetcher(path, {
    method: 'PATCH',
    body: JSON.stringify(body),
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

export const destroy = <T extends object>(
  path: string,
  headers: HeadersInit = {},
  options: RequestInit = {}
): Promise<T> => {
  return fetcher(path, { method: 'DELETE', ...options, headers });
};
