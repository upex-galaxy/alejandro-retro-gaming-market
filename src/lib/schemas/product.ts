import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  condition: z.enum(["New", "Used - Excellent", "Used - Good", "Used - Acceptable"]),
  category: z.string().min(1, "Category is required"),
  platform: z.string().min(1, "Platform is required"),
  images: z.array(z.string().url("Invalid image URL")).min(1, "At least one image is required"),
});
