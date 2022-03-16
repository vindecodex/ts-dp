import { Factory } from '../factory';
import { Tool } from './interface';

export class PencilTool extends Factory {
				public createTool(): Tool {
								return new Pencil();
				}
}

class Pencil implements Tool {
				draw(): string {
								return 'Drawing using Pencil';
				}
}
