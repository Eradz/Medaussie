import { postType } from "../types/types";


export function instanceOfPostType(object: unknown): object is postType {
    const data = object as Record<keyof postType, unknown>;
  return (
    typeof data._id === 'string' &&
    typeof data.title === 'string' &&
    typeof data.excerpt === 'string' &&
    typeof data.type === 'string' &&
    typeof data.slug === 'string' &&
    typeof data.author === 'object' &&
    typeof data.body === 'string'
  );
}