import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import VerificationCard from './components/VerificationCard';

type VerificationStatus = 'idle' | 'verifying' | 'success' | 'error';

interface VerificationState {
  aadhaar: VerificationStatus;
  pan: VerificationStatus;
}

function App() {
  const [verificationStatus, setVerificationStatus] = useState<VerificationState>({
    aadhaar: 'idle',
    pan: 'idle',
  });

  const simulateVerification = async (type: keyof VerificationState) => {
    setVerificationStatus(prev => ({ ...prev, [type]: 'verifying' }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Randomly succeed or fail for demo purposes
    const success = Math.random() > 0.3;
    setVerificationStatus(prev => ({
      ...prev,
      [type]: success ? 'success' : 'error',
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KYC Verification Sandbox
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test our verification services in a safe environment. Experience real-time ID verification
            with sample data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <VerificationCard
            title="Aadhaar Verification"
            description="Verify Aadhaar card details with instant validation and demographic data check."
            icon="shield"
            status={verificationStatus.aadhaar}
            onVerify={() => simulateVerification('aadhaar')}
          />
          
          <VerificationCard
            title="PAN Verification"
            description="Validate PAN card details with name matching and active status verification."
            icon="file"
            status={verificationStatus.pan}
            onVerify={() => simulateVerification('pan')}
          />
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900">Sandbox Environment</h3>
              <p className="mt-1 text-sm text-blue-700">
                This is a test environment. All verifications are simulated and no real data is processed.
                Use sample data to test the verification flow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;