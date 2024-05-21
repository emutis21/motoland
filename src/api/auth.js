const API_URL = import.meta.env.VITE_API_MOTOLAND

export const login = async ({email, password}) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error(`Error during login: ${response.status} ${await response.text()}`);
  }

  return response.json();
};

export const register = async ({username, email, password}) => {
  const response = await fetch(`${API_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });

  if (!response.ok) {
    throw new Error(`Error during registration: ${response.status} ${await response.text()}`);
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/api/logout`, {
    method: 'POST'
  });

  if (!response.ok) {
    throw new Error(`Error during logout: ${response.status} ${await response.text()}`);
  }

  return response.json();
};

export const getProfile = async () => {
  const response = await fetch(`${API_URL}/api/profile`);

  if (!response.ok) {
    throw new Error(`Error getting profile: ${response.status} ${await response.text()}`);
  }

  return response.json();
};