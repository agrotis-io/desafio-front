import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll as fetchDocumentStatuses } from 'actions/document-status';
import List from './List.jsx';

const mapStateToProps = (state) => ({
  totalStatuses: state.documentStatuses.totalRecords,
  documentStatuses: state.documentStatuses.records,
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
