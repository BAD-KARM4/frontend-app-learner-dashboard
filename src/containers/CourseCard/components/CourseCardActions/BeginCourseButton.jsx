import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import useActionDisabledState from '../hooks';
import ActionButton from './ActionButton';
import messages from './messages';
import { useEnterpriseDashboardData } from '../../../../data/redux/hooks/app';

export const BeginCourseButton = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { homeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const { disableBeginCourse } = useActionDisabledState(cardId);

  const enterpriseDashboardData = useEnterpriseDashboardData();
  const execEdURLParam = enterpriseDashboardData ? `?org_id=${enterpriseDashboardData.authOrgId}` : '';
  const { isExecutiveEd2uCourse } = useActionDisabledState(cardId);
  const handleClick = reduxHooks.useTrackCourseEvent(
    track.course.enterCourseClicked,
    cardId,
    homeUrl + (isExecutiveEd2uCourse ? execEdURLParam : ''),
  );
  return (
    <ActionButton
      disabled={disableBeginCourse}
      as="a"
      href="#"
      onClick={handleClick}
    >
      {formatMessage(messages.beginCourse)}
    </ActionButton>
  );
};
BeginCourseButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default BeginCourseButton;
