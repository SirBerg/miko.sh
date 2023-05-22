import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Flex, Heading, Center, Stack, Divider, Grid, Button } from '@chakra-ui/react'
import Device from '@/Device/index'
import { useState, useEffect, use } from 'react'

const inter = Inter({ subsets: ['latin'] })


//shamelessly copied from https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        //@ts-ignore
        width: window.innerWidth,
        //@ts-ignore
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function MobileHome(){
  return(
    <Box 
      padding="5"
      bgColor="black"
      color="white"
      minH="100vh"
      fontFamily="Inter"
    >
      <Stack direction="column">
        <Center>
          <Stack direction="column" spacing="2">
            <Center><img src="https://pub-74519fc56dd141d29ff5ef6aa3030ad9.r2.dev/shocked.png" alt="shocked-face" width="200" height="200" /></Center>
            <Divider orientation="horizontal" colorScheme='white' maxHeight="70%" />
            <Heading
              mb={4}
              fontSize="6xl"
              fontWeight="extrabold"
              textAlign="center"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
            >
              Whoops!
            </Heading>
            <Center
              color="white"
              fontSize="2xl"
              maxWidth="80vw"
              textAlign="center"
            >
              <strong>Sorry, but there is nothing here.</strong>
            </Center>
          </Stack>
        </Center>
        <Center>
        <Stack 
          direction="column" 
          spacing="2" 
          maxWidth="80vw"
          textAlign="center"
        >
          <Center fontSize="md">
            You can rest here, as long as you&apos;d like.
          </Center>
          <Center fontSize="md">
          Or you can check out some of the other stuff I made:
          </Center>
          <Grid templateColumns="repeat(auto-fit, 1fr)" gap="3" maxWidth="700px">
            <Button variant="outline" colorScheme='pink' as="a" href="https://github.com/SirBerg">
              Github
            </Button>
            <Button variant="outline" colorScheme='pink' as="a" href="https://www.npmjs.com/~sirberg">
              NPM
            </Button>
            <Button variant="outline" colorScheme='pink' as="a" href="https://benno.rodehack.com">
              My personal Site
            </Button>
            <Button variant="outline" colorScheme='pink' as="a" href="https://iza.sh">
              My URL Shortener
            </Button>
            <Button variant="outline" colorScheme='pink' as="a" href="https://izanami.dev">
              My Bungie.net API wrapper
            </Button>
            <Button variant="outline" colorScheme='pink' as="a" href="https://holypenguin.net">
              My friends website
            </Button>
          </Grid>
        </Stack>
        </Center>
      </Stack>
    </Box>
  )
}

export function DesktopHome(){

  return(
    <Box
      bgColor="black"
      color="white"
      minWidth="500"
      fontFamily="Inter"
      h="100%"
      w="100%"
    >
      <Center
        minH="100vh"
        minWidth="100vw"
      >
        <Stack direction="column">
          <Center>
            <Stack direction="row" spacing="5">
              <img src="https://pub-74519fc56dd141d29ff5ef6aa3030ad9.r2.dev/shocked.png" alt="shocked-face" width="200" height="200" />
              <Center>
              <Divider orientation="vertical" colorScheme='white' maxHeight="70%" />
              </Center>
              <Center>
                <Stack direction="column">
                  <Heading
                    mb={4}
                    fontSize="6xl"
                    fontWeight="extrabold"
                    textAlign="center"
                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    Whoops!
                  </Heading>
                  <Center
                    color="white"
                    fontSize="xl"
                  >
                    <strong>Sorry, but there is nothing here.</strong>
                  </Center>
                </Stack>
              </Center>
            </Stack>
          </Center>
          <Center>
            <Stack direction="column">
              <Center fontSize="md">
                <strong>You can rest here, as long as you&apos;d like.</strong>
              </Center>
              <Center fontSize="md">
              <strong>Or you can check out some of the other stuff I made:</strong>
              </Center>
              <Grid templateColumns="repeat(auto-fit, 1fr)" gap="3" maxWidth="700px">
                <Button variant="outline" colorScheme='pink' as="a" href="https://github.com/SirBerg">
                  Github
                </Button>
                <Button variant="outline" colorScheme='pink' as="a" href="https://www.npmjs.com/~sirberg">
                  NPM
                </Button>
                <Button variant="outline" colorScheme='pink' as="a" href="https://benno.rodehack.com">
                  My personal Site
                </Button>
                <Button variant="outline" colorScheme='pink' as="a" href="https://iza.sh">
                  My URL Shortener
                </Button>
                <Button variant="outline" colorScheme='pink' as="a" href="https://izanami.dev">
                  My Bungie.net API wrapper
                </Button>
                <Button variant="outline" colorScheme='pink' as="a" href="https://holypenguin.net">
                  My friends website
                </Button>
              </Grid>
            </Stack>
            
          </Center>
          
        </Stack>
      </Center>
    </Box>
  )
}

export default function Home() {
  const size = useWindowSize();

  return (
    <Device>
    {({ isMobile }) => {
      if (isMobile || size.width && size.width < 700) return <MobileHome />
      else
      return <DesktopHome />
    }}
  </Device>
  )
}
