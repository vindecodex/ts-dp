import { PenTool } from './penTool';
import { PencilTool } from './pencilTool';
import {  Factory, factoryMethod } from './factory';
import { Tool } from './interface';

test('Factory Method', () => {
				const  pencil: Tool = factoryMethod(new PencilTool());
				const  pen: Tool = factoryMethod(new PenTool());

				expect(pencil.draw()).toBe('Drawing using Pencill');
				expect(pen.draw()).toBe('Drawing using Pen');
})
