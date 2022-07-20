const books = [
    {
        id: "_test",
        name: "test",
        description: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.",
        author: "mehdi mehran",
        photo: "https://sample-videos.com/img/Sample-jpg-image-50kb.jpg"
    },
]

const delay = 500;


const generatedID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

class BookApi {
    static getAllBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book);
        return new Promise((resolve) => {
            setTimeout(() => {
                if (book.id) {
                    const existingBookIndex = books.findIndex(a => a.id === book.id);
                    books.splice(existingBookIndex, 1, book);
                } else {
                    book.id = generatedID();
                    books.push(book);
                }
                resolve(book);
            }, delay);
        });
    }

    static getBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingBookIndex = books.findIndex(book => book.id === bookId);
                const bookFound = Object.assign({}, books[existingBookIndex]);
                resolve(bookFound);
            }, delay);
        });
    }

    static deleteBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfBookToDelete = books.findIndex(book => book.id === bookId);
                books.splice(indexOfBookToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default BookApi;