import React from 'react';
import Head from 'next/head';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
    const router = useRouter();

    const handleLogin = () => {
        // Redirect to login page or handle login logic
        router.push('/api/auth/callback');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Head>
                <title>ALTRUE - Home</title>
                <meta name="description" content="Welcome to ALTRUE, your full-stack SaaS application." />
            </Head>
            <h1 className="text-4xl font-bold mb-4">Welcome to ALTRUE</h1>
            <p className="text-lg mb-8">Your full-stack SaaS application for managing tenants and users.</p>
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
};

export default Home;