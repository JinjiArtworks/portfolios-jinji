
import Image1 from '../../assets/price-1.svg'
import Image2 from '../../assets/price-2.svg'
import Image3 from '../../assets/price-3.svg'
const Pricelist = [
    {
        id: 1,
        image: Image1,
        plan: 'Basic',
        title: 'A Simple option but powerful to manage your business',
        support: 'Email Support',
        price: '50$ ',
        type: 'Normal',
    },
    {
        id: 2,
        image: Image2,
        plan: 'Premium',
        title: 'Unlimited product including app integration and more features',
        support: 'Mon - Fri Support',
        price: '75$',
        type: 'Recommended',
    },
    {
        id: 3,
        image: Image3,
        plan: 'Ultimate',
        title: 'A wise option for large companies and individuals',
        support: '24/7 Support',
        price: '100$',
        type: 'Normal',

    }
]
export default Pricelist