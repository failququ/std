export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

/**
 * Adds new query parameters to the current URL.
 * @param params Object with query parameter names as keys and values as values.
 * If the value is undefined, the parameter is removed from the URL.
 * If the parameter is not present in the URL, it is added.
 * If the parameter is already present in the URL, its value is changed.
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
