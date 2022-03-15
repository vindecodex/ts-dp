import { Tool } from './interface';

export abstract class Factory {
				public abstract createTool(): Tool;

				public operate(): string  {
								const tool = this.createTool();
								return tool.draw();
				}
}

export function factoryMethod(tool: Factory): Tool {
				return tool.createTool();
}
