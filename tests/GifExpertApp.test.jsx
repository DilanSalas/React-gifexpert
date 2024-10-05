
describe('Pruebas en <GifExpertApp />', () => {
   test('debe de recibir un newCategory', () => {
    const newCategory = 'One Punch';
       render(<GifExpertApp />);
       expect(screen.getByText(newCategory));
   });

   test('debe de renderizar un AddCategory', () => {
       render(<GifExpertApp />);
       expect(screen.getByRole('form'));
   });

});