"use strict"

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.state = 100;
		this.type = null;
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
	}

	fix() {
		this.state *= 1.5;
	}
	set state(newState) {
		this._state = Math.min(Math.max(newState, 0), 100);
	}

	get state() {
		return this._state;
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine'
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}



class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		if (typeof name !== 'string') {
			return;
		}
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book instanceof Object && book !== null && !(Array.isArray(book)) && book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			for (let key in this.books[i]) {
				if (key === type && this.books[i][key] === value) {
					return this.books[i];
				}
			}

		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {

				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}

}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {

		if (mark > 1 && mark < 6) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}

			this.marks[subject].push(mark);
		}

	}


	getAverageBySubject(subject) {
		if (this.marks[subject] === undefined) {
			return 0;
		}
		let arrMarks = this.marks[subject];

		return arrMarks.reduce((acc, el) => acc + el, 0) / arrMarks.length;

	}

	getAverage() {
		let res = 0;
		let totalMarksCount = 0;
		for (let key in this.marks) {
			for (let i = 0; i < this.marks[key].length; i++) {
				res += this.marks[key][i];
				totalMarksCount += 1;
			}
		}
		return totalMarksCount > 0 ? res / totalMarksCount : 0;
	}
}