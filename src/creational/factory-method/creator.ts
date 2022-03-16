import { Factory } from './factory';
import { PenTool, PencilTool } from './tools';

export const create: Function = (tool: string): Factory => {
				const tools: { [key: string]: Factory } = {
								'pencil': new PencilTool(),
								'pen': new PenTool()
				}
				return  tools[tool];
}

