import { h } from 'preact';
import Sprite from '../../assets/images/sprite.svg'

const Icon = props => {
    const customClass = ['icon'];
    props.className && customClass.push(props.className);

    return (
        <svg className={ customClass.join(' ') }>
            <use xlinkHref={`${Sprite}#${props.id}`} />
        </svg>
    );
};

export default Icon;