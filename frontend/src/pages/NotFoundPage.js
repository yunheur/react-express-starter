import React from 'react';
import NotFound from 'components/common/NotFound';

const NotFoundPage = ({history}) => {
  return (
    <NotFound onGoBack={history.goBack}/>
  );
};

export default NotFoundPage;