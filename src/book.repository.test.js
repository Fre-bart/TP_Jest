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

describe('Somme du prix de tous les livre', function () {

  test('Fonction value appelée 1 fois ', () => {

    const dbMock = {
        get : jest.fn().mockReturnThis(),
        map : jest.fn().mockReturnThis(),
        value : jest.fn().mockReturnValue(0)
    };
      const repository = new BookRepository(dbMock);
      repository.getTotalPrice();

      expect(dbMock.value.mock.calls.length).toBe(1);
  });

    test('Somme des prix', () => {

      const dbMock = {
          get : jest.fn().mockReturnThis(),
          map : jest.fn().mockReturnThis(),
          value : jest.fn().mockReturnValue([20,30])
      };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(50);
    });
});

describe('Retourne un livre selon le nom', function () {

  test('Fonction value appelée 1 fois ', () => {

    const dbMock = {
        get : jest.fn().mockReturnThis(),
        find : jest.fn().mockReturnThis(),
        value : jest.fn().mockReturnValue(0)
    };
      const repository = new BookRepository(dbMock);
      repository.getBookByName();

      expect(dbMock.value.mock.calls.length).toBe(1);
  });

    test('Retourne un livre à partir de son nom', () => {

      var book = {
          'id' : 1,
          "name" :"Misérable",
      }
      const dbMock = {
          get : jest.fn().mockReturnThis(),
          find : jest.fn().mockReturnThis(),
          value : jest.fn().mockReturnValue(book)
      };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName()).toEqual(book);
    });
});

describe('Nombre de livre ajouté par mois', function () {


  test('Fonction value appelée 1 fois ', () => {
    let books = [
  		{name: "hiver",added_at: "2019-02-22"},
  		{name: "hiver",added_at: "2019-11-03"},
  		{name: "hiver",added_at: "2019-11-15"}
  	];

    const dbMock = {
      get : jest.fn().mockReturnThis(),
      filter: jest.fn().mockReturnThis(),
      sortBy: jest.fn().mockReturnThis(),
      value : jest.fn().mockReturnValue(books)
    };

    const repository = new BookRepository(dbMock);
    repository.getCountBookAddedByMonth();

    expect(dbMock.value.mock.calls.length).toBe(1);
  });

  test('Livre par mois', () => {
    let books = [
  		{name: "hiver",added_at: "2019-02-22"},
  		{name: "hiver",added_at: "2019-11-03"},
  		{name: "hiver",added_at: "2019-11-15"}
  	];
    let result = [
      {
        year: 2019,
        month: 2,
        count: 1,
        count_cumulative: 1
      },
      {
        year: 2019,
        month: 11,
        count: 2,
        count_cumulative: 3
      },
  	];
    const dbMock = {
      get : jest.fn().mockReturnThis(),
      filter: jest.fn().mockReturnThis(),
      sortBy: jest.fn().mockReturnThis(),
      value : jest.fn().mockReturnValue(books)
    };

    const repository = new BookRepository(dbMock);

    expect(repository.getCountBookAddedByMonth('hiver')).toStrictEqual(result);
  });

});
