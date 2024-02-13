import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./info.module.css";

export class InfoLayout extends Component {
    render() {
        return <div className={styles.info}>{this.props.information}</div>;
    }
}

InfoLayout.propTypes = {
    information: PropTypes.string,
};

export default InfoLayout;
