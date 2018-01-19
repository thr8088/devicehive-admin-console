/*
  DeviceHive Admin Console business logic

  Copyright (C) 2016 DataArt

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  */
app.Models.UserInDeviceType = Backbone.AuthModel.extend({
    url: function () {
        return app.config.restEndpoint + '/user/' + this.get("UserId") + "/devicetype/" + this.get("DeviceTypeId");
    },
    isNew: function () {
        return (_.isUndefined(this.attributes.deviceType) || _.isUndefined(this.attributes.deviceType.id));
    }
});