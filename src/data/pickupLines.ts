
import { PickupLine } from './types';
import { categories } from './categories';
import { funnyLines } from './categories/funny';
import { hotLines } from './categories/hot';
import { cuteLines } from './categories/cute';
import { savageLines } from './categories/savage';
import { cheesyLines } from './categories/cheesy';
import { hookupLines } from './categories/hookup';
import { loveLines } from './categories/love';
import { instagramLines } from './categories/instagram';
import { genzLines } from './categories/genz';

// Combine all pickup lines
const pickupLines: PickupLine[] = [
  ...funnyLines,
  ...hotLines,
  ...cuteLines,
  ...savageLines,
  ...cheesyLines,
  ...hookupLines,
  ...loveLines,
  ...instagramLines,
  ...genzLines
];

export { pickupLines, categories };
export type { PickupLine };
