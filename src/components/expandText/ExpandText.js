import React from 'react';
import ReactDOM from 'react-dom';

class ExpandText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }

    render() {

        if(this.props.text ===undefined) {retrun}

        let visibleText = null;
        if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
            visibleText = this.props.text;
        } else {
            const firstHalf = this.props.text.substring(0, this.props.maxLength);
            visibleText = `${firstHalf}...`;
        }
        const self = this;
        const clickHandler = () => {
            self.setState({showFull: !self.state.showFull});
        }
        return <span onClick={clickHandler} className={this.props.className}>{visibleText}</span>;
  }
}

// ExpandText.propTypes = {
//   text: React.PropTypes.string.isRequired,
//   maxLength: React.PropTypes.number.isRequired,
//   className: React.PropTypes.string
// };

ExpandText.defaultProps = {
  className: ""
};

export default ExpandText;