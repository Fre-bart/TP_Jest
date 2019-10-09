const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Nombre total de libre', function () {

  test('Fonction value appelée 1 fois', () => {

    const dbMock = {
        get : jest.fn().mockReturnThis(),
        size : jest.fn().mockReturnThis(),
        value : jest.fn().mockReturnValue(0)
    };
      const repository = new BookRepository(dbMock);
      repository.getTotalCount();

      expect(dbMock.value.mock.calls.length).toBe(1);
  });

    test('Nombre total de libre', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(0)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(0);
    });
});
