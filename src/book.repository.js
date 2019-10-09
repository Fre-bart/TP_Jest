class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
      return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
      var prices = this.db.get('books').map('price').value();
      var s=0
      for(var i=0;i<prices.length;i++)
        s=s+prices[i]
      return s
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
      return this.db.get('books').find({ "name" :bookName }).value();
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMonth(bookName) {
      var books_name = this.db.get('books').filter({name: bookName}).sortBy('added_at').value();
      var length = books_name.length;
      var result = [];
      if(length > 0) {
        var year = new Date(books_name[0].added_at).getFullYear();
        var month = new Date(books_name[0].added_at).getMonth() + 1;
        var count = 1;
        var count_cumulative = 1;

        let year_new, month_new, date_new;
        for(let i = 1 ; i < length ; ++i) {
          date_new =  new Date(books_name[i].added_at)
          year_new = date_new.getFullYear();
          month_new = date_new.getMonth() + 1;
          if(year_new != year || month_new != month) {
            result.push({year: year,month: month,count: count,count_cumulative: count_cumulative});
            count = 1;
            year = year_new;
            month = month_new;
          }
          else
            ++count;

          ++count_cumulative;
        }

        result.push({year: year,month: month,count: count,count_cumulative: count_cumulative});
      }
      return result;
    }

}


module.exports = BookRepository;
