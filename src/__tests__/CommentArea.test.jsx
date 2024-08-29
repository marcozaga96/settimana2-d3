import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("visualizza CommentArea", () => {
  it("se all'avvio sono presenti i libri", () => {
    render(<CommentArea />);
    const commentElement = screen.getByText(/Recensione/i);
    expect(commentElement).toBeInTheDocument();
  });
  it("SingleComment all'avvio", () => {
    render(<CommentArea />);
    const singleCommentElements = screen.queryAllByTestId("single-comment");
    expect(singleCommentElements).toHaveLength(0);
  });
});
