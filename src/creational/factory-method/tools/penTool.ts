import { Factory } from '../factory';
import { Tool } from './interface';

export class PenTool extends Factory {
				public createTool(): Tool {
								return new Pen();
				}
}

class Pen implements Tool {
				draw(): string {
								return 'Drawing using Pen';
				}
}
