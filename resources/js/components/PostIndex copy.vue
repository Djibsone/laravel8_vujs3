<template>
    <h1>Liste des Postes</h1>

    <div>
        <h2>title</h2>
        <p>content</p>
        <small>Date de création</small>
    </div>

    <div>  
        <p>Aucun poste trouvé</p>
    </div> 
    <pre>{{post}}</pre>  
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                post: {}
            }
        },
        setup(){
            const getPosts = async () => {
                let posts = await axios.get('/api/posts')
                console.log(posts);
                this.post = posts.data;
            }
            getPosts();
        }
    }
</script>