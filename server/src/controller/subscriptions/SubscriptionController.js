const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

class SubscriptionController {
    async handle(req, res){
        const prices = await stripe.prices.list();
        //console.log('prices', prices)
        res.json(prices.data.reverse())
    }
}
module.exports = new SubscriptionController();