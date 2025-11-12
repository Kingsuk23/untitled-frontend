export enum PropertyType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  VILLA = "VILLA",
  CONDO = "CONDO",
  TOWNHOUSE = "TOWNHOUSE",
  DUPLEX = "DUPLEX",
  STUDIO = "STUDIO",
  PENTHOUSE = "PENTHOUSE",
  FARMHOUSE = "FARMHOUSE",
  LAND = "LAND",
  OFFICE = "OFFICE",
  SHOP = "SHOP",
  WAREHOUSE = "WAREHOUSE",
  INDUSTRIAL = "INDUSTRIAL",
  MIXED_USE = "MIXED_USE",
  OTHER = "OTHER",
}

export enum PropertyCategory {
  RESIDENTIAL = "RESIDENTIAL",
  COMMERCIAL = "COMMERCIAL",
  LAND = "LAND",
  INDUSTRIAL = "INDUSTRIAL",
  SPECIAL = "SPECIAL",
}

export enum MediaType {
  THUMBNAIL = "THUMBNAIL",
  GALLERY = "GALLERY",
}

export interface Media {
  id: string;
  url: string;
  type: MediaType;
  propertyId: string;
}

export interface SaveProperty {
  id: string;
  propertyId: string;
  userId: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  area: number;

  category: PropertyCategory;
  type: PropertyType;

  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;

  bathroom_num?: number;
  bedroom_num?: number;
  parking?: number;

  userId: string;

  medias: Media[];

  created_at: string | Date;
  updated_at: string | Date;
  SaveProperty?: SaveProperty;
}
