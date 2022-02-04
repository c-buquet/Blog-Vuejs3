import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentNews: {},
    news: [{
      id: 1,
      title: "Je suis le premier article",
    },
    {
      id: 2,
      title: "Je suis le deuxième article"
    },    
    {
      id: 3,
      title: "Je suis le troisième article"
    },    
    {
      id: 4,
      title: "Je suis le quatrième article"
    },
  ]
  }
})

export default store;