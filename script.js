/*Book constructor.*/
function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.info = function info(){
        return `${title} by ${author} is ${pageCount} pages long and you have ${read} it.`;
    }
}