import React, { useState, useEffect } from "react";
import { Montserrat } from "@next/font/google";
import { AiOutlineSync, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { Box, Button, Container, Icon, Text } from "@chakra-ui/react";

const inter = Montserrat({ subsets: ["latin"] });

export default function Quote() {
  const [height, setHeight] = useState(null);
  const [randomQuote, setRandomQuote] = useState("");
  const [randomQuoteAuthor, setRandomQuoteAuthor] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("/api/get-random-quote")
      .then((response) => response.json())
      .then((res) => {
        if (res.ok) {
          setRandomQuote(res.randomQuote.quote);
          setRandomQuoteAuthor(res.randomQuote.author);
        }
      })
      .catch((err) => {
        alert("Ocurrió un error");
      });
  };

  if (!height) {
    return null;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      minH={`${height}px`}
      flexDirection="column"
      overflowY="scroll"
      py="20px"
    >
      <Container maxW="container.lg">
        <Text
          className={inter.className}
          style={{
            fontSize: "20px",
            textAlign: "center",
          }}
          onClick={fetchQuote}
          userSelect="none"
          cursor="pointer"
        >
          “{randomQuote}”
        </Text>
        <Text
          className={inter.className}
          style={{
            fontSize: "14px",
            textAlign: "center",
            marginTop: 20,
          }}
          userSelect="none"
        >
          {randomQuoteAuthor}.
        </Text>
        <Box mt="50px" display="flex" justifyContent="center">
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            onClick={() => {
              alert("Like!");
            }}
          >
            <Icon as={AiOutlineHeart} width="24px" height="24px" />
          </Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            onClick={() => {
              alert("Share!");
            }}
          >
            <Icon as={FiShare} width="24px" height="24px" />
          </Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            onClick={fetchQuote}
          >
            <Icon as={AiOutlineSync} width="24px" height="24px" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
