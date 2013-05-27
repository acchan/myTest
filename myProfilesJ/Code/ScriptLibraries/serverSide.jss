/**
© Copyright IBM Corp. 2011

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
**/

function requiredFieldCheck(editBoxComponent, labelComponent, requiredMessage){
	var value = editBoxComponent.getValue();
	if(null == value || value == ""){
		labelComponent.setValue(requiredMessage);
		return false;
	}
	return true;
}

function checkLeapYear (intYear) {
	//debugger
	if(intYear % 4 == 0){
		if(intYear % 100 == 0){
			if(intYear % 400 == 0){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}else{
		return false;
	}
}
