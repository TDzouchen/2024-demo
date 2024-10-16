# Chat Widget JS SDK V2

## Deployment process

1. Notify the deployment and check the changes with teammembers in the Slack channel [#dce-deploy](https://talkdeskchina.slack.com/archives/C03A9QXV70F).
2. Pull the latest code from the `next` branch.
3. Create new branch `release/2.x.x` from `next` branch.
4. Run `yarn release:app:patch` or `yarn release:app:minor`
5. Push commit and create a pull request from `release/2.x.x` merge to `next` branch.
6. [Create tag](https://github.com/Talkdesk/webchat-sdk-ui/releases/new) `2.x.x` from `next` branch.

## Smoke tests

1. Update feature-flag version `2.x.x` using `DCE_chat_sdk_release_version` for `DCE_internal_account`
   ![](./docs/assets/add-new-version.png) ![](./docs/assets/enable-new-version.png)
2. [Run smoke tests](https://kci.talkdeskapp.com/job/talkdesk/job/dce-smoketests/job/smoke-widgetv2-prd/)
3. Gradually roll out new version
   ![](./docs/assets/gradually-roll-out-new-version.png)

## Packages

This repository is the monorepo for the Chat widget, containing our internal tools and infrastructure for building and testing the Chat widget. It contains the following packages:

1. `chat-widget-components` - Contains different types of message components and 
2. `chat-widget-sdk` - Contains the code snippet for integration into customer websites
3. `chat-widget-window` - Contains the code of the chat widget inside the iframe
4. `shared` - Contains shared code across multiple packages
5. `playground` - Contains a web app for developing and testing chat widgets
6. `integration-test` Contains e2e tests
