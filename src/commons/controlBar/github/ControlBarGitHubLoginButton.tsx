import { ButtonGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import * as React from 'react';
import { useResponsive, useTypedSelector } from 'src/commons/utils/Hooks';

import controlButton from '../../ControlButton';

export type ControlBarGitHubLoginButtonProps = {
  onClickLogIn: () => void;
  onClickLogOut: () => void;
};

/**
 * GitHub buttons to be used for the GitHub-hosted mission interface.
 *
 * @param props Component properties
 */
export const ControlBarGitHubLoginButton: React.FC<ControlBarGitHubLoginButtonProps> = props => {
  const { isMobileBreakpoint } = useResponsive();
  const isLoggedIn =
    useTypedSelector(store => store.session.githubOctokitObject).octokit !== undefined;

  const loginButton = isLoggedIn
    ? controlButton('Log Out', IconNames.GIT_BRANCH, props.onClickLogOut)
    : controlButton('Log In', IconNames.GIT_BRANCH, props.onClickLogIn);

  return <ButtonGroup large={!isMobileBreakpoint}>{loginButton}</ButtonGroup>;
};
