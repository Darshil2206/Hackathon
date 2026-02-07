import { ZoneData } from './types';

export const GANDHINAGAR_ZONES: ZoneData[] = [
  // --- Gandhinagar Major Hubs ---
  { id: 'sec-21', name: 'Sector 21 Market', lat: 23.2350, lng: 72.6450, description: 'Major shopping district, high traffic.' },
  { id: 'infocity', name: 'Infocity', lat: 23.1890, lng: 72.6370, description: 'IT hub and commercial complex.' },
  { id: 'akshardham', name: 'Akshardham Temple', lat: 23.2290, lng: 72.6740, description: 'Tourist attraction, variable demand.' },
  { id: 'gift-city', name: 'GIFT City', lat: 23.1610, lng: 72.6860, description: 'Business district, regulated parking.' },
  { id: 'sec-11', name: 'Sector 11 (Udyog Bhavan)', lat: 23.2156, lng: 72.6369, description: 'Government offices area.' },
  { id: 'sec-16', name: 'Sector 16 (Civil Hospital)', lat: 23.2200, lng: 72.6500, description: 'Hospital zone, emergency priority.' },
  
  // --- New Gandhinagar Locations ---
  { id: 'mahatma-mandir', name: 'Mahatma Mandir', lat: 23.2356, lng: 72.6534, description: 'Convention center, VVIP movement.' },
  { id: 'swarnim-park', name: 'Swarnim Park (Central Vista)', lat: 23.2250, lng: 72.6500, description: 'Recreational zone, evening rush.' },
  { id: 'indroda-park', name: 'Indroda Nature Park', lat: 23.2104, lng: 72.6409, description: 'Ecological park, weekend tourism.' },
  { id: 'sargasan', name: 'Sargasan Cross Roads', lat: 23.1965, lng: 72.6186, description: 'Key entry point, heavy transit.' },
  { id: 'pdeu-raisan', name: 'PDEU / Raisan', lat: 23.1550, lng: 72.6660, description: 'University corridor, student traffic.' },
  { id: 'kudasan', name: 'Kudasan (Urjanagar)', lat: 23.1830, lng: 72.6250, description: 'Rapidly developing residential hub.' },
  { id: 'sec-6', name: 'Sector 6 (Market)', lat: 23.2180, lng: 72.6650, description: 'Local vegetable market, morning peak.' },
  { id: 'adalaj-trimandir', name: 'Adalaj Trimandir', lat: 23.1614, lng: 72.5835, description: 'Religious site, highway proximity.' },

  // --- Ahmedabad Key Zones ---
  { id: 'sat-1', name: 'Satellite Area', lat: 23.0300, lng: 72.5178, description: 'High density residential & commercial.' },
  { id: 'sg-hwy', name: 'SG Highway (Prahlad Nagar)', lat: 23.0120, lng: 72.5100, description: 'Corporate parks, heavy peak traffic.' },
  { id: 'manek-chowk', name: 'Manek Chowk', lat: 23.0225, lng: 72.5896, description: 'Old city market, extremely congested.' },
  { id: 'law-garden', name: 'Law Garden', lat: 23.0263, lng: 72.5568, description: 'Recreational & shopping, evening rush.' },
  { id: 'riverfront', name: 'Sabarmati Riverfront', lat: 23.0400, lng: 72.5700, description: 'Tourist zone, weekend peaks.' },
];

export const TRANSIT_HUBS = [
  { name: 'Ranip Bus Terminal (GSRTC)', lat: 23.0650, lng: 72.5800, type: 'Bus' },
  { name: 'Kalupur Metro Station', lat: 23.0280, lng: 72.6000, type: 'Metro' },
  { name: 'Shivranjani BRTS', lat: 23.0250, lng: 72.5250, type: 'BRTS' },
  { name: 'Gandhinagar Sector 1 Metro', lat: 23.2156, lng: 72.6369, type: 'Metro' }
];

// Realistic daily pattern: Morning peak (10am), Lunch dip, Evening peak (6pm)
export const HOURLY_TRAFFIC_DATA = [
  { time: '06:00', occupancy: 12 },
  { time: '07:00', occupancy: 25 },
  { time: '08:00', occupancy: 45 },
  { time: '09:00', occupancy: 70 },
  { time: '10:00', occupancy: 88 },
  { time: '11:00', occupancy: 85 },
  { time: '12:00', occupancy: 75 },
  { time: '13:00', occupancy: 65 },
  { time: '14:00', occupancy: 65 },
  { time: '15:00', occupancy: 70 },
  { time: '16:00', occupancy: 82 },
  { time: '17:00', occupancy: 92 },
  { time: '18:00', occupancy: 95 },
  { time: '19:00', occupancy: 85 },
  { time: '20:00', occupancy: 60 },
  { time: '21:00', occupancy: 40 },
  { time: '22:00', occupancy: 25 },
];

export const WEEKLY_STATS = [
  { day: 'Mon', usage: 85 },
  { day: 'Tue', usage: 82 },
  { day: 'Wed', usage: 88 },
  { day: 'Thu', usage: 84 },
  { day: 'Fri', usage: 92 },
  { day: 'Sat', usage: 65 },
  { day: 'Sun', usage: 45 },
];

export const VEHICLE_TYPES = [
  { name: '2-Wheeler', value: 65, color: '#10b981' }, // High bike usage
  { name: '4-Wheeler', value: 30, color: '#3b82f6' },
  { name: 'Heavy', value: 5, color: '#f43f5e' },
];