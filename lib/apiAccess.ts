```typescript
import axios from 'axios';
import { EmailSchema, SearchSettingsSchema } from '../schemas';

export const getSearchResults = async (searchSettings: SearchSettingsSchema) => {
  try {
    const response = await axios.post('/api/emails', searchSettings);
    return response.data as EmailSchema[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserData = async (userId: string) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateSearchSettings = async (userId: string, searchSettings: SearchSettingsSchema) => {
  try {
    const response = await axios.put(`/api/users/${userId}/settings`, searchSettings);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
```