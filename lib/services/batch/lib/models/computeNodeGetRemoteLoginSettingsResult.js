/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ComputeNodeGetRemoteLoginSettingsResult class.
 * @constructor
 * Response to a ComputeNodeOperation.GetRemoteLoginSettings request.
 * @member {string} remoteLoginIPAddress Gets or sets the IP address used for
 * remote login to the compute node.
 * 
 * @member {number} remoteLoginPort Gets or sets the port used for remote
 * login to the compute node.
 * 
 */
function ComputeNodeGetRemoteLoginSettingsResult() {
}

/**
 * Defines the metadata of ComputeNodeGetRemoteLoginSettingsResult
 *
 * @returns {object} metadata of ComputeNodeGetRemoteLoginSettingsResult
 *
 */
ComputeNodeGetRemoteLoginSettingsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ComputeNodeGetRemoteLoginSettingsResult',
    type: {
      name: 'Composite',
      className: 'ComputeNodeGetRemoteLoginSettingsResult',
      modelProperties: {
        remoteLoginIPAddress: {
          required: true,
          serializedName: 'remoteLoginIPAddress',
          type: {
            name: 'String'
          }
        },
        remoteLoginPort: {
          required: true,
          serializedName: 'remoteLoginPort',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ComputeNodeGetRemoteLoginSettingsResult;