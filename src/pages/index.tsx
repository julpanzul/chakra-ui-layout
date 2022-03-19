import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Box, Code, Heading, Link, Text, useColorModeValue, Stack, Tooltip, Icon, IconButton, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    
    <Layout title="Chakra UI - Portfolio">
      <Heading as='h1' fontSize='3xl' mb='2' >
        Welcome to <Link color={useColorModeValue('teal.500', 'cyan.500')} href="https://nextjs.org">Next.js!</Link>
      </Heading>
      
      <Text fontSize='xl' mt='2'>
        Get started by editing{' '}
        <Code>pages/index.tsx</Code>
      </Text>

      <Flex flexWrap='wrap' alignItems='center'  justifyContent='center' maxW='800px' mt='10'>
        <Box as='a' href='https://nextjs.org/docs' p='6' m='1' borderWidth='1px' rounded='lg' flexBasis={{ base: '100%', md: '45%'}}>
          <Heading as='h2' fontSize='xl' mb='2'>Documentation &rarr;</Heading>
          <Text fontSize='lg'>Find in-depth information about Next.js features and API.</Text>
          
          <Stack mt={8} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Link href='https://chakra-ui.com' isExternal>
              Chakra Design system <ExternalLinkIcon mx='2px' />
            </Link>
            <Link href='https://github.com' isExternal>
              <IconButton aria-label='View Source' icon={<FaGithub />} size={'sm'} variant={'outline'}/>
            </Link>
          </Stack>
        </Box>
        <Box as='a' href="/products" p='6' m='1' borderWidth='1px' rounded='lg' flexBasis={{ base: '100%', md: '45%'}}>
          <Heading as='h2' fontSize='xl' mb='2'>Learn &rarr;</Heading>
          <Text fontSize='lg'>Learn about Next.js in an interactive course with quizzes!</Text>
        </Box>
        <Box as='a' href="https://github.com/vercel/next.js/tree/canary/examples" p='6' m='1' borderWidth='1px' rounded='lg' flexBasis={{ base: '100%', md: '45%'}}>
          <Heading as='h2' fontSize='xl' mb='2'>Examples &rarr;</Heading>
          <Text fontSize='lg'>Discover and deploy boilerplate example Next.js projects.</Text>
        </Box>
        <Box as='a' href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          p='6' m='1' borderWidth='1px' rounded='lg' flexBasis={{ base: '100%', md: '45%'}}>
          <Heading as='h2' fontSize='xl' mb='2'>Deploy &rarr;</Heading>
          <Text fontSize='lg'>Instantly deploy your Next.js site to a public URL with Vercel.</Text>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Home
