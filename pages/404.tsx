import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
export default function Custom_404(){
    const router = useRouter();
    useEffect(()=>{
        router.push('/');
    });
    return(<Box height="100vh" w="100vw" backgroundColor="black"></Box>)
}