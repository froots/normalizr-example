import React from 'react';

const Explanation = ({ explanation }) => (
  <tr>
    <td colSpan="3">
      <dl>
        <dt>Type</dt>
        <dd>{explanation.main_type}</dd>
        <dt>Description</dt>
        <dd>{explanation.description}</dd>
        <dt>Detail</dt>
        <dd>{explanation.detail}</dd>
        <dt>Gross value</dt>
        <dd>{explanation.gross_value}</dd>
      </dl>
    </td>
  </tr>
);

export default Explanation;
