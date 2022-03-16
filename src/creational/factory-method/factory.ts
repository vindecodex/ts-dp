import { Tool } from './tools';

export abstract class Factory {
				public abstract createTool(): Tool;

				public operate(): string  {
								const tool = this.createTool();
								return tool.draw();
				}
}
