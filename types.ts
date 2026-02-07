export interface PredictionRequest {
  zone: string;
  date: string;
  time: string;
  isWeekend: boolean;
  hasEvent: boolean;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface GroundingResponse {
  text: string;
  sources: GroundingSource[];
}

export interface PredictionResult {
  availabilityPercentage: number;
  status: 'High' | 'Medium' | 'Low';
  confidenceScore: number;
  reasoning: string;
  totalSpots: number;
  occupiedSpots: number;
  emptySpots: number;
  nearbyParkingSpots?: Array<{ name: string; address: string; rating: number }>;
}

export interface ZoneData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

export interface ChartData {
  time: string;
  occupancy: number;
}

export interface WeatherData {
  temperature: number;
  precipitation: number;
  weatherCode: number;
  isRaining: boolean;
}
