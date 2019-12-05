import { Mapper } from "@nartc/automapper";
import { Control } from "../../models/control.model";
import { FormlyField } from "../../models/formly-field.model";

export class FormlyFieldControl extends MappingProfileBase {
  constructor() {
    super(); // this is required since it will take UserProfile and get the string "UserProfile" to assign to profileName
  }

  // configure() is required since it is an abstract method. configure() will be called automatically by Mapper.
  // This is where you will setup your mapping with the class method: createMap
  Mapper.initialize(config:any => {
  config.createMap(User, UserVm); // create a mapping from User to UserVm (one direction)
  config.createMap(Profile, ProfileVm)
    .forMember(destination => destination.addressStrings, opts => opts.mapFrom(s => s.addresses.map(... /* map to addressString however you like */)));
});
}
