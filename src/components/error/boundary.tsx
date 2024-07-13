import { useRouteError } from 'react-router-dom';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};
const ErrorBoundary = ({ fallback, children }: ErrorBoundaryProps) => {
  const error = useRouteError();
  if (error) return fallback;
  return children;
};

export default ErrorBoundary;
