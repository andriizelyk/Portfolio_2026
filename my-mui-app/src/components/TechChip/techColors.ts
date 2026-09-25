import { hexToRgbString } from '../../utils/color';

/* Platform family colours. Every service that belongs to a platform wears its
   parent's colour, so a wall of chips groups at a glance — all the AWS chips
   read as AWS, all the Azure ones as Azure. Products with a strong brand of
   their own (React, Redis, Docker…) keep it instead. */
const AWS = '#FF9900';
const AZURE = '#0078D4';
const REDIS = '#DC382D';
/* Neither .NET test framework nor either data-access library carries a widely
   recognised brand colour, so each pair shares one, the way the cloud services
   share their platform's. */
const TESTING = '#3FA75F';
const DATA_ACCESS = '#B8823C';

const TECH_HEX: Record<string, string> = {
  // Microsoft / .NET. The chip paints its label in these colours, so they are
  // lightened from the official brand hues, which are too dark to read on the
  // dark surface — these sit near 3.8:1 in both modes instead.
  '.NET': '#865FE3',
  'C#': '#9B4F96',
  VB: '#5F70E3',
  TypeScript: '#3178C6',
  'MS SQL Server': '#CC2927',
  'Azure DevOps': AZURE,
  Bicep: AZURE,

  // Meta
  React: '#61DAFB',

  // Frontend
  CSS: '#2E8FD0',
  Tailwind: '#06B6D4',
  'Material UI': '#007FFF',

  // .NET testing & data access
  NUnit: TESTING,
  xUnit: TESTING,
  NHibernate: DATA_ACCESS,
  Dapper: DATA_ACCESS,

  // Data
  SQL: '#E38C00',
  PostgreSQL: '#336791',
  Sybase: '#E8481C',
  PowerBuilder: '#2E9E5B',
  Redis: REDIS,
  RabbitMq: '#FF6600',

  // Platforms
  AWS,
  Azure: AZURE,
  Docker: '#2496ED',

  // AWS services
  'AWS Lambda': AWS,
  'AWS Lambda Functions': AWS,
  Lambda: AWS,
  'AWS EC2': AWS,
  'AWS API Gateway': AWS,
  'AWS Elastic LoadBalancer': AWS,
  'AWS Route53': AWS,
  'AWS S3': AWS,
  'AWS CloudFormation': AWS,
  'AWS CloudFront': AWS,
  'AWS DynamoDb': AWS,
  DynamoDB: AWS,
  EventBridge: AWS,

  // Azure services. Managed Redis is the exception that proves the rule: it is
  // Redis first, so it matches the plain Redis chip rather than its host.
  'Azure AppService': AZURE,
  'Azure CosmosDb': AZURE,
  CosmosDb: AZURE,
  'Azure Blob Storage': AZURE,
  'Azure ServiceBus': AZURE,
  'Azure Managed Redis': REDIS,

  // Tooling & delivery
  Git: '#F05032',
  GitHub: '#8B949E',
  'GitHub Actions': '#2088FF',
  TeamCity: '#0CA5C7',
  Octopus: '#2F93E0',

  // Protocols & misc
  gRPC: '#2DA6B0',
  API: '#0EA5E9',
  'OAuth 2.0': '#EB5424',
  AI: '#22C55E',
  'MCP Servers': '#14B8A6',
};

const TECH_HEX_BY_LOWER_KEY = new Map(
  Object.entries(TECH_HEX).map(([name, hex]) => [name.toLowerCase(), hex]),
);

export function getTechColorVars(tType: string): { color: string; rgb: string } {
  const hex = TECH_HEX_BY_LOWER_KEY.get(tType.toLowerCase());
  if (!hex) {
    return { color: 'var(--color-primary)', rgb: 'var(--color-primary-rgb)' };
  }
  return { color: hex, rgb: hexToRgbString(hex) };
}
