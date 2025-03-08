const API_KEY = '579b464db66ec23bdd000001a91323d719a846f25a042657f8915844';
const BASE_URL = '/resource/81242853-a9f9-44f4-a100-ea817d9c9ebe';

interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  images: string[];
  propertyType: string;
  listingType: string; // 'sell' or 'rent'
  furnishing?: string;
  constructionStatus?: string;
  postedBy: {
    name: string;
    email: string;
    phone: string;
    type: string; // 'owner', 'agent', 'builder'
  };
  createdAt: string;
  updatedAt: string;
}

export interface PropertySearchParams {
  location?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  listingType?: string;
  furnishing?: string;
  constructionStatus?: string;
  postedBy?: string;
  page?: number;
  limit?: number;
}

/**
 * Fetch properties with optional search parameters
 */
export const fetchProperties = async (params?: PropertySearchParams): Promise<ApiResponse<Property[]>> => {
  try {
    // Build query string from params
    const queryParams = new URLSearchParams();
    
    // Add API key
    queryParams.append('api-key', API_KEY);
    
    // Add search parameters if provided
    if (params) {
      if (params.location) queryParams.append('location', params.location);
      if (params.propertyType) queryParams.append('propertyType', params.propertyType);
      if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
      if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
      if (params.bedrooms) queryParams.append('bedrooms', params.bedrooms.toString());
      if (params.listingType) queryParams.append('listingType', params.listingType);
      if (params.furnishing) queryParams.append('furnishing', params.furnishing);
      if (params.constructionStatus) queryParams.append('constructionStatus', params.constructionStatus);
      if (params.postedBy) queryParams.append('postedBy', params.postedBy);
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.limit) queryParams.append('limit', params.limit.toString());
    }

    const url = `${BASE_URL}?${queryParams.toString()}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error('Error fetching properties:', error);
    return { data: [], success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

/**
 * Fetch a single property by ID
 */
export const fetchPropertyById = async (id: string): Promise<ApiResponse<Property | null>> => {
  try {
    const url = `${BASE_URL}/${id}?api-key=${API_KEY}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error(`Error fetching property with ID ${id}:`, error);
    return { data: null, success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

/**
 * Post a new property
 */
export const postProperty = async (propertyData: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Property | null>> => {
  try {
    const url = `${BASE_URL}?api-key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error('Error posting property:', error);
    return { data: null, success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

/**
 * Update an existing property
 */
export const updateProperty = async (id: string, propertyData: Partial<Property>): Promise<ApiResponse<Property | null>> => {
  try {
    const url = `${BASE_URL}/${id}?api-key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error(`Error updating property with ID ${id}:`, error);
    return { data: null, success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

/**
 * Delete a property
 */
export const deleteProperty = async (id: string): Promise<ApiResponse<boolean>> => {
  try {
    const url = `${BASE_URL}/${id}?api-key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    return { data: true, success: true };
  } catch (error) {
    console.error(`Error deleting property with ID ${id}:`, error);
    return { data: false, success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}; 