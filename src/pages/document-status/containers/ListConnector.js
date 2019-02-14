import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll as fetchDocumentStatuses } from 'actions/document-status';
import List from './List.jsx';

const mapStateToProps = (state) => ({
  documentStatuses: state.documentStatuses,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchDocumentStatuses,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
