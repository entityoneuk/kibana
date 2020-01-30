/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { i18n } from '@kbn/i18n';
import { TutorialsCategory } from '../../services/tutorials';
import {
  onPremInstructions,
  cloudInstructions,
  onPremCloudInstructions,
} from '../instructions/metricbeat_instructions';
import {
  TutorialContext,
  TutorialSchema,
} from '../../services/tutorials/lib/tutorials_registry_types';

export function envoyproxyMetricsSpecProvider(context: TutorialContext): TutorialSchema {
  const moduleName = 'envoyproxy';
  return {
    id: 'envoyproxyMetrics',
    name: i18n.translate('home.tutorials.envoyproxyMetrics.nameTitle', {
      defaultMessage: 'Envoy Proxy metrics',
    }),
    category: TutorialsCategory.METRICS,
    shortDescription: i18n.translate('home.tutorials.envoyproxyMetrics.shortDescription', {
      defaultMessage: 'Fetch monitoring metrics from Envoy Proxy.',
    }),
    longDescription: i18n.translate('home.tutorials.envoyproxyMetrics.longDescription', {
      defaultMessage:
        'The `envoyproxy` Metricbeat module fetches monitoring metrics from Envoy Proxy. \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.metricbeat}/metricbeat-module-envoyproxy.html',
      },
    }),
    euiIconType: '/plugins/kibana/home/tutorial_resources/logos/envoyproxy.svg',
    artifacts: {
      dashboards: [],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-envoyproxy.html',
      },
    },
    completionTimeMinutes: 10,
    // previewImagePath: '/plugins/kibana/home/tutorial_resources/envoyproxy_metrics/screenshot.png',
    onPrem: onPremInstructions(moduleName, context),
    elasticCloud: cloudInstructions(moduleName),
    onPremElasticCloud: onPremCloudInstructions(moduleName),
  };
}