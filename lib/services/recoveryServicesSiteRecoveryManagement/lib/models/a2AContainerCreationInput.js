/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A2A cloud creation input.
 *
 * @extends models['ReplicationProviderSpecificContainerCreationInput']
 */
class A2AContainerCreationInput extends models['ReplicationProviderSpecificContainerCreationInput'] {
  /**
   * Create a A2AContainerCreationInput.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of A2AContainerCreationInput
   *
   * @returns {object} metadata of A2AContainerCreationInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2A',
      type: {
        name: 'Composite',
        className: 'A2AContainerCreationInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = A2AContainerCreationInput;