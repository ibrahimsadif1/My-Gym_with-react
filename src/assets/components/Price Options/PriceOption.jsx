
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className=' bg-blue-600 text-white rounded-lg p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}$</span>
                <span className='text-2xl'>/Mon</span>
            </h1>
            <h3 className='text-3xl text-center'>{name}</h3>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='w-full bg-rose-600 hover:bg-rose-900 text-white font-bold py-2 mt-3 rounded-lg'>BUY NOW</button>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;