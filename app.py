from flask import Flask, jsonify, render_template, request, redirect, url_for
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
from models.book import Book

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
book_ref = db.collection('books')

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")

@app.route('/new_swap')
def new_swap():
    stream = book_ref.stream()
    book_objs = [Book.from_dict( doc.to_dict() ) for doc in stream]
    return render_template("new_swap.html", books=book_objs)

@app.route('/hello')
def hello():
    return render_template("hello.html")

@app.route('/book/add', methods=['POST'])
def createBook():
    try:
        book = Book(title="A Court of Thorns and Roses", author="Sarah J. Maas")
        book_ref.add(book.to_dict())
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/book/<book_id>', methods=['GET'])
def readBook(book_id):
    try:
        if book_id:
            book = book_ref.document(book_id).get()
            return jsonify(book.to_dict()), 200
        else:
            all_books = [doc.to_dict() for doc in book_ref.stream()]
            return jsonify(all_books), 200
    except Exception as e:
        return f"An Error Occured: {e}"

if __name__ == '__main__':
    app.run(debug=True)