'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<string>('Checking...');
  const [dbStatus, setDbStatus] = useState<string>('Checking...');

  useEffect(() => {
    // Test backend connection
    const testBackend = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/health');
        const data = await response.json();
        setBackendStatus(`✅ ${data.message}`);
      } catch (error) {
        setBackendStatus('❌ Backend not connected');
      }
    };

    // Test database connection
    const testDatabase = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/test-db');
        const data = await response.json();
        setDbStatus(`✅ ${data.database}`);
      } catch (error) {
        setDbStatus('❌ Database not connected');
      }
    };

    testBackend();
    testDatabase();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          🐳 Docker Setup Test
        </h1>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Frontend Status</h2>
            <p className="text-green-600">✅ Next.js is running!</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Backend Status</h2>
            <p>{backendStatus}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Database Status</h2>
            <p>{dbStatus}</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800">🎉 Success Criteria:</h3>
          <ul className="mt-2 text-blue-700 space-y-1">
            <li>• Frontend loads at http://localhost:3000</li>
            <li>• Backend responds at http://localhost:8080</li>
            <li>• Database connection works</li>
          </ul>
        </div>
      </div>
    </div>
  );
}