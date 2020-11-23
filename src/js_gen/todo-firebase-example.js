"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

var _firebaseui = _interopRequireDefault(require("firebaseui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  HomebaseProvider,
  useClient,
  useTransact,
  useQuery,
  useEntity
} = window.homebase.react;

const App = () => {
  return /*#__PURE__*/_react.default.createElement(HomebaseProvider, {
    config: config
  }, /*#__PURE__*/_react.default.createElement(AuthPrompt, null, /*#__PURE__*/_react.default.createElement(Todos, null)));
};

exports.App = App;
const config = {
  // Schema is only used to enforce 
  // unique constraints and relationships.
  // It is not a type system, yet.
  schema: {
    user: {
      uid: {
        unique: 'identity'
      }
    },
    todo: {
      // refs are relationships
      project: {
        type: 'ref'
      },
      owner: {
        type: 'ref'
      }
    }
  },
  // Initial data let's you conveniently transact some 
  // starting data on DB creation to hydrate your components.
  initialData: [{
    todoFilter: {
      // identity is a special unique attribute for user generated ids
      // E.g. todoFilters are settings that should be easy to lookup by their identity
      identity: 'todoFilters',
      showCompleted: true
    }
  }, {
    user: {
      // Negative numbers can be used as temporary ids in a transaction.
      // Use them to relate multiple entities together at once.
      id: -1,
      name: 'Stella'
    }
  }, {
    user: {
      id: -2,
      name: 'Arpegius'
    }
  }, {
    project: {
      id: -3,
      name: 'Make it'
    }
  }, {
    project: {
      id: -4,
      name: 'Do it'
    }
  }]
};
const firebaseConfig = {
  apiKey: "AIzaSyC31X8R5-doWtVmbBRD0xCue09HfydfjzI",
  authDomain: "homebase-react.firebaseapp.com",
  databaseURL: "https://homebase-react.firebaseio.com",
  projectId: "homebase-react",
  storageBucket: "homebase-react.appspot.com",
  messagingSenderId: "1056367825432",
  appId: "1:1056367825432:web:a6aaba7bee5e8a43e6296d",
  measurementId: "G-FJ9BNZDFCE"
};

_app.default.initializeApp(firebaseConfig);

const firebaseUI = new _firebaseui.default.auth.AuthUI(_app.default.auth());

const AuthPrompt = ({
  children
}) => {
  const [transact] = useTransact();
  const [currentUser] = useEntity({
    identity: 'currentUser'
  });
  const [client] = useClient();

  _react.default.useEffect(() => {
    window.emptyDB = client.dbToString();
    return _app.default.auth().onAuthStateChanged(user => {
      if (user) {
        transact([{
          user: {
            uid: user.uid,
            name: user.displayName
          }
        }]);
        client.transactSilently([{
          currentUser: {
            identity: 'currentUser',
            uid: user.uid
          }
        }]);
      }
    });
  }, []);

  if (currentUser.get('uid')) return children;
  return /*#__PURE__*/_react.default.createElement(SignIn, null);
};

const SignIn = () => {
  _react.default.useEffect(() => {
    firebaseUI.start('#firebaseui-auth-container', {
      signInFlow: 'popup',
      signInSuccessUrl: window.location.href,
      signInOptions: [_app.default.auth.EmailAuthProvider.PROVIDER_ID, _app.default.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    });
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "firebaseui-auth-container"
  });
};

const Todos = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(DataSaver, null), /*#__PURE__*/_react.default.createElement(SignOut, null), /*#__PURE__*/_react.default.createElement(NewTodo, null), /*#__PURE__*/_react.default.createElement(TodoFilters, null), /*#__PURE__*/_react.default.createElement(TodoList, null));

const DataSaver = () => {
  const [client] = useClient();
  const [currentUser] = useEntity({
    identity: 'currentUser'
  });
  const userId = currentUser.get('uid');

  const transactListener = _react.default.useCallback(changedDatoms => {
    const numDatomChanges = changedDatoms.reduce((acc, [id, attr]) => ({ ...acc,
      [id + attr]: (acc[id + attr] || 0) + 1
    }), {});
    const datomsForFirebase = changedDatoms.filter(([id, attr, _, __, isAdded]) => !(!isAdded && numDatomChanges[id + attr] > 1));
    datomsForFirebase.forEach(([id, attr, v, tx, isAdded]) => {
      const ref = _app.default.database().ref(`users/${userId}/entities/${id}|${attr.replace('/', '|')}`);

      isAdded ? ref.set([id, attr, v, tx, isAdded]) : ref.remove();
    });
  }, [userId]);

  _react.default.useEffect(() => {
    client.addTransactListener(transactListener);

    const ref = _app.default.database().ref(`users/${userId}/entities`);

    const on = action => ds => client.transactSilently([[action, ...ds.val()]]);

    ref.on('child_added', on('add'));
    ref.on('child_removed', on('retract'));
    ref.on('child_changed', on('add'));
    return () => {
      client.removeTransactListener();
      ref.off('child_added', on('add'));
      ref.off('child_removed', on('retract'));
      ref.off('child_changed', on('add'));
    };
  }, [userId]);

  return null;
};

const SignOut = () => {
  const [client] = useClient();
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      float: 'right'
    },
    onClick: () => {
      client.dbFromString(window.emptyDB);

      _app.default.auth().signOut();
    }
  }, "Sign Out");
};

const NewTodo = () => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      transact([{
        todo: {
          name: e.target.elements['todo-name'].value,
          createdAt: Date.now()
        }
      }]);
      e.target.reset();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    autoFocus: true,
    type: "text",
    name: "todo-name",
    placeholder: "What needs to be done?",
    autoComplete: "off",
    required: true
  }), "\xA0", /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Create Todo"));
};

const TodoList = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [todos] = useQuery({
    $find: 'todo',
    $where: {
      todo: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", null, todos.filter(todo => {
    if (!filters.get('showCompleted') && todo.get('isCompleted')) return false;
    if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false;
    if (filters.get('owner') && todo.get('owner', 'id') !== filters.get('owner')) return false;
    return true;
  }).sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1).map(todo => /*#__PURE__*/_react.default.createElement(Todo, {
    key: todo.get('id'),
    id: todo.get('id')
  })));
}; // PERFORMANCE: By accepting an `id` prop instead of a whole `todo` entity
// this component stays disconnected from the useQuery in the parent TodoList. 
// useEntity creates a separate scope for every Todo so changes to TodoList
// or sibling Todos don't trigger unnecessary re-renders.


const Todo = _react.default.memo(({
  id
}) => {
  const [todo] = useEntity(id);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(TodoCheck, {
    todo: todo
  }), /*#__PURE__*/_react.default.createElement(TodoName, {
    todo: todo
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(TodoProject, {
    todo: todo
  }), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(TodoOwner, {
    todo: todo
  }), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(TodoDelete, {
    todo: todo
  })), /*#__PURE__*/_react.default.createElement("small", {
    style: {
      color: 'grey'
    }
  }, new Date(todo.get('createdAt')).toLocaleString()));
});

const TodoCheck = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    style: {
      width: 20,
      height: 20,
      cursor: 'pointer'
    },
    checked: !!todo.get('isCompleted'),
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        isCompleted: e.target.checked
      }
    }])
  });
};

const TodoName = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("input", {
    style: {
      border: 'none',
      fontSize: 20,
      marginTop: -2,
      cursor: 'pointer',
      ...(todo.get('isCompleted') && {
        textDecoration: 'line-through '
      })
    },
    value: todo.get('name'),
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        name: e.target.value
      }
    }])
  });
};

const TodoProject = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Project",
    entityType: "project",
    value: todo.get('project', 'id'),
    onChange: project => transact([{
      todo: {
        id: todo.get('id'),
        project
      }
    }])
  });
};

const TodoOwner = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Owner",
    entityType: "user",
    value: todo.get('owner', 'id'),
    onChange: owner => transact([{
      todo: {
        id: todo.get('id'),
        owner
      }
    }])
  });
};

const TodoDelete = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([['retractEntity', todo.get('id')]])
  }, "Delete");
};

const TodoFilters = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [client] = useClient();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Show Completed?", /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: filters.get('showCompleted'),
    onChange: e => client.transactSilently([{
      todoFilter: {
        id: filters.get('id'),
        showCompleted: e.target.checked
      }
    }])
  })), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Project",
    entityType: "project",
    value: filters.get('project'),
    onChange: project => client.transactSilently([{
      todoFilter: {
        id: filters.get('id'),
        project
      }
    }])
  }), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Owner",
    entityType: "user",
    value: filters.get('owner'),
    onChange: owner => client.transactSilently([{
      todoFilter: {
        id: filters.get('id'),
        owner
      }
    }])
  }));
};

const EntitySelect = _react.default.memo(({
  label,
  entityType,
  value,
  onChange
}) => {
  const [entities] = useQuery({
    $find: entityType,
    $where: {
      [entityType]: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement("label", null, label, ":\xA0", /*#__PURE__*/_react.default.createElement("select", {
    name: entityType,
    value: value || '',
    onChange: e => onChange && onChange(Number(e.target.value) || null)
  }, /*#__PURE__*/_react.default.createElement("option", {
    key: "-",
    value: ""
  }), entities.map(entity => /*#__PURE__*/_react.default.createElement("option", {
    key: entity.get('id'),
    value: entity.get('id')
  }, entity.get('name')))));
});