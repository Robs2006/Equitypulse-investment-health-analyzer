
export interface CompanyRecommendation {
  symbol: string;
  name: string;
  marketCap: string;
  reasoning: string;
  category: string;
}

export interface CompanyHealthData {
  name: string;
  symbol: string;
  healthScore: number;
  pros: string[];
  cons: string[];
  financials: {
    revenue: number[];
    profit: number[];
    labels: string[];
  };
  metrics: {
    label: string;
    value: string;
    trend: 'up' | 'down' | 'neutral';
  }[];
}

export enum DashboardTab {
  RECOMMENDATIONS = 'recommendations',
  ANALYZER = 'analyzer',
  TECH_SPECS = 'tech-specs'
}
