// hello friends this code tell us how to iterate thourgh all key paths 
into json Object I take a exampel of jsonData is is hard coded you  may get it form
any api hit or some other way...


// soon i will push complete code with example 

 function createHashMapFromJsonString(jsonData, parentkey) {
            var localkey = "";
            for (var key in jsonData) {
                if (jsonData.hasOwnProperty(key)) {
                    //console.log(key,"======");
                    if (jsonData[key] instanceof Array) {
                        localkey += key;

                        for (var i = 0; i < jsonData[key].length; i++) {
                            createHashMapFromJsonString(jsonData[key][i], parentkey + localkey + ":");
                        }
                    } else if (jsonData[key] instanceof Object) {
                        localkey += key + "";
                        //console.log(jsonData[key]);
                        createHashMapFromJsonString(jsonData[key], parentkey + localkey + ":");
                    } else {
                        //console.log('34234234rewerwe',parentkey,'---',key,'___---',jsonData);
                        //console.log(parentkey+key,"===",jsonData[key])

                        var value = jsonData[key];
                        var hash_value;
                        //console.log(parentkey+key,"+++");
                        if (arrayToBeMatched.includes((parentkey + key))) {
                            hash_value = MD5(value.toString());
                            //dict[parentkey + keyword + key] = hash_value + "____" + jsonData[key];
                            jsonData[keyword + key] = hash_value + "____" + jsonData[key];
                            var old_key = key;
                            var new_key = keyword + key;
                            // jsonData[i] = translated_response_dict[j];
                            Object.defineProperty(jsonData, old_key, Object.getOwnPropertyDescriptor(jsonData, old_key));
                            delete jsonData[old_key];
                            //console.log(jsonData[keyword+key],"====");
                            arrayToBeTranslated.push(hash_value);
                        } else {
                            //dict[parentkey + key] = value.toString();
                            continue;
                            //jsonData[keyword+key]=jsonData[key];
                        }
                        //array.push(parentkey+key);

                    }
                }
                localkey = "";
            }

        }