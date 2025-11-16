import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Briefcase, Download, TrendingUp, Users, Target, Megaphone, Award, BarChart3 } from "lucide-react"

const metrics = [
  {
    title: "Active Campaigns",
    value: "24",
    change: {
      value: "8.3%",
      trend: "up" as const,
      today: "+2 this week",
    },
    color: "bg-blue-500",
  },
  {
    title: "Total Clients",
    value: "156",
    change: {
      value: "12.5%",
      trend: "up" as const,
      today: "+8 this month",
    },
    color: "bg-green-500",
  },
  {
    title: "Campaign Reach",
    value: "2.4M",
    change: {
      value: "18.7%",
      trend: "up" as const,
      today: "+340K this week",
    },
    color: "bg-purple-500",
  },
  {
    title: "Client Satisfaction",
    value: "96%",
    change: {
      value: "2.1%",
      trend: "up" as const,
      today: "4.8/5 rating",
    },
    color: "bg-orange-500",
  },
]

const recentActivity = [
  {
    client: "TechVision Ltd",
    email: "contact@techvision.co.ug",
    action: "Campaign Launched",
    content: "Brand Relaunch Campaign",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active"
  },
  {
    client: "RetailHub Uganda",
    email: "info@retailhub.ug",
    action: "Milestone Reached",
    content: "500K Social Media Reach",
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "success"
  },
  {
    client: "SecureBank",
    email: "marketing@securebank.co.ug",
    action: "Campaign Update",
    content: "PR Crisis Management",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "ongoing"
  },
  {
    client: "Grand Hotels",
    email: "contact@grandhotels.ug",
    action: "Training Completed",
    content: "Brand Training Program",
    time: "2 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "completed"
  },
]

const topCampaigns = [
  {
    title: "TechVision Brand Transformation",
    client: "TechVision Ltd",
    reach: 850000,
    engagement: "24.5%",
    image: "/campaign-techvision.png",
    status: "Active"
  },
  {
    title: "RetailHub Digital Marketing",
    client: "RetailHub Uganda",
    reach: 650000,
    engagement: "18.2%",
    image: "/campaign-retailhub.png",
    status: "Active"
  },
  {
    title: "SecureBank Crisis Management",
    client: "SecureBank",
    reach: 520000,
    engagement: "32.8%",
    image: "/campaign-securebank.png",
    status: "Completed"
  },
]

const bigCards = [
  {
    title: "Active Projects",
    value: "42",
    change: "+6 this month",
    trend: "up",
    icon: Briefcase,
  },
  {
    title: "Total Clients",
    value: "156",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Campaign Reach",
    value: "2.4M",
    change: "+18.7%",
    trend: "up",
    icon: Target,
  },
  {
    title: "Revenue This Month",
    value: "$124K",
    change: "+15.3%",
    trend: "up",
    icon: TrendingUp,
  },
]

const serviceMetrics = [
  {
    service: "Brand Development",
    projects: 18,
    revenue: "$45,200",
    growth: "+22%",
    color: "bg-blue-500"
  },
  {
    service: "Digital Marketing",
    projects: 24,
    revenue: "$38,600",
    growth: "+18%",
    color: "bg-green-500"
  },
  {
    service: "Marketing Strategy",
    projects: 15,
    revenue: "$32,100",
    growth: "+25%",
    color: "bg-purple-500"
  },
  {
    service: "Public Relations",
    projects: 12,
    revenue: "$28,400",
    growth: "+15%",
    color: "bg-orange-500"
  },
  {
    service: "Creative Production",
    projects: 20,
    revenue: "$35,800",
    growth: "+20%",
    color: "bg-pink-500"
  },
  {
    service: "Corporate Communication",
    projects: 8,
    revenue: "$18,900",
    growth: "+12%",
    color: "bg-indigo-500"
  },
]

export default function AgencyDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Agency Dashboard</h1>
            <p className="text-muted-foreground">Monitor your campaigns, clients, and business performance.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="30d">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Big Cards - 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bigCards.map((card, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <card.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <div className={`flex items-center text-sm ${card.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {card.change}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
              <div className="absolute right-0 bottom-0 opacity-5">
                <card.icon className="h-24 w-24 text-primary" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Client Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Client Activity</CardTitle>
              <CardDescription>Latest updates from your client projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivity.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.client} />
                            <AvatarFallback>
                              {activity.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{activity.client}</div>
                            <div className="text-sm text-muted-foreground">{activity.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${
                            activity.status === "active"
                              ? "bg-blue-100 text-blue-800"
                              : activity.status === "success"
                                ? "bg-green-100 text-green-800"
                                : activity.status === "ongoing"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {activity.action}
                        </div>
                      </TableCell>
                      <TableCell>{activity.content}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{activity.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Performing Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Top Campaigns</CardTitle>
              <CardDescription>Best performing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topCampaigns.map((campaign, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10 rounded-lg">
                      <AvatarImage src={campaign.image || "/placeholder.svg"} alt={campaign.title} />
                      <AvatarFallback className="rounded-lg">
                        {campaign.client.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{campaign.title}</p>
                      <p className="text-xs text-muted-foreground">{campaign.client}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Target className="h-3 w-3 mr-1" />
                          {(campaign.reach / 1000).toFixed(0)}K reach
                        </span>
                        <span className="flex items-center">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {campaign.engagement}
                        </span>
                      </div>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      campaign.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {campaign.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Service Performance</CardTitle>
            <CardDescription>Revenue and project breakdown by service line</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceMetrics.map((service, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">{service.service}</h3>
                    <div className={`w-2 h-2 rounded-full ${service.color}`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Projects</span>
                      <span className="text-sm font-medium">{service.projects}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Revenue</span>
                      <span className="text-sm font-medium">{service.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Growth</span>
                      <span className="text-sm font-medium text-green-600">{service.growth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-blue-500" />
                New Campaign
              </CardTitle>
              <CardDescription>Launch a new marketing campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Create Campaign</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Add Client
              </CardTitle>
              <CardDescription>Onboard a new client project</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Add Client</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                Generate Report
              </CardTitle>
              <CardDescription>Create performance report</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Create Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}