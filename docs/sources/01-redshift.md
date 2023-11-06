---
id: amazon-redshift
title: Amazon Redshift
---

# Amazon Redshift

## Overview

Multiwoven provides an intuitive interface for integrating data from your Amazon Redshift data warehouse to various downstream platforms. While most configurations are done via the Multiwoven interface, you'll need to gather specific details from Redshift such as your host, port, database name, and access credentials.

To enable communication between Multiwoven and your warehouse, you should whitelist Multiwoven's IP addresses. Please refer to our networking documentation to identify the IPs to whitelist.

## Connection Configuration

To initiate the integration:
1. Navigate to the **Sources** section in the dashboard.
2. Click on the **Add Source** option.
3. From the available options, choose **Amazon Redshift** and follow the ensuing steps.

### Choose Connection Method

Multiwoven offers two connection types:
1. Direct connection over the public internet.
2. Connection through an SSH tunnel.

While data is securely encrypted via TLS during transit, a direct connection suffices for most scenarios. If your Redshift is hosted on a private network or a Virtual Private Cloud (VPC), you may need the SSH tunnel.

### Configuring Your Source

Input the following mandatory details:

- **Host**: You can determine the hostname or IP of your Redshift cluster from the Redshift console. Head over to the `Clusters` section and select your specific cluster. The `Endpoint` string provides the necessary details, sans the port and database name.
  
- **Port**: By default, Redshift's port is set to 5439. However, you might have a different setting. This can also be verified under the `Clusters` section in the `Properties` tab.
  
- **Database**: Typically, a Redshift cluster contains a single database. This name can be found in the same location as the port number.

### Credential Details

Provide the following:

- **User**: This could be your personal Redshift credentials or a specific user designated for Multiwoven. Ensure this user has, at the very least, read permissions for the data you aim to synchronize.
  
- **Password**: (Optional) This pertains to the aforementioned user.

### Validate Your Connection

Upon setting up a new source, Multiwoven performs several checks to validate:

- Network accessibility.
- Credentials for Redshift.
- Permissions to list and access schemas and tables.

It's worth noting that some connections might initially fail due to time constraints. But once the connection is firm, subsequent tasks should execute faster. If a test fails initially, it's advisable to retest. This can be achieved by selecting the **Test** option again.

In case tests fail repeatedly even after ensuring correct credentials, please contact our support team for assistance.

## Subsequent Actions

After successful validation of the source configuration, the primary setup is done. The next phase involves defining the precise data you wish to extract from Amazon Redshift.

With the Amazon Redshift source, Multiwoven supports:

- Direct SQL queries.
- Visual table selectors.
- Existing dbt models.
- Predefined Looker Looks.
- Sigma workbooks.

For a comprehensive analysis, you might contemplate storing synchronization logs in Redshift, allowing you to utilize Redshift over the Multiwoven infrastructure. For additional insights on this feature, refer to our warehouse synchronization logs documentation.

## Tips & Troubleshooting

Should you come across any issues or have queries that aren't addressed here, feel free to reach out to our support team. We're always here to assist.
