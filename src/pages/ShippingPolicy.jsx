import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"
import { Separator } from "../components/ui/separator"

const ShippingPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-12">Shipping Policy</h1>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">1. Processing Time</h2>
                    <p>
                        All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays.
                        If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                        If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">2. Shipping Rates & Delivery Estimates</h2>
                    <p className="mb-4">
                        Shipping charges for your order will be calculated and displayed at checkout.
                    </p>
                    <div className="border rounded-md overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Shipping Method</TableHead>
                                    <TableHead>Estimated Delivery Time</TableHead>
                                    <TableHead>Cost</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Standard Shipping</TableCell>
                                    <TableCell>3-5 business days</TableCell>
                                    <TableCell>Free</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Expedited Shipping</TableCell>
                                    <TableCell>2-3 business days</TableCell>
                                    <TableCell>$12.95</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Overnight Shipping</TableCell>
                                    <TableCell>1-2 business days</TableCell>
                                    <TableCell>$24.95</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">3. Shipment Confirmation & Order Tracking</h2>
                    <p>
                        You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s).
                        The tracking number will be active within 24 hours.
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">4. Customs, Duties and Taxes</h2>
                    <p>
                        WearCraft is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">5. Damages</h2>
                    <p>
                        WearCraft is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
                        Please save all packaging materials and damaged goods before filing a claim.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ShippingPolicy;
