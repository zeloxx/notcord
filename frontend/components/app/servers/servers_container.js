import { connect } from "react-redux";
import Servers from "./servers";
import { fetchCurrentUserServers } from "../../../actions/server_actions";
import { closeModal, openModal } from "../../../actions/ui_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    servers: Object.values(entities.servers)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUserServers: () => dispatch(fetchCurrentUserServers()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Servers)
);
