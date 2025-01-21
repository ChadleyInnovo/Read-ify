import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, User, CreditCard, Settings } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="container space-y-8 px-4 py-8 md:py-12">
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Account</h1>
        <p className="text-muted-foreground">Manage your account settings and view your orders</p>
      </div>
      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>View your recent orders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">No orders found</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <label className="font-medium">Name</label>
                <input type="text" className="rounded-md border px-3 py-2" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <label className="font-medium">Email</label>
                <input type="email" className="rounded-md border px-3 py-2" placeholder="john@example.com" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">No payment methods found</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Email Notifications</label>
                <input type="checkbox" />
              </div>
              <div className="flex items-center gap-4">
                <label className="font-medium">Two-Factor Authentication</label>
                <input type="checkbox" />
              </div>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

