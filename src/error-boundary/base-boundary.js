import React from 'react';

class BaseErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // send to logging service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex  flex-col justify-center items-center">
          <h1 className="mb-4 text-4xl">Something Went Wrong</h1>
          <p className="text-red-600">{this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default BaseErrorBoundary;
