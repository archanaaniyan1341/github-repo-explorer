import React, { Component } from "react";
import "./ErrorBoundary.css";
import constants from "../../constants/appConstants.json";
import { BiError } from "react-icons/bi";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error Boundary caught:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error-boundary">
          <div className="error-container">
            <h1 className="error-heading">
              <BiError />
              {constants.error.heading}
            </h1>
            <p className="error-message">{constants.error.message}</p>
            <details className="error-details">
              <summary>{constants.error.summaryText}</summary>
              <p>{this.state.error?.toString() || constants.error.message}</p>
              <pre className="error-stack">
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
            <button className="reset-button" onClick={this.handleReset}>
              {constants.error.buttonText}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
