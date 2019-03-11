import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchMore as fetchMoreDocumentStatuses,
} from '@app/actions/document-status';
import List from './DocumentStatusList';

const mapStateToProps = (state) => ({
  totalStatuses: state.documentStatuses.totalRecords,
  documentStatuses: state.documentStatuses.records,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchMoreDocumentStatuses,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
