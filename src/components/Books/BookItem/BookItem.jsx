import { useEffect, useState } from "react";
import { Button, Card, CardBody, Center, Image } from "@chakra-ui/react";
import { useBooks } from "../../../context/SelectedBookProvider";
import { ADD, REMOVE } from "../../../context/types";

const BookItem = ({ cover, id, idx }) => {
  const { addBook, removeBook, selectedBooks } = useBooks();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(selectedBooks.some((book) => book.book.ISBN === id));
  }, [selectedBooks, id, isAdded]);

  const handleBookState = () => {
    if (idx === "availableBooks") {
      addBook(id);
      setIsAdded(true);
    } else {
      removeBook(id);
      setIsAdded(false);
    }
  };

  return (
    <>
      <Card opacity={isAdded && idx === "availableBooks" ? 0.5 : 1}>
        <CardBody>
          <Image
            src={cover}
            alt="image cover book"
            borderRadius="lg"
            maxW="180px"
            maxH="250px"
          />
        </CardBody>
        <Center>
          <Button
            w={100}
            isDisabled={isAdded && idx === "availableBooks"}
            onClick={handleBookState}
            opacity={isAdded && idx === "availableBooks" ? 0.3 : 1}
          >
            {idx === "availableBooks" ? ADD : REMOVE}
          </Button>
        </Center>
      </Card>
    </>
  );
};

export default BookItem;
