---
title: How to Use Branches
draft: true
---
Hey %NAME%!

We've just enabled branching for you on Neon.

Below is a guide to using branching in your project.

Branches currently appear as a whole new project in the Neon UI and API, but when branches become available to all users, you'll be able to find them within their parent project.

---
Below we look at how you can create branches using either the Neon Dashboard or the Neon API.

Create a Project on Neon and Add Your Data
===============
Log in to Neon and create a project on Neon in the UI: https://console.neon.tech
Add some data using the SQL Editor in the UI, psql, or any other Postgres client.

Our docs have more information about how to create a project :
https://neon.tech/docs/cloud/getting-started/
https://neon.tech/docs/cloud/tutorials/
https://neon.tech/docs/quickstart/postgres/

Once you have a project with data in it, you can click the `Create branch` button in your project Dashboard to finish creating your branch.
Alternatively, you can use the Neon API to create your branch.

Create a Branch Using the API
======================================
Get familiar with using API keys on Neon: https://neon.tech/docs/get-started-with-neon/using-api-keys/
The Neon API Reference: https://console.neon.tech/api-docs
To create a branch, you can use the API method:

	POST /projects/{project_id}/branches

Here's an example of a curl command that you can use to create a branch: 

```
curl -o - -X POST -H 'Authorization: Bearer ...' https://console.neon.tech/api/v1/clusters/ancient-haze-985396/branches
```

To use this curl command, change the placeholder project name `ancient-haze-985396` to the name of the project that you want to create a branch from.
In the response, you will receive new project info info, with the name that looks like
`$parent_project_id-branch-...`.
Currently branches appear as a separate project in the Dashboard UI, this will change in the future when branches are publically available.
All the data in the parent project when you create the branch will be available in the branched project as well.
Future changes to the data in the parent and the branch are independent, so you can make changes to the branch without affecting your parent project.

Learn More About Branching in Neon
===============
https://neon.tech/docs/cloud/concepts/#branches