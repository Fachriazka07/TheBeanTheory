import { client } from './sanity';
import type { Product, BrewingGuide, Location } from '@/types';

// ──── Product Queries ────

export async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch(
      `*[_type == "product"] | order(title asc) {
        _id,
        title,
        slug,
        image,
        origin,
        roastLevel,
        process,
        notes,
        price,
        isReady,
        waLink
      }`
    );
  } catch {
    console.warn(
      'Failed to fetch from Sanity (likely using placeholder ID). Returning empty array.'
    );
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    return await client.fetch(
      `*[_type == "product" && isReady == true][0...4] | order(_createdAt desc) {
        _id,
        title,
        slug,
        image,
        origin,
        roastLevel,
        notes,
        price,
        waLink
      }`
    );
  } catch {
    console.warn(
      'Failed to fetch from Sanity (likely using placeholder ID). Returning empty array.'
    );
    return [];
  }
}

// ──── Brewing Guide Queries ────

export async function getBrewingGuides(): Promise<BrewingGuide[]> {
  try {
    return await client.fetch(
      `*[_type == "brewingGuide"] | order(methodName asc) {
        _id,
        methodName,
        icon,
        difficulty,
        instructions,
        videoUrl
      }`
    );
  } catch {
    console.warn(
      'Failed to fetch from Sanity (likely using placeholder ID). Returning empty array.'
    );
    return [];
  }
}

// ──── Location Queries ────

export async function getLocations(): Promise<Location[]> {
  try {
    return await client.fetch(
      `*[_type == "location"] | order(branchName asc) {
        _id,
        branchName,
        address,
        coordinates,
        openingHours
      }`
    );
  } catch {
    console.warn(
      'Failed to fetch from Sanity (likely using placeholder ID). Returning empty array.'
    );
    return [];
  }
}
