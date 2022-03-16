import { PenTool } from './tools';
import { PencilTool } from './tools';
import { Tool } from './tools';
import { factoryMethod } from './factory';

test('Factory Method', () => {
				const  pencil: Tool = factoryMethod(new PencilTool());
				const  pen: Tool = factoryMethod(new PenTool());

				expect(pencil.draw()).toBe('Drawing using Pencil');
				expect(pen.draw()).toBe('Drawing using Pen');
})
