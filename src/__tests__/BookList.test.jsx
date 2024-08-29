import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
import CommentArea from "../components/CommentArea";

const books = fantasy;

describe("controlliamo i libri", () => {
  it("se all'avvio sono presenti i libri", () => {
    render(<BookList books={books} />);
    const bookElements = screen.getAllByTestId("single-book");
    expect(bookElements).toHaveLength(books.length);
  });
  it("se cambiano colore al click", () => {
    render(<BookList books={books} />);
    const bookElements = screen.getAllByTestId("single-book");
    bookElements.forEach((bookElement) => {
      expect(bookElement).toHaveStyle("border: none");
    });
    fireEvent.click(bookElements[0]);
    render(<BookList books={books} selectedBook={books[0].asin} />);
    expect(bookElements[0]).toHaveStyle("border: 3px solid red");
    fireEvent.click(bookElements[1]);
    render(<BookList books={books} selectedBook={books[1].asin} />);
    expect(bookElements[0]).toHaveStyle("border: none");
    expect(bookElements[1]).toHaveStyle("border: 3px solid red");
  });
  it("recensioni del libro selezionato", async () => {
    render(<BookList books={books} />);
    const bookElements = screen.getAllByTestId("single-book");
    fireEvent.click(bookElements[0]);
    render(<CommentArea asin={books[0].asin} />);
    await waitFor(() => {
      const singleCommentElements = screen.getAllByTestId("single-comment");
      expect(singleCommentElements.length).toBeGreaterThan(0);
    });
  });
});
