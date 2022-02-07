import { createStore } from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

// Create a new store instance.
const store = createStore({
  state: {
    currentPost: {},
    posts: [{
      id: 1,
      title: "Gladiator",
      description: "Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. Le film ne se fonde pas sur des événements réels mais reprend les noms et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla. ",
      date: "2000",
    },
    {
      id: 2,
      title: "The Truman Show",
      description: "The Truman Show ou Le Show Truman au Québec est un film américain réalisé par Peter Weir et sorti en 1998. Il met en scène Jim Carrey dans le rôle principal, aux côtés de Laura Linney, Noah Emmerich, Ed Harris et Natascha McElhone. Le film raconte la vie d'un homme, Truman Burbank, vedette à son insu d'un spectacle de télé-réalité. Depuis sa naissance, son monde n'est qu'un gigantesque plateau de tournage et tous ceux qui l'entourent sont des acteurs.",
      date: "1998",
    },
    {
      id: 3,
      title: "Jacquou le Croquant",
      description: "Tirée du roman éponyme Jacquou le Croquant d’Eugène Le Roy publié en 1899, et inspirée de faits réels s’étant déroulés lors des jacqueries dans le sud-ouest de la France au début du XIXe siècle, l’histoire se passe vers 1815 dans le Périgord sur les communes de Fanlac et Rouffignac-Saint-Cernin. ",
      date: "2007",
    },
    {
      id: 4,
      title: "La Ligne verte",
      description: "En 1996, Paul Edgecomb, un ancien gardien-chef d'un pénitencier dans les années 1930, entreprend d'écrire ses mémoires. Il revient sur l'affaire de John Coffey — ce grand Noir au regard absent, condamné à mort pour le viol et le meurtre de deux fillettes — qui défraya la chronique de 1935. ",
      date: "1999",
    },{
      id: 5,
      title: "Les Évadés",
      description: "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 2",
      date: "1994",
    },
    {
      id: 6,
      title: "Le Cercle des poètes disparus",
      description: "Todd Anderson, un garçon plutôt timide, est envoyé dans la prestigieuse académie de Welton, réputée pour être l'une des plus fermées et austères des États-Unis, là où son frère avait connu de brillantes études.",
      date: "1989",
    },
    {
      id: 7,
      title: "Astérix et Obélix : Mission Cléopâtre",
      description: "Pour impressionner Jules César, Cléopâtre parie avec lui qu'elle parviendra à faire construire, en trois mois seulement, le plus beau palais qu'il ait jamais visité. Elle confie cette importante tâche à l'architecte Numérobis, qui se désespère: s'il échoue, il sera jeté aux crocodiles.",
      date: "2002",
    },
    {
      id: 8,
      title: "Le Dernier des Mohicans",
      description: "En 1757 dans l'Etat de New York, alors que la guerre fait rage entre Francais et Anglais pour l'appropriation des territoires indiens, un jeune officier anglais, Duncan Heyward, est chargé de conduire deux soeurs, Cora et Alice Munro jusqu'à leur père.",
      date: "1992",
    }]
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getCurrentPost(state) {
      return state.currentPost;
    },
        // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
  mutations: {
    setCurrentPost (state, post) {
      state.currentPost = post;
    },
    setCurrentPostVersionMutation (state, postId) {
      let postFound = {};
      state.posts.forEach((post) => {
        if (postId == post.id) {
          postFound = post;
        }
      });
      state.currentPost = postFound;
    },
    // Add the `updateField` mutation to the
    // `mutations` of your Vuex store instance.
    updateField,
  },
  actions: {
    setCurrentPost ({commit, state}, postId) {
      let postFound = {};
      state.posts.forEach((post) => {
        if (postId == post.id) {
          postFound = post;
        }
      })
      commit('setCurrentPost', postFound);
    }
  }
})

export default store;