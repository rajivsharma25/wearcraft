import { Package, User, MapPin, CreditCard } from 'lucide-react';




const Profile = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  };

  // Mock orders (in a real app, this would come from localStorage or API)
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 159.99,
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'In Transit',
      total: 89.50,
      items: 2,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Account</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm pt-4 border-t border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <span>{user.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since:</span>
                <span>Jan 2024</span>
              </div>
            </div>

            <nav className="space-y-2 pt-4 border-t border-border">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md bg-primary/10 text-primary font-medium">
                <Package className="w-5 h-5" />
                Orders
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted">
                <MapPin className="w-5 h-5" />
                Addresses
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Order History</h2>

            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No orders yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{order.id}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
                              ? 'bg-green-500/10 text-green-700'
                              : 'bg-blue-500/10 text-blue-700'
                              }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Placed on {new Date(order.date).toLocaleDateString()} • {order.items} items
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xl font-bold">
                          ${order.total.toFixed(2)}
                        </p>
                        <button className="text-sm text-primary hover:underline mt-1">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
