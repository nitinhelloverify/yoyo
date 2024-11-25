import React from 'react';
import { Shield, FileCheck, AlertCircle } from 'lucide-react';

interface VerificationCardProps {
  title: string;
  description: string;
  icon: 'shield' | 'file' | 'alert';
  status: 'idle' | 'verifying' | 'success' | 'error';
  onVerify: () => void;
}

const icons = {
  shield: Shield,
  file: FileCheck,
  alert: AlertCircle,
};

export default function VerificationCard({
  title,
  description,
  icon,
  status,
  onVerify,
}: VerificationCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <div className="mt-4">
            <button
              onClick={onVerify}
              disabled={status === 'verifying'}
              className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors
                ${
                  status === 'verifying'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : status === 'error'
                    ? 'bg-red-50 text-red-700 hover:bg-red-100'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }
              `}
            >
              {status === 'verifying'
                ? 'Verifying...'
                : status === 'success'
                ? 'Verified'
                : status === 'error'
                ? 'Try Again'
                : 'Verify Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}