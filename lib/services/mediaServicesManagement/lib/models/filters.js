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
 * Describes all the filtering operations, such as de-interlacing, rotation
 * etc. that are to be applied to the input media before encoding.
 *
 */
class Filters {
  /**
   * Create a Filters.
   * @member {object} [deinterlace] The de-interlacing settings.
   * @member {string} [deinterlace.parity] The field parity for de-interlacing,
   * defaults to Auto. Possible values include: 'Auto', 'TopFieldFirst',
   * 'BottomFieldFirst'
   * @member {string} [deinterlace.mode] The deinterlacing mode. Defaults to
   * AutoPixelAdaptive. Possible values include: 'Off', 'AutoPixelAdaptive'
   * @member {string} [rotation] The rotation, if any, to be applied to the
   * input video, before it is encoded. Default is Auto. Possible values
   * include: 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
   * @member {object} [crop] The parameters for the rectangular window with
   * which to crop the input video.
   * @member {string} [crop.left] The number of pixels from the left-margin.
   * This can be absolute pixel value (e.g 100), or relative to the size of the
   * video (For example, 50%).
   * @member {string} [crop.top] The number of pixels from the top-margin. This
   * can be absolute pixel value (e.g 100), or relative to the size of the
   * video (For example, 50%).
   * @member {string} [crop.width] The width of the rectangular region in
   * pixels. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (For example, 50%).
   * @member {string} [crop.height] The height of the rectangular region in
   * pixels. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (For example, 50%).
   * @member {array} [overlays] The properties of overlays to be applied to the
   * input video. These could be audio, image or video overlays.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Filters
   *
   * @returns {object} metadata of Filters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Filters',
      type: {
        name: 'Composite',
        className: 'Filters',
        modelProperties: {
          deinterlace: {
            required: false,
            serializedName: 'deinterlace',
            type: {
              name: 'Composite',
              className: 'Deinterlace'
            }
          },
          rotation: {
            required: false,
            serializedName: 'rotation',
            type: {
              name: 'Enum',
              allowedValues: [ 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270' ]
            }
          },
          crop: {
            required: false,
            serializedName: 'crop',
            type: {
              name: 'Composite',
              className: 'Rectangle'
            }
          },
          overlays: {
            required: false,
            serializedName: 'overlays',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OverlayElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Overlay',
                    className: 'Overlay'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Filters;