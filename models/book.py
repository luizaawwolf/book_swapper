

class Book(object):
    def __init__(self, title, author, pub_year=0, summary="", cover_url=""):
        self.title = title
        self.author = author
        self.pub_year = pub_year
        self.summary = summary
        self.cover_url = cover_url

    @staticmethod
    def from_dict(source):
        book = Book(source[u'title'], source[u'author'])

        if u'pub_year' in source:
            book.pub_year = source[u'pub_year']

        if u'summary' in source:
            book.summary = source[u'summary']

        if u'cover_url' in source:
            book.cover_url = source[u'cover_url']

        return book

    def to_dict(self):
        dest = {
            u'title': self.title,
            u'author': self.author
        }

        if self.pub_year:
            dest[u'pub_year'] = self.pub_year

        if self.summary:
            dest[u'summary'] = self.summary

        if self.cover_url:
            dest[u'cover_url'] = self.cover_url

        return dest

    def __repr__(self):
        return(
            f'Book(\
                title={self.title}, \
                author={self.author}, \
                pub_year={self.pub_year}, \
                summary={self.summary}, \
                cover_url={self.cover_url}\
            )'
        )