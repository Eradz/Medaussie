import { AlertCircle } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center space-y-6 max-w-md">
        {/* Icon and Status */}
        <div className="flex flex-col items-center space-y-4">
          <AlertCircle className="w-16 h-16 text-red-500" />
          <h1 className="text-6xl font-bold text-secondary">404</h1>
        </div>
        
        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">Under Construction</h2>
          <p className="text-gray-600">
            Oops! Looks like this page is still under construction
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/"
            className="px-6 py-2 bg-secondary text-white rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

