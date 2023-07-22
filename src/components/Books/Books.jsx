import { Children } from "react";
import BookItem from "./BookItem/BookItem";
import { Grid, GridItem } from "@chakra-ui/react";
import { useBooks } from "../../context/SelectedBookProvider";

const Books = () => {
  const { books } = useBooks();

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      rowGap={1}
      columnGap={5}
    >
      {/*Children.toArray to create unique children and about to put the key */}
      {Children.toArray(
        books.map((book) => {
          return (
            <GridItem>
              <BookItem
                id={book.book.ISBN}
                cover={book.book.cover}
                idx={"availableBooks"}
              />
            </GridItem>
          );
        })
      )}
    </Grid>
  );
};

export default Books;
