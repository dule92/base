import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import EditDocument from '../pages/EditDocument';

const MyQuery = gql`
  query ($_id: String!){
    documents(_id: $_id) {
      _id
      title
      body
    }
  }
`;

export default graphql(MyQuery, {
  options: ({ params }) => ({
    variables: {
      _id: params._id,
    },
    pollInterval: 10000,
  }),
})(EditDocument);
