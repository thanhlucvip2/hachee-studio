const storagePrefix = "hachee_studio__";

export const getCookie = (name: string): string | null => {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
};

export const setCookies = <T>(name: string, value: T): void => {
  document.cookie = name + "=" + JSON.stringify(value) + ";" + ";path=/";
};

export const removeCookies = (name: string): void => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

const cookie = {
  getToken: () => {
    return JSON.parse(getCookie(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    setCookies<string>(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    removeCookies(`${storagePrefix}token`);
  },
};

export default cookie;
