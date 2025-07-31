import {
  Shield,
  Bot,
  Database,
  Users,
  Zap,
  Lock,
  Settings,
  BarChart3,
  Globe,
  MessageSquare,
  FileText,
  Cpu,
  Sparkles,
} from "lucide-react"

export function BotIcon() {
  return <Bot width="24" height="24" />
}

export function SparklesIcon() {
  return <Sparkles width="24" height="24" />
}

export function DatabaseIcon() {
  return <Database width="24" height="24" />
}

export function ShieldIcon() {
  return <Shield width="24" height="24" />
}

export function FileTextIcon() {
  return <FileText width="24" height="24" />
}

export function ServerIcon() {
  return <Cpu width="24" height="24" />
}

export function LockIcon() {
  return <Lock width="24" height="24" />
}

export function ZapIcon() {
  return <Zap width="24" height="24" />
}

export const FeatureIcons = {
  Shield: ShieldIcon,
  Bot: BotIcon,
  Database: DatabaseIcon,
  Users,
  Zap: ZapIcon,
  Lock: LockIcon,
  Settings,
  BarChart3,
  Globe,
  MessageSquare,
  FileText: FileTextIcon,
  Cpu: ServerIcon,
  Sparkles,
}

export default FeatureIcons
