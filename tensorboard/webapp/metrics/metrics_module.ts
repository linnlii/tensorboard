/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {PluginRegistryModule} from '../plugins/plugin_registry_module';

import {RunsSelectorModule} from '../runs/views/runs_selector/runs_selector_module';

import {METRICS_PLUGIN_ID, MetricsDataSourceModule} from './data_source';
import {MetricsEffects} from './effects';
import {METRICS_FEATURE_KEY, reducers} from './store';
import {MetricsDashboardContainer} from './views/metrics_container';
import {MetricsViewsModule} from './views/metrics_views_module';

@NgModule({
  imports: [
    CommonModule,
    RunsSelectorModule,
    PluginRegistryModule.forPlugin(
      METRICS_PLUGIN_ID,
      MetricsDashboardContainer
    ),
    MetricsDataSourceModule,
    MetricsViewsModule,
    StoreModule.forFeature(METRICS_FEATURE_KEY, reducers),
    EffectsModule.forFeature([MetricsEffects]),
  ],
  entryComponents: [MetricsDashboardContainer],
})
export class MetricsModule {}
