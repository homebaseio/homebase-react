goog.provide("goog.object");
goog.object.is = function(v, v2) {
  if (v === v2) {
    return v !== 0 || 1 / v === 1 / v2;
  }
  return v !== v && v2 !== v2;
};
goog.object.forEach = function(obj, f, opt_obj) {
  for (const key in obj) {
    f.call(opt_obj, obj[key], key, obj);
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  const res = {};
  for (const key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key];
    }
  }
  return res;
};
goog.object.map = function(obj, f, opt_obj) {
  const res = {};
  for (const key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj);
  }
  return res;
};
goog.object.some = function(obj, f, opt_obj) {
  for (const key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      return true;
    }
  }
  return false;
};
goog.object.every = function(obj, f, opt_obj) {
  for (const key in obj) {
    if (!f.call(opt_obj, obj[key], key, obj)) {
      return false;
    }
  }
  return true;
};
goog.object.getCount = function(obj) {
  let rv = 0;
  for (const key in obj) {
    rv++;
  }
  return rv;
};
goog.object.getAnyKey = function(obj) {
  for (const key in obj) {
    return key;
  }
};
goog.object.getAnyValue = function(obj) {
  for (const key in obj) {
    return obj[key];
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val);
};
goog.object.getValues = function(obj) {
  const res = [];
  let i = 0;
  for (const key in obj) {
    res[i++] = obj[key];
  }
  return res;
};
goog.object.getKeys = function(obj) {
  const res = [];
  let i = 0;
  for (const key in obj) {
    res[i++] = key;
  }
  return res;
};
goog.object.getValueByKeys = function(obj, var_args) {
  const isArrayLike = goog.isArrayLike(var_args);
  const keys = isArrayLike ? var_args : arguments;
  for (let i = isArrayLike ? 0 : 1; i < keys.length; i++) {
    if (obj == null) {
      return undefined;
    }
    obj = obj[keys[i]];
  }
  return obj;
};
goog.object.containsKey = function(obj, key) {
  return obj !== null && key in obj;
};
goog.object.containsValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] == val) {
      return true;
    }
  }
  return false;
};
goog.object.findKey = function(obj, f, opt_this) {
  for (const key in obj) {
    if (f.call(opt_this, obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
};
goog.object.findValue = function(obj, f, opt_this) {
  const key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key];
};
goog.object.isEmpty = function(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
};
goog.object.clear = function(obj) {
  for (const i in obj) {
    delete obj[i];
  }
};
goog.object.remove = function(obj, key) {
  let rv;
  if (rv = key in obj) {
    delete obj[key];
  }
  return rv;
};
goog.object.add = function(obj, key, val) {
  if (obj !== null && key in obj) {
    throw new Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val);
};
goog.object.get = function(obj, key, opt_val) {
  if (obj !== null && key in obj) {
    return obj[key];
  }
  return opt_val;
};
goog.object.set = function(obj, key, value) {
  obj[key] = value;
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value;
};
goog.object.setWithReturnValueIfNotSet = function(obj, key, f) {
  if (key in obj) {
    return obj[key];
  }
  const val = f();
  obj[key] = val;
  return val;
};
goog.object.equals = function(a, b) {
  for (const k in a) {
    if (!(k in b) || a[k] !== b[k]) {
      return false;
    }
  }
  for (const k in b) {
    if (!(k in a)) {
      return false;
    }
  }
  return true;
};
goog.object.clone = function(obj) {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
};
goog.object.unsafeClone = function(obj) {
  const type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (goog.isFunction(obj.clone)) {
      return obj.clone();
    }
    const clone = type == "array" ? [] : {};
    for (const key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.object.transpose = function(obj) {
  const transposed = {};
  for (const key in obj) {
    transposed[obj[key]] = key;
  }
  return transposed;
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  let key;
  let source;
  for (let i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (key in source) {
      target[key] = source[key];
    }
    for (let j = 0; j < goog.object.PROTOTYPE_FIELDS_.length; j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
};
goog.object.create = function(var_args) {
  const argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (argLength % 2) {
    throw new Error("Uneven number of arguments");
  }
  const rv = {};
  for (let i = 0; i < argLength; i += 2) {
    rv[arguments[i]] = arguments[i + 1];
  }
  return rv;
};
goog.object.createSet = function(var_args) {
  const argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  const rv = {};
  for (let i = 0; i < argLength; i++) {
    rv[arguments[i]] = true;
  }
  return rv;
};
goog.object.createImmutableView = function(obj) {
  let result = obj;
  if (Object.isFrozen && !Object.isFrozen(obj)) {
    result = Object.create(obj);
    Object.freeze(result);
  }
  return result;
};
goog.object.isImmutableView = function(obj) {
  return !!Object.isFrozen && Object.isFrozen(obj);
};
goog.object.getAllPropertyNames = function(obj, opt_includeObjectPrototype, opt_includeFunctionPrototype) {
  if (!obj) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return goog.object.getKeys(obj);
  }
  const visitedSet = {};
  let proto = obj;
  while (proto && (proto !== Object.prototype || !!opt_includeObjectPrototype) && (proto !== Function.prototype || !!opt_includeFunctionPrototype)) {
    const names = Object.getOwnPropertyNames(proto);
    for (let i = 0; i < names.length; i++) {
      visitedSet[names[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return goog.object.getKeys(visitedSet);
};
goog.object.getSuperClass = function(constructor) {
  var proto = Object.getPrototypeOf(constructor.prototype);
  return proto && proto.constructor;
};

//# sourceMappingURL=goog.object.object.js.map
