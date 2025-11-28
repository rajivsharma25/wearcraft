import { Separator } from "../components/ui/separator"

const ReturnsPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-12">Returns Policy</h1>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">1. Return Period</h2>
                    <p>
                        We accept returns within 30 days of the purchase date. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">2. Eligibility for Returns</h2>
                    <p className="mb-4">
                        To be eligible for a return, your item must be:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Unused and in the same condition that you received it.</li>
                        <li>In the original packaging.</li>
                        <li>Accompanied by a receipt or proof of purchase.</li>
                    </ul>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">3. Non-returnable Items</h2>
                    <p className="mb-4">
                        Several types of goods are exempt from being returned:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Gift cards</li>
                        <li>Downloadable software products</li>
                        <li>Some health and personal care items</li>
                        <li>Customized or personalized items</li>
                    </ul>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">4. Refunds</h2>
                    <p>
                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                        If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">5. Exchanges</h2>
                    <p>
                        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at wearcraftofficial@gmail.com.
                    </p>
                </section>

                <Separator />

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">6. Shipping Returns</h2>
                    <p>
                        To return your product, you should mail your product to: 123 Fashion Street, New York, NY 10001, United States.
                        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
                        If you receive a refund, the cost of return shipping will be deducted from your refund.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ReturnsPolicy;
