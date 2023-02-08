import Head from "next/head";
import StartFieldBackground from "@/components/StartFieldBackground";
import Quote from "@/components/Quote";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frases estoicas</title>
        <meta
          name="description"
          content="Frases estoicas para mejorar tu efectividad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="black">
        <StartFieldBackground />
        <Quote />
      </Box>
    </>
  );
}
