import { Component, ReactNode } from 'react';

interface DashboardTemplateProps {
  children: ReactNode;
}

export default class DashboardTemplate extends Component<DashboardTemplateProps> {
  render() {
    return (
      <div className="not-found-container">
          {this.props.children}
      </div>
    );
  }
}
