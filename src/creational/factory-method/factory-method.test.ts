import { Factory } from './factory';
import { create } from './creator';

test('Factory Method', () => {
				const  pencil: Factory = create('pencil');
				const  pen: Factory = create('pen');

				expect(pencil.operate()).toBe('Drawing using Pencil');
				expect(pen.operate()).toBe('Drawing using Pen');
})
