import { connect } from 'react-redux';
import { INCREMENT_LIKES, DECREMENT_LIKES } from '../redux/types'
function Likes(props) {
    console.log('render > ', props);
    return <div className="button-controls">
        <button
            className="like"
            onClick={props.onIncrementLikes}
        >
            Likes 👍 {props.likes && `(${props.likes})`}</button>
        <button
            className="dislike"
            onClick={props.onDecrementLikes}
        >
            Dislikes 👎
        </button>
    </div>
}

function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    return {
        likes: state.likes,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            dispatch({
                type: INCREMENT_LIKES
            });
        },
        onDecrementLikes: () => {
            dispatch({
                type: DECREMENT_LIKES
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)