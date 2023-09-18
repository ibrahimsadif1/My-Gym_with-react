
import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <div>
            <li className="mr-5 hover:underline">
                <a href={path}>{name}</a>
                </li>
        </div>
    );
};
Link.propTypes ={
    route: PropTypes.object.isRequired
}
export default Link;