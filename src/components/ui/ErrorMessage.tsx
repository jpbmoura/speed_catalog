import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  details?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Error',
  message,
  details
}) => {
  return (
    <div className="rounded-md bg-red-50 p-4 my-4 border border-red-100">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message}</p>
            {details && (
              <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
                {details}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};