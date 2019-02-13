import { connect } from 'react-redux';
import { fetchAll as fetchDocumentStatuses } from 'actions/document-status';
import List from './List.jsx';

const mapStateToProps = (state) => ({
  documentStatuses: state.documentStatuses,
})

const mapDispatchToProps = (dispatch, state) => ({
  fetchDocumentStatuses: () => dispatch(fetchDocumentStatuses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
