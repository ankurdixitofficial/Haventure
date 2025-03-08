const API_KEY = '579b464db66ec23bdd000001a91323d719a846f25a042657f8915844';
const BASE_URL = 'https://api.data.gov.in/resource/81242853-a9f9-44f4-a100-ea817d9c9ebe';

export interface ReraRecord {
  sl__no_: string;
  state_ut: string;
  general_rules: string;
  establishment_of_regulatory_authority: string;
  establishment_of_appellate_tribunal: string;
  web_portal: string;
  adjudicating_officer: string;
  registrations___projects: string;
  registrations___agents: string;
  total_no__of_cases_disposed_by_authority_: string;
}

export interface ReraApiResponse {
  index_name: string;
  title: string;
  desc: string;
  org_type: string;
  org: { item: string | string[] };
  sector: { item: string | string[] };
  source: string;
  catalog_uuid: string;
  visualizable: string;
  active: string;
  created: string;
  updated: string;
  created_date: string;
  updated_date: string;
  external_ws: string;
  external_ws_url: string;
  target_bucket: {
    index: string;
    type: string;
    field: string;
  };
  field: {
    item: {
      id: string;
      name: string;
      type: string;
    }[];
  };
  message: string;
  version: string;
  status: string;
  total: number;
  count: number;
  limit: number;
  offset: number;
  records: {
    item: ReraRecord | ReraRecord[];
  };
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

/**
 * Parse XML to JSON
 * This is a simple implementation. For production, use a proper XML parser library.
 */
const parseXmlToJson = (xmlString: string): any => {
  try {
    // For simplicity, we'll extract just what we need from the XML
    // In a real application, use a proper XML parser library
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    // Extract records
    const records: ReraRecord[] = [];
    const items = xmlDoc.querySelectorAll('records > item');
    
    items.forEach((item) => {
      const record: any = {};
      
      // Extract all child elements
      Array.from(item.children).forEach((child) => {
        const key = child.tagName;
        const value = child.textContent || '';
        record[key] = value;
      });
      
      records.push(record as ReraRecord);
    });
    
    // Extract total count
    const totalElement = xmlDoc.querySelector('total');
    const total = totalElement ? parseInt(totalElement.textContent || '0') : 0;
    
    // Extract count
    const countElement = xmlDoc.querySelector('count');
    const count = countElement ? parseInt(countElement.textContent || '0') : 0;
    
    // Extract limit
    const limitElement = xmlDoc.querySelector('limit');
    const limit = limitElement ? parseInt(limitElement.textContent || '0') : 0;
    
    // Extract offset
    const offsetElement = xmlDoc.querySelector('offset');
    const offset = offsetElement ? parseInt(offsetElement.textContent || '0') : 0;
    
    return {
      total,
      count,
      limit,
      offset,
      records: {
        item: records
      }
    };
  } catch (error) {
    console.error('Error parsing XML:', error);
    return {
      total: 0,
      count: 0,
      limit: 0,
      offset: 0,
      records: {
        item: []
      }
    };
  }
};

/**
 * Fetch RERA data with optional pagination
 */
export const fetchReraData = async (
  limit: number = 10,
  offset: number = 0,
  format: string = 'json'
): Promise<ApiResponse<ReraApiResponse>> => {
  try {
    // Build query string
    const queryParams = new URLSearchParams();
    queryParams.append('api-key', API_KEY);
    queryParams.append('format', format);
    queryParams.append('limit', limit.toString());
    queryParams.append('offset', offset.toString());

    const url = `${BASE_URL}?${queryParams.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    let data: any;
    
    // Handle different response formats
    if (format.toLowerCase() === 'xml') {
      const xmlText = await response.text();
      data = parseXmlToJson(xmlText);
    } else {
      data = await response.json();
    }
    
    return { data, success: true };
  } catch (error) {
    console.error('Error fetching RERA data:', error);
    return {
      data: {
        total: 0,
        count: 0,
        limit: 0,
        offset: 0,
        records: { item: [] }
      } as ReraApiResponse,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Fetch RERA data for a specific state
 */
export const fetchReraDataByState = async (
  state: string,
  format: string = 'json'
): Promise<ApiResponse<ReraApiResponse>> => {
  try {
    // Build query string
    const queryParams = new URLSearchParams();
    queryParams.append('api-key', API_KEY);
    queryParams.append('format', format);
    queryParams.append('filters[state_ut]', state);

    const url = `${BASE_URL}?${queryParams.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    let data: any;
    
    // Handle different response formats
    if (format.toLowerCase() === 'xml') {
      const xmlText = await response.text();
      data = parseXmlToJson(xmlText);
    } else {
      data = await response.json();
    }
    
    return { data, success: true };
  } catch (error) {
    console.error(`Error fetching RERA data for state ${state}:`, error);
    return {
      data: {
        total: 0,
        count: 0,
        limit: 0,
        offset: 0,
        records: { item: [] }
      } as ReraApiResponse,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}; 